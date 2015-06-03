var InventoryBucketItem = function (membershipId, characterId, membershipType, itemInstanceId, itemHash, stackSize, inVault)
{
    this.membershipId = membershipId;
    this.characterId = characterId;
    this.membershipType = membershipType;
    this.itemInstanceId = itemInstanceId;
    this.itemHash = itemHash;
    this.stackSize = stackSize;
    this.inVault = inVault;

    this.onEquipOrTransfer = function () { };

    this.$gearItemDetail = null; // set after dialog is created
    this.$dialog = null; // set after dialog is created

    this.gearLoader = null;
    this.simpleDialog = null;

    this.itemPreviewIsDragging = false;
};

InventoryBucketItem.prototype.loadAndShowItem = function ()
{
    if (this.gearLoader)
    {
        // If a request is pending, abort it so we don't run the callback for the aborted request
        this.gearLoader.abort();
    }

    this.openModal();

    $("html").addClass("inventoryBucketItemOpen");

    this.loadItem();
};

InventoryBucketItem.prototype.reloadItem = function (successCallback)
{
    $("#gearItemWrapper").destinyLoader({ startOnInit: true });
    this.loadItem(successCallback);
};

InventoryBucketItem.prototype.loadItem = function (successCallback)
{
    var self = this;

    successCallback = successCallback || function () { };

    var url = this.buildUrl();

    this.gearLoader = $.ajax({
        url: url,
        cache: bnet._pageController.useCache,
        type: 'GET',
        data: null,
        success: function (response, textStatus, XMLHttpRequest)
        {
            self.populateModal(response);
            self.interactions();
            successCallback();
        },
        error: function (jqXHR, textStatus, error)
        {
            if (error !== "abort")
            {
                if (jqXHR.status === 500)
                {
                    Utility.alert(Localizer.Legend.gearitemdetailfailure);
                }
            }
        }
    });
};

InventoryBucketItem.prototype.buildUrl = function ()
{
    var membershipType = this.membershipType;
    var membershipId = this.membershipId;
    var characterId = this.characterId;
    var itemInstanceId = this.itemInstanceId;
    var itemHash = this.itemHash;
    var inVault = this.inVault;

    var url = "/" + Localizer.CurrentCultureName + "/Legend/GearItemDetail/" +
        membershipType + "/" + membershipId + "/" + characterId + "?instanceId=" + itemInstanceId + "&hash=" + itemHash + "&inVault=" + inVault + "&ajax=true";

    return url;
};

InventoryBucketItem.prototype.openModal = function ()
{
    var self = this;

    if ($('#gearItemWrapperDialogContainer').length)
    {
        $('#gearItemWrapperDialogContainer').find('.closeSimpleDialog').trigger('click');
    }

    if (this.simpleDialog === null)
    {
        var $gearItemDetailContainer = $("<div id='gearItemWrapper'/>");
        var simpleDialog = new SimpleDialog($gearItemDetailContainer);
        simpleDialog.width = 898;
        simpleDialog.height = 660;
        simpleDialog.destroyOnClose = true;

        var $inventorySimpleDialogContent = simpleDialog.$container;

        simpleDialog.onClose = function ()
        {
            if (window.CAN_USE_3D)
            {
                self.simpleDialog = null;
                Legend._view.moveItemPreviewToLegend();
            }
            $("html").removeClass("inventoryBucketItemOpen");

            $('#guardian_canvas').css({
                'webkit-transform': 'none',
                'transform': 'none'
            });
            if ($inventorySimpleDialogContent)
            {
                $inventorySimpleDialogContent.removeClass('loaded');
            }
        };

        this.simpleDialog = simpleDialog;
        this.simpleDialog.Init();

        this.$gearItemDetail = $("#gearItemDetail");
        this.$dialog = simpleDialog.$container;

        simpleDialog.$contents.destinyLoader();
        simpleDialog.$contents.data("alreadyLoaded", false);
        simpleDialog.$contents.destinyLoader('start');

        $(window).on('hashchange.invBucketHashChange', function ()
        {
            if (self.simpleDialog)
            {
                self.simpleDialog.Close();
            }
        });
    }
};

InventoryBucketItem.prototype.populateModal = function (response)
{
    var self = this;

    var $response = $(response);
    var $itemDetailContainer = $response.find('#gearItemDetail');
    if ($itemDetailContainer.length)
    {
        $('#gearItemWrapper').destinyLoader('stop');
        $('#gearItemWrapper').html($itemDetailContainer);

        $(".nodeDial").each(function ()
        {
            $(this).knob({
                width: 62,
                height: 62,
                displayInput: false,
                bgColor: "rgba(0,0,0,0.05)",
                fgColor: "#5ea16a",
                draw: function ()
                {
                    this.i.addClass('active');
                }
            });
        });
        if (window.CAN_USE_3D)
        {
            Legend._view.moveItemPreviewToModal();
            Legend._view.populateInventoryItemModal(this.itemInstanceId, this.itemHash);
            this.modalInteractions();
        }

        $('#gearItemWrapper .destinyTooltip').each(function ()
        {
            var destinyTooltip = new DestinyTooltip($(this), false);
            destinyTooltip.$wrapper = $('#gearItemDetail');
            destinyTooltip.wrapperIsFixed = true;
            destinyTooltip.init();
        });
    }
};

InventoryBucketItem.prototype.modalInteractions = function ()
{
    var self = this;

    var itemPreview = Legend._view.characterPreview3d;

    if (this.itemHash in tempModel.gearAssets) // If we have 3D stuff to show
    {
        $('#gearItemWrapper').on({
            mousedown: function (e)
            {
                if (itemPreview !== null)
                {
                    self.itemPreviewIsDragging = true;
                    itemPreview.cameraControls.onMouseDown(e.originalEvent);
                }
            },
            mouseup: function (e)
            {
                if (itemPreview !== null)
                {
                    self.itemPreviewIsDragging = false;
                    itemPreview.cameraControls.onMouseUp(e.originalEvent);
                }
            },
            "mousewheel DOMMouseScroll": function (e)
            {
                if (itemPreview !== null)
                {
                    itemPreview.cameraControls.onScroll(e.originalEvent);
                }
            },
            touchstart: function (e)
            {
                if (itemPreview !== null)
                {
                    itemPreview.cameraControls.onTouchStart(e.originalEvent);
                }
            }
        });
    }


    $('#gearItemWrapper .itemUpgrades .node').on('mouseenter', function ()
    {
        try
        {
            if (tempModel.statsOnNodes !== undefined)
            {
                var statsOnNodes = tempModel.statsOnNodes;
                var nodeHash = $(this).data('nodehash');
                if (nodeHash in statsOnNodes)
                {
                    var statsOnNode = statsOnNodes[nodeHash];
                    var nextNodeStats = statsOnNode.nextNodeStats;
                    var nextNodeStatsLength = nextNodeStats.length;

                    for (var i = 0; i < nextNodeStatsLength; i++)
                    {
                        var stat = nextNodeStats[i];
                        var statHash = stat.statHash;

                        var $statRow = $('#gearItemWrapper tr.itemStat[data-stathash="' + statHash + '"]');
                        var $modifiedBar = $statRow.find('.valueModifiedByNode .valueModified');
                        var $modifiedBarContainer = $statRow.find('.valueModifiedByNode');

                        var modifiedAmount = stat.value / stat.maximumValue * 100;
                        var directionClass = modifiedAmount >= 0 ? ((modifiedAmount === 0) ? "none" : "positive") : "negative";

                        $modifiedBarContainer
                            .removeClass('positive negative none')
                            .addClass(directionClass);

                        $modifiedBar
                            .css('width', (Math.abs(modifiedAmount) + "%"));
                    }
                }
            }
        }
        catch (e)
        {
            console.log(e);
        }
    });

    $('#gearItemWrapper .itemUpgrades .node').on('mouseleave', function ()
    {
        $('#gearItemWrapper .valueModifiedByNode .valueModified').css('width', 0);
    });
};

InventoryBucketItem.prototype.interactions = function ()
{
    var self = this;

    $("*").unbind(".inventorybucketitem");

    $("#gearItemDetail .btn_blue").on('mousedown.inventorybucketitem', function (e)
    {
        e.preventDefault(); // prevents weird issue that was scrolling the page to the footer on button click
    });

    // EQUIP ITEM
    $("#gearItemDetail .equipItem").on('click.inventorybucketitem', function ()
    {
        self.equipItem();
    });

    // TO VAULT
    $("#gearItemDetail .moveItemToVault:not('unavailable')").on('click.inventorybucketitem', function ()
    {
        self.onClickTransfer(true, -1);
    });

    // FROM VAULT
    $("#gearItemDetail .moveItemToGear:not('unavailable')").on('click.inventorybucketitem', function (e)
    {
        e.preventDefault();
        self.onClickTransfer(false, -1);
    });

    $("#gearItemDetail .itemLocker").on("click.inventorybucketitem", function (e)
    {
        var actionIsLock = !$(this).data("locked");
        self.itemLockAction(actionIsLock);
    });

    $("#inventoryItemDialogContainer .closeSimpleDialog").on('click.inventorybucketitem', function ()
    {
        $dialog.data('simpleDialog').Close();
    });
};

InventoryBucketItem.prototype.itemLockAction = function (actionIsLock)
{
    var self = this;

    var input = {
        state: actionIsLock,
        membershipType: this.membershipType,
        characterId: this.characterId,
        itemId: this.itemInstanceId
    };

    bungieNetPlatform.destinyService.SetItemLockState(
        input,
        function (response)
        {
            self.reloadItem(function(){
                self.onItemLockAction();
            });
        },
        function(error){
            Utility.alert(error.errorMessage);
            self.reloadItem();
        }
    );
};

InventoryBucketItem.prototype.equipItem = function ()
{
    var self = this;

    if (CAN_USE_3D && Legend._view.characterPreview3d)
    {
        Legend._view.characterPreview3d.stopAnimating();
    }

    var $dialog = this.$dialog;
    var membershipType = this.membershipType;
    var characterId = this.characterId;
    var itemInstanceId = this.itemInstanceId;

    bungieNetPlatform.destinyService.EquipItem(
        {
            "membershipType": membershipType,
            "characterId": characterId,
            "itemId": itemInstanceId
        },
        function ()
        {
            self.onEquipOrTransfer(true);

            if (typeof $dialog !== 'undefined')
            {
                if ($dialog.length)
                {
                    $dialog.find('.closeSimpleDialog').trigger('click');
                }
            }
        },
        function (error)
        {
            Utility.alert(error.errorMessage);
            if (Legend._view.characterPreview3d)
            {
                Legend._view.characterPreview3d.startAnimating();
            }
        }
    );
};

InventoryBucketItem.prototype.onClickTransfer = function (toVault, stackSizeOverride)
{
    var self = this;

    var stackSize = this.stackSize;

    if (stackSizeOverride != -1)
    {
        stackSize = stackSizeOverride;
    } else
    {
        if (stackSize > 1)
        {
            this.toggleStackTransferControls(true);

            var $textbox = $('.itemTransferStackSize input');

            // Place the cursor in the box at the end of the value
            $textbox.focus().val($textbox.val());
            $textbox.on('keyup.bucketItemActions', function (e)
            {
                if (e.which === 13)
                {
                    stackSize = $(this).val();
                    self.transferItem(toVault, stackSize);
                }
            });
            $textbox.on('input', function ()
            {
                $('.itemTransferStackSize .currentValue').text($textbox.val());
            });

            $('.submitStackSize').one('click.bucketItemActions', function ()
            {
                stackSize = $textbox.val();
                self.transferItem(toVault, stackSize);
            });

            $('.cancelStackSize').one('click.bucketItemActions', function ()
            {
                self.toggleStackTransferControls(false);
                $('.submitStackSize').unbind('.bucketItemActions');
            });

            return false;
        }
    }

    this.transferItem(toVault, stackSize);
};

InventoryBucketItem.prototype.toggleStackTransferControls = function (togglingOn)
{
    if (togglingOn)
    {
        $('.itemTransferStackSize').removeClass('unavailable');
        $('.controls').removeClass('active');
    }
    else
    {
        $('.itemTransferStackSize').addClass('unavailable');
        $('.controls').addClass('active');
    }
};

InventoryBucketItem.prototype.transferItem = function (toVault, stackSize, optionalCharacterId, onSuccess, onFailure)
{
    var self = this;

    var $dialog = this.$dialog;
    var membershipType = this.membershipType;
    var characterId = optionalCharacterId || this.characterId;
    var itemInstanceId = this.itemInstanceId
    var itemHash = this.itemHash;
    stackSize = stackSize || this.stackSize;
    onSuccess = onSuccess || function () { };
    onFailure = onFailure || function () { };

    if (CAN_USE_3D && Legend._view.characterPreview3d)
    {
        Legend._view.characterPreview3d.stopAnimating();
    }

    bungieNetPlatform.destinyService.TransferItem(
        {
            "membershipType": membershipType,
            "characterId": characterId,
            "itemId": itemInstanceId,
            "itemReferenceHash": String(itemHash),
            "stackSize": stackSize,
            "transferToVault": toVault
        },
        function ()
        {

            self.onEquipOrTransfer(true);

            if (typeof $dialog !== 'undefined')
            {
                if ($dialog)
                {
                    $dialog.find('.closeSimpleDialog').trigger('click');
                }
            }

            onSuccess();
        },
        function (error)
        {
            Utility.alert(error.errorMessage);
            Legend._view.characterPreview3d.startAnimating();
            onFailure();
        }
    );
};

InventoryBucketItem.prototype.onEquipOrTransfer = function ()
{
};

InventoryBucketItem.prototype.onItemLockAction = function ()
{

};