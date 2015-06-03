Globals = {};
(function() {
    var a = Globals;
    a.ForumTopicsSortEnum = {Default: 0,LastReplied: 1,MostReplied: 2,Popularity: 3,Controversiality: 4,Liked: 5,HighestRated: 6};
    a.ForumTopicsCategoryFiltersEnum = {None: 0,Links: 1,Questions: 2,AnsweredQuestions: 4,Media: 8,TextOnly: 16,Announcement: 32,BungieOfficial: 64,Polls: 128};
    a.ForumPostCategoryEnums = {None: 0,TextOnly: 1,Media: 2,Link: 4,Poll: 8,Question: 16,Answered: 32,Announcement: 64,ContentComment: 128,BungieOfficial: 256,NinjaOfficial: 512};
    a.ForumTopicsQuickDateEnum = {All: 0,LastYear: 1,LastMonth: 2,LastWeek: 3,LastDay: 4};
    a.NotificationType = {MESSAGE: 1,FORUM_REPLY: 2,NEW_ACTIVITY_ROLLUP: 3,SETTINGS_CHANGE: 4,GROUP_ACCEPTANCE: 5,GROUP_JOIN_REQUEST: 6,FOLLOW_USER_ACTIVITY: 7,FRIEND_USER_ACTIVITY: 8,FORUM_LIKE: 9,FOLLOWED: 10,GROUP_BANNED: 11,BANNED: 12,UNBANNED: 13,GROUP_OPEN_JOIN: 14,GROUP_ALLIANCE_JOIN_REQUESTED: 15,GROUP_ALLIANCE_JOIN_REJECTED: 16,GROUP_ALLIANCE_JOIN_APPROVED: 17,GROUP_ALLIANCE_BROKEN: 18,GROUP_DENIAL: 19,WARNED: 20,CLAN_DISABLED: 21,GROUP_ALLIANCE_INVITE_REQUESTED: 22,GROUP_ALLIANCE_INVITE_REJECTED: 23,GROUP_ALLIANCE_INVITE_APPROVED: 24,GROUP_FOLLOWED_BY_GROUP: 25,GRIMOIRE_UNOBSERVED_CARDS: 26};
    a.NotificationMethod = {EMAIL: 1,MOBILE_PUSH: 2,WEB_ONLY: 4};
    a.GroupDateRange = {All: 0,PastDay: 1,PastWeek: 2,PastMonth: 3,PastYear: 4};
    a.GroupSortBy = {Name: 0,Date: 1,Popularity: 2,Id: 3};
    a.GroupHomepage = {Wall: 0,Forum: 1,AllianceForum: 2};
    a.TextParameterSearchType = {Contains: 0,Exact: 1,StartsWith: 2,EndsWith: 3};
    a.IgnoredItemType = {All: 0,Post: 1,Group: 2,User: 3,Tag: 4};
    a.IgnoreLength = {None: 0,Week: 1,TwoWeeks: 2,ThreeWeeks: 3,Month: 4,ThreeMonths: 5,SixMonths: 6,Year: 7,Forever: 8,ThreeMinutes: 9,Hour: 10};
    a.BungieCredentialType = {None: 0,Xuid: 1,Psnid: 2,Wlid: 3,Fake: 4,Facebook: 5,Google: 8,Windows: 9,DemonId: 10};
    a.ActivityAggregationType = {None: 0,Activities: 1,Followers: 2};
    a.ActivityType = {Create: 0,Edit: 1,Delete: 2,Rate: 3,Follow: 4,Unfollow: 5,Apply: 6,Rescind: 7,Approve: 8,Deny: 9,Kick: 10,EditMembershipType: 11,Like: 12,Unlike: 13,Share: 14,TaggedGroup: 15,TaggedTopic: 16,AvatarChanged: 17,DisplayNameChanged: 18,TitleChanged: 19,TitleUnlocked: 20,GroupTopicCreate: 21,GroupReplyCreate: 22,Reply: 23,ChangeClanName: 24,GroupAllianceRejected: 26,GroupAllianceApproved: 27,GroupAllianceBroken: 28,None: -1};
    a.AffectedItemType = {User: 0,Post: 1,Topic: 2,Group: 3,Tag: 4,None: -1};
    a.ActivityStatus = {Processing: 0,Failed: 1,Skipped: 2,Complete: 3};
    a.ActivityItemOrigin = {FollowedGroup: 0,FollowedUser: 1,ActivitiesAboutMe: 2,MyActivities: 3,Undetermined: -1};
    a.ActivityQueryFilter = {All: 0,Friends: 1,Following: 2,Groups: 3,Mine: 4,Tags: 5,Clans: 6};
    a.ForumFlagsEnum = {None: 0,BungieStaffPost: 1,ForumNinjaPost: 2,ForumMentorPost: 4,TopicBungieStaffPosted: 8,TopicBungieVolunteerPosted: 16,QuestionAnsweredByBungie: 32,QuestionAnsweredByNinja: 64};
    a.AclEnum = {None: 0,BNextForumNinja: 1,BNextUnlimitedGroups: 2,BNextFounderInAllGroups: 3,BNextBungieGold: 4,BNextNinjaColors: 5,BNextMakeOfficialTopics: 6,BNextMakeNinjaTopics: 7,BNextDeleteForumTopics: 8,BNextOverturnReports: 9,BNextBrowseReports: 10,BNextGlobalIgnore: 11,BNextEditAnyPublicPost: 12,BNextEditUsers: 13,BNextUltraBan: 14,BNextForumMentor: 15,TigerBan: 16,BNextForumCurator: 17,BNextBigLikes: 18,BNextPlayerSupport: 19,BNextPinTopics: 20,BNextLockTopics: 21};
    a.IgnoreStatus = {NotIgnored: 0,IgnoredUser: 1,IgnoredGroup: 2,IgnoredByGroup: 4,IgnoredPost: 8,IgnoredTag: 16,IgnoredGlobal: 32};
    a.ContentDateRange = {All: 0,Today: 1,Yesterday: 2,ThisMonth: 3,ThisYear: 4,LastYear: 5,EarlierThanLastYear: 6};
    a.ContentSortBy = {CreationDate: 0,CmsPath: 1,ModifiedDate: 2};
    a.FriendOnlineStatus = {Offline: 0,Online: 1,Idle: 2};
    a.ForumPostPopularity = {Empty: 0,Default: 1,Discussed: 2,CoolStory: 3,HeatingUp: 4,Hot: 5};
    a.MembershipOption = {Reviewed: 0,Open: 1,Closed: 2};
    a.SuccessMessages = {Following: 1,Unfollowing: 2,ManagingGroupMembers: 8,UpdatingSettings: 16,ManagingGroups: 32};
    a.ExternalService = {None: 0,Twitter: 1,Facebook: 2,Youtube: 3,TwitterHelp: 4};
    a.ForumPostSortEnum = {Default: 0,OldestFirst: 1};
    a.SurveyCompletionFlags = {None: 0,UserResearchWebPageOne: 1,UserResearchWebPageTwo: 2};
    a.DestinyGender = {Male: 0,Female: 1,Unknown: 2};
    a.DestinyRace = {Human: 0,Awoken: 1,Exo: 2,Unknown: 3};
    a.DestinyClass = {Titan: 0,Hunter: 1,Warlock: 2,Unknown: 3};
    a.ItemBindStatus = {NotBound: 0,BoundToCharacter: 1,BoundToAccount: 2,BoundToGuild: 3};
    a.TierType = {Unknown: 0,Currency: 1,Basic: 2,Common: 3,Rare: 4,Superior: 5,Exotic: 6};
    a.GroupTypeSearchFilter = {All: 0,Group: 1,Clan: 2};
    a.GroupMemberCountFilter = {All: 0,OneToTen: 1,ElevenToOneHundred: 2,GreaterThanOneHundred: 3};
    a.PeriodType = {None: 0,Daily: 1,Monthly: 2,AllTime: 3,Activity: 4};
    a.DestinyStatsGroupType = {None: 0,General: 1,Weapons: 2,Medals: 3,Enemies: 4,ReservedGroups: 100,Leaderboard: 101,Activity: 102,UniqueWeapon: 103,Internal: 104};
    a.DestinyActivityModeType = {None: 0,Story: 2,Strike: 3,Raid: 4,AllPvP: 5,Patrol: 6,AllPvE: 7,PvPIntroduction: 8,ThreeVsThree: 9,Control: 10,Lockdown: 11,Team: 12,FreeForAll: 13,TrialsOfOsiris: 14,Doubles: 15,Nightfall: 16,Heroic: 17,AllStrikes: 18,IronBanner: 19,AllArena: 20,Arena: 21,ArenaChallenge: 22};
    a.StatFeedbackState = {Good: 0,TooHigh: 1,TooLow: 2,WrongName: 4};
    a.RequestedPunishment = {Ban: 0,Warn: 1,BlastBan: 2};
    a.BucketCategory = {Invisible: 0,Item: 1,Currency: 2,Equippable: 3,Ignored: 4};
    a.BungieMembershipType = {None: 0,TigerXbox: 1,TigerPsn: 2,TigerDemon: 10,BungieNext: 254,All: -1};
    a.ReportResolutionStatus = {Unresolved: 0,Innocent: 1,GuiltyBan: 2,GuiltyBlastBan: 3,GuiltyWarn: 4,GuiltyAlias: 5,ResolveNoAction: 6};
    a.ForumTypeEnum = {Public: 0,News: 1,Group: 2,Alliance: 3};
    a.DamageType = {None: 0,Kinetic: 1,Arc: 2,Thermal: 3,Void: 4,Raid: 5};
    a.DestinyTalentNodeState = {Invalid: 0,CanUpgrade: 1,NoPoints: 2,NoPrerequisites: 3,NoSteps: 4,NoUnlock: 5,NoMaterial: 6,NoGridLevel: 7,SwappingLocked: 8,MustSwap: 9,Complete: 10,Unknown: 11,CreationOnly: 12};
    a.OfferRedeemMode = {Off: 0,Unlock: 1,Platform: 2,Expired: 3,Consumable: 4};
    a.ClientDeviceType = {Unknown: 0,Xbox360: 1,Playstation3: 2,AndroidPhone: 3,AndroidTablet: 4,ApplePhone: 5,AppleTablet: 6,WebBrowser: 7,NativeWindows: 8,NativeMac: 9,WindowsPhone: 10,WindowsTablet: 11,XboxOne: 12,Playstation4: 13,Fake: 255};
    a.OptInFlags = {Newsletter: 1,System: 2,Marketing: 4,UserResearch: 8,CustomerService: 16};
    a.EquipFailureReason = {None: 0,ItemUnequippable: 1,ItemUniqueEquipRestricted: 2,ItemFailedUnlockCheck: 4,ItemFailedLevelCheck: 8,ItemNotOnCharacter: 16};
    a.UnitType = {None: 0,Count: 1,PerGame: 2,Seconds: 3,Points: 4,Team: 5,Distance: 6,Percent: 7,Ratio: 8,Boolean: 9,WeaponType: 10,Standing: 11};
    a.EntityType = {None: 0,User: 1,Group: 2,Post: 3,Invitation: 4,Report: 5,Activity: 6,Conversation: 7,Tag: 8};
    a.InvitationResponseState = {Unreviewed: 0,Approved: 1,Rejected: 2};
    a.VendorItemStatus = {Success: 0,NoInventorySpace: 1,NoFunds: 2,NoProgression: 4,NoUnlock: 8,NoQuantity: 16,OutsidePurchaseWindow: 32,NotAvailable: 64,UniquenessViolation: 128,UnknownError: 256,AlreadySelling: 512,Unsellable: 1024,SellingInhibited: 2048};
    a.DestinyDefinitionType = {None: 0,Activity: 1,ActivityType: 2,Class: 3,Gender: 4,InventoryBucket: 5,InventoryItem: 6,Progression: 7,Race: 8,Stat: 9,TalentGrid: 10,StatGroup: 11,UnlockFlag: 12,Vendor: 13,Destination: 14,Place: 15,DirectorBook: 16,MaterialRequirement: 17,SandboxPerk: 18,ArtDye: 19,ArtDyeChannel: 20,ActivityBundle: 21,GearAsset: 22};
    a.DestinyItemType = {None: 0,Currency: 1,Armor: 2,Weapon: 3,Bounty: 4,CompletedBounty: 5,BountyReward: 6,Message: 7,Engram: 8,Consumable: 9,ExchangeMaterial: 10,MissionReward: 11,QuestStep: 12,QuestStepComplete: 13};
    a.DestinyItemSubType = {None: 0,Crucible: 1,Vanguard: 2,IronBanner: 3,Queen: 4,Exotic: 5,AutoRifle: 6,Shotgun: 7,Machinegun: 8,HandCannon: 9,RocketLauncher: 10,FusionRifle: 11,SniperRifle: 12,PulseRifle: 13,ScoutRifle: 14,Camera: 15,Crm: 16,Sidearm: 17};
    a.GroupClanEnableStatus = {NotApplicable: 0,ClanEnabledSuccess: 1,ClanEnabledFailure: 2};
    a.ContentDateType = {Specific: 0,MonthOnly: 1,Custom: 2};
    a.DestinyExplorerBuckets = {None: 0,Artifact: 1,Materials: 2,Consumables: 4,Mission: 8,Bounties: 16,Build: 32,PrimaryWeapon: 64,SpecialWeapon: 128,HeavyWeapon: 256,Head: 512,Arms: 1024,Chest: 2048,Legs: 4096,ClassItems: 8192,Ghost: 16384,Vehicle: 32768,Ship: 65536,Shader: 131072,Emblem: 262144};
    a.DestinyExplorerOrderBy = {None: 0,Name: 1,ItemType: 2,Rarity: 3,ItemTypeName: 4,ItemStatHash: 5,MinimumRequiredLevel: 6,MaximumRequiredLevel: 7};
    a.ItemLocation = {Unknown: 0,Inventory: 1,Vault: 2,Vendor: 3,Postmaster: 4}
})();
ReverseGlobals = {};
(function() {
    var a = ReverseGlobals;
    a.DestinyActivityModeType = {"0": "None","2": "Story","3": "Strike","4": "Raid","5": "AllPvP","6": "Patrol","7": "AllPvE","8": "PvPIntroduction","9": "ThreeVsThree","10": "Control","11": "Lockdown","12": "Team","13": "FreeForAll","14": "TrialsOfOsiris","15": "Doubles","16": "Nightfall","17": "Heroic","18": "AllStrikes","19": "IronBanner","20": "AllArena","21": "Arena","22": "ArenaChallenge"};
    a.TierType = {"0": "Unknown","1": "Currency","2": "Basic","3": "Common","4": "Rare","5": "Superior","6": "Exotic"};
    a.DestinyTalentNodeState = {"0": "Invalid","1": "CanUpgrade","2": "NoPoints","3": "NoPrerequisites","4": "NoSteps","5": "NoUnlock","6": "NoMaterial","7": "NoGridLevel","8": "SwappingLocked","9": "MustSwap","10": "Complete","11": "Unknown","12": "CreationOnly"};
    a.DamageType = {"0": "None","1": "Kinetic","2": "Arc","3": "Thermal","4": "Void","5": "Raid"}
})();
var bungieNetPlatform = {}, currentRequests = [];
(function(b) {
    var a = bungieNetPlatform;
    a.platformSettings = {initialize: function(c) {
            a.platformSettings = b.extend(a.platformSettings, b.extend({platformUrl: "/Platform",renderContentEditLinks: false}, c))
        }}
})(jQuery);
(function(b) {
    var a = bungieNetPlatform;
    function d(a, f, e, d, g) {
        if (a.ErrorCode == 1) {
            f(a.Response);
            d.resolve(a.Response)
        } else {
            a.ErrorCode == 99 && b(document).trigger("userLogOut");
            var c = {errorCode: a.ErrorCode,errorStatus: a.ErrorStatus,errorMessage: a.Message,messageData: a.MessageData,debug: a.Debug};
            e(c, a.Response);
            d.reject(c)
        }
        currentRequest = currentRequests.splice(b.inArray(g, currentRequests), 1)
    }
    function c(e, f, g, c, d) {
        var a = {errorCode: 2,errorStatus: "TransportException",errorMessage: Localizer.Messages.transportexception,messageData: []};
        c(a, null);
        d.reject(a);
        currentRequest = currentRequests.splice(b.inArray(e, currentRequests), 1)
    }
    a.getCSRFHeader = function() {
        var a = Cookies.Get(ServerVars.SessionContextCookieName);
        return a ? {"x-csrf": a} : {}
    };
    a.getHeaders = function() {
        var b = a.getCSRFHeader();
        b["X-API-Key"] = "10E792629C2A47E19356B8A79EEFA640";
        return b
    };
    a.buildUrl = function(f, b, e) {
        var d = a.platformSettings.platformUrl + f, c = "?lc=" + a.platformSettings.currentLocale + "&fmt=true&lcin=" + a.platformSettings.locInherit;
        if (typeof b !== "undefined" && b !== "")
            c += "&" + b;
        if (typeof e !== "undefined")
            c += e;
        d = d + c;
        return d
    };
    a.addParameter = function(a, c, b) {
        if (b !== null) {
            if (a.length > 0)
                a += "&";
            a += c + "=" + encodeURIComponent(b)
        }
        return a
    };
    a.pushGa = function(b, d) {
        var a = "-", c = Cookies.Get(ServerVars.WebMembershipCookieName);
        if (c != null)
            a = "SignedIn";
        typeof _gaq !== "undefined" && _gaq.push(["_trackEvent", "Platform", b + "_" + d, a])
    };
    a.serviceLibrary = {post: function(j, h, g, f) {
            var e = b.Deferred(), i = b.ajax({type: "POST",url: j,data: JSON.stringify(h),dataType: "json",contentType: "application/json; charset=utf-8;",processData: false,headers: a.getHeaders(),success: function(b, c, a) {
                    d(b, g, f, e, a)
                },error: function(d, a, b) {
                    c(d, a, b, f, e)
                }});
            currentRequests.push(i);
            return e.promise()
        },"get": function(i, g, f) {
            var e = b.Deferred(), h = b.ajax({type: "GET",url: i,dataType: "json",headers: a.getHeaders(),success: function(b, c, a) {
                    d(b, g, f, e, a)
                },error: function(d, a, b) {
                    c(d, a, b, f, e)
                }});
            currentRequests.push(h);
            return e.promise()
        },postForm: function(k, i, f, h, g) {
            var e = b.Deferred(), j = b.ajax({type: "POST",url: k,data: i,headers: a.getHeaders(),cache: false,dataType: f ? "json" : null,contentType: false,processData: false,success: function(b, i, c) {
                    if (f)
                        d(b, h, g, e, c);
                    else {
                        var a = JSON.parse(b);
                        h(a);
                        e.resolve(a)
                    }
                },error: function(d, a, b) {
                    c(d, a, b, g, e)
                }});
            currentRequests.push(j);
            return e.promise()
        }}
})(jQuery);
(function() {
    var a = bungieNetPlatform;
    a.jsonpService = {dataStore: [],jsonpData: {getCacheItem: function(b) {
                return a.jsonpService.dataStore[b + ""]
            },setCacheItem: function(b) {
                a.jsonpService.dataStore[b.id + ""] = b
            },getCacheSet: function(b) {
                return a.jsonpService.dataStore["Set_" + b]
            },setCacheSet: function(b) {
                a.jsonpService.dataStore["Set_" + b.id] = b
            }},GetCurrentUser: function(e, f, g, d) {
            var b = "";
            b = a.addParameter(b, "callback", e);
            var c = a.buildUrl("/JSONP/GetBungieNetUser/", b, d);
            a.pushGa("JSONP", "GetCurrentUser", c);
            return a.serviceLibrary.get(c, function(a) {
                f(a)
            }, g)
        }}
})(jQuery);
(function(b) {
    var a = bungieNetPlatform;
    a.userService = {dataStore: [],userData: {getCacheItem: function(b) {
                return a.userService.dataStore[b + ""]
            },setCacheItem: function(b) {
                a.userService.dataStore[b.id + ""] = b
            },getCacheSet: function(b) {
                return a.userService.dataStore["Set_" + b]
            },setCacheSet: function(b) {
                a.userService.dataStore["Set_" + b.id] = b
            }},CreateUser: function(g, e, f, c) {
            var d = "", b = a.buildUrl("/User/CreateUser/", d, c);
            a.pushGa("User", "CreateUser", b);
            return a.serviceLibrary.post(b, g, function(a) {
                e(a)
            }, f)
        },UpdateUser: function(g, e, f, c) {
            var d = "", b = a.buildUrl("/User/UpdateUser/", d, c);
            a.pushGa("User", "UpdateUser", b);
            return a.serviceLibrary.post(b, g, function(a) {
                e(a)
            }, f)
        },UpdateUserAdmin: function(h, e, f, g, c) {
            var d = "", b = a.buildUrl("/User/UpdateUserAdmin/" + encodeURIComponent(e) + "/", d, c);
            a.pushGa("User", "UpdateUserAdmin", b);
            return a.serviceLibrary.post(b, h, function(a) {
                f(a)
            }, g)
        },UpdateNotificationSetting: function(g, e, f, c) {
            var d = "", b = a.buildUrl("/User/Notification/Update/", d, c);
            a.pushGa("User", "UpdateNotificationSetting", b);
            return a.serviceLibrary.post(b, g, function(a) {
                e(a)
            }, f)
        },EditSuccessMessageFlags: function(g, e, f, c) {
            var d = "", b = a.buildUrl("/User/MessageFlags/Success/Update/" + encodeURIComponent(g) + "/", d, c);
            a.pushGa("User", "EditSuccessMessageFlags", b);
            return a.serviceLibrary.post(b, null, function(a) {
                e(a)
            }, f)
        },GetCurrentUser: function(e, f, c) {
            var d = "", b = a.buildUrl("/User/GetBungieNetUser/", d, c);
            a.pushGa("User", "GetCurrentUser", b);
            return a.serviceLibrary.get(b, function(a) {
                e(a)
            }, f)
        },GetCountsForCurrentUser: function(e, f, c) {
            var d = "", b = a.buildUrl("/User/GetCounts/", d, c);
            a.pushGa("User", "GetCountsForCurrentUser", b);
            return a.serviceLibrary.get(b, function(a) {
                e(a)
            }, f)
        },GetBungieNetUserById: function(g, e, f, c) {
            var d = "", b = a.buildUrl("/User/GetBungieNetUserById/" + encodeURIComponent(g) + "/", d, c);
            a.pushGa("User", "GetBungieNetUserById", b);
            return a.serviceLibrary.get(b, function(a) {
                e(a)
            }, f)
        },GetUserAliases: function(i, e, h, f) {
            var g = "", d = a.buildUrl("/User/GetUserAliases/" + encodeURIComponent(i) + "/", g, f), c = a.userService.userData.getCacheItem(d);
            if (c)
                return b.Deferred(function(a) {
                    e(c);
                    a.resolve(c)
                }).promise();
            a.pushGa("User", "GetUserAliases", d);
            return a.serviceLibrary.get(d, function(b) {
                a.userService.userData.setCacheItem(b);
                e(b)
            }, h)
        },SearchUsers: function(i, f, h, g) {
            var c = "";
            c = a.addParameter(c, "q", i);
            var e = a.buildUrl("/User/SearchUsers/", c, g), d = a.userService.userData.getCacheItem(e);
            if (d)
                return b.Deferred(function(a) {
                    f(d);
                    a.resolve(d)
                }).promise();
            a.pushGa("User", "SearchUsers", e);
            return a.serviceLibrary.get(e, function(b) {
                a.userService.userData.setCacheItem(b);
                f(b)
            }, h)
        },GetBungieAccount: function(f, e, g, h, c) {
            var d = "", b = a.buildUrl("/User/GetBungieAccount/" + encodeURIComponent(f) + "/" + encodeURIComponent(e) + "/", d, c);
            a.pushGa("User", "GetBungieAccount", b);
            return a.serviceLibrary.get(b, function(a) {
                g(a)
            }, h)
        },SearchUsersPaged: function(h, i, e, j, f) {
            var g = "", d = a.buildUrl("/User/SearchUsersPaged/" + encodeURIComponent(h) + "/" + encodeURIComponent(i) + "/", g, f), c = a.userService.userData.getCacheItem(d);
            if (c)
                return b.Deferred(function(a) {
                    e(c);
                    a.resolve(c)
                }).promise();
            a.pushGa("User", "SearchUsersPaged", d);
            return a.serviceLibrary.get(d, function(b) {
                a.userService.userData.setCacheItem(b);
                e(b)
            }, j)
        },SearchUsersPagedV2: function(i, j, h, e, k, f) {
            var g = "", d = a.buildUrl("/User/SearchUsersPaged/" + encodeURIComponent(i) + "/" + encodeURIComponent(j) + "/" + encodeURIComponent(h) + "/", g, f), c = a.userService.userData.getCacheItem(d);
            if (c)
                return b.Deferred(function(a) {
                    e(c);
                    a.resolve(c)
                }).promise();
            a.pushGa("User", "SearchUsersPagedV2", d);
            return a.serviceLibrary.get(d, function(b) {
                a.userService.userData.setCacheItem(b);
                e(b)
            }, k)
        },GetNotificationSettings: function(e, f, c) {
            var d = "", b = a.buildUrl("/User/GetNotificationSettings/", d, c);
            a.pushGa("User", "GetNotificationSettings", b);
            return a.serviceLibrary.get(b, function(a) {
                e(a)
            }, f)
        },GetCredentialTypesForAccount: function(e, f, c) {
            var d = "", b = a.buildUrl("/User/GetCredentialTypesForAccount/", d, c);
            a.pushGa("User", "GetCredentialTypesForAccount", b);
            return a.serviceLibrary.get(b, function(a) {
                e(a)
            }, f)
        },GetAvailableAvatars: function(e, h, f) {
            var g = "", d = a.buildUrl("/User/GetAvailableAvatars/", g, f), c = a.userService.userData.getCacheItem(d);
            if (c)
                return b.Deferred(function(a) {
                    e(c);
                    a.resolve(c)
                }).promise();
            a.pushGa("User", "GetAvailableAvatars", d);
            return a.serviceLibrary.get(d, function(b) {
                a.userService.userData.setCacheItem(b);
                e(b)
            }, h)
        },GetAvailableAvatarsAdmin: function(h, e, i, f) {
            var g = "", d = a.buildUrl("/User/GetAvailableAvatarsAdmin/" + encodeURIComponent(h) + "/", g, f), c = a.userService.userData.getCacheItem(d);
            if (c)
                return b.Deferred(function(a) {
                    e(c);
                    a.resolve(c)
                }).promise();
            a.pushGa("User", "GetAvailableAvatarsAdmin", d);
            return a.serviceLibrary.get(d, function(b) {
                a.userService.userData.setCacheItem(b);
                e(b)
            }, i)
        },GetAvailableThemes: function(e, h, f) {
            var g = "", d = a.buildUrl("/User/GetAvailableThemes/", g, f), c = a.userService.userData.getCacheItem(d);
            if (c)
                return b.Deferred(function(a) {
                    e(c);
                    a.resolve(c)
                }).promise();
            a.pushGa("User", "GetAvailableThemes", d);
            return a.serviceLibrary.get(d, function(b) {
                a.userService.userData.setCacheItem(b);
                e(b)
            }, h)
        },RegisterMobileAppPair: function(e, f, c) {
            var d = "", b = a.buildUrl("/User/RegisterMobileAppPair/", d, c);
            a.pushGa("User", "RegisterMobileAppPair", b);
            return a.serviceLibrary.post(b, null, function(a) {
                e(a)
            }, f)
        },UnregisterMobileAppPair: function(h, e, f, g, c) {
            var d = "", b = a.buildUrl("/User/UnregisterMobileAppPair/" + encodeURIComponent(e) + "/", d, c);
            a.pushGa("User", "UnregisterMobileAppPair", b);
            return a.serviceLibrary.post(b, h, function(a) {
                f(a)
            }, g)
        },UpdateStateInfoForMobileAppPair: function(g, e, f, c) {
            var d = "", b = a.buildUrl("/User/UpdateStateInfoForMobileAppPair/", d, c);
            a.pushGa("User", "UpdateStateInfoForMobileAppPair", b);
            return a.serviceLibrary.post(b, g, function(a) {
                e(a)
            }, f)
        },GetMobileAppPairings: function(e, h, f) {
            var g = "", d = a.buildUrl("/User/GetMobileAppPairings/", g, f), c = a.userService.userData.getCacheItem(d);
            if (c)
                return b.Deferred(function(a) {
                    e(c);
                    a.resolve(c)
                }).promise();
            a.pushGa("User", "GetMobileAppPairings", d);
            return a.serviceLibrary.get(d, function(b) {
                a.userService.userData.setCacheItem(b);
                e(b)
            }, h)
        },GetMobileAppPairingsUncached: function(e, f, c) {
            var d = "", b = a.buildUrl("/User/GetMobileAppPairingsUncached/", d, c);
            a.pushGa("User", "GetMobileAppPairingsUncached", b);
            return a.serviceLibrary.get(b, function(a) {
                e(a)
            }, f)
        },GetSignOutUrl: function(e, f, c) {
            var d = "", b = a.buildUrl("/User/GetSignOutUrl/", d, c);
            a.pushGa("User", "GetSignOutUrl", b);
            return a.serviceLibrary.get(b, function(a) {
                e(a)
            }, f)
        },LinkOverride: function(g, e, f, c) {
            var d = "", b = a.buildUrl("/User/LinkOverride/", d, c);
            a.pushGa("User", "LinkOverride", b);
            return a.serviceLibrary.post(b, g, function(a) {
                e(a)
            }, f)
        },GetUserMembershipIds: function(e, f, g, d) {
            var b = "";
            b = a.addParameter(b, "excludebungienet", e);
            var c = a.buildUrl("/User/GetMembershipIds/", b, d);
            a.pushGa("User", "GetUserMembershipIds", c);
            return a.serviceLibrary.get(c, function(a) {
                f(a)
            }, g)
        },SetAcknowledged: function(f, e, g, c) {
            var d = "", b = a.buildUrl("/User/Acknowledged/" + encodeURIComponent(f) + "/", d, c);
            a.pushGa("User", "SetAcknowledged", b);
            return a.serviceLibrary.post(b, null, function(a) {
                e(a)
            }, g)
        },GetPlatformApiKeysForUser: function(e, f, c) {
            var d = "", b = a.buildUrl("/User/GetPlatformApiKeysForUser/", d, c);
            a.pushGa("User", "GetPlatformApiKeysForUser", b);
            return a.serviceLibrary.get(b, function(a) {
                e(a)
            }, f)
        }}
})(jQuery);
(function() {
    var a = bungieNetPlatform;
    a.messageService = {dataStore: [],messageData: {getCacheItem: function(b) {
                return a.messageService.dataStore[b + ""]
            },setCacheItem: function(b) {
                a.messageService.dataStore[b.id + ""] = b
            },getCacheSet: function(b) {
                return a.messageService.dataStore["Set_" + b]
            },setCacheSet: function(b) {
                a.messageService.dataStore["Set_" + b.id] = b
            }},GetConversationByIdV2: function(e, f, g, h, d) {
            var b = "";
            b = a.addParameter(b, "format", f);
            var c = a.buildUrl("/Message/GetConversationByIdV2/" + encodeURIComponent(e) + "/", b, d);
            a.pushGa("Message", "GetConversationByIdV2", c);
            return a.serviceLibrary.get(c, function(a) {
                g(a)
            }, h)
        },GetConversationWithMemberIdV2: function(e, f, g, h, d) {
            var b = "";
            b = a.addParameter(b, "format", f);
            var c = a.buildUrl("/Message/GetConversationWithMemberV2/" + encodeURIComponent(e) + "/", b, d);
            a.pushGa("Message", "GetConversationWithMemberIdV2", c);
            return a.serviceLibrary.get(c, function(a) {
                g(a)
            }, h)
        },GetConversationThreadV3: function(e, i, f, g, h, d) {
            var b = "";
            b = a.addParameter(b, "format", f);
            var c = a.buildUrl("/Message/GetConversationThreadV3/" + encodeURIComponent(e) + "/" + encodeURIComponent(i) + "/", b, d);
            a.pushGa("Message", "GetConversationThreadV3", c);
            return a.serviceLibrary.get(c, function(a) {
                g(a)
            }, h)
        },SaveMessageV3: function(g, e, f, c) {
            var d = "", b = a.buildUrl("/Message/SaveMessageV3/", d, c);
            a.pushGa("Message", "SaveMessageV3", b);
            return a.serviceLibrary.post(b, g, function(a) {
                e(a)
            }, f)
        },CreateConversation: function(g, e, f, c) {
            var d = "", b = a.buildUrl("/Message/CreateConversation/", d, c);
            a.pushGa("Message", "CreateConversation", b);
            return a.serviceLibrary.post(b, g, function(a) {
                e(a)
            }, f)
        },GetConversationsV5: function(h, e, f, g, d) {
            var b = "";
            b = a.addParameter(b, "format", e);
            var c = a.buildUrl("/Message/GetConversationsV5/" + encodeURIComponent(h) + "/", b, d);
            a.pushGa("Message", "GetConversationsV5", c);
            return a.serviceLibrary.get(c, function(a) {
                f(a)
            }, g)
        },GetGroupConversations: function(h, e, f, g, d) {
            var b = "";
            b = a.addParameter(b, "format", e);
            var c = a.buildUrl("/Message/GetGroupConversations/" + encodeURIComponent(h) + "/", b, d);
            a.pushGa("Message", "GetGroupConversations", c);
            return a.serviceLibrary.get(c, function(a) {
                f(a)
            }, g)
        },GetTotalConversationCount: function(e, f, c) {
            var d = "", b = a.buildUrl("/Message/GetTotalConversationCount/", d, c);
            a.pushGa("Message", "GetTotalConversationCount", b);
            return a.serviceLibrary.get(b, function(a) {
                e(a)
            }, f)
        },GetUnreadConversationCountV4: function(e, f, c) {
            var d = "", b = a.buildUrl("/Message/GetUnreadConversationCountV4/", d, c);
            a.pushGa("Message", "GetUnreadConversationCountV4", b);
            return a.serviceLibrary.get(b, function(a) {
                e(a)
            }, f)
        },GetUnreadGroupConversationCount: function(e, f, c) {
            var d = "", b = a.buildUrl("/Message/GetUnreadGroupConversationCount/", d, c);
            a.pushGa("Message", "GetUnreadGroupConversationCount", b);
            return a.serviceLibrary.get(b, function(a) {
                e(a)
            }, f)
        },LeaveConversation: function(e, f, g, c) {
            var d = "", b = a.buildUrl("/Message/LeaveConversation/" + encodeURIComponent(e) + "/", d, c);
            a.pushGa("Message", "LeaveConversation", b);
            return a.serviceLibrary.get(b, function(a) {
                f(a)
            }, g)
        },ReviewInvitations: function(h, e, f, g, c) {
            var d = "", b = a.buildUrl("/Message/Invitations/ReviewListDirect/" + encodeURIComponent(e) + "/", d, c);
            a.pushGa("Message", "ReviewInvitations", b);
            return a.serviceLibrary.post(b, h, function(a) {
                f(a)
            }, g)
        },ReviewAllInvitations: function(e, f, g, h, c) {
            var d = "", b = a.buildUrl("/Message/Invitations/ReviewAllDirect/" + encodeURIComponent(e) + "/" + encodeURIComponent(f) + "/", d, c);
            a.pushGa("Message", "ReviewAllInvitations", b);
            return a.serviceLibrary.post(b, null, function(a) {
                g(a)
            }, h)
        },ReviewInvitationDirect: function(f, e, g, h, c) {
            var d = "", b = a.buildUrl("/Message/Invitations/ReviewDirect/" + encodeURIComponent(f) + "/" + encodeURIComponent(e) + "/", d, c);
            a.pushGa("Message", "ReviewInvitationDirect", b);
            return a.serviceLibrary.post(b, null, function(a) {
                g(a)
            }, h)
        },ReviewInvitation: function(f, g, e, h, i, c) {
            var d = "", b = a.buildUrl("/Message/Invitations/" + encodeURIComponent(f) + "/" + encodeURIComponent(g) + "/" + encodeURIComponent(e) + "/", d, c);
            a.pushGa("Message", "ReviewInvitation", b);
            return a.serviceLibrary.post(b, null, function(a) {
                h(a)
            }, i)
        },GetAllianceJoinInvitations: function(e, h, f, g, c) {
            var d = "", b = a.buildUrl("/Message/AllianceInvitations/RequestsToJoinYourGroup/" + encodeURIComponent(e) + "/" + encodeURIComponent(h) + "/", d, c);
            a.pushGa("Message", "GetAllianceJoinInvitations", b);
            return a.serviceLibrary.get(b, function(a) {
                f(a)
            }, g)
        },GetAllianceInvitedToJoinInvitations: function(e, h, f, g, c) {
            var d = "", b = a.buildUrl("/Message/AllianceInvitations/InvitationsToJoinAnotherGroup/" + encodeURIComponent(e) + "/" + encodeURIComponent(h) + "/", d, c);
            a.pushGa("Message", "GetAllianceInvitedToJoinInvitations", b);
            return a.serviceLibrary.get(b, function(a) {
                f(a)
            }, g)
        },GetInvitationDetails: function(e, f, g, c) {
            var d = "", b = a.buildUrl("/Message/Invitations/" + encodeURIComponent(e) + "/Details/", d, c);
            a.pushGa("Message", "GetInvitationDetails", b);
            return a.serviceLibrary.get(b, function(a) {
                f(a)
            }, g)
        },UpdateConversationLastViewedTimestamp: function(e, f, c) {
            var d = "", b = a.buildUrl("/Message/Conversations/UpdateLastViewedTimestamp/", d, c);
            a.pushGa("Message", "UpdateConversationLastViewedTimestamp", b);
            return a.serviceLibrary.post(b, null, function(a) {
                e(a)
            }, f)
        },GetConversationsV4: function(h, e, f, g, d) {
            var b = "";
            b = a.addParameter(b, "format", e);
            var c = a.buildUrl("/Message/GetConversationsV4/" + encodeURIComponent(h) + "/", b, d);
            a.pushGa("Message", "GetConversationsV4", c);
            return a.serviceLibrary.get(c, function(a) {
                f(a)
            }, g)
        },GetUnreadConversationCountV3: function(e, f, c) {
            var d = "", b = a.buildUrl("/Message/GetUnreadConversationCountV3/", d, c);
            a.pushGa("Message", "GetUnreadConversationCountV3", b);
            return a.serviceLibrary.get(b, function(a) {
                e(a)
            }, f)
        },GetUnreadConversationCountV2: function(e, f, c) {
            var d = "", b = a.buildUrl("/Message/GetUnreadPrivateConversationCount/", d, c);
            a.pushGa("Message", "GetUnreadConversationCountV2", b);
            return a.serviceLibrary.get(b, function(a) {
                e(a)
            }, f)
        },GetConversationById: function(e, f, g, c) {
            var d = "", b = a.buildUrl("/Message/GetConversationById/" + encodeURIComponent(e) + "/", d, c);
            a.pushGa("Message", "GetConversationById", b);
            return a.serviceLibrary.get(b, function(a) {
                f(a)
            }, g)
        },GetConversationWithMemberId: function(e, f, g, c) {
            var d = "", b = a.buildUrl("/Message/GetConversationWithMember/" + encodeURIComponent(e) + "/", d, c);
            a.pushGa("Message", "GetConversationWithMemberId", b);
            return a.serviceLibrary.get(b, function(a) {
                f(a)
            }, g)
        },SaveMessageV2: function(g, e, f, c) {
            var d = "", b = a.buildUrl("/Message/SaveMessageV2/", d, c);
            a.pushGa("Message", "SaveMessageV2", b);
            return a.serviceLibrary.post(b, g, function(a) {
                e(a)
            }, f)
        },GetConversationsV2: function(h, e, f, g, c) {
            var d = "", b = a.buildUrl("/Message/GetConversationsV2/" + encodeURIComponent(h) + "/" + encodeURIComponent(e) + "/", d, c);
            a.pushGa("Message", "GetConversationsV2", b);
            return a.serviceLibrary.get(b, function(a) {
                f(a)
            }, g)
        },GetConversationsV3: function(h, e, f, g, c) {
            var d = "", b = a.buildUrl("/Message/GetConversationsV3/" + encodeURIComponent(h) + "/" + encodeURIComponent(e) + "/", d, c);
            a.pushGa("Message", "GetConversationsV3", b);
            return a.serviceLibrary.get(b, function(a) {
                f(a)
            }, g)
        },GetConversationThreadV2: function(e, i, f, g, h, c) {
            var d = "", b = a.buildUrl("/Message/GetConversationThreadV2/" + encodeURIComponent(e) + "/" + encodeURIComponent(i) + "/" + encodeURIComponent(f) + "/", d, c);
            a.pushGa("Message", "GetConversationThreadV2", b);
            return a.serviceLibrary.get(b, function(a) {
                g(a)
            }, h)
        }}
})(jQuery);
(function() {
    var a = bungieNetPlatform;
    a.notificationService = {dataStore: [],notificationData: {getCacheItem: function(b) {
                return a.notificationService.dataStore[b + ""]
            },setCacheItem: function(b) {
                a.notificationService.dataStore[b.id + ""] = b
            },getCacheSet: function(b) {
                return a.notificationService.dataStore["Set_" + b]
            },setCacheSet: function(b) {
                a.notificationService.dataStore["Set_" + b.id] = b
            }},GetRecentNotifications: function(e, f, g, d) {
            var b = "";
            b = a.addParameter(b, "format", e);
            var c = a.buildUrl("/Notification/GetRecent/", b, d);
            a.pushGa("Notification", "GetRecentNotifications", c);
            return a.serviceLibrary.get(c, function(a) {
                f(a)
            }, g)
        },GetRecentNotificationCount: function(e, f, c) {
            var d = "", b = a.buildUrl("/Notification/GetCount/", d, c);
            a.pushGa("Notification", "GetRecentNotificationCount", b);
            return a.serviceLibrary.get(b, function(a) {
                e(a)
            }, f)
        },ResetNotification: function(e, f, c) {
            var d = "", b = a.buildUrl("/Notification/Reset/", d, c);
            a.pushGa("Notification", "ResetNotification", b);
            return a.serviceLibrary.get(b, function(a) {
                e(a)
            }, f)
        }}
})(jQuery);
(function(b) {
    var a = bungieNetPlatform;
    a.contentService = {dataStore: [],contentData: {getCacheItem: function(b) {
                return a.contentService.dataStore[b + ""]
            },setCacheItem: function(b) {
                a.contentService.dataStore[b.id + ""] = b
            },getCacheSet: function(b) {
                return a.contentService.dataStore["Set_" + b]
            },setCacheSet: function(b) {
                a.contentService.dataStore["Set_" + b.id] = b
            }},GetContentType: function(i, e, h, f) {
            var g = "", d = a.buildUrl("/Content/GetContentType/" + encodeURIComponent(i) + "/", g, f), c = a.contentService.contentData.getCacheItem(d);
            if (c)
                return b.Deferred(function(a) {
                    e(c);
                    a.resolve(c)
                }).promise();
            a.pushGa("Content", "GetContentType", d);
            return a.serviceLibrary.get(d, function(b) {
                a.contentService.contentData.setCacheItem(b);
                e(b)
            }, h)
        },GetContentById: function(k, h, j, f, i, g) {
            var c = "";
            c = a.addParameter(c, "head", j);
            var e = a.buildUrl("/Content/GetContentById/" + encodeURIComponent(k) + "/" + encodeURIComponent(h) + "/", c, g), d = a.contentService.contentData.getCacheItem(e);
            if (d)
                return b.Deferred(function(a) {
                    f(d);
                    a.resolve(d)
                }).promise();
            a.pushGa("Content", "GetContentById", e);
            return a.serviceLibrary.get(e, function(b) {
                a.contentService.contentData.setCacheItem(b);
                f(b)
            }, i)
        },GetContentByTagAndType: function(l, k, h, j, f, i, g) {
            var c = "";
            c = a.addParameter(c, "head", j);
            var e = a.buildUrl("/Content/GetContentByTagAndType/" + encodeURIComponent(l) + "/" + encodeURIComponent(k) + "/" + encodeURIComponent(h) + "/", c, g), d = a.contentService.contentData.getCacheItem(e);
            if (d)
                return b.Deferred(function(a) {
                    f(d);
                    a.resolve(d)
                }).promise();
            a.pushGa("Content", "GetContentByTagAndType", e);
            return a.serviceLibrary.get(e, function(b) {
                a.contentService.contentData.setCacheItem(b);
                f(b)
            }, i)
        },SearchContentEx: function(h, f, i, e, g, d) {
            var b = "";
            b = a.addParameter(b, "head", i);
            var c = a.buildUrl("/Content/SearchEx/" + encodeURIComponent(f) + "/", b, d);
            a.pushGa("Content", "SearchContentEx", c);
            return a.serviceLibrary.post(c, h, function(a) {
                e(a)
            }, g)
        },SearchContentWithText: function(j, m, k, n, h, i, f, l, g) {
            var c = "";
            c = a.addParameter(c, "head", m);
            c = a.addParameter(c, "ctype", k);
            c = a.addParameter(c, "tag", n);
            c = a.addParameter(c, "currentpage", h);
            c = a.addParameter(c, "searchtext", i);
            var e = a.buildUrl("/Content/Search/" + encodeURIComponent(j) + "/", c, g), d = a.contentService.contentData.getCacheItem(e);
            if (d)
                return b.Deferred(function(a) {
                    f(d);
                    a.resolve(d)
                }).promise();
            a.pushGa("Content", "SearchContentWithText", e);
            return a.serviceLibrary.get(e, function(b) {
                a.contentService.contentData.setCacheItem(b);
                f(b)
            }, l)
        },SearchContentByTagAndType: function(n, m, j, l, i, h, f, k, g) {
            var c = "";
            c = a.addParameter(c, "head", l);
            c = a.addParameter(c, "currentpage", i);
            c = a.addParameter(c, "itemsperpage", h);
            var e = a.buildUrl("/Content/SearchContentByTagAndType/" + encodeURIComponent(n) + "/" + encodeURIComponent(m) + "/" + encodeURIComponent(j) + "/", c, g), d = a.contentService.contentData.getCacheItem(e);
            if (d)
                return b.Deferred(function(a) {
                    f(d);
                    a.resolve(d)
                }).promise();
            a.pushGa("Content", "SearchContentByTagAndType", e);
            return a.serviceLibrary.get(e, function(b) {
                a.contentService.contentData.setCacheItem(b);
                f(b)
            }, k)
        },GetHomepageContent: function(h, e, i, f) {
            var g = "", d = a.buildUrl("/Content/Site/Homepage/" + encodeURIComponent(h) + "/", g, f), c = a.contentService.contentData.getCacheItem(d);
            if (c)
                return b.Deferred(function(a) {
                    e(c);
                    a.resolve(c)
                }).promise();
            a.pushGa("Content", "GetHomepageContent", d);
            return a.serviceLibrary.get(d, function(b) {
                a.contentService.contentData.setCacheItem(b);
                e(b)
            }, i)
        },GetHomepageContentV2: function(e, h, f) {
            var g = "", d = a.buildUrl("/Content/Site/Homepage/V2/", g, f), c = a.contentService.contentData.getCacheItem(d);
            if (c)
                return b.Deferred(function(a) {
                    e(c);
                    a.resolve(c)
                }).promise();
            a.pushGa("Content", "GetHomepageContentV2", d);
            return a.serviceLibrary.get(d, function(b) {
                a.contentService.contentData.setCacheItem(b);
                e(b)
            }, h)
        },GetJobs: function(h, e, i, f) {
            var g = "", d = a.buildUrl("/Content/Site/Jobs/" + encodeURIComponent(h) + "/", g, f), c = a.contentService.contentData.getCacheItem(d);
            if (c)
                return b.Deferred(function(a) {
                    e(c);
                    a.resolve(c)
                }).promise();
            a.pushGa("Content", "GetJobs", d);
            return a.serviceLibrary.get(d, function(b) {
                a.contentService.contentData.setCacheItem(b);
                e(b)
            }, i)
        },GetPublications: function(h, e, i, f) {
            var g = "", d = a.buildUrl("/Content/Site/Publications/" + encodeURIComponent(h) + "/", g, f), c = a.contentService.contentData.getCacheItem(d);
            if (c)
                return b.Deferred(function(a) {
                    e(c);
                    a.resolve(c)
                }).promise();
            a.pushGa("Content", "GetPublications", d);
            return a.serviceLibrary.get(d, function(b) {
                a.contentService.contentData.setCacheItem(b);
                e(b)
            }, i)
        },GetNews: function(j, k, h, i, f, l, g) {
            var c = "";
            c = a.addParameter(c, "itemsperpage", h);
            c = a.addParameter(c, "currentpage", i);
            var e = a.buildUrl("/Content/Site/News/" + encodeURIComponent(j) + "/" + encodeURIComponent(k) + "/", c, g), d = a.contentService.contentData.getCacheItem(e);
            if (d)
                return b.Deferred(function(a) {
                    f(d);
                    a.resolve(d)
                }).promise();
            a.pushGa("Content", "GetNews", e);
            return a.serviceLibrary.get(e, function(b) {
                a.contentService.contentData.setCacheItem(b);
                f(b)
            }, l)
        },GetDestinyContent: function(h, e, i, f) {
            var g = "", d = a.buildUrl("/Content/Site/Destiny/" + encodeURIComponent(h) + "/", g, f), c = a.contentService.contentData.getCacheItem(d);
            if (c)
                return b.Deferred(function(a) {
                    e(c);
                    a.resolve(c)
                }).promise();
            a.pushGa("Content", "GetDestinyContent", d);
            return a.serviceLibrary.get(d, function(b) {
                a.contentService.contentData.setCacheItem(b);
                e(b)
            }, i)
        },GetDestinyContentV2: function(h, e, i, f) {
            var g = "", d = a.buildUrl("/Content/Site/Destiny/V2/" + encodeURIComponent(h) + "/", g, f), c = a.contentService.contentData.getCacheItem(d);
            if (c)
                return b.Deferred(function(a) {
                    e(c);
                    a.resolve(c)
                }).promise();
            a.pushGa("Content", "GetDestinyContentV2", d);
            return a.serviceLibrary.get(d, function(b) {
                a.contentService.contentData.setCacheItem(b);
                e(b)
            }, i)
        },GetPromoWidget: function(e, f, c) {
            var d = "", b = a.buildUrl("/Content/Site/Destiny/Promo/", d, c);
            a.pushGa("Content", "GetPromoWidget", b);
            return a.serviceLibrary.get(b, function(a) {
                e(a)
            }, f)
        },GetFeaturedArticle: function(e, f, c) {
            var d = "", b = a.buildUrl("/Content/Site/Featured/", d, c);
            a.pushGa("Content", "GetFeaturedArticle", b);
            return a.serviceLibrary.get(b, function(a) {
                e(a)
            }, f)
        }}
})(jQuery);
(function(b) {
    var a = bungieNetPlatform;
    a.externalSocialService = {dataStore: [],externalSocialData: {getCacheItem: function(b) {
                return a.externalSocialService.dataStore[b + ""]
            },setCacheItem: function(b) {
                a.externalSocialService.dataStore[b.id + ""] = b
            },getCacheSet: function(b) {
                return a.externalSocialService.dataStore["Set_" + b]
            },setCacheSet: function(b) {
                a.externalSocialService.dataStore["Set_" + b.id] = b
            }},GetAggregatedSocialFeed: function(j, h, f, i, g) {
            var c = "";
            c = a.addParameter(c, "types", h);
            var e = a.buildUrl("/ExternalSocial/GetAggregatedSocialFeed/" + encodeURIComponent(j) + "/", c, g), d = a.externalSocialService.externalSocialData.getCacheItem(e);
            if (d)
                return b.Deferred(function(a) {
                    f(d);
                    a.resolve(d)
                }).promise();
            a.pushGa("ExternalSocial", "GetAggregatedSocialFeed", e);
            return a.serviceLibrary.get(e, function(b) {
                a.externalSocialService.externalSocialData.setCacheItem(b);
                f(b)
            }, i)
        }}
})(jQuery);
(function() {
    var a = bungieNetPlatform;
    a.surveyService = {dataStore: [],surveyData: {getCacheItem: function(b) {
                return a.surveyService.dataStore[b + ""]
            },setCacheItem: function(b) {
                a.surveyService.dataStore[b.id + ""] = b
            },getCacheSet: function(b) {
                return a.surveyService.dataStore["Set_" + b]
            },setCacheSet: function(b) {
                a.surveyService.dataStore["Set_" + b.id] = b
            }},GetSurvey: function(e, f, c) {
            var d = "", b = a.buildUrl("/Survey/GetSurvey/", d, c);
            a.pushGa("Survey", "GetSurvey", b);
            return a.serviceLibrary.get(b, function(a) {
                e(a)
            }, f)
        }}
})(jQuery);
(function(b) {
    var a = bungieNetPlatform;
    a.forumService = {dataStore: [],forumData: {getCacheItem: function(b) {
                return a.forumService.dataStore[b + ""]
            },setCacheItem: function(b) {
                a.forumService.dataStore[b.id + ""] = b
            },getCacheSet: function(b) {
                return a.forumService.dataStore["Set_" + b]
            },setCacheSet: function(b) {
                a.forumService.dataStore["Set_" + b.id] = b
            }},CreatePost: function(g, e, f, c) {
            var d = "", b = a.buildUrl("/Forum/CreatePost/", d, c);
            a.pushGa("Forum", "CreatePost", b);
            return a.serviceLibrary.post(b, g, function(a) {
                e(a)
            }, f)
        },CreateContentComment: function(g, e, f, c) {
            var d = "", b = a.buildUrl("/Forum/CreateContentComment/", d, c);
            a.pushGa("Forum", "CreateContentComment", b);
            return a.serviceLibrary.post(b, g, function(a) {
                e(a)
            }, f)
        },EditPost: function(h, f, e, g, c) {
            var d = "", b = a.buildUrl("/Forum/EditPost/" + encodeURIComponent(f) + "/", d, c);
            a.pushGa("Forum", "EditPost", b);
            return a.serviceLibrary.post(b, h, function(a) {
                e(a)
            }, g)
        },DeletePost: function(f, e, g, c) {
            var d = "", b = a.buildUrl("/Forum/DeletePost/" + encodeURIComponent(f) + "/", d, c);
            a.pushGa("Forum", "DeletePost", b);
            return a.serviceLibrary.post(b, null, function(a) {
                e(a)
            }, g)
        },RatePost: function(f, g, e, h, c) {
            var d = "", b = a.buildUrl("/Forum/RatePost/" + encodeURIComponent(f) + "/" + encodeURIComponent(g) + "/", d, c);
            a.pushGa("Forum", "RatePost", b);
            return a.serviceLibrary.post(b, null, function(a) {
                e(a)
            }, h)
        },ModeratePost: function(h, f, e, g, c) {
            var d = "", b = a.buildUrl("/Forum/Post/" + encodeURIComponent(f) + "/Moderate/", d, c);
            a.pushGa("Forum", "ModeratePost", b);
            return a.serviceLibrary.post(b, h, function(a) {
                e(a)
            }, g)
        },ModerateTag: function(h, f, e, g, c) {
            var d = "", b = a.buildUrl("/Forum/Tags/" + encodeURIComponent(f) + "/Moderate/", d, c);
            a.pushGa("Forum", "ModerateTag", b);
            return a.serviceLibrary.post(b, h, function(a) {
                e(a)
            }, g)
        },ModerateGroupPost: function(h, f, e, g, c) {
            var d = "", b = a.buildUrl("/Forum/Post/" + encodeURIComponent(f) + "/GroupModerate/", d, c);
            a.pushGa("Forum", "ModerateGroupPost", b);
            return a.serviceLibrary.post(b, h, function(a) {
                e(a)
            }, g)
        },GetTopicsPagedForAlliance: function(l, h, k, m, g, e, f, i, j, d) {
            var b = "";
            b = a.addParameter(b, "tagstring", f);
            var c = a.buildUrl("/Forum/GetTopicsPagedForAlliance/" + encodeURIComponent(l) + "/" + encodeURIComponent(h) + "/" + encodeURIComponent(k) + "/" + encodeURIComponent(m) + "/" + encodeURIComponent(g) + "/" + encodeURIComponent(e) + "/", b, d);
            a.pushGa("Forum", "GetTopicsPagedForAlliance", c);
            return a.serviceLibrary.get(c, function(a) {
                i(a)
            }, j)
        },GetTopicsPaged: function(l, h, k, m, g, e, f, i, j, d) {
            var b = "";
            b = a.addParameter(b, "tagstring", f);
            var c = a.buildUrl("/Forum/GetTopicsPaged/" + encodeURIComponent(l) + "/" + encodeURIComponent(h) + "/" + encodeURIComponent(k) + "/" + encodeURIComponent(m) + "/" + encodeURIComponent(g) + "/" + encodeURIComponent(e) + "/", b, d);
            a.pushGa("Forum", "GetTopicsPaged", c);
            return a.serviceLibrary.get(c, function(a) {
                i(a)
            }, j)
        },GetPostsThreadedPaged: function(g, n, j, i, f, e, k, h, l, m, d) {
            var b = "";
            b = a.addParameter(b, "showbanned", h);
            var c = a.buildUrl("/Forum/GetPostsThreadedPaged/" + encodeURIComponent(g) + "/" + encodeURIComponent(n) + "/" + encodeURIComponent(j) + "/" + encodeURIComponent(i) + "/" + encodeURIComponent(f) + "/" + encodeURIComponent(e) + "/" + encodeURIComponent(k) + "/", b, d);
            a.pushGa("Forum", "GetPostsThreadedPaged", c);
            return a.serviceLibrary.get(c, function(a) {
                l(a)
            }, m)
        },GetPostsThreadedPagedFromChild: function(f, m, i, h, e, j, g, k, l, d) {
            var b = "";
            b = a.addParameter(b, "showbanned", g);
            var c = a.buildUrl("/Forum/GetPostsThreadedPagedFromChild/" + encodeURIComponent(f) + "/" + encodeURIComponent(m) + "/" + encodeURIComponent(i) + "/" + encodeURIComponent(h) + "/" + encodeURIComponent(e) + "/" + encodeURIComponent(j) + "/", b, d);
            a.pushGa("Forum", "GetPostsThreadedPagedFromChild", c);
            return a.serviceLibrary.get(c, function(a) {
                k(a)
            }, l)
        },GetPostAndParent: function(h, i, f, j, g) {
            var c = "";
            c = a.addParameter(c, "showbanned", i);
            var e = a.buildUrl("/Forum/GetPostAndParent/" + encodeURIComponent(h) + "/", c, g), d = a.forumService.forumData.getCacheItem(e);
            if (d)
                return b.Deferred(function(a) {
                    f(d);
                    a.resolve(d)
                }).promise();
            a.pushGa("Forum", "GetPostAndParent", e);
            return a.serviceLibrary.get(e, function(b) {
                a.forumService.forumData.setCacheItem(b);
                f(b)
            }, j)
        },GetPopularTags: function(i, h, f, j, g) {
            var c = "";
            c = a.addParameter(c, "quantity", i);
            c = a.addParameter(c, "tagsSinceDate", h);
            var e = a.buildUrl("/Forum/GetPopularTags/", c, g), d = a.forumService.forumData.getCacheItem(e);
            if (d)
                return b.Deferred(function(a) {
                    f(d);
                    a.resolve(d)
                }).promise();
            a.pushGa("Forum", "GetPopularTags", e);
            return a.serviceLibrary.get(e, function(b) {
                a.forumService.forumData.setCacheItem(b);
                f(b)
            }, j)
        },GetForumTagCountEstimate: function(h, e, i, f) {
            var g = "", d = a.buildUrl("/Forum/GetForumTagCountEstimate/" + encodeURIComponent(h) + "/", g, f), c = a.forumService.forumData.getCacheItem(d);
            if (c)
                return b.Deferred(function(a) {
                    e(c);
                    a.resolve(c)
                }).promise();
            a.pushGa("Forum", "GetForumTagCountEstimate", d);
            return a.serviceLibrary.get(d, function(b) {
                a.forumService.forumData.setCacheItem(b);
                e(b)
            }, i)
        },GetTopicForContent: function(h, e, i, f) {
            var g = "", d = a.buildUrl("/Forum/GetTopicForContent/" + encodeURIComponent(h) + "/", g, f), c = a.forumService.forumData.getCacheItem(d);
            if (c)
                return b.Deferred(function(a) {
                    e(c);
                    a.resolve(c)
                }).promise();
            a.pushGa("Forum", "GetTopicForContent", d);
            return a.serviceLibrary.get(d, function(b) {
                a.forumService.forumData.setCacheItem(b);
                e(b)
            }, i)
        },GetForumTagSuggestions: function(h, f, i, g) {
            var c = "";
            c = a.addParameter(c, "partialtag", h);
            var e = a.buildUrl("/Forum/GetForumTagSuggestions/", c, g), d = a.forumService.forumData.getCacheItem(e);
            if (d)
                return b.Deferred(function(a) {
                    f(d);
                    a.resolve(d)
                }).promise();
            a.pushGa("Forum", "GetForumTagSuggestions", e);
            return a.serviceLibrary.get(e, function(b) {
                a.forumService.forumData.setCacheItem(b);
                f(b)
            }, i)
        },MarkReplyAsAnswer: function(e, f, g, h, c) {
            var d = "", b = a.buildUrl("/Forum/MarkReplyAsAnswer/" + encodeURIComponent(e) + "/" + encodeURIComponent(f) + "/", d, c);
            a.pushGa("Forum", "MarkReplyAsAnswer", b);
            return a.serviceLibrary.post(b, null, function(a) {
                g(a)
            }, h)
        },PollVote: function(g, e, f, h, c) {
            var d = "", b = a.buildUrl("/Forum/Poll/Vote/" + encodeURIComponent(g) + "/" + encodeURIComponent(e) + "/", d, c);
            a.pushGa("Forum", "PollVote", b);
            return a.serviceLibrary.post(b, null, function(a) {
                f(a)
            }, h)
        },GetPoll: function(f, e, g, c) {
            var d = "", b = a.buildUrl("/Forum/Poll/" + encodeURIComponent(f) + "/", d, c);
            a.pushGa("Forum", "GetPoll", b);
            return a.serviceLibrary.get(b, function(a) {
                e(a)
            }, g)
        },ChangePinState: function(g, e, f, h, c) {
            var d = "", b = a.buildUrl("/Forum/ChangePinState/" + encodeURIComponent(g) + "/" + encodeURIComponent(e) + "", d, c);
            a.pushGa("Forum", "ChangePinState", b);
            return a.serviceLibrary.post(b, null, function(a) {
                f(a)
            }, h)
        },ChangeLockState: function(g, e, f, h, c) {
            var d = "", b = a.buildUrl("/Forum/ChangeLockState/" + encodeURIComponent(g) + "/" + encodeURIComponent(e) + "", d, c);
            a.pushGa("Forum", "ChangeLockState", b);
            return a.serviceLibrary.post(b, null, function(a) {
                f(a)
            }, h)
        }}
})(jQuery);
(function() {
    var a = bungieNetPlatform;
    a.activityService = {dataStore: [],activityData: {getCacheItem: function(b) {
                return a.activityService.dataStore[b + ""]
            },setCacheItem: function(b) {
                a.activityService.dataStore[b.id + ""] = b
            },getCacheSet: function(b) {
                return a.activityService.dataStore["Set_" + b]
            },setCacheSet: function(b) {
                a.activityService.dataStore["Set_" + b.id] = b
            }},GetAggregatedActivitiesForCurrentUser: function(e, f, g, h, d) {
            var b = "";
            b = a.addParameter(b, "typefilter", e);
            b = a.addParameter(b, "format", f);
            var c = a.buildUrl("/Activity/Aggregation/", b, d);
            a.pushGa("Activity", "GetAggregatedActivitiesForCurrentUser", c);
            return a.serviceLibrary.get(c, function(a) {
                g(a)
            }, h)
        },GetEntitiesFollowedByCurrentUser: function(e, f, c) {
            var d = "", b = a.buildUrl("/Activity/Following/", d, c);
            a.pushGa("Activity", "GetEntitiesFollowedByCurrentUser", b);
            return a.serviceLibrary.get(b, function(a) {
                e(a)
            }, f)
        },GetGroupsFollowedByCurrentUser: function(e, f, c) {
            var d = "", b = a.buildUrl("/Activity/Following/Groups/", d, c);
            a.pushGa("Activity", "GetGroupsFollowedByCurrentUser", b);
            return a.serviceLibrary.get(b, function(a) {
                e(a)
            }, f)
        },GetGroupsFollowedByUser: function(g, e, f, c) {
            var d = "", b = a.buildUrl("/Activity/User/" + encodeURIComponent(g) + "/Following/Groups/", d, c);
            a.pushGa("Activity", "GetGroupsFollowedByUser", b);
            return a.serviceLibrary.get(b, function(a) {
                e(a)
            }, f)
        },GetEntitiesFollowedByUser: function(g, e, f, c) {
            var d = "", b = a.buildUrl("/Activity/User/" + encodeURIComponent(g) + "/Following/", d, c);
            a.pushGa("Activity", "GetEntitiesFollowedByUser", b);
            return a.serviceLibrary.get(b, function(a) {
                e(a)
            }, f)
        },GetEntitiesFollowedByCurrentUserV2: function(f, e, g, h, c) {
            var d = "", b = a.buildUrl("/Activity/Following/V2/" + encodeURIComponent(f) + "/" + encodeURIComponent(e) + "/", d, c);
            a.pushGa("Activity", "GetEntitiesFollowedByCurrentUserV2", b);
            return a.serviceLibrary.get(b, function(a) {
                g(a)
            }, h)
        },GetEntitiesFollowedByUserV2: function(e, g, f, h, i, c) {
            var d = "", b = a.buildUrl("/Activity/User/" + encodeURIComponent(e) + "/Following/V2/" + encodeURIComponent(g) + "/" + encodeURIComponent(f) + "/", d, c);
            a.pushGa("Activity", "GetEntitiesFollowedByUserV2", b);
            return a.serviceLibrary.get(b, function(a) {
                h(a)
            }, i)
        },GetGroupsFollowedPagedByCurrentUser: function(e, f, g, c) {
            var d = "", b = a.buildUrl("/Activity/Following/Groups/" + encodeURIComponent(e) + "/", d, c);
            a.pushGa("Activity", "GetGroupsFollowedPagedByCurrentUser", b);
            return a.serviceLibrary.get(b, function(a) {
                f(a)
            }, g)
        },GetGroupsFollowedPagedByUser: function(e, f, g, h, c) {
            var d = "", b = a.buildUrl("/Activity/User/" + encodeURIComponent(e) + "/Following/Groups/Paged/" + encodeURIComponent(f) + "/", d, c);
            a.pushGa("Activity", "GetGroupsFollowedPagedByUser", b);
            return a.serviceLibrary.get(b, function(a) {
                g(a)
            }, h)
        },GetFollowersOfUser: function(i, e, f, g, h, d) {
            var b = "";
            b = a.addParameter(b, "itemsperpage", e);
            b = a.addParameter(b, "currentpage", f);
            var c = a.buildUrl("/Activity/User/" + encodeURIComponent(i) + "/Followers/", b, d);
            a.pushGa("Activity", "GetFollowersOfUser", c);
            return a.serviceLibrary.get(c, function(a) {
                g(a)
            }, h)
        },FollowUser: function(g, e, f, c) {
            var d = "", b = a.buildUrl("/Activity/User/" + encodeURIComponent(g) + "/Follow/", d, c);
            a.pushGa("Activity", "FollowUser", b);
            return a.serviceLibrary.post(b, null, function(a) {
                e(a)
            }, f)
        },UnfollowUser: function(g, e, f, c) {
            var d = "", b = a.buildUrl("/Activity/User/" + encodeURIComponent(g) + "/Unfollow/", d, c);
            a.pushGa("Activity", "UnfollowUser", b);
            return a.serviceLibrary.post(b, null, function(a) {
                e(a)
            }, f)
        },GetLikeAndShareActivityForUser: function(j, e, f, g, h, i, d) {
            var b = "";
            b = a.addParameter(b, "itemsperpage", e);
            b = a.addParameter(b, "currentpage", f);
            b = a.addParameter(b, "format", g);
            var c = a.buildUrl("/Activity/User/" + encodeURIComponent(j) + "/Activities/LikesAndShares/", b, d);
            a.pushGa("Activity", "GetLikeAndShareActivityForUser", c);
            return a.serviceLibrary.get(c, function(a) {
                h(a)
            }, i)
        },GetLikeAndShareActivityForUserV2: function(i, e, f, g, h, d) {
            var b = "";
            b = a.addParameter(b, "currentpage", e);
            b = a.addParameter(b, "format", f);
            var c = a.buildUrl("/Activity/User/" + encodeURIComponent(i) + "/Activities/LikesAndSharesV2/", b, d);
            a.pushGa("Activity", "GetLikeAndShareActivityForUserV2", c);
            return a.serviceLibrary.get(c, function(a) {
                g(a)
            }, h)
        },GetForumActivityForUser: function(j, e, f, g, h, i, d) {
            var b = "";
            b = a.addParameter(b, "itemsperpage", e);
            b = a.addParameter(b, "currentpage", f);
            b = a.addParameter(b, "format", g);
            var c = a.buildUrl("/Activity/User/" + encodeURIComponent(j) + "/Activities/Forums/", b, d);
            a.pushGa("Activity", "GetForumActivityForUser", c);
            return a.serviceLibrary.get(c, function(a) {
                h(a)
            }, i)
        },GetForumActivityForUserV2: function(i, e, f, g, h, d) {
            var b = "";
            b = a.addParameter(b, "currentpage", e);
            b = a.addParameter(b, "format", f);
            var c = a.buildUrl("/Activity/User/" + encodeURIComponent(i) + "/Activities/ForumsV2/", b, d);
            a.pushGa("Activity", "GetForumActivityForUserV2", c);
            return a.serviceLibrary.get(c, function(a) {
                g(a)
            }, h)
        },GetFollowersOfGroup: function(i, e, f, g, h, d) {
            var b = "";
            b = a.addParameter(b, "itemsperpage", e);
            b = a.addParameter(b, "currentpage", f);
            var c = a.buildUrl("/Activity/Group/" + encodeURIComponent(i) + "/Followers/", b, d);
            a.pushGa("Activity", "GetFollowersOfGroup", c);
            return a.serviceLibrary.get(c, function(a) {
                g(a)
            }, h)
        },FollowGroup: function(g, e, f, c) {
            var d = "", b = a.buildUrl("/Activity/Group/" + encodeURIComponent(g) + "/Follow/", d, c);
            a.pushGa("Activity", "FollowGroup", b);
            return a.serviceLibrary.post(b, null, function(a) {
                e(a)
            }, f)
        },UnfollowGroup: function(g, e, f, c) {
            var d = "", b = a.buildUrl("/Activity/Group/" + encodeURIComponent(g) + "/Unfollow/", d, c);
            a.pushGa("Activity", "UnfollowGroup", b);
            return a.serviceLibrary.post(b, null, function(a) {
                e(a)
            }, f)
        },GetGroupActivities: function(h, e, f, g, d) {
            var b = "";
            b = a.addParameter(b, "format", e);
            var c = a.buildUrl("/Activity/Group/" + encodeURIComponent(h) + "/Activities/", b, d);
            a.pushGa("Activity", "GetGroupActivities", c);
            return a.serviceLibrary.get(c, function(a) {
                f(a)
            }, g)
        },GetFollowersOfTag: function(i, e, f, g, h, d) {
            var b = "";
            b = a.addParameter(b, "tag", i);
            b = a.addParameter(b, "itemsperpage", e);
            b = a.addParameter(b, "currentpage", f);
            var c = a.buildUrl("/Activity/Tag/Followers/", b, d);
            a.pushGa("Activity", "GetFollowersOfTag", c);
            return a.serviceLibrary.get(c, function(a) {
                g(a)
            }, h)
        },FollowTag: function(g, e, f, d) {
            var b = "";
            b = a.addParameter(b, "tag", g);
            var c = a.buildUrl("/Activity/Tag/Follow/", b, d);
            a.pushGa("Activity", "FollowTag", c);
            return a.serviceLibrary.post(c, null, function(a) {
                e(a)
            }, f)
        },UnfollowTag: function(g, e, f, d) {
            var b = "";
            b = a.addParameter(b, "tag", g);
            var c = a.buildUrl("/Activity/Tag/Unfollow/", b, d);
            a.pushGa("Activity", "UnfollowTag", c);
            return a.serviceLibrary.post(c, null, function(a) {
                e(a)
            }, f)
        },GetFriends: function(e, f, c) {
            var d = "", b = a.buildUrl("/Activity/Friends/", d, c);
            a.pushGa("Activity", "GetFriends", b);
            return a.serviceLibrary.get(b, function(a) {
                e(a)
            }, f)
        },GetFriendsAllNoPresence: function(e, f, g, c) {
            var d = "", b = a.buildUrl("/Activity/Friends/AllNoPresence/" + encodeURIComponent(e) + "/", d, c);
            a.pushGa("Activity", "GetFriendsAllNoPresence", b);
            return a.serviceLibrary.get(b, function(a) {
                f(a)
            }, g)
        },GetFriendsPaged: function(e, f, g, h, c) {
            var d = "", b = a.buildUrl("/Activity/Friends/Paged/" + encodeURIComponent(e) + "/" + encodeURIComponent(f) + "/", d, c);
            a.pushGa("Activity", "GetFriendsPaged", b);
            return a.serviceLibrary.get(b, function(a) {
                g(a)
            }, h)
        }}
})(jQuery);
(function(b) {
    var a = bungieNetPlatform;
    a.groupService = {dataStore: [],groupData: {getCacheItem: function(b) {
                return a.groupService.dataStore[b + ""]
            },setCacheItem: function(b) {
                a.groupService.dataStore[b.id + ""] = b
            },getCacheSet: function(b) {
                return a.groupService.dataStore["Set_" + b]
            },setCacheSet: function(b) {
                a.groupService.dataStore["Set_" + b.id] = b
            }},GetAvailableAvatars: function(e, h, f) {
            var g = "", d = a.buildUrl("/Group/GetAvailableAvatars/", g, f), c = a.groupService.groupData.getCacheItem(d);
            if (c)
                return b.Deferred(function(a) {
                    e(c);
                    a.resolve(c)
                }).promise();
            a.pushGa("Group", "GetAvailableAvatars", d);
            return a.serviceLibrary.get(d, function(b) {
                a.groupService.groupData.setCacheItem(b);
                e(b)
            }, h)
        },GetAvailableThemes: function(e, h, f) {
            var g = "", d = a.buildUrl("/Group/GetAvailableThemes/", g, f), c = a.groupService.groupData.getCacheItem(d);
            if (c)
                return b.Deferred(function(a) {
                    e(c);
                    a.resolve(c)
                }).promise();
            a.pushGa("Group", "GetAvailableThemes", d);
            return a.serviceLibrary.get(d, function(b) {
                a.groupService.groupData.setCacheItem(b);
                e(b)
            }, h)
        },GetGroupsFollowingGroup: function(d, g, f, h, i, e) {
            var b = "";
            b = a.addParameter(b, "populatefriends", f);
            var c = a.buildUrl("/Group/" + encodeURIComponent(d) + "/FollowedBy/" + encodeURIComponent(g) + "/", b, e);
            a.pushGa("Group", "GetGroupsFollowingGroup", c);
            return a.serviceLibrary.get(c, function(a) {
                h(a)
            }, i)
        },GetGroupsFollowedByGroup: function(d, g, f, h, i, e) {
            var b = "";
            b = a.addParameter(b, "populatefriends", f);
            var c = a.buildUrl("/Group/" + encodeURIComponent(d) + "/Following/" + encodeURIComponent(g) + "/", b, e);
            a.pushGa("Group", "GetGroupsFollowedByGroup", c);
            return a.serviceLibrary.get(c, function(a) {
                h(a)
            }, i)
        },FollowGroupWithGroup: function(f, c, g, h, d) {
            var e = "", b = a.buildUrl("/Group/" + encodeURIComponent(f) + "/Follow/" + encodeURIComponent(c) + "/", e, d);
            a.pushGa("Group", "FollowGroupWithGroup", b);
            return a.serviceLibrary.post(b, null, function(a) {
                g(a)
            }, h)
        },UnfollowGroupWithGroup: function(e, c, g, h, d) {
            var f = "", b = a.buildUrl("/Group/" + encodeURIComponent(e) + "/Unfollow/" + encodeURIComponent(c) + "/", f, d);
            a.pushGa("Group", "UnfollowGroupWithGroup", b);
            return a.serviceLibrary.post(b, null, function(a) {
                g(a)
            }, h)
        },FollowGroupsWithGroup: function(h, e, f, g, c) {
            var d = "", b = a.buildUrl("/Group/" + encodeURIComponent(e) + "/FollowList/", d, c);
            a.pushGa("Group", "FollowGroupsWithGroup", b);
            return a.serviceLibrary.post(b, h, function(a) {
                f(a)
            }, g)
        },UnfollowGroupsWithGroup: function(h, d, f, g, c) {
            var e = "", b = a.buildUrl("/Group/" + encodeURIComponent(d) + "/UnfollowList/", e, c);
            a.pushGa("Group", "UnfollowGroupsWithGroup", b);
            return a.serviceLibrary.post(b, h, function(a) {
                f(a)
            }, g)
        },UnfollowAllGroupsWithGroup: function(d, f, g, c) {
            var e = "", b = a.buildUrl("/Group/" + encodeURIComponent(d) + "/UnfollowAll/", e, c);
            a.pushGa("Group", "UnfollowAllGroupsWithGroup", b);
            return a.serviceLibrary.post(b, null, function(a) {
                f(a)
            }, g)
        },InviteToJoinAlliance: function(i, c, e, g, h, d) {
            var f = "", b = a.buildUrl("/Group/" + encodeURIComponent(c) + "/Allies/Invite/" + encodeURIComponent(e) + "/", f, d);
            a.pushGa("Group", "InviteToJoinAlliance", b);
            return a.serviceLibrary.post(b, i, function(a) {
                g(a)
            }, h)
        },InviteManyToJoinAlliance: function(h, c, f, g, d) {
            var e = "", b = a.buildUrl("/Group/" + encodeURIComponent(c) + "/Allies/InviteMany/", e, d);
            a.pushGa("Group", "InviteManyToJoinAlliance", b);
            return a.serviceLibrary.post(b, h, function(a) {
                f(a)
            }, g)
        },RequestToJoinAlliance: function(i, e, c, g, h, d) {
            var f = "", b = a.buildUrl("/Group/" + encodeURIComponent(e) + "/Allies/RequestToJoin/" + encodeURIComponent(c) + "/", f, d);
            a.pushGa("Group", "RequestToJoinAlliance", b);
            return a.serviceLibrary.post(b, i, function(a) {
                g(a)
            }, h)
        },BreakAlliance: function(c, e, g, h, d) {
            var f = "", b = a.buildUrl("/Group/" + encodeURIComponent(c) + "/Relationship/" + encodeURIComponent(e) + "/BreakAlliance/", f, d);
            a.pushGa("Group", "BreakAlliance", b);
            return a.serviceLibrary.post(b, null, function(a) {
                g(a)
            }, h)
        },BreakAlliances: function(h, e, f, g, c) {
            var d = "", b = a.buildUrl("/Group/" + encodeURIComponent(e) + "/BreakAlliances/", d, c);
            a.pushGa("Group", "BreakAlliances", b);
            return a.serviceLibrary.post(b, h, function(a) {
                f(a)
            }, g)
        },DisbandAlliance: function(e, f, g, c) {
            var d = "", b = a.buildUrl("/Group/" + encodeURIComponent(e) + "/BreakAllAlliances/", d, c);
            a.pushGa("Group", "DisbandAlliance", b);
            return a.serviceLibrary.post(b, null, function(a) {
                f(a)
            }, g)
        },SetGroupAsAlliance: function(e, f, g, c) {
            var d = "", b = a.buildUrl("/Group/" + encodeURIComponent(e) + "/SetAsAlliance/", d, c);
            a.pushGa("Group", "SetGroupAsAlliance", b);
            return a.serviceLibrary.post(b, null, function(a) {
                f(a)
            }, g)
        },GetAlliedGroups: function(g, f, e, h, i, d) {
            var b = "";
            b = a.addParameter(b, "currentpage", f);
            b = a.addParameter(b, "populatefriends", e);
            var c = a.buildUrl("/Group/" + encodeURIComponent(g) + "/Allies/", b, d);
            a.pushGa("Group", "GetAlliedGroups", c);
            return a.serviceLibrary.get(c, function(a) {
                h(a)
            }, i)
        },GetRecommendedGroups: function(g, f, e, h, i, d) {
            var b = "";
            b = a.addParameter(b, "membershiptype", f);
            b = a.addParameter(b, "populatefriends", e);
            var c = a.buildUrl("/Group/MyGroups/Recommended/" + encodeURIComponent(g) + "/", b, d);
            a.pushGa("Group", "GetRecommendedGroups", c);
            return a.serviceLibrary.get(c, function(a) {
                h(a)
            }, i)
        },GroupSearch: function(h, e, f, g, d) {
            var b = "";
            b = a.addParameter(b, "populatefriends", e);
            var c = a.buildUrl("/Group/Search/", b, d);
            a.pushGa("Group", "GroupSearch", c);
            return a.serviceLibrary.post(c, h, function(a) {
                f(a)
            }, g)
        },GetDeletedGroupsForCurrentMember: function(e, f, c) {
            var d = "", b = a.buildUrl("/Group/MyGroups/Deleted/", d, c);
            a.pushGa("Group", "GetDeletedGroupsForCurrentMember", b);
            return a.serviceLibrary.get(b, function(a) {
                e(a)
            }, f)
        },GetGroup: function(f, e, g, h, d) {
            var b = "";
            b = a.addParameter(b, "populatefriends", e);
            var c = a.buildUrl("/Group/" + encodeURIComponent(f) + "/", b, d);
            a.pushGa("Group", "GetGroup", c);
            return a.serviceLibrary.get(c, function(a) {
                g(a)
            }, h)
        },GetGroupByName: function(f, e, g, h, d) {
            var b = "";
            b = a.addParameter(b, "populatefriends", e);
            var c = a.buildUrl("/Group/Name/" + encodeURIComponent(f) + "/", b, d);
            a.pushGa("Group", "GetGroupByName", c);
            return a.serviceLibrary.get(c, function(a) {
                g(a)
            }, h)
        },GetGroupTagSuggestions: function(e, f, g, d) {
            var b = "";
            b = a.addParameter(b, "partialtag", e);
            var c = a.buildUrl("/Group/GetGroupTagSuggestions/", b, d);
            a.pushGa("Group", "GetGroupTagSuggestions", c);
            return a.serviceLibrary.get(c, function(a) {
                f(a)
            }, g)
        },CreateGroup: function(g, e, f, c) {
            var d = "", b = a.buildUrl("/Group/Create/", d, c);
            a.pushGa("Group", "CreateGroup", b);
            return a.serviceLibrary.post(b, g, function(a) {
                e(a)
            }, f)
        },CreateGroupV2: function(g, e, f, c) {
            var d = "", b = a.buildUrl("/Group/Create/V2/", d, c);
            a.pushGa("Group", "CreateGroupV2", b);
            return a.serviceLibrary.post(b, g, function(a) {
                e(a)
            }, f)
        },CreateMinimalGroup: function(g, e, f, c) {
            var d = "", b = a.buildUrl("/Group/Create/Minimal/", d, c);
            a.pushGa("Group", "CreateMinimalGroup", b);
            return a.serviceLibrary.post(b, g, function(a) {
                e(a)
            }, f)
        },EditGroupV2: function(h, e, f, g, c) {
            var d = "", b = a.buildUrl("/Group/" + encodeURIComponent(e) + "/EditV2/", d, c);
            a.pushGa("Group", "EditGroupV2", b);
            return a.serviceLibrary.post(b, h, function(a) {
                f(a)
            }, g)
        },SetPrivacy: function(f, e, g, h, c) {
            var d = "", b = a.buildUrl("/Group/" + encodeURIComponent(f) + "/Privacy/" + encodeURIComponent(e) + "/", d, c);
            a.pushGa("Group", "SetPrivacy", b);
            return a.serviceLibrary.post(b, null, function(a) {
                g(a)
            }, h)
        },UndeleteGroup: function(e, f, g, c) {
            var d = "", b = a.buildUrl("/Group/" + encodeURIComponent(e) + "/Undelete/", d, c);
            a.pushGa("Group", "UndeleteGroup", b);
            return a.serviceLibrary.post(b, null, function(a) {
                f(a)
            }, g)
        },InviteGroupMember: function(i, f, c, g, h, d) {
            var e = "", b = a.buildUrl("/Group/" + encodeURIComponent(f) + "/Invite/" + encodeURIComponent(c) + "/", e, d);
            a.pushGa("Group", "InviteGroupMember", b);
            return a.serviceLibrary.post(b, i, function(a) {
                g(a)
            }, h)
        },InviteClanMember: function(j, g, c, f, h, i, d) {
            var e = "", b = a.buildUrl("/Group/" + encodeURIComponent(g) + "/InviteToClan/" + encodeURIComponent(c) + "/" + encodeURIComponent(f) + "/", e, d);
            a.pushGa("Group", "InviteClanMember", b);
            return a.serviceLibrary.post(b, j, function(a) {
                h(a)
            }, i)
        },GetPendingMembershipsV2: function(f, e, g, h, d) {
            var b = "";
            b = a.addParameter(b, "currentPage", e);
            var c = a.buildUrl("/Group/" + encodeURIComponent(f) + "/Members/PendingV2/", b, d);
            a.pushGa("Group", "GetPendingMembershipsV2", c);
            return a.serviceLibrary.get(c, function(a) {
                g(a)
            }, h)
        },GetPendingClanMemberships: function(g, e, f, h, i, c) {
            var d = "", b = a.buildUrl("/Group/" + encodeURIComponent(g) + "/Clan/" + encodeURIComponent(e) + "/Pending/" + encodeURIComponent(f) + "/", d, c);
            a.pushGa("Group", "GetPendingClanMemberships", b);
            return a.serviceLibrary.get(b, function(a) {
                h(a)
            }, i)
        },RequestGroupMembershipV2: function(i, f, e, g, h, d) {
            var b = "";
            b = a.addParameter(b, "populatefriends", e);
            var c = a.buildUrl("/Group/" + encodeURIComponent(f) + "/Members/ApplyV2/", b, d);
            a.pushGa("Group", "RequestGroupMembershipV2", c);
            return a.serviceLibrary.post(c, i, function(a) {
                g(a)
            }, h)
        },RescindGroupMembership: function(f, e, g, h, d) {
            var b = "";
            b = a.addParameter(b, "populatefriends", e);
            var c = a.buildUrl("/Group/" + encodeURIComponent(f) + "/Members/Rescind/", b, d);
            a.pushGa("Group", "RescindGroupMembership", c);
            return a.serviceLibrary.post(c, null, function(a) {
                g(a)
            }, h)
        },ApproveGroupMembershipV2: function(i, f, e, g, h, c) {
            var d = "", b = a.buildUrl("/Group/" + encodeURIComponent(f) + "/Members/" + encodeURIComponent(e) + "/ApproveV2/", d, c);
            a.pushGa("Group", "ApproveGroupMembershipV2", b);
            return a.serviceLibrary.post(b, i, function(a) {
                g(a)
            }, h)
        },DenyGroupMembershipV2: function(i, f, e, g, h, c) {
            var d = "", b = a.buildUrl("/Group/" + encodeURIComponent(f) + "/Members/" + encodeURIComponent(e) + "/DenyV2/", d, c);
            a.pushGa("Group", "DenyGroupMembershipV2", b);
            return a.serviceLibrary.post(b, i, function(a) {
                g(a)
            }, h)
        },ApproveAllPending: function(h, e, f, g, c) {
            var d = "", b = a.buildUrl("/Group/" + encodeURIComponent(e) + "/Members/ApproveAll/", d, c);
            a.pushGa("Group", "ApproveAllPending", b);
            return a.serviceLibrary.post(b, h, function(a) {
                f(a)
            }, g)
        },DenyAllPending: function(h, e, f, g, c) {
            var d = "", b = a.buildUrl("/Group/" + encodeURIComponent(e) + "/Members/DenyAll/", d, c);
            a.pushGa("Group", "DenyAllPending", b);
            return a.serviceLibrary.post(b, h, function(a) {
                f(a)
            }, g)
        },ApprovePendingForList: function(h, e, f, g, c) {
            var d = "", b = a.buildUrl("/Group/" + encodeURIComponent(e) + "/Members/ApproveList/", d, c);
            a.pushGa("Group", "ApprovePendingForList", b);
            return a.serviceLibrary.post(b, h, function(a) {
                f(a)
            }, g)
        },DenyPendingForList: function(h, e, f, g, c) {
            var d = "", b = a.buildUrl("/Group/" + encodeURIComponent(e) + "/Members/DenyList/", d, c);
            a.pushGa("Group", "DenyPendingForList", b);
            return a.serviceLibrary.post(b, h, function(a) {
                f(a)
            }, g)
        },GetFoundedGroupsForMember: function(f, g, h, e, i, j, d) {
            var b = "";
            b = a.addParameter(b, "clanonly", h);
            b = a.addParameter(b, "populatefriends", e);
            var c = a.buildUrl("/Group/User/" + encodeURIComponent(f) + "/Founded/" + encodeURIComponent(g) + "/", b, d);
            a.pushGa("Group", "GetFoundedGroupsForMember", c);
            return a.serviceLibrary.get(c, function(a) {
                i(a)
            }, j)
        },GetJoinedGroupsForMemberV3: function(f, g, e, h, i, d) {
            var b = "";
            b = a.addParameter(b, "populatefriends", e);
            var c = a.buildUrl("/Group/User/" + encodeURIComponent(f) + "/JoinedV3/" + encodeURIComponent(g) + "/", b, d);
            a.pushGa("Group", "GetJoinedGroupsForMemberV3", c);
            return a.serviceLibrary.get(c, function(a) {
                h(a)
            }, i)
        },GetPendingGroupsForMemberV2: function(f, g, e, h, i, d) {
            var b = "";
            b = a.addParameter(b, "populatefriends", e);
            var c = a.buildUrl("/Group/User/" + encodeURIComponent(f) + "/PendingV2/" + encodeURIComponent(g) + "/", b, d);
            a.pushGa("Group", "GetPendingGroupsForMemberV2", c);
            return a.serviceLibrary.get(c, function(a) {
                h(a)
            }, i)
        },GetClanAttributeDefinitions: function(e, h, f) {
            var g = "", d = a.buildUrl("/Group/GetClanAttributeDefinitions/", g, f), c = a.groupService.groupData.getCacheItem(d);
            if (c)
                return b.Deferred(function(a) {
                    e(c);
                    a.resolve(c)
                }).promise();
            a.pushGa("Group", "GetClanAttributeDefinitions", d);
            return a.serviceLibrary.get(d, function(b) {
                a.groupService.groupData.setCacheItem(b);
                e(b)
            }, h)
        },EnableClanForGroup: function(f, e, g, h, c) {
            var d = "", b = a.buildUrl("/Group/" + encodeURIComponent(f) + "/Clans/Enable/" + encodeURIComponent(e) + "/", d, c);
            a.pushGa("Group", "EnableClanForGroup", b);
            return a.serviceLibrary.post(b, null, function(a) {
                g(a)
            }, h)
        },JoinClanForGroup: function(i, f, e, g, h, c) {
            var d = "", b = a.buildUrl("/Group/" + encodeURIComponent(f) + "/Clans/Join/" + encodeURIComponent(e) + "/", d, c);
            a.pushGa("Group", "JoinClanForGroup", b);
            return a.serviceLibrary.post(b, i, function(a) {
                g(a)
            }, h)
        },LeaveClanForGroup: function(f, e, g, h, c) {
            var d = "", b = a.buildUrl("/Group/" + encodeURIComponent(f) + "/Clans/Leave/" + encodeURIComponent(e) + "/", d, c);
            a.pushGa("Group", "LeaveClanForGroup", b);
            return a.serviceLibrary.post(b, null, function(a) {
                g(a)
            }, h)
        },DisableClanForGroup: function(f, e, g, h, c) {
            var d = "", b = a.buildUrl("/Group/" + encodeURIComponent(f) + "/Clans/Disable/" + encodeURIComponent(e) + "/", d, c);
            a.pushGa("Group", "DisableClanForGroup", b);
            return a.serviceLibrary.post(b, null, function(a) {
                g(a)
            }, h)
        },RefreshClanSettingsInDestiny: function(e, f, g, c) {
            var d = "", b = a.buildUrl("/Group/MyClans/Refresh/" + encodeURIComponent(e) + "/", d, c);
            a.pushGa("Group", "RefreshClanSettingsInDestiny", b);
            return a.serviceLibrary.post(b, null, function(a) {
                f(a)
            }, g)
        },GetMembersOfGroupV3: function(j, e, g, h, f, m, i, k, l, d) {
            var b = "";
            b = a.addParameter(b, "itemsPerPage", e);
            b = a.addParameter(b, "currentPage", g);
            b = a.addParameter(b, "memberType", h);
            b = a.addParameter(b, "platformType", f);
            b = a.addParameter(b, "sort", m);
            b = a.addParameter(b, "nameSearch", i);
            var c = a.buildUrl("/Group/" + encodeURIComponent(j) + "/MembersV3/", b, d);
            a.pushGa("Group", "GetMembersOfGroupV3", c);
            return a.serviceLibrary.get(c, function(a) {
                k(a)
            }, l)
        },GetAdminsOfGroupV2: function(g, e, f, h, i, d) {
            var b = "";
            b = a.addParameter(b, "itemsPerPage", e);
            b = a.addParameter(b, "currentPage", f);
            var c = a.buildUrl("/Group/" + encodeURIComponent(g) + "/AdminsV2/", b, d);
            a.pushGa("Group", "GetAdminsOfGroupV2", c);
            return a.serviceLibrary.get(c, function(a) {
                h(a)
            }, i)
        },EditGroupMembership: function(g, f, e, h, i, c) {
            var d = "", b = a.buildUrl("/Group/" + encodeURIComponent(g) + "/Members/" + encodeURIComponent(f) + "/SetMembershipType/" + encodeURIComponent(e) + "/", d, c);
            a.pushGa("Group", "EditGroupMembership", b);
            return a.serviceLibrary.post(b, null, function(a) {
                h(a)
            }, i)
        },KickMember: function(f, e, g, h, c) {
            var d = "", b = a.buildUrl("/Group/" + encodeURIComponent(f) + "/Members/" + encodeURIComponent(e) + "/Kick/", d, c);
            a.pushGa("Group", "KickMember", b);
            return a.serviceLibrary.post(b, null, function(a) {
                g(a)
            }, h)
        },BanMember: function(i, f, e, g, h, c) {
            var d = "", b = a.buildUrl("/Group/" + encodeURIComponent(f) + "/Members/" + encodeURIComponent(e) + "/Ban/", d, c);
            a.pushGa("Group", "BanMember", b);
            return a.serviceLibrary.post(b, i, function(a) {
                g(a)
            }, h)
        },UnbanMember: function(f, e, g, h, c) {
            var d = "", b = a.buildUrl("/Group/" + encodeURIComponent(f) + "/Members/" + encodeURIComponent(e) + "/Unban/", d, c);
            a.pushGa("Group", "UnbanMember", b);
            return a.serviceLibrary.post(b, null, function(a) {
                g(a)
            }, h)
        },GetBannedMembersOfGroup: function(g, e, f, h, i, d) {
            var b = "";
            b = a.addParameter(b, "itemsPerPage", e);
            b = a.addParameter(b, "currentPage", f);
            var c = a.buildUrl("/Group/" + encodeURIComponent(g) + "/Banned/", b, d);
            a.pushGa("Group", "GetBannedMembersOfGroup", c);
            return a.serviceLibrary.get(c, function(a) {
                h(a)
            }, i)
        },GetBannedMembersOfGroupV2: function(g, e, f, h, i, d) {
            var b = "";
            b = a.addParameter(b, "itemsPerPage", e);
            b = a.addParameter(b, "currentPage", f);
            var c = a.buildUrl("/Group/" + encodeURIComponent(g) + "/BannedV2/", b, d);
            a.pushGa("Group", "GetBannedMembersOfGroupV2", c);
            return a.serviceLibrary.get(c, function(a) {
                h(a)
            }, i)
        },OverrideFounderAdmin: function(f, e, g, h, c) {
            var d = "", b = a.buildUrl("/Group/" + encodeURIComponent(f) + "/Admin/FounderOverride/" + encodeURIComponent(e) + "/", d, c);
            a.pushGa("Group", "OverrideFounderAdmin", b);
            return a.serviceLibrary.post(b, null, function(a) {
                g(a)
            }, h)
        },GetAdminsOfGroup: function(g, e, f, h, i, d) {
            var b = "";
            b = a.addParameter(b, "itemsPerPage", e);
            b = a.addParameter(b, "currentPage", f);
            var c = a.buildUrl("/Group/" + encodeURIComponent(g) + "/Admins/", b, d);
            a.pushGa("Group", "GetAdminsOfGroup", c);
            return a.serviceLibrary.get(c, function(a) {
                h(a)
            }, i)
        },GetMembersOfGroup: function(i, e, g, h, f, l, j, k, d) {
            var b = "";
            b = a.addParameter(b, "itemsPerPage", e);
            b = a.addParameter(b, "currentPage", g);
            b = a.addParameter(b, "memberType", h);
            b = a.addParameter(b, "platformType", f);
            b = a.addParameter(b, "sort", l);
            var c = a.buildUrl("/Group/" + encodeURIComponent(i) + "/Members/", b, d);
            a.pushGa("Group", "GetMembersOfGroup", c);
            return a.serviceLibrary.get(c, function(a) {
                j(a)
            }, k)
        },GetMembersOfGroupV2: function(i, e, g, h, f, l, j, k, d) {
            var b = "";
            b = a.addParameter(b, "itemsPerPage", e);
            b = a.addParameter(b, "currentPage", g);
            b = a.addParameter(b, "memberType", h);
            b = a.addParameter(b, "platformType", f);
            b = a.addParameter(b, "sort", l);
            var c = a.buildUrl("/Group/" + encodeURIComponent(i) + "/MembersV2/", b, d);
            a.pushGa("Group", "GetMembersOfGroupV2", c);
            return a.serviceLibrary.get(c, function(a) {
                j(a)
            }, k)
        },GetPendingGroupsForMember: function(f, e, g, h, d) {
            var b = "";
            b = a.addParameter(b, "populatefriends", e);
            var c = a.buildUrl("/Group/User/" + encodeURIComponent(f) + "/Pending/", b, d);
            a.pushGa("Group", "GetPendingGroupsForMember", c);
            return a.serviceLibrary.get(c, function(a) {
                g(a)
            }, h)
        },EditGroup: function(h, e, f, g, c) {
            var d = "", b = a.buildUrl("/Group/" + encodeURIComponent(e) + "/Edit/", d, c);
            a.pushGa("Group", "EditGroup", b);
            return a.serviceLibrary.post(b, h, function(a) {
                f(a)
            }, g)
        },GetPendingMemberships: function(g, e, f, h, i, d) {
            var b = "";
            b = a.addParameter(b, "itemsPerPage", e);
            b = a.addParameter(b, "currentPage", f);
            var c = a.buildUrl("/Group/" + encodeURIComponent(g) + "/Members/Pending/", b, d);
            a.pushGa("Group", "GetPendingMemberships", c);
            return a.serviceLibrary.get(c, function(a) {
                h(a)
            }, i)
        },RequestGroupMembership: function(f, e, g, h, d) {
            var b = "";
            b = a.addParameter(b, "populatefriends", e);
            var c = a.buildUrl("/Group/" + encodeURIComponent(f) + "/Members/Apply/", b, d);
            a.pushGa("Group", "RequestGroupMembership", c);
            return a.serviceLibrary.post(c, null, function(a) {
                g(a)
            }, h)
        },ApproveGroupMembership: function(f, e, g, h, c) {
            var d = "", b = a.buildUrl("/Group/" + encodeURIComponent(f) + "/Members/" + encodeURIComponent(e) + "/Approve/", d, c);
            a.pushGa("Group", "ApproveGroupMembership", b);
            return a.serviceLibrary.post(b, null, function(a) {
                g(a)
            }, h)
        },DenyGroupMembership: function(f, e, g, h, c) {
            var d = "", b = a.buildUrl("/Group/" + encodeURIComponent(f) + "/Members/" + encodeURIComponent(e) + "/Deny/", d, c);
            a.pushGa("Group", "DenyGroupMembership", b);
            return a.serviceLibrary.post(b, null, function(a) {
                g(a)
            }, h)
        },GetJoinedGroupsForCurrentMember: function(f, e, g, h, d) {
            var b = "";
            b = a.addParameter(b, "clanonly", f);
            b = a.addParameter(b, "populatefriends", e);
            var c = a.buildUrl("/Group/MyGroups/", b, d);
            a.pushGa("Group", "GetJoinedGroupsForCurrentMember", c);
            return a.serviceLibrary.get(c, function(a) {
                g(a)
            }, h)
        },GetPendingGroupsForCurrentMember: function(e, f, g, d) {
            var b = "";
            b = a.addParameter(b, "populatefriends", e);
            var c = a.buildUrl("/Group/MyPendingGroups/", b, d);
            a.pushGa("Group", "GetPendingGroupsForCurrentMember", c);
            return a.serviceLibrary.get(c, function(a) {
                f(a)
            }, g)
        },GetJoinedGroupsForMember: function(f, g, e, h, i, d) {
            var b = "";
            b = a.addParameter(b, "clanonly", g);
            b = a.addParameter(b, "populatefriends", e);
            var c = a.buildUrl("/Group/User/" + encodeURIComponent(f) + "/", b, d);
            a.pushGa("Group", "GetJoinedGroupsForMember", c);
            return a.serviceLibrary.get(c, function(a) {
                h(a)
            }, i)
        },GetJoinedGroupsForCurrentMemberV2: function(f, g, e, h, i, d) {
            var b = "";
            b = a.addParameter(b, "clanonly", g);
            b = a.addParameter(b, "populatefriends", e);
            var c = a.buildUrl("/Group/MyGroups/V2/" + encodeURIComponent(f) + "/", b, d);
            a.pushGa("Group", "GetJoinedGroupsForCurrentMemberV2", c);
            return a.serviceLibrary.get(c, function(a) {
                h(a)
            }, i)
        },GetPendingGroupsForCurrentMemberV2: function(f, e, g, h, d) {
            var b = "";
            b = a.addParameter(b, "populatefriends", e);
            var c = a.buildUrl("/Group/MyPendingGroups/V2/" + encodeURIComponent(f) + "/", b, d);
            a.pushGa("Group", "GetPendingGroupsForCurrentMemberV2", c);
            return a.serviceLibrary.get(c, function(a) {
                g(a)
            }, h)
        },GetAllGroupsForCurrentMember: function(f, e, g, h, d) {
            var b = "";
            b = a.addParameter(b, "clanonly", f);
            b = a.addParameter(b, "populatefriends", e);
            var c = a.buildUrl("/Group/MyGroups/All/", b, d);
            a.pushGa("Group", "GetAllGroupsForCurrentMember", c);
            return a.serviceLibrary.get(c, function(a) {
                g(a)
            }, h)
        },GetJoinedGroupsForMemberV2: function(f, g, h, e, i, j, d) {
            var b = "";
            b = a.addParameter(b, "clanonly", h);
            b = a.addParameter(b, "populatefriends", e);
            var c = a.buildUrl("/Group/User/" + encodeURIComponent(f) + "/Joined/" + encodeURIComponent(g) + "/", b, d);
            a.pushGa("Group", "GetJoinedGroupsForMemberV2", c);
            return a.serviceLibrary.get(c, function(a) {
                i(a)
            }, j)
        },GetAllGroupsForMember: function(f, g, e, h, i, d) {
            var b = "";
            b = a.addParameter(b, "clanonly", g);
            b = a.addParameter(b, "populatefriends", e);
            var c = a.buildUrl("/Group/User/" + encodeURIComponent(f) + "/All/", b, d);
            a.pushGa("Group", "GetAllGroupsForMember", c);
            return a.serviceLibrary.get(c, function(a) {
                h(a)
            }, i)
        }}
})(jQuery);
(function() {
    var a = bungieNetPlatform;
    a.ignoreService = {dataStore: [],ignoreData: {getCacheItem: function(b) {
                return a.ignoreService.dataStore[b + ""]
            },setCacheItem: function(b) {
                a.ignoreService.dataStore[b.id + ""] = b
            },getCacheSet: function(b) {
                return a.ignoreService.dataStore["Set_" + b]
            },setCacheSet: function(b) {
                a.ignoreService.dataStore["Set_" + b.id] = b
            }},GetIgnoreStatusForPost: function(f, e, g, c) {
            var d = "", b = a.buildUrl("/Ignore/MyIgnores/Posts/" + encodeURIComponent(f) + "/", d, c);
            a.pushGa("Ignore", "GetIgnoreStatusForPost", b);
            return a.serviceLibrary.get(b, function(a) {
                e(a)
            }, g)
        },GetIgnoreStatusForUser: function(e, f, g, c) {
            var d = "", b = a.buildUrl("/Ignore/MyIgnores/Users/" + encodeURIComponent(e) + "/", d, c);
            a.pushGa("Ignore", "GetIgnoreStatusForUser", b);
            return a.serviceLibrary.get(b, function(a) {
                f(a)
            }, g)
        },GetIgnoresForUser: function(g, e, f, c) {
            var d = "", b = a.buildUrl("/Ignore/MyIgnores/", d, c);
            a.pushGa("Ignore", "GetIgnoresForUser", b);
            return a.serviceLibrary.post(b, g, function(a) {
                e(a)
            }, f)
        },IgnoreItem: function(g, e, f, c) {
            var d = "", b = a.buildUrl("/Ignore/Ignore/", d, c);
            a.pushGa("Ignore", "IgnoreItem", b);
            return a.serviceLibrary.post(b, g, function(a) {
                e(a)
            }, f)
        },UnignoreItem: function(g, e, f, c) {
            var d = "", b = a.buildUrl("/Ignore/Unignore/", d, c);
            a.pushGa("Ignore", "UnignoreItem", b);
            return a.serviceLibrary.post(b, g, function(a) {
                e(a)
            }, f)
        },MyLastReport: function(e, f, c) {
            var d = "", b = a.buildUrl("/Ignore/MyLastReport/", d, c);
            a.pushGa("Ignore", "MyLastReport", b);
            return a.serviceLibrary.get(b, function(a) {
                e(a)
            }, f)
        }}
})(jQuery);
(function() {
    var a = bungieNetPlatform;
    a.gameService = {dataStore: [],gameData: {getCacheItem: function(b) {
                return a.gameService.dataStore[b + ""]
            },setCacheItem: function(b) {
                a.gameService.dataStore[b.id + ""] = b
            },getCacheSet: function(b) {
                return a.gameService.dataStore["Set_" + b]
            },setCacheSet: function(b) {
                a.gameService.dataStore["Set_" + b.id] = b
            }},GetPlayerGamesById: function(e, f, g, c) {
            var d = "", b = a.buildUrl("/Game/GetPlayerGamesById/" + encodeURIComponent(e) + "/", d, c);
            a.pushGa("Game", "GetPlayerGamesById", b);
            return a.serviceLibrary.get(b, function(a) {
                f(a)
            }, g)
        },ReachModelSneakerNet: function(g, e, f, c) {
            var d = "", b = a.buildUrl("/Game/ReachModelSneakerNet/" + encodeURIComponent(g) + "/", d, c);
            a.pushGa("Game", "ReachModelSneakerNet", b);
            return a.serviceLibrary.post(b, null, function(a) {
                e(a)
            }, f)
        }}
})(jQuery);
(function() {
    var a = bungieNetPlatform;
    a.adminService = {dataStore: [],adminData: {getCacheItem: function(b) {
                return a.adminService.dataStore[b + ""]
            },setCacheItem: function(b) {
                a.adminService.dataStore[b.id + ""] = b
            },getCacheSet: function(b) {
                return a.adminService.dataStore["Set_" + b]
            },setCacheSet: function(b) {
                a.adminService.dataStore["Set_" + b.id] = b
            }},GetAssignedReports: function(e, f, c) {
            var d = "", b = a.buildUrl("/Admin/Assigned/", d, c);
            a.pushGa("Admin", "GetAssignedReports", b);
            return a.serviceLibrary.post(b, null, function(a) {
                e(a)
            }, f)
        },ResolveReport: function(g, e, f, c) {
            var d = "", b = a.buildUrl("/Admin/Assigned/Resolve/", d, c);
            a.pushGa("Admin", "ResolveReport", b);
            return a.serviceLibrary.post(b, g, function(a) {
                e(a)
            }, f)
        },OverturnReport: function(g, e, f, c) {
            var d = "", b = a.buildUrl("/Admin/Reports/Overturn/", d, c);
            a.pushGa("Admin", "OverturnReport", b);
            return a.serviceLibrary.post(b, g, function(a) {
                e(a)
            }, f)
        },GetDisciplinedReportsForMember: function(h, e, f, g, c) {
            var d = "", b = a.buildUrl("/Admin/Member/" + encodeURIComponent(e) + "/Reports/", d, c);
            a.pushGa("Admin", "GetDisciplinedReportsForMember", b);
            return a.serviceLibrary.post(b, h, function(a) {
                f(a)
            }, g)
        },GetResolvedReports: function(g, e, f, c) {
            var d = "", b = a.buildUrl("/Admin/Reports/", d, c);
            a.pushGa("Admin", "GetResolvedReports", b);
            return a.serviceLibrary.post(b, g, function(a) {
                e(a)
            }, f)
        },GloballyIgnoreItem: function(g, e, f, c) {
            var d = "", b = a.buildUrl("/Admin/Ignores/GloballyIgnore/", d, c);
            a.pushGa("Admin", "GloballyIgnoreItem", b);
            return a.serviceLibrary.post(b, g, function(a) {
                e(a)
            }, f)
        },OverrideBanOnUser: function(h, e, f, g, c) {
            var d = "", b = a.buildUrl("/Admin/Member/" + encodeURIComponent(e) + "/SetBan/", d, c);
            a.pushGa("Admin", "OverrideBanOnUser", b);
            return a.serviceLibrary.post(b, h, function(a) {
                f(a)
            }, g)
        },OverrideGlobalIgnore: function(g, e, f, c) {
            var d = "", b = a.buildUrl("/Admin/Ignores/OverrideGlobalIgnore/", d, c);
            a.pushGa("Admin", "OverrideGlobalIgnore", b);
            return a.serviceLibrary.post(b, g, function(a) {
                e(a)
            }, f)
        },AdminUserSearch: function(g, e, f, d) {
            var b = "";
            b = a.addParameter(b, "q", g);
            var c = a.buildUrl("/Admin/Member/Search/", b, d);
            a.pushGa("Admin", "AdminUserSearch", c);
            return a.serviceLibrary.get(c, function(a) {
                e(a)
            }, f)
        },GetUserBanState: function(e, f, g, c) {
            var d = "", b = a.buildUrl("/Admin/Member/" + encodeURIComponent(e) + "/GetBanState/", d, c);
            a.pushGa("Admin", "GetUserBanState", b);
            return a.serviceLibrary.get(b, function(a) {
                f(a)
            }, g)
        },GetUserWebClientIpHistory: function(e, f, g, c) {
            var d = "", b = a.buildUrl("/Admin/Member/" + encodeURIComponent(e) + "/GetWebClientIpHistory/", d, c);
            a.pushGa("Admin", "GetUserWebClientIpHistory", b);
            return a.serviceLibrary.get(b, function(a) {
                f(a)
            }, g)
        }}
})(jQuery);
(function() {
    var a = bungieNetPlatform;
    a.tokensService = {dataStore: [],tokensData: {getCacheItem: function(b) {
                return a.tokensService.dataStore[b + ""]
            },setCacheItem: function(b) {
                a.tokensService.dataStore[b.id + ""] = b
            },getCacheSet: function(b) {
                return a.tokensService.dataStore["Set_" + b]
            },setCacheSet: function(b) {
                a.tokensService.dataStore["Set_" + b.id] = b
            }},ClaimAndApplyOnToken: function(h, e, f, g, c) {
            var d = "", b = a.buildUrl("/Tokens/ClaimAndApplyToken/" + encodeURIComponent(e) + "/", d, c);
            a.pushGa("Tokens", "ClaimAndApplyOnToken", b);
            return a.serviceLibrary.post(b, h, function(a) {
                f(a)
            }, g)
        },GetCurrentUserOfferHistory: function(e, f, c) {
            var d = "", b = a.buildUrl("/Tokens/OfferHistory/", d, c);
            a.pushGa("Tokens", "GetCurrentUserOfferHistory", b);
            return a.serviceLibrary.get(b, function(a) {
                e(a)
            }, f)
        },GetCurrentUserThrottleState: function(e, f, c) {
            var d = "", b = a.buildUrl("/Tokens/ThrottleState/", d, c);
            a.pushGa("Tokens", "GetCurrentUserThrottleState", b);
            return a.serviceLibrary.get(b, function(a) {
                e(a)
            }, f)
        },ApplyOfferToCurrentDestinyMembership: function(e, h, f, g, c) {
            var d = "", b = a.buildUrl("/Tokens/ApplyOfferToCurrentDestinyMembership/" + encodeURIComponent(e) + "/" + encodeURIComponent(h) + "/", d, c);
            a.pushGa("Tokens", "ApplyOfferToCurrentDestinyMembership", b);
            return a.serviceLibrary.post(b, null, function(a) {
                f(a)
            }, g)
        },VerifyAge: function(e, f, c) {
            var d = "", b = a.buildUrl("/Tokens/VerifyAge/", d, c);
            a.pushGa("Tokens", "VerifyAge", b);
            return a.serviceLibrary.post(b, null, function(a) {
                e(a)
            }, f)
        },ClaimToken: function(g, e, f, c) {
            var d = "", b = a.buildUrl("/Tokens/Claim/", d, c);
            a.pushGa("Tokens", "ClaimToken", b);
            return a.serviceLibrary.post(b, g, function(a) {
                e(a)
            }, f)
        },ConsumeMarketplacePlatformCodeOffer: function(f, e, g, h, i, c) {
            var d = "", b = a.buildUrl("/Tokens/ConsumeMarketplacePlatformCodeOffer/" + encodeURIComponent(f) + "/" + encodeURIComponent(e) + "/" + encodeURIComponent(g) + "/", d, c);
            a.pushGa("Tokens", "ConsumeMarketplacePlatformCodeOffer", b);
            return a.serviceLibrary.post(b, null, function(a) {
                h(a)
            }, i)
        },MarketplacePlatformCodeOfferHistory: function(e, f, c) {
            var d = "", b = a.buildUrl("/Tokens/MarketplacePlatformCodeOfferHistory/", d, c);
            a.pushGa("Tokens", "MarketplacePlatformCodeOfferHistory", b);
            return a.serviceLibrary.get(b, function(a) {
                e(a)
            }, f)
        }}
})(jQuery);
(function(b) {
    var a = bungieNetPlatform;
    a.destinyService = {dataStore: [],destinyData: {getCacheItem: function(b) {
                return a.destinyService.dataStore[b + ""]
            },setCacheItem: function(b) {
                a.destinyService.dataStore[b.id + ""] = b
            },getCacheSet: function(b) {
                return a.destinyService.dataStore["Set_" + b]
            },setCacheSet: function(b) {
                a.destinyService.dataStore["Set_" + b.id] = b
            }},GetDestinyManifest: function(e, h, f) {
            var g = "", d = a.buildUrl("/Destiny/Manifest/", g, f), c = a.destinyService.destinyData.getCacheItem(d);
            if (c)
                return b.Deferred(function(a) {
                    e(c);
                    a.resolve(c)
                }).promise();
            a.pushGa("Destiny", "GetDestinyManifest", d);
            return a.serviceLibrary.get(d, function(b) {
                a.destinyService.destinyData.setCacheItem(b);
                e(b)
            }, h)
        },GetDestinySingleDefinition: function(j, k, h, f, i, g) {
            var c = "";
            c = a.addParameter(c, "definitions", h);
            var e = a.buildUrl("/Destiny/Manifest/" + encodeURIComponent(j) + "/" + encodeURIComponent(k) + "/", c, g), d = a.destinyService.destinyData.getCacheItem(e);
            if (d)
                return b.Deferred(function(a) {
                    f(d);
                    a.resolve(d)
                }).promise();
            a.pushGa("Destiny", "GetDestinySingleDefinition", e);
            return a.serviceLibrary.get(e, function(b) {
                a.destinyService.destinyData.setCacheItem(b);
                f(b)
            }, i)
        },SearchDestinyPlayer: function(e, f, g, h, c) {
            var d = "", b = a.buildUrl("/Destiny/SearchDestinyPlayer/" + encodeURIComponent(e) + "/" + encodeURIComponent(f) + "/", d, c);
            a.pushGa("Destiny", "SearchDestinyPlayer", b);
            return a.serviceLibrary.get(b, function(a) {
                g(a)
            }, h)
        },GetAccount: function(f, d, g, h, i, e) {
            var b = "";
            b = a.addParameter(b, "definitions", g);
            var c = a.buildUrl("/Destiny/" + encodeURIComponent(f) + "/Account/" + encodeURIComponent(d) + "/", b, e);
            a.pushGa("Destiny", "GetAccount", c);
            return a.serviceLibrary.get(c, function(a) {
                h(a)
            }, i)
        },GetVault: function(e, f, g, h, i, d) {
            var b = "";
            b = a.addParameter(b, "definitions", f);
            b = a.addParameter(b, "accountId", g);
            var c = a.buildUrl("/Destiny/" + encodeURIComponent(e) + "/MyAccount/Vault/", b, d);
            a.pushGa("Destiny", "GetVault", c);
            return a.serviceLibrary.get(c, function(a) {
                h(a)
            }, i)
        },GetCharacterSummary: function(f, d, h, g, i, j, e) {
            var b = "";
            b = a.addParameter(b, "definitions", g);
            var c = a.buildUrl("/Destiny/" + encodeURIComponent(f) + "/Account/" + encodeURIComponent(d) + "/Character/" + encodeURIComponent(h) + "/", b, e);
            a.pushGa("Destiny", "GetCharacterSummary", c);
            return a.serviceLibrary.get(c, function(a) {
                i(a)
            }, j)
        },GetCharacter: function(f, d, h, g, i, j, e) {
            var b = "";
            b = a.addParameter(b, "definitions", g);
            var c = a.buildUrl("/Destiny/" + encodeURIComponent(f) + "/Account/" + encodeURIComponent(d) + "/Character/" + encodeURIComponent(h) + "/Complete/", b, e);
            a.pushGa("Destiny", "GetCharacter", c);
            return a.serviceLibrary.get(c, function(a) {
                i(a)
            }, j)
        },GetCharacterInventory: function(f, d, h, g, i, j, e) {
            var b = "";
            b = a.addParameter(b, "definitions", g);
            var c = a.buildUrl("/Destiny/" + encodeURIComponent(f) + "/Account/" + encodeURIComponent(d) + "/Character/" + encodeURIComponent(h) + "/Inventory/", b, e);
            a.pushGa("Destiny", "GetCharacterInventory", c);
            return a.serviceLibrary.get(c, function(a) {
                i(a)
            }, j)
        },GetItemDetail: function(g, d, i, f, h, j, k, e) {
            var b = "";
            b = a.addParameter(b, "definitions", h);
            var c = a.buildUrl("/Destiny/" + encodeURIComponent(g) + "/Account/" + encodeURIComponent(d) + "/Character/" + encodeURIComponent(i) + "/Inventory/" + encodeURIComponent(f) + "/", b, e);
            a.pushGa("Destiny", "GetItemDetail", c);
            return a.serviceLibrary.get(c, function(a) {
                j(a)
            }, k)
        },GetCharacterActivities: function(f, d, h, g, i, j, e) {
            var b = "";
            b = a.addParameter(b, "definitions", g);
            var c = a.buildUrl("/Destiny/" + encodeURIComponent(f) + "/Account/" + encodeURIComponent(d) + "/Character/" + encodeURIComponent(h) + "/Activities/", b, e);
            a.pushGa("Destiny", "GetCharacterActivities", c);
            return a.serviceLibrary.get(c, function(a) {
                i(a)
            }, j)
        },GetCharacterProgression: function(f, d, h, g, i, j, e) {
            var b = "";
            b = a.addParameter(b, "definitions", g);
            var c = a.buildUrl("/Destiny/" + encodeURIComponent(f) + "/Account/" + encodeURIComponent(d) + "/Character/" + encodeURIComponent(h) + "/Progression/", b, e);
            a.pushGa("Destiny", "GetCharacterProgression", c);
            return a.serviceLibrary.get(c, function(a) {
                i(a)
            }, j)
        },GetAllVendorsForCurrentCharacter: function(e, g, f, h, i, d) {
            var b = "";
            b = a.addParameter(b, "definitions", f);
            var c = a.buildUrl("/Destiny/" + encodeURIComponent(e) + "/MyAccount/Character/" + encodeURIComponent(g) + "/Vendors/", b, d);
            a.pushGa("Destiny", "GetAllVendorsForCurrentCharacter", c);
            return a.serviceLibrary.get(c, function(a) {
                h(a)
            }, i)
        },GetVendorSummariesForCurrentCharacter: function(e, g, f, h, i, d) {
            var b = "";
            b = a.addParameter(b, "definitions", f);
            var c = a.buildUrl("/Destiny/" + encodeURIComponent(e) + "/MyAccount/Character/" + encodeURIComponent(g) + "/Vendors/Summaries/", b, d);
            a.pushGa("Destiny", "GetVendorSummariesForCurrentCharacter", c);
            return a.serviceLibrary.get(c, function(a) {
                h(a)
            }, i)
        },GetVendorForCurrentCharacter: function(e, g, h, f, i, j, d) {
            var b = "";
            b = a.addParameter(b, "definitions", f);
            var c = a.buildUrl("/Destiny/" + encodeURIComponent(e) + "/MyAccount/Character/" + encodeURIComponent(g) + "/Vendor/" + encodeURIComponent(h) + "/", b, d);
            a.pushGa("Destiny", "GetVendorForCurrentCharacter", c);
            return a.serviceLibrary.get(c, function(a) {
                i(a)
            }, j)
        },GetVendorItemDetailForCurrentCharacter: function(f, h, i, e, g, j, k, d) {
            var b = "";
            b = a.addParameter(b, "definitions", g);
            var c = a.buildUrl("/Destiny/" + encodeURIComponent(f) + "/MyAccount/Character/" + encodeURIComponent(h) + "/Vendor/" + encodeURIComponent(i) + "/Item/" + encodeURIComponent(e) + "/", b, d);
            a.pushGa("Destiny", "GetVendorItemDetailForCurrentCharacter", c);
            return a.serviceLibrary.get(c, function(a) {
                j(a)
            }, k)
        },GetPublicAdvisors: function(h, f, i, g) {
            var c = "";
            c = a.addParameter(c, "definitions", h);
            var e = a.buildUrl("/Destiny/Advisors/", c, g), d = a.destinyService.destinyData.getCacheItem(e);
            if (d)
                return b.Deferred(function(a) {
                    f(d);
                    a.resolve(d)
                }).promise();
            a.pushGa("Destiny", "GetPublicAdvisors", e);
            return a.serviceLibrary.get(e, function(b) {
                a.destinyService.destinyData.setCacheItem(b);
                f(b)
            }, i)
        },GetPublicXurVendor: function(h, f, i, g) {
            var c = "";
            c = a.addParameter(c, "definitions", h);
            var e = a.buildUrl("/Destiny/Advisors/Xur/", c, g), d = a.destinyService.destinyData.getCacheItem(e);
            if (d)
                return b.Deferred(function(a) {
                    f(d);
                    a.resolve(d)
                }).promise();
            a.pushGa("Destiny", "GetPublicXurVendor", e);
            return a.serviceLibrary.get(e, function(b) {
                a.destinyService.destinyData.setCacheItem(b);
                f(b)
            }, i)
        },GetAdvisorsForCurrentCharacter: function(e, g, f, h, i, d) {
            var b = "";
            b = a.addParameter(b, "definitions", f);
            var c = a.buildUrl("/Destiny/" + encodeURIComponent(e) + "/MyAccount/Character/" + encodeURIComponent(g) + "/Advisors/", b, d);
            a.pushGa("Destiny", "GetAdvisorsForCurrentCharacter", c);
            return a.serviceLibrary.get(c, function(a) {
                h(a)
            }, i)
        },GetSpecialEventAdvisors: function(h, f, i, g) {
            var c = "";
            c = a.addParameter(c, "definitions", h);
            var e = a.buildUrl("/Destiny/Events/", c, g), d = a.destinyService.destinyData.getCacheItem(e);
            if (d)
                return b.Deferred(function(a) {
                    f(d);
                    a.resolve(d)
                }).promise();
            a.pushGa("Destiny", "GetSpecialEventAdvisors", e);
            return a.serviceLibrary.get(e, function(b) {
                a.destinyService.destinyData.setCacheItem(b);
                f(b)
            }, i)
        },GetDestinyLiveTileContentItems: function(e, h, f) {
            var g = "", d = a.buildUrl("/Destiny/LiveTiles/", g, f), c = a.destinyService.destinyData.getCacheItem(d);
            if (c)
                return b.Deferred(function(a) {
                    e(c);
                    a.resolve(c)
                }).promise();
            a.pushGa("Destiny", "GetDestinyLiveTileContentItems", d);
            return a.serviceLibrary.get(d, function(b) {
                a.destinyService.destinyData.setCacheItem(b);
                e(b)
            }, h)
        },TransferItem: function(g, e, f, c) {
            var d = "", b = a.buildUrl("/Destiny/TransferItem/", d, c);
            a.pushGa("Destiny", "TransferItem", b);
            return a.serviceLibrary.post(b, g, function(a) {
                e(a)
            }, f)
        },EquipItem: function(g, e, f, c) {
            var d = "", b = a.buildUrl("/Destiny/EquipItem/", d, c);
            a.pushGa("Destiny", "EquipItem", b);
            return a.serviceLibrary.post(b, g, function(a) {
                e(a)
            }, f)
        },EquipItems: function(g, e, f, c) {
            var d = "", b = a.buildUrl("/Destiny/EquipItems/", d, c);
            a.pushGa("Destiny", "EquipItems", b);
            return a.serviceLibrary.post(b, g, function(a) {
                e(a)
            }, f)
        },SetItemLockState: function(g, e, f, c) {
            var d = "", b = a.buildUrl("/Destiny/SetLockState/", d, c);
            a.pushGa("Destiny", "SetItemLockState", b);
            return a.serviceLibrary.post(b, g, function(a) {
                e(a)
            }, f)
        },GetHistoricalStatsDefinition: function(e, h, f) {
            var g = "", d = a.buildUrl("/Destiny/Stats/Definition/", g, f), c = a.destinyService.destinyData.getCacheItem(d);
            if (c)
                return b.Deferred(function(a) {
                    e(c);
                    a.resolve(c)
                }).promise();
            a.pushGa("Destiny", "GetHistoricalStatsDefinition", d);
            return a.serviceLibrary.get(d, function(b) {
                a.destinyService.destinyData.setCacheItem(b);
                e(b)
            }, h)
        },GetHistoricalStats: function(f, d, g, i, o, m, h, k, j, l, n, p, e) {
            var b = "";
            b = a.addParameter(b, "periodType", i);
            b = a.addParameter(b, "modes", o);
            b = a.addParameter(b, "groups", m);
            b = a.addParameter(b, "monthstart", h);
            b = a.addParameter(b, "monthend", k);
            b = a.addParameter(b, "daystart", j);
            b = a.addParameter(b, "dayend", l);
            var c = a.buildUrl("/Destiny/Stats/" + encodeURIComponent(f) + "/" + encodeURIComponent(d) + "/" + encodeURIComponent(g) + "/", b, e);
            a.pushGa("Destiny", "GetHistoricalStats", c);
            return a.serviceLibrary.get(c, function(a) {
                n(a)
            }, p)
        },GetHistoricalStatsForAccount: function(f, d, g, h, i, e) {
            var b = "";
            b = a.addParameter(b, "groups", g);
            var c = a.buildUrl("/Destiny/Stats/Account/" + encodeURIComponent(f) + "/" + encodeURIComponent(d) + "/", b, e);
            a.pushGa("Destiny", "GetHistoricalStatsForAccount", c);
            return a.serviceLibrary.get(c, function(a) {
                h(a)
            }, i)
        },GetActivityHistory: function(f, d, h, l, j, m, g, i, k, e) {
            var b = "";
            b = a.addParameter(b, "mode", l);
            b = a.addParameter(b, "count", j);
            b = a.addParameter(b, "page", m);
            b = a.addParameter(b, "definitions", g);
            var c = a.buildUrl("/Destiny/Stats/ActivityHistory/" + encodeURIComponent(f) + "/" + encodeURIComponent(d) + "/" + encodeURIComponent(h) + "/", b, e);
            a.pushGa("Destiny", "GetActivityHistory", c);
            return a.serviceLibrary.get(c, function(a) {
                i(a)
            }, k)
        },GetUniqueWeaponHistory: function(f, d, h, g, i, j, e) {
            var b = "";
            b = a.addParameter(b, "definitions", g);
            var c = a.buildUrl("/Destiny/Stats/UniqueWeapons/" + encodeURIComponent(f) + "/" + encodeURIComponent(d) + "/" + encodeURIComponent(h) + "/", b, e);
            a.pushGa("Destiny", "GetUniqueWeaponHistory", c);
            return a.serviceLibrary.get(c, function(a) {
                i(a)
            }, j)
        },GetLeaderboards: function(f, d, h, g, i, e) {
            var b = "";
            b = a.addParameter(b, "modes", h);
            var c = a.buildUrl("/Destiny/Stats/Leaderboards/" + encodeURIComponent(f) + "/" + encodeURIComponent(d) + "/", b, e);
            a.pushGa("Destiny", "GetLeaderboards", c);
            return a.serviceLibrary.get(c, function(a) {
                g(a)
            }, i)
        },GetLeaderboardsForPsn: function(f, h, e, g, d) {
            var b = "";
            b = a.addParameter(b, "modes", f);
            b = a.addParameter(b, "code", h);
            var c = a.buildUrl("/Destiny/Stats/LeaderboardsForPsn/", b, d);
            a.pushGa("Destiny", "GetLeaderboardsForPsn", c);
            return a.serviceLibrary.get(c, function(a) {
                e(a)
            }, g)
        },GetLeaderboardsForCharacter: function(f, d, g, i, h, j, e) {
            var b = "";
            b = a.addParameter(b, "modes", i);
            var c = a.buildUrl("/Destiny/Stats/Leaderboards/" + encodeURIComponent(f) + "/" + encodeURIComponent(d) + "/" + encodeURIComponent(g) + "/", b, e);
            a.pushGa("Destiny", "GetLeaderboardsForCharacter", c);
            return a.serviceLibrary.get(c, function(a) {
                h(a)
            }, j)
        },GetPostGameCarnageReport: function(f, e, g, h, d) {
            var b = "";
            b = a.addParameter(b, "definitions", e);
            var c = a.buildUrl("/Destiny/Stats/PostGameCarnageReport/" + encodeURIComponent(f) + "/", b, d);
            a.pushGa("Destiny", "GetPostGameCarnageReport", c);
            return a.serviceLibrary.get(c, function(a) {
                g(a)
            }, h)
        },GetActivityBlob: function(e, f, g, c) {
            var d = "", b = a.buildUrl("/Destiny/Stats/ActivityBlob/" + encodeURIComponent(e) + "/", d, c);
            a.pushGa("Destiny", "GetActivityBlob", b);
            return a.serviceLibrary.get(b, function(a) {
                f(a)
            }, g)
        },GetDestinyAggregateActivityStats: function(f, d, h, g, i, j, e) {
            var b = "";
            b = a.addParameter(b, "definitions", g);
            var c = a.buildUrl("/Destiny/Stats/AggregateActivityStats/" + encodeURIComponent(f) + "/" + encodeURIComponent(d) + "/" + encodeURIComponent(h) + "/", b, e);
            a.pushGa("Destiny", "GetDestinyAggregateActivityStats", c);
            return a.serviceLibrary.get(c, function(a) {
                i(a)
            }, j)
        },GetMembershipIdByDisplayName: function(e, f, g, h, i, d) {
            var b = "";
            b = a.addParameter(b, "ignorecase", g);
            var c = a.buildUrl("/Destiny/" + encodeURIComponent(e) + "/Stats/GetMembershipIdByDisplayName/" + encodeURIComponent(f) + "/", b, d);
            a.pushGa("Destiny", "GetMembershipIdByDisplayName", c);
            return a.serviceLibrary.get(c, function(a) {
                h(a)
            }, i)
        },GetExcellenceBadges: function(f, d, g, h, i, e) {
            var b = "";
            b = a.addParameter(b, "definitions", g);
            var c = a.buildUrl("/Destiny/Stats/GetExcellenceBadges/" + encodeURIComponent(f) + "/" + encodeURIComponent(d) + "/", b, e);
            a.pushGa("Destiny", "GetExcellenceBadges", c);
            return a.serviceLibrary.get(c, function(a) {
                h(a)
            }, i)
        },GetMyGrimoire: function(e, f, g, h, i, j, d) {
            var b = "";
            b = a.addParameter(b, "definitions", f);
            b = a.addParameter(b, "flavour", g);
            b = a.addParameter(b, "single", h);
            var c = a.buildUrl("/Destiny/Vanguard/Grimoire/" + encodeURIComponent(e) + "/", b, d);
            a.pushGa("Destiny", "GetMyGrimoire", c);
            return a.serviceLibrary.get(c, function(a) {
                i(a)
            }, j)
        },GetGrimoireByMembership: function(e, f, g, h, i, j, k, d) {
            var b = "";
            b = a.addParameter(b, "definitions", g);
            b = a.addParameter(b, "flavour", h);
            b = a.addParameter(b, "single", i);
            var c = a.buildUrl("/Destiny/Vanguard/Grimoire/" + encodeURIComponent(e) + "/" + encodeURIComponent(f) + "/", b, d);
            a.pushGa("Destiny", "GetGrimoireByMembership", c);
            return a.serviceLibrary.get(c, function(a) {
                j(a)
            }, k)
        },GetGrimoireDefinition: function(e, h, f) {
            var g = "", d = a.buildUrl("/Destiny/Vanguard/Grimoire/Definition/", g, f), c = a.destinyService.destinyData.getCacheItem(d);
            if (c)
                return b.Deferred(function(a) {
                    e(c);
                    a.resolve(c)
                }).promise();
            a.pushGa("Destiny", "GetGrimoireDefinition", d);
            return a.serviceLibrary.get(d, function(b) {
                a.destinyService.destinyData.setCacheItem(b);
                e(b)
            }, h)
        },GetDestinyExplorerItems: function(C, x, l, z, v, B, y, o, s, w, u, k, D, i, n, h, m, p, j, q, t, r, f, A, g) {
            var c = "";
            c = a.addParameter(c, "page", C);
            c = a.addParameter(c, "count", x);
            c = a.addParameter(c, "characterClass", l);
            c = a.addParameter(c, "types", z);
            c = a.addParameter(c, "subtype", v);
            c = a.addParameter(c, "name", B);
            c = a.addParameter(c, "order", y);
            c = a.addParameter(c, "orderstathash", o);
            c = a.addParameter(c, "direction", s);
            c = a.addParameter(c, "rarity", w);
            c = a.addParameter(c, "buckets", u);
            c = a.addParameter(c, "bucketsortypes", k);
            c = a.addParameter(c, "step", D);
            c = a.addParameter(c, "weaponPerformance", i);
            c = a.addParameter(c, "impactEffects", n);
            c = a.addParameter(c, "guardianAttributes", h);
            c = a.addParameter(c, "lightAbilities", m);
            c = a.addParameter(c, "damageTypes", p);
            c = a.addParameter(c, "matchrandomsteps", j);
            c = a.addParameter(c, "definitions", q);
            c = a.addParameter(c, "sourcecat", t);
            c = a.addParameter(c, "sourcehash", r);
            var e = a.buildUrl("/Destiny/Explorer/Items/", c, g), d = a.destinyService.destinyData.getCacheItem(e);
            if (d)
                return b.Deferred(function(a) {
                    f(d);
                    a.resolve(d)
                }).promise();
            a.pushGa("Destiny", "GetDestinyExplorerItems", e);
            return a.serviceLibrary.get(e, function(b) {
                a.destinyService.destinyData.setCacheItem(b);
                f(b)
            }, A)
        },GetDestinyExplorerTalentNodeSteps: function(r, o, q, n, i, k, h, j, l, m, f, p, g) {
            var c = "";
            c = a.addParameter(c, "page", r);
            c = a.addParameter(c, "count", o);
            c = a.addParameter(c, "name", q);
            c = a.addParameter(c, "direction", n);
            c = a.addParameter(c, "weaponPerformance", i);
            c = a.addParameter(c, "impactEffects", k);
            c = a.addParameter(c, "guardianAttributes", h);
            c = a.addParameter(c, "lightAbilities", j);
            c = a.addParameter(c, "damageTypes", l);
            c = a.addParameter(c, "definitions", m);
            var e = a.buildUrl("/Destiny/Explorer/TalentNodeSteps/", c, g), d = a.destinyService.destinyData.getCacheItem(e);
            if (d)
                return b.Deferred(function(a) {
                    f(d);
                    a.resolve(d)
                }).promise();
            a.pushGa("Destiny", "GetDestinyExplorerTalentNodeSteps", e);
            return a.serviceLibrary.get(e, function(b) {
                a.destinyService.destinyData.setCacheItem(b);
                f(b)
            }, p)
        }}
})(jQuery);
(function(b) {
    var a = bungieNetPlatform;
    a.coreService = {dataStore: [],coreData: {getCacheItem: function(b) {
                return a.coreService.dataStore[b + ""]
            },setCacheItem: function(b) {
                a.coreService.dataStore[b.id + ""] = b
            },getCacheSet: function(b) {
                return a.coreService.dataStore["Set_" + b]
            },setCacheSet: function(b) {
                a.coreService.dataStore["Set_" + b.id] = b
            }},HelloWorld: function(e, f, c) {
            var d = "", b = a.buildUrl("//HelloWorld/", d, c);
            a.pushGa("", "HelloWorld", b);
            return a.serviceLibrary.get(b, function(a) {
                e(a)
            }, f)
        },GetAvailableLocales: function(e, h, f) {
            var g = "", d = a.buildUrl("//GetAvailableLocales/", g, f), c = a.coreService.coreData.getCacheItem(d);
            if (c)
                return b.Deferred(function(a) {
                    e(c);
                    a.resolve(c)
                }).promise();
            a.pushGa("", "GetAvailableLocales", d);
            return a.serviceLibrary.get(d, function(b) {
                a.coreService.coreData.setCacheItem(b);
                e(b)
            }, h)
        },GetCommonSettings: function(e, h, f) {
            var g = "", d = a.buildUrl("//Settings/", g, f), c = a.coreService.coreData.getCacheItem(d);
            if (c)
                return b.Deferred(function(a) {
                    e(c);
                    a.resolve(c)
                }).promise();
            a.pushGa("", "GetCommonSettings", d);
            return a.serviceLibrary.get(d, function(b) {
                a.coreService.coreData.setCacheItem(b);
                e(b)
            }, h)
        },GetSystemStatus: function(h, e, i, f) {
            var g = "", d = a.buildUrl("//Status/" + encodeURIComponent(h) + "/", g, f), c = a.coreService.coreData.getCacheItem(d);
            if (c)
                return b.Deferred(function(a) {
                    e(c);
                    a.resolve(c)
                }).promise();
            a.pushGa("", "GetSystemStatus", d);
            return a.serviceLibrary.get(d, function(b) {
                a.coreService.coreData.setCacheItem(b);
                e(b)
            }, i)
        },GetGlobalAlerts: function(e, h, f) {
            var g = "", d = a.buildUrl("//GlobalAlerts/", g, f), c = a.coreService.coreData.getCacheItem(d);
            if (c)
                return b.Deferred(function(a) {
                    e(c);
                    a.resolve(c)
                }).promise();
            a.pushGa("", "GetGlobalAlerts", d);
            return a.serviceLibrary.get(d, function(b) {
                a.coreService.coreData.setCacheItem(b);
                e(b)
            }, h)
        }}
})(jQuery);
var CreateBungieProfileRequest = function(h, d, g, e, b, c, a, f) {
    this.displayName = d;
    this.email = g;
    this.emailUsage = e;
    this.credentialPublic = b;
    this.termsAccepted = c;
    this.authProviderType = a;
    this.locale = f
}, UserEditRequest = function(s, i, l, n, e, p, r, m, g, k, j, q, a, d, c, b, f, o, h) {
    this.membershipId = i;
    this.displayName = l;
    this.uniqueName = n;
    this.profilePicture = e;
    this.userTitle = p;
    this.about = r;
    this.emailUsage = m;
    this.emailAddress = g;
    this.showActivity = k;
    this.profileTheme = j;
    this.locale = q;
    this.localeInheritDefault = a;
    this.showGroupMessaging = d;
    this.showGamertagPublic = c;
    this.showFacebookPublic = b;
    this.showPsnPublic = f;
    this.adultMode = o;
    this.isThemeLight = h
}, NotificationUpdateRequest = function(b, a) {
    this.settings = a
}, MobileAppPairing = function(l, h, i, b, j, a, f, g, d, c, k, e) {
    this.ApnLocale = h;
    this.ApnToken = i;
    this.AppInstallationId = b;
    this.AppType = j;
    this.C2dmRegistrationId = a;
    this.DeviceName = f;
    this.DeviceType = g;
    this.MembershipId = d;
    this.MembershipType = c;
    this.PairId = k;
    this.PairingDate = e
}, LinkOverrideInput = function(d, c, b, a) {
    this.crType = c;
    this.Credential = b;
    this.DisplayName = a
}, SaveMessageForConversationRequest = function(d, a, b, c) {
    this.conversationId = a;
    this.subject = b;
    this.body = c
}, CreateConversationRequest = function(d, a, b, c) {
    this.membersToId = a;
    this.subject = b;
    this.body = c
}, EntityList = function(b, a) {
    this.entityIds = a
}, LegacySaveMessageRequestV2 = function(f, c, a, d, e, b) {
    this.membersToId = c;
    this.conversationId = a;
    this.subject = d;
    this.body = e;
    this.invitationId = b
}, ContentQueryPublic = function(j, a, i, g, h, b, d, f, c, e) {
    this.contentTypes = a;
    this.tag = i;
    this.notTag = g;
    this.sortBy = h;
    this.creationDate = b;
    this.modifiedDate = d;
    this.locSettings = f;
    this.itemsPerPage = c;
    this.currentPage = e
}, CreatePostRequest = function(n, f, c, l, m, j, g, h, k, d, e, i, b, a) {
    this.parentPostId = f;
    this.subTopicOverride = c;
    this.subject = l;
    this.body = m;
    this.tagInput = j;
    this.tagCategory = g;
    this.category = h;
    this.groupId = k;
    this.isGroupPrivate = d;
    this.urlLinkOrImage = e;
    this.metadata = i;
    this.playerSupportFlags = b;
    this.playerSupportMetadata = a
}, CreateContentCommentRequest = function(o, h, f, c, m, n, k, g, i, l, d, e, j, b, a) {
    this.contentId = h;
    this.parentPostId = f;
    this.subTopicOverride = c;
    this.subject = m;
    this.body = n;
    this.tagInput = k;
    this.tagCategory = g;
    this.category = i;
    this.groupId = l;
    this.isGroupPrivate = d;
    this.urlLinkOrImage = e;
    this.metadata = j;
    this.playerSupportFlags = b;
    this.playerSupportMetadata = a
}, EditPostRequest = function(l, j, k, i, f, d, h, g, e, b, c, a) {
    this.subject = j;
    this.body = k;
    this.tagInput = i;
    this.tagCategory = f;
    this.urlLinkOrImage = d;
    this.metadata = h;
    this.category = g;
    this.disableBits = e;
    this.isGroupPostPrivate = b;
    this.playerSupportFlags = c;
    this.playerSupportMetadata = a
}, ModerationRequest = function(f, c, b, d, e, a) {
    this.moderatedItemId = c;
    this.moderatedItemType = b;
    this.comments = d;
    this.reason = e;
    this.requestedPunishment = a
}, MessageContent = function(c, b, a) {
    this.title = b;
    this.message = a
}, MultiMessageContent = function(c, a, b) {
    this.messageContent = a;
    this.targetIds = b
}, GroupQuery = function(l, i, d, k, c, a, b, f, j, h, e, g) {
    this.contents = i;
    this.creationDate = d;
    this.sortBy = k;
    this.membershipType = c;
    this.groupRelatableSearchType = a;
    this.groupMemberCountFilter = b;
    this.localeFilter = f;
    this.tagText = j;
    this.tagTextList = h;
    this.itemsPerPage = e;
    this.currentPage = g
}, TextParameter = function(c, a, b) {
    this.searchValue = a;
    this.searchType = b
}, GroupCreateAction = function(t, c, r, o, p, q, e, s, m, f, a, d, j, k, b, h, i, n, l, g) {
    this.clanMembershipTypes = c;
    this.name = r;
    this.about = o;
    this.motto = p;
    this.theme = q;
    this.avatarImageIndex = e;
    this.tags = s;
    this.isPublic = m;
    this.membershipOption = f;
    this.isPublicTopicAdminOnly = a;
    this.isDefaultPostPublic = d;
    this.attributes = j;
    this.allowChat = k;
    this.isDefaultPostAlliance = b;
    this.chatSecurity = h;
    this.clanCallsign = i;
    this.locale = n;
    this.homepage = l;
    this.clanReviewType = g
}, GroupAttribute = function(d, a, c, b) {
    this.attributeId = a;
    this.minValue = c;
    this.maxValue = b
}, GroupCreateMinimal = function(c, b, a) {
    this.groupName = b;
    this.groupAbout = a
}, GroupEditActionV2 = function(t, m, r, o, p, q, c, s, l, e, b, i, j, g, h, d, n, k, f, a) {
    this.groupId = m;
    this.name = r;
    this.about = o;
    this.motto = p;
    this.theme = q;
    this.avatarImageIndex = c;
    this.tags = s;
    this.isPublic = l;
    this.membershipOption = e;
    this.isPublicTopicAdminOnly = b;
    this.attributes = i;
    this.allowChat = j;
    this.chatSecurity = g;
    this.clanCallsign = h;
    this.defaultPublicity = d;
    this.locale = n;
    this.homepage = k;
    this.clanReviewType = f;
    this.enableInvitationMessagingForAdmins = a
}, GroupApplicationRequest = function(b, a) {
    this.message = a
}, GroupApplicationListRequest = function(c, a, b) {
    this.membershipIds = a;
    this.message = b
}, GroupBanRequest = function(c, a, b) {
    this.comment = a;
    this.length = b
}, GroupEditAction = function(t, m, r, o, p, q, d, s, l, e, a, c, i, j, b, g, h, n, k, f) {
    this.groupId = m;
    this.name = r;
    this.about = o;
    this.motto = p;
    this.theme = q;
    this.avatarImageIndex = d;
    this.tags = s;
    this.isPublic = l;
    this.membershipOption = e;
    this.isPublicTopicAdminOnly = a;
    this.isDefaultPostPublic = c;
    this.attributes = i;
    this.allowChat = j;
    this.isDefaultPostAlliance = b;
    this.chatSecurity = g;
    this.clanCallsign = h;
    this.locale = n;
    this.homepage = k;
    this.clanReviewType = f
}, IgnoreQuery = function(d, c, a, b) {
    this.itemType = c;
    this.itemsPerPage = a;
    this.currentPage = b
}, IgnoreItemRequest = function(h, d, b, f, g, e, c, a) {
    this.ignoredItemId = d;
    this.ignoredItemType = b;
    this.comment = f;
    this.reason = g;
    this.itemContextId = e;
    this.itemContextType = c;
    this.ModeratorRequest = a
}, UnignoreItemRequest = function(c, b, a) {
    this.ignoredItemId = b;
    this.ignoredItemType = a
}, ReportResolution = function(e, b, c, d, a) {
    this.reportId = b;
    this.reason = c;
    this.result = d;
    this.comments = a
}, PagedQuery = function(c, a, b) {
    this.itemsPerPage = a;
    this.currentPage = b
}, UserBanRequest = function(c, b, a) {
    this.comment = b;
    this.banExpireDate = a
}, IgnoreItemOverrideRequest = function(e, a, c, b, d) {
    this.globalIgnoreEndDate = a;
    this.ignoredItemId = c;
    this.ignoredItemType = b;
    this.comment = d
}, DestinyItemTransferRequest = function(g, c, d, f, a, e, b) {
    this.membershipType = c;
    this.characterId = d;
    this.itemId = f;
    this.itemReferenceHash = a;
    this.stackSize = e;
    this.transferToVault = b
}, DestinyItemActionRequest = function(d, a, b, c) {
    this.membershipType = a;
    this.characterId = b;
    this.itemId = c
}, DestinyItemSetActionRequest = function(d, a, b, c) {
    this.membershipType = a;
    this.characterId = b;
    this.itemIds = c
}, DestinyItemFlagRequest = function(e, d, a, b, c) {
    this.state = d;
    this.membershipType = a;
    this.characterId = b;
    this.itemId = c
}, GeneralUser = {membershipId: 0,uniqueName: [],normalizedName: [],displayName: [],profilePicture: 0,profileTheme: 0,userTitle: 0,successMessageFlags: 0,isDeleted: false,about: [],firstAccess: null,lastUpdate: null,legacyPortalUID: 0,context: {isFollowing: false,ignoreStatus: {isIgnored: false,ignoreFlags: 0},globalIgnoreEndDate: null},psnDisplayName: [],xboxDisplayName: [],fbDisplayName: [],showActivity: false,followerCount: 0,followingUserCount: 0,globalIgnoreEndDate: null,isThemeLight: false,adultMode: false,locale: [],localeInheritDefault: false,lastBanReportId: 0,showGroupMessaging: false,profilePicturePath: [],profileThemeName: [],userTitleDisplay: [],lastViewedConversations: null}, UserToUserContext = {isFollowing: false,ignoreStatus: {isIgnored: false,ignoreFlags: 0},globalIgnoreEndDate: null}, IgnoreResponse = {isIgnored: false,ignoreFlags: 0}, UserDetail = {user: {membershipId: 0,uniqueName: [],normalizedName: [],displayName: [],profilePicture: 0,profileTheme: 0,userTitle: 0,successMessageFlags: 0,isDeleted: false,about: [],firstAccess: null,lastUpdate: null,legacyPortalUID: 0,context: {isFollowing: false,ignoreStatus: {isIgnored: false,ignoreFlags: 0},globalIgnoreEndDate: null},psnDisplayName: [],xboxDisplayName: [],fbDisplayName: [],showActivity: false,followerCount: 0,followingUserCount: 0,globalIgnoreEndDate: null,isThemeLight: false,adultMode: false,locale: [],localeInheritDefault: false,lastBanReportId: 0,showGroupMessaging: false,profilePicturePath: [],profileThemeName: [],userTitleDisplay: [],lastViewedConversations: null},clans: [],foundedGroups: [],email: [],emailStatus: 0,emailUsage: 0,realName: [],gamerTag: [],psnId: [],facebookName: [],userAcls: [],showGamertagPublic: false,showFacebookPublic: false,showPsnPublic: false,publicCredentialTypes: [],isThemeLight: false,adultMode: false,userResearchStatusFlags: 0,lastViewedConversations: null}, GroupResponse = {detail: {groupId: 0,name: [],membershipIdCreated: 0,creationDate: null,modificationDate: null,groupType: 0,about: [],isDeleted: false,deletionDate: null,deletedByMembershipId: 0,tags: [],rating: 0,ratingCount: 0,memberCount: 0,pendingMemberCount: 0,isPublic: false,isMembershipClosed: false,isMembershipReviewed: false,isPublicTopicAdminOnly: false,primaryAlliedGroupId: 0,motto: [],clanCallsign: [],allowChat: false,isDefaultPostPublic: false,isDefaultPostAlliance: false,chatSecurity: 0,locale: [],globalIgnoreEndDate: null,avatarImageIndex: 0,founderMembershipId: 0,homepage: 0,membershipOption: 0,defaultPublicity: 0,theme: [],bannerPath: [],avatarPath: [],isAllianceOwner: false,conversationId: 0,clanReviewType: 0,enableInvitationMessagingForAdmins: false},founderMembershipId: 0,founder: {membershipId: 0,uniqueName: [],normalizedName: [],displayName: [],profilePicture: 0,profileTheme: 0,userTitle: 0,successMessageFlags: 0,isDeleted: false,about: [],firstAccess: null,lastUpdate: null,legacyPortalUID: 0,context: {isFollowing: false,ignoreStatus: {isIgnored: false,ignoreFlags: 0},globalIgnoreEndDate: null},psnDisplayName: [],xboxDisplayName: [],fbDisplayName: [],showActivity: false,followerCount: 0,followingUserCount: 0,globalIgnoreEndDate: null,isThemeLight: false,adultMode: false,locale: [],localeInheritDefault: false,lastBanReportId: 0,showGroupMessaging: false,profilePicturePath: [],profileThemeName: [],userTitleDisplay: [],lastViewedConversations: null},followerCount: 0,currentUserStatus: {isFollowing: false,membershipStatus: {Response: {clanMembershipTypes: [],user: {membershipId: 0,uniqueName: [],normalizedName: [],displayName: [],profilePicture: 0,profileTheme: 0,userTitle: 0,successMessageFlags: 0,isDeleted: false,about: [],firstAccess: null,lastUpdate: null,legacyPortalUID: 0,context: {isFollowing: false,ignoreStatus: {isIgnored: false,ignoreFlags: 0},globalIgnoreEndDate: null},psnDisplayName: [],xboxDisplayName: [],fbDisplayName: [],showActivity: false,followerCount: 0,followingUserCount: 0,globalIgnoreEndDate: null,isThemeLight: false,adultMode: false,locale: [],localeInheritDefault: false,lastBanReportId: 0,showGroupMessaging: false,profilePicturePath: [],profileThemeName: [],userTitleDisplay: [],lastViewedConversations: null},hasPendingApplication: false,hasRated: false,approvalDate: null,approvedByMembershipId: 0,deactivationDate: null,deactivatedByMembershipId: 0,rating: 0,groupId: 0,membershipType: 0,membershipId: 0,isMember: false,memberType: 0,isOriginalFounder: false},ErrorCode: 0,ThrottleSeconds: 0,ErrorStatus: [],Message: [],MessageData: []}},alliedIds: [],attributes: [],membershipIds: [],clanMembershipTypes: [],parentGroup: {groupId: 0,name: [],membershipIdCreated: 0,creationDate: null,modificationDate: null,groupType: 0,about: [],isDeleted: false,deletionDate: null,deletedByMembershipId: 0,tags: [],rating: 0,ratingCount: 0,memberCount: 0,pendingMemberCount: 0,isPublic: false,isMembershipClosed: false,isMembershipReviewed: false,isPublicTopicAdminOnly: false,primaryAlliedGroupId: 0,motto: [],clanCallsign: [],allowChat: false,isDefaultPostPublic: false,isDefaultPostAlliance: false,chatSecurity: 0,locale: [],globalIgnoreEndDate: null,avatarImageIndex: 0,founderMembershipId: 0,homepage: 0,membershipOption: 0,defaultPublicity: 0,theme: [],bannerPath: [],avatarPath: [],isAllianceOwner: false,conversationId: 0,clanReviewType: 0,enableInvitationMessagingForAdmins: false},allianceStatus: 0,friends: [],groupJoinRequestCount: 0,groupJoinInviteCount: 0,clanJoinRequestCount: 0,clanJoinInviteCount: 0}, Group = {groupId: 0,name: [],membershipIdCreated: 0,creationDate: null,modificationDate: null,groupType: 0,about: [],isDeleted: false,deletionDate: null,deletedByMembershipId: 0,tags: [],rating: 0,ratingCount: 0,memberCount: 0,pendingMemberCount: 0,isPublic: false,isMembershipClosed: false,isMembershipReviewed: false,isPublicTopicAdminOnly: false,primaryAlliedGroupId: 0,motto: [],clanCallsign: [],allowChat: false,isDefaultPostPublic: false,isDefaultPostAlliance: false,chatSecurity: 0,locale: [],globalIgnoreEndDate: null,avatarImageIndex: 0,founderMembershipId: 0,homepage: 0,membershipOption: 0,defaultPublicity: 0,theme: [],bannerPath: [],avatarPath: [],isAllianceOwner: false,conversationId: 0,clanReviewType: 0,enableInvitationMessagingForAdmins: false}, GroupUserStatus = {isFollowing: false,membershipStatus: {Response: {clanMembershipTypes: [],user: {membershipId: 0,uniqueName: [],normalizedName: [],displayName: [],profilePicture: 0,profileTheme: 0,userTitle: 0,successMessageFlags: 0,isDeleted: false,about: [],firstAccess: null,lastUpdate: null,legacyPortalUID: 0,context: {isFollowing: false,ignoreStatus: {isIgnored: false,ignoreFlags: 0},globalIgnoreEndDate: null},psnDisplayName: [],xboxDisplayName: [],fbDisplayName: [],showActivity: false,followerCount: 0,followingUserCount: 0,globalIgnoreEndDate: null,isThemeLight: false,adultMode: false,locale: [],localeInheritDefault: false,lastBanReportId: 0,showGroupMessaging: false,profilePicturePath: [],profileThemeName: [],userTitleDisplay: [],lastViewedConversations: null},hasPendingApplication: false,hasRated: false,approvalDate: null,approvedByMembershipId: 0,deactivationDate: null,deactivatedByMembershipId: 0,rating: 0,groupId: 0,membershipType: 0,membershipId: 0,isMember: false,memberType: 0,isOriginalFounder: false},ErrorCode: 0,ThrottleSeconds: 0,ErrorStatus: [],Message: [],MessageData: []}}, CurrentGroupMemberDetail = {clanMembershipTypes: [],user: {membershipId: 0,uniqueName: [],normalizedName: [],displayName: [],profilePicture: 0,profileTheme: 0,userTitle: 0,successMessageFlags: 0,isDeleted: false,about: [],firstAccess: null,lastUpdate: null,legacyPortalUID: 0,context: {isFollowing: false,ignoreStatus: {isIgnored: false,ignoreFlags: 0},globalIgnoreEndDate: null},psnDisplayName: [],xboxDisplayName: [],fbDisplayName: [],showActivity: false,followerCount: 0,followingUserCount: 0,globalIgnoreEndDate: null,isThemeLight: false,adultMode: false,locale: [],localeInheritDefault: false,lastBanReportId: 0,showGroupMessaging: false,profilePicturePath: [],profileThemeName: [],userTitleDisplay: [],lastViewedConversations: null},hasPendingApplication: false,hasRated: false,approvalDate: null,approvedByMembershipId: 0,deactivationDate: null,deactivatedByMembershipId: 0,rating: 0,groupId: 0,membershipType: 0,membershipId: 0,isMember: false,memberType: 0,isOriginalFounder: false}, GroupClanPlatform = {membershipType: 0,memberCount: 0,isProbation: false}, Friend = {friendType: 0,platformUserInfo: {supplementalDisplayName: [],iconPath: [],membershipType: 0,membershipId: 0,displayName: []},bungieNetUserInfo: {membershipId: 0,uniqueName: [],normalizedName: [],displayName: [],profilePicture: 0,profileTheme: 0,userTitle: 0,successMessageFlags: 0,isDeleted: false,about: [],firstAccess: null,lastUpdate: null,legacyPortalUID: 0,context: {isFollowing: false,ignoreStatus: {isIgnored: false,ignoreFlags: 0},globalIgnoreEndDate: null},psnDisplayName: [],xboxDisplayName: [],fbDisplayName: [],showActivity: false,followerCount: 0,followingUserCount: 0,globalIgnoreEndDate: null,isThemeLight: false,adultMode: false,locale: [],localeInheritDefault: false,lastBanReportId: 0,showGroupMessaging: false,profilePicturePath: [],profileThemeName: [],userTitleDisplay: [],lastViewedConversations: null},onlineStatus: 0,presenceString: []}, UserInfoCard = {supplementalDisplayName: [],iconPath: [],membershipType: 0,membershipId: 0,displayName: []}, UserCounts = {onlineFriendCount: 0,notificationCount: 0,messageCount: 0,groupMessageCounts: [],needReauth: 0,lastUpdated: null}, GroupItemCount = {groupId: 0,count: 0,conversationId: 0}, UserAlias = {userAliasId: 0,membershipId: 0,akaDisplayName: [],akaUniqueName: [],changedDate: null}, BungieAccount = {destinyAccountResult: 0,destinyAccounts: [],bungieNetUser: {membershipId: 0,uniqueName: [],normalizedName: [],displayName: [],profilePicture: 0,profileTheme: 0,userTitle: 0,successMessageFlags: 0,isDeleted: false,about: [],firstAccess: null,lastUpdate: null,legacyPortalUID: 0,context: {isFollowing: false,ignoreStatus: {isIgnored: false,ignoreFlags: 0},globalIgnoreEndDate: null},psnDisplayName: [],xboxDisplayName: [],fbDisplayName: [],showActivity: false,followerCount: 0,followingUserCount: 0,globalIgnoreEndDate: null,isThemeLight: false,adultMode: false,locale: [],localeInheritDefault: false,lastBanReportId: 0,showGroupMessaging: false,profilePicturePath: [],profileThemeName: [],userTitleDisplay: [],lastViewedConversations: null},clans: [],relatedGroups: []}, DestinyAccountBrief = {userInfo: {supplementalDisplayName: [],iconPath: [],membershipType: 0,membershipId: 0,displayName: []},grimoireScore: 0,clanName: [],clanTag: [],characters: [],lastPlayed: null}, DestinyCharacterBrief = {characterId: 0,raceHash: {},genderHash: {},classHash: {},emblemHash: {},race: {raceHash: {},raceType: 0,raceName: [],raceNameMale: [],raceNameFemale: [],raceDescription: []},gender: {genderHash: {},genderType: 0,genderName: [],genderDescription: []},characterClass: {classHash: {},classType: 0,className: [],classNameMale: [],classNameFemale: [],classIdentifier: [],mentorVendorIdentifier: []},emblemPath: [],backgroundPath: [],level: 0,powerLevel: 0,dateLastPlayed: null,membershipId: 0,membershipType: 0,levelProgression: {dailyProgress: 0,weeklyProgress: 0,currentProgress: 0,level: 0,step: 0,progressToNextLevel: 0,nextLevelAt: 0,progressionHash: {}},isPrestigeLevel: false,genderType: 0,classType: 0,percentToNextLevel: {}}, DestinyRaceDefinition = {raceHash: {},raceType: 0,raceName: [],raceNameMale: [],raceNameFemale: [],raceDescription: []}, DestinyGenderDefinition = {genderHash: {},genderType: 0,genderName: [],genderDescription: []}, DestinyClassDefinition = {classHash: {},classType: 0,className: [],classNameMale: [],classNameFemale: [],classIdentifier: [],mentorVendorIdentifier: []}, DestinyProgression = {dailyProgress: 0,weeklyProgress: 0,currentProgress: 0,level: 0,step: 0,progressToNextLevel: 0,nextLevelAt: 0,progressionHash: {}}, ClanPlatform = {groupId: 0,platformType: 0}, SearchResultOfGeneralUser = {results: [],totalResults: 0,hasMore: false,query: {itemsPerPage: 0,currentPage: 0},useTotalResults: false}, NotificationSetting = {notificationSettingId: 0,membershipId: 0,optInFlags: 0,scheduleFlags: 0,notificationMethod: 0,notificationType: 0,displayName: [],settingDescription: []}, GetCredentialTypesForAccountResponse = {credentialType: 0,credentialDisplayName: [],isPublic: false}, UserTheme = {userThemeId: 0,userThemeName: [],userThemeDescription: []}, PlatformApiKey = {apiKey: [],ownerMembershipId: 0,creationDate: null,expirationDate: null,apiEulaVersion: 0}, MessageConversationResponse = {users: [],invitationDetail: {invitationId: 0,membershipId: 0,resolutionStatus: 0,expireDate: null,invitationType: 0,requestingObjectId: 0,targetObjectId: 0,targetState: 0,requestMessage: [],responseMessage: [],responseCode: [],hasExpired: false,message: [],membershipIdCreated: 0,canRespond: false},group: {groupId: 0,name: [],membershipIdCreated: 0,creationDate: null,modificationDate: null,groupType: 0,about: [],isDeleted: false,deletionDate: null,deletedByMembershipId: 0,tags: [],rating: 0,ratingCount: 0,memberCount: 0,pendingMemberCount: 0,isPublic: false,isMembershipClosed: false,isMembershipReviewed: false,isPublicTopicAdminOnly: false,primaryAlliedGroupId: 0,motto: [],clanCallsign: [],allowChat: false,isDefaultPostPublic: false,isDefaultPostAlliance: false,chatSecurity: 0,locale: [],globalIgnoreEndDate: null,avatarImageIndex: 0,founderMembershipId: 0,homepage: 0,membershipOption: 0,defaultPublicity: 0,theme: [],bannerPath: [],avatarPath: [],isAllianceOwner: false,conversationId: 0,clanReviewType: 0,enableInvitationMessagingForAdmins: false},detail: {conversationId: 0,memberFromId: 0,dateStarted: null,totalMessageCount: 0,lastMessageSent: null,lastMessageId: 0,isGlobal: false,isLocked: false,invitationId: 0,starter: 0,lastRead: null,status: 0,subject: [],body: [],isAutoResponse: false,isRead: false,ownerEntityId: 0,ownerEntityType: 0,targetMembershipId: 0},participants: []}, InvitationResponseCodeDetail = {invitationId: 0,membershipId: 0,resolutionStatus: 0,expireDate: null,invitationType: 0,requestingObjectId: 0,targetObjectId: 0,targetState: 0,requestMessage: [],responseMessage: [],responseCode: [],hasExpired: false,message: [],membershipIdCreated: 0,canRespond: false}, MessageConversation = {conversationId: 0,memberFromId: 0,dateStarted: null,totalMessageCount: 0,lastMessageSent: null,lastMessageId: 0,isGlobal: false,isLocked: false,invitationId: 0,starter: 0,lastRead: null,status: 0,subject: [],body: [],isAutoResponse: false,isRead: false,ownerEntityId: 0,ownerEntityType: 0,targetMembershipId: 0}, MessageConversationMember = {membershipId: 0,isDeleted: false}, MessageSearchResult = {users: [],invitationDetails: [],results: [],totalResults: 0,hasMore: false,query: {itemsPerPage: 0,currentPage: 0},useTotalResults: false}, Message = {messageId: 0,conversationId: 0,dateSent: null,subject: [],body: [],folderId: 0,systemId: 0,isAutoResponse: false,memberFromId: 0,isDeleted: false,invitationId: 0}, MessageConversationSearchResult = {users: [],invitationDetails: [],groups: [],unreadCount: 0,results: [],totalResults: 0,hasMore: false,query: {itemsPerPage: 0,currentPage: 0},useTotalResults: false}, MessageConversationDetail = {detail: {conversationId: 0,memberFromId: 0,dateStarted: null,totalMessageCount: 0,lastMessageSent: null,lastMessageId: 0,isGlobal: false,isLocked: false,invitationId: 0,starter: 0,lastRead: null,status: 0,subject: [],body: [],isAutoResponse: false,isRead: false,ownerEntityId: 0,ownerEntityType: 0,targetMembershipId: 0},participants: []}, EntityActionResult = {entityId: 0,result: 0}, Invitation = {invitationId: 0,invitationType: 0,dateCreated: null,dateResolved: null,expireDate: null,membershipIdCreated: 0,membershipIdResolved: 0,requestingObjectId: 0,resolutionStatus: 0,targetObjectId: 0,targetState: 0,requestMessage: [],responseMessage: [],isExpired: false}, GroupInvitationSearchResponse = {groups: [],results: [],totalResults: 0,hasMore: false,query: {itemsPerPage: 0,currentPage: 0},useTotalResults: false}, LegacyConversationV2 = {conversationId: 0,memberFromId: 0,dateStarted: null,totalMessageCount: 0,lastMessageSent: null,lastMessageId: 0,isGlobal: false,isLocked: false,memberToId: 0,invitationId: 0,ownerEntityType: 0,ownerEntityId: 0,starter: 0,lastRead: null,status: 0,subject: [],body: [],isAutoResponse: false,membersToId: [],usersTo: [],invitationDetail: {invitationId: 0,membershipId: 0,resolutionStatus: 0,expireDate: null,invitationType: 0,requestingObjectId: 0,targetObjectId: 0,targetState: 0,requestMessage: [],responseMessage: [],responseCode: [],hasExpired: false,message: [],membershipIdCreated: 0,canRespond: false},isRead: false}, LegacyConversationResponse = {conversations: [],unreadCount: 0}, NotificationResponse = {notifications: [],invitations: [],tagActivityCount: 0,groupActivityCount: 0}, ContentTypeDescription = {cType: [],name: [],contentDescription: [],previewImage: [],priority: 0,reminder: [],properties: [],tagMetadata: [],tagMetadataItems: [],usageExamples: [],showInContentEditor: false,typeOf: [],bindIdentifierToProperty: [],boundRegex: [],allowComments: false,autoEnglishPropertyFallback: false,bulkUploadable: false,previews: [],propertySections: []}, ContentTypeProperty = {name: [],readableName: [],value: [],propertyDescription: [],localizable: false,fallback: false,enabled: false,order: 0,visible: false,required: false,maxLength: 0,regexp: [],validateAs: [],rssAttribute: [],visibleDependency: [],visibleOn: [],datatype: 0,attributes: [],childProperties: [],contentTypeAllowed: [],bindToProperty: [],boundRegex: [],representationSelection: [],defaultValues: [],isExternalAllowed: false,propertySection: [],weight: 0,representationValidationString: []}, ContentTypeDefaultValue = {whenClause: [],whenValue: [],defaultValue: []}, TagMetadataDefinition = {description: [],order: 0,items: [],datatype: [],name: [],isRequired: false}, TagMetadataItem = {description: [],tagText: [],groups: [],isDefault: false,name: []}, ContentPreview = {name: [],path: [],itemInSet: false,setTag: [],setNesting: 0,useSetId: 0}, ContentTypePropertySection = {name: [],readableName: [],visibleDependency: [],visibleOn: []}, ContentItemPublicContract = {contentId: 0,cType: [],cmsPath: [],creationDate: null,modifyDate: null,allowComments: false,hasAgeGate: false,minimumAge: 0,ratingImagePath: [],authorMembershipId: 0,author: {membershipId: 0,uniqueName: [],normalizedName: [],displayName: [],profilePicture: 0,profileTheme: 0,userTitle: 0,successMessageFlags: 0,isDeleted: false,about: [],firstAccess: null,lastUpdate: null,legacyPortalUID: 0,context: {isFollowing: false,ignoreStatus: {isIgnored: false,ignoreFlags: 0},globalIgnoreEndDate: null},psnDisplayName: [],xboxDisplayName: [],fbDisplayName: [],showActivity: false,followerCount: 0,followingUserCount: 0,globalIgnoreEndDate: null,isThemeLight: false,adultMode: false,locale: [],localeInheritDefault: false,lastBanReportId: 0,showGroupMessaging: false,profilePicturePath: [],profileThemeName: [],userTitleDisplay: [],lastViewedConversations: null},autoEnglishPropertyFallback: false,properties: [],representations: [],tags: [],hasGoneLive: false,isDeletedLive: false,commentSummary: {topicId: 0,commentCount: 0}}, CommentSummary = {topicId: 0,commentCount: 0}, ContentRepresentation = {name: [],path: [],validationString: []}, SearchResultOfContentItemPublicContract = {results: [],totalResults: 0,hasMore: false,query: {itemsPerPage: 0,currentPage: 0},useTotalResults: false}, FrontPageContentResponse = {rotator: {Response: {contentId: 0,cType: [],cmsPath: [],creationDate: null,modifyDate: null,allowComments: false,hasAgeGate: false,minimumAge: 0,ratingImagePath: [],authorMembershipId: 0,author: {membershipId: 0,uniqueName: [],normalizedName: [],displayName: [],profilePicture: 0,profileTheme: 0,userTitle: 0,successMessageFlags: 0,isDeleted: false,about: [],firstAccess: null,lastUpdate: null,legacyPortalUID: 0,context: {isFollowing: false,ignoreStatus: {isIgnored: false,ignoreFlags: 0},globalIgnoreEndDate: null},psnDisplayName: [],xboxDisplayName: [],fbDisplayName: [],showActivity: false,followerCount: 0,followingUserCount: 0,globalIgnoreEndDate: null,isThemeLight: false,adultMode: false,locale: [],localeInheritDefault: false,lastBanReportId: 0,showGroupMessaging: false,profilePicturePath: [],profileThemeName: [],userTitleDisplay: [],lastViewedConversations: null},autoEnglishPropertyFallback: false,properties: [],representations: [],tags: [],hasGoneLive: false,isDeletedLive: false,commentSummary: {topicId: 0,commentCount: 0}},ErrorCode: 0,ThrottleSeconds: 0,ErrorStatus: [],Message: [],MessageData: []},blog: {Response: [],ErrorCode: 0,ThrottleSeconds: 0,ErrorStatus: [],Message: [],MessageData: []},calloutSet: {Response: {contentId: 0,cType: [],cmsPath: [],creationDate: null,modifyDate: null,allowComments: false,hasAgeGate: false,minimumAge: 0,ratingImagePath: [],authorMembershipId: 0,author: {membershipId: 0,uniqueName: [],normalizedName: [],displayName: [],profilePicture: 0,profileTheme: 0,userTitle: 0,successMessageFlags: 0,isDeleted: false,about: [],firstAccess: null,lastUpdate: null,legacyPortalUID: 0,context: {isFollowing: false,ignoreStatus: {isIgnored: false,ignoreFlags: 0},globalIgnoreEndDate: null},psnDisplayName: [],xboxDisplayName: [],fbDisplayName: [],showActivity: false,followerCount: 0,followingUserCount: 0,globalIgnoreEndDate: null,isThemeLight: false,adultMode: false,locale: [],localeInheritDefault: false,lastBanReportId: 0,showGroupMessaging: false,profilePicturePath: [],profileThemeName: [],userTitleDisplay: [],lastViewedConversations: null},autoEnglishPropertyFallback: false,properties: [],representations: [],tags: [],hasGoneLive: false,isDeletedLive: false,commentSummary: {topicId: 0,commentCount: 0}},ErrorCode: 0,ThrottleSeconds: 0,ErrorStatus: [],Message: [],MessageData: []}}, FrontPageContentResponseV2 = {featuredArticle: {contentId: 0,cType: [],cmsPath: [],creationDate: null,modifyDate: null,allowComments: false,hasAgeGate: false,minimumAge: 0,ratingImagePath: [],authorMembershipId: 0,author: {membershipId: 0,uniqueName: [],normalizedName: [],displayName: [],profilePicture: 0,profileTheme: 0,userTitle: 0,successMessageFlags: 0,isDeleted: false,about: [],firstAccess: null,lastUpdate: null,legacyPortalUID: 0,context: {isFollowing: false,ignoreStatus: {isIgnored: false,ignoreFlags: 0},globalIgnoreEndDate: null},psnDisplayName: [],xboxDisplayName: [],fbDisplayName: [],showActivity: false,followerCount: 0,followingUserCount: 0,globalIgnoreEndDate: null,isThemeLight: false,adultMode: false,locale: [],localeInheritDefault: false,lastBanReportId: 0,showGroupMessaging: false,profilePicturePath: [],profileThemeName: [],userTitleDisplay: [],lastViewedConversations: null},autoEnglishPropertyFallback: false,properties: [],representations: [],tags: [],hasGoneLive: false,isDeletedLive: false,commentSummary: {topicId: 0,commentCount: 0}},eventCalendar: [],recentPatchNotes: {contentId: 0,cType: [],cmsPath: [],creationDate: null,modifyDate: null,allowComments: false,hasAgeGate: false,minimumAge: 0,ratingImagePath: [],authorMembershipId: 0,author: {membershipId: 0,uniqueName: [],normalizedName: [],displayName: [],profilePicture: 0,profileTheme: 0,userTitle: 0,successMessageFlags: 0,isDeleted: false,about: [],firstAccess: null,lastUpdate: null,legacyPortalUID: 0,context: {isFollowing: false,ignoreStatus: {isIgnored: false,ignoreFlags: 0},globalIgnoreEndDate: null},psnDisplayName: [],xboxDisplayName: [],fbDisplayName: [],showActivity: false,followerCount: 0,followingUserCount: 0,globalIgnoreEndDate: null,isThemeLight: false,adultMode: false,locale: [],localeInheritDefault: false,lastBanReportId: 0,showGroupMessaging: false,profilePicturePath: [],profileThemeName: [],userTitleDisplay: [],lastViewedConversations: null},autoEnglishPropertyFallback: false,properties: [],representations: [],tags: [],hasGoneLive: false,isDeletedLive: false,commentSummary: {topicId: 0,commentCount: 0}},playerSpotlight: {contentId: 0,cType: [],cmsPath: [],creationDate: null,modifyDate: null,allowComments: false,hasAgeGate: false,minimumAge: 0,ratingImagePath: [],authorMembershipId: 0,author: {membershipId: 0,uniqueName: [],normalizedName: [],displayName: [],profilePicture: 0,profileTheme: 0,userTitle: 0,successMessageFlags: 0,isDeleted: false,about: [],firstAccess: null,lastUpdate: null,legacyPortalUID: 0,context: {isFollowing: false,ignoreStatus: {isIgnored: false,ignoreFlags: 0},globalIgnoreEndDate: null},psnDisplayName: [],xboxDisplayName: [],fbDisplayName: [],showActivity: false,followerCount: 0,followingUserCount: 0,globalIgnoreEndDate: null,isThemeLight: false,adultMode: false,locale: [],localeInheritDefault: false,lastBanReportId: 0,showGroupMessaging: false,profilePicturePath: [],profileThemeName: [],userTitleDisplay: [],lastViewedConversations: null},autoEnglishPropertyFallback: false,properties: [],representations: [],tags: [],hasGoneLive: false,isDeletedLive: false,commentSummary: {topicId: 0,commentCount: 0}},advisor: {nightfallActivityHash: {},heroicStrikeHashes: [],dailyChapterHashes: [],nightfallResetDate: null,heroicStrikeResetDate: null,dailyChapterResetDate: null,events: {events: []},dailyCrucibleHash: {},dailyCrucibleResetDate: null,nightfallRewardIndexes: [],dailyCrucibleRewardIndexes: [],heroicStrikeRewardIndexes: [],dailyChapterRewardIndexes: []},recentNews: []}, DestinyAdvisorPublicData = {nightfallActivityHash: {},heroicStrikeHashes: [],dailyChapterHashes: [],nightfallResetDate: null,heroicStrikeResetDate: null,dailyChapterResetDate: null,events: {events: []},dailyCrucibleHash: {},dailyCrucibleResetDate: null,nightfallRewardIndexes: [],dailyCrucibleRewardIndexes: [],heroicStrikeRewardIndexes: [],dailyChapterRewardIndexes: []}, DestinyAdvisorSpecialEvents = {events: []}, DestinyAdvisorSpecialEvent = {eventHash: {},eventIdentifier: [],expirationDate: null,startDate: null,expirationKnown: false}, DestinyContentResponse = {aboutContent: {contentId: 0,cType: [],cmsPath: [],creationDate: null,modifyDate: null,allowComments: false,hasAgeGate: false,minimumAge: 0,ratingImagePath: [],authorMembershipId: 0,author: {membershipId: 0,uniqueName: [],normalizedName: [],displayName: [],profilePicture: 0,profileTheme: 0,userTitle: 0,successMessageFlags: 0,isDeleted: false,about: [],firstAccess: null,lastUpdate: null,legacyPortalUID: 0,context: {isFollowing: false,ignoreStatus: {isIgnored: false,ignoreFlags: 0},globalIgnoreEndDate: null},psnDisplayName: [],xboxDisplayName: [],fbDisplayName: [],showActivity: false,followerCount: 0,followingUserCount: 0,globalIgnoreEndDate: null,isThemeLight: false,adultMode: false,locale: [],localeInheritDefault: false,lastBanReportId: 0,showGroupMessaging: false,profilePicturePath: [],profileThemeName: [],userTitleDisplay: [],lastViewedConversations: null},autoEnglishPropertyFallback: false,properties: [],representations: [],tags: [],hasGoneLive: false,isDeletedLive: false,commentSummary: {topicId: 0,commentCount: 0}},mediaBuckets: []}, ContentBucket = {ContentId: 0,Title: [],Items: []}, DestinyContentResponseV2 = {TopSet: {contentId: 0,cType: [],cmsPath: [],creationDate: null,modifyDate: null,allowComments: false,hasAgeGate: false,minimumAge: 0,ratingImagePath: [],authorMembershipId: 0,author: {membershipId: 0,uniqueName: [],normalizedName: [],displayName: [],profilePicture: 0,profileTheme: 0,userTitle: 0,successMessageFlags: 0,isDeleted: false,about: [],firstAccess: null,lastUpdate: null,legacyPortalUID: 0,context: {isFollowing: false,ignoreStatus: {isIgnored: false,ignoreFlags: 0},globalIgnoreEndDate: null},psnDisplayName: [],xboxDisplayName: [],fbDisplayName: [],showActivity: false,followerCount: 0,followingUserCount: 0,globalIgnoreEndDate: null,isThemeLight: false,adultMode: false,locale: [],localeInheritDefault: false,lastBanReportId: 0,showGroupMessaging: false,profilePicturePath: [],profileThemeName: [],userTitleDisplay: [],lastViewedConversations: null},autoEnglishPropertyFallback: false,properties: [],representations: [],tags: [],hasGoneLive: false,isDeletedLive: false,commentSummary: {topicId: 0,commentCount: 0}},StorySet: {contentId: 0,cType: [],cmsPath: [],creationDate: null,modifyDate: null,allowComments: false,hasAgeGate: false,minimumAge: 0,ratingImagePath: [],authorMembershipId: 0,author: {membershipId: 0,uniqueName: [],normalizedName: [],displayName: [],profilePicture: 0,profileTheme: 0,userTitle: 0,successMessageFlags: 0,isDeleted: false,about: [],firstAccess: null,lastUpdate: null,legacyPortalUID: 0,context: {isFollowing: false,ignoreStatus: {isIgnored: false,ignoreFlags: 0},globalIgnoreEndDate: null},psnDisplayName: [],xboxDisplayName: [],fbDisplayName: [],showActivity: false,followerCount: 0,followingUserCount: 0,globalIgnoreEndDate: null,isThemeLight: false,adultMode: false,locale: [],localeInheritDefault: false,lastBanReportId: 0,showGroupMessaging: false,profilePicturePath: [],profileThemeName: [],userTitleDisplay: [],lastViewedConversations: null},autoEnglishPropertyFallback: false,properties: [],representations: [],tags: [],hasGoneLive: false,isDeletedLive: false,commentSummary: {topicId: 0,commentCount: 0}},GuardianSet: {contentId: 0,cType: [],cmsPath: [],creationDate: null,modifyDate: null,allowComments: false,hasAgeGate: false,minimumAge: 0,ratingImagePath: [],authorMembershipId: 0,author: {membershipId: 0,uniqueName: [],normalizedName: [],displayName: [],profilePicture: 0,profileTheme: 0,userTitle: 0,successMessageFlags: 0,isDeleted: false,about: [],firstAccess: null,lastUpdate: null,legacyPortalUID: 0,context: {isFollowing: false,ignoreStatus: {isIgnored: false,ignoreFlags: 0},globalIgnoreEndDate: null},psnDisplayName: [],xboxDisplayName: [],fbDisplayName: [],showActivity: false,followerCount: 0,followingUserCount: 0,globalIgnoreEndDate: null,isThemeLight: false,adultMode: false,locale: [],localeInheritDefault: false,lastBanReportId: 0,showGroupMessaging: false,profilePicturePath: [],profileThemeName: [],userTitleDisplay: [],lastViewedConversations: null},autoEnglishPropertyFallback: false,properties: [],representations: [],tags: [],hasGoneLive: false,isDeletedLive: false,commentSummary: {topicId: 0,commentCount: 0}},FrontierSet: {contentId: 0,cType: [],cmsPath: [],creationDate: null,modifyDate: null,allowComments: false,hasAgeGate: false,minimumAge: 0,ratingImagePath: [],authorMembershipId: 0,author: {membershipId: 0,uniqueName: [],normalizedName: [],displayName: [],profilePicture: 0,profileTheme: 0,userTitle: 0,successMessageFlags: 0,isDeleted: false,about: [],firstAccess: null,lastUpdate: null,legacyPortalUID: 0,context: {isFollowing: false,ignoreStatus: {isIgnored: false,ignoreFlags: 0},globalIgnoreEndDate: null},psnDisplayName: [],xboxDisplayName: [],fbDisplayName: [],showActivity: false,followerCount: 0,followingUserCount: 0,globalIgnoreEndDate: null,isThemeLight: false,adultMode: false,locale: [],localeInheritDefault: false,lastBanReportId: 0,showGroupMessaging: false,profilePicturePath: [],profileThemeName: [],userTitleDisplay: [],lastViewedConversations: null},autoEnglishPropertyFallback: false,properties: [],representations: [],tags: [],hasGoneLive: false,isDeletedLive: false,commentSummary: {topicId: 0,commentCount: 0}},EnemySet: {contentId: 0,cType: [],cmsPath: [],creationDate: null,modifyDate: null,allowComments: false,hasAgeGate: false,minimumAge: 0,ratingImagePath: [],authorMembershipId: 0,author: {membershipId: 0,uniqueName: [],normalizedName: [],displayName: [],profilePicture: 0,profileTheme: 0,userTitle: 0,successMessageFlags: 0,isDeleted: false,about: [],firstAccess: null,lastUpdate: null,legacyPortalUID: 0,context: {isFollowing: false,ignoreStatus: {isIgnored: false,ignoreFlags: 0},globalIgnoreEndDate: null},psnDisplayName: [],xboxDisplayName: [],fbDisplayName: [],showActivity: false,followerCount: 0,followingUserCount: 0,globalIgnoreEndDate: null,isThemeLight: false,adultMode: false,locale: [],localeInheritDefault: false,lastBanReportId: 0,showGroupMessaging: false,profilePicturePath: [],profileThemeName: [],userTitleDisplay: [],lastViewedConversations: null},autoEnglishPropertyFallback: false,properties: [],representations: [],tags: [],hasGoneLive: false,isDeletedLive: false,commentSummary: {topicId: 0,commentCount: 0}},MediaBuckets: {contentId: 0,cType: [],cmsPath: [],creationDate: null,modifyDate: null,allowComments: false,hasAgeGate: false,minimumAge: 0,ratingImagePath: [],authorMembershipId: 0,author: {membershipId: 0,uniqueName: [],normalizedName: [],displayName: [],profilePicture: 0,profileTheme: 0,userTitle: 0,successMessageFlags: 0,isDeleted: false,about: [],firstAccess: null,lastUpdate: null,legacyPortalUID: 0,context: {isFollowing: false,ignoreStatus: {isIgnored: false,ignoreFlags: 0},globalIgnoreEndDate: null},psnDisplayName: [],xboxDisplayName: [],fbDisplayName: [],showActivity: false,followerCount: 0,followingUserCount: 0,globalIgnoreEndDate: null,isThemeLight: false,adultMode: false,locale: [],localeInheritDefault: false,lastBanReportId: 0,showGroupMessaging: false,profilePicturePath: [],profileThemeName: [],userTitleDisplay: [],lastViewedConversations: null},autoEnglishPropertyFallback: false,properties: [],representations: [],tags: [],hasGoneLive: false,isDeletedLive: false,commentSummary: {topicId: 0,commentCount: 0}},PressReleases: {results: [],totalResults: 0,hasMore: false,query: {itemsPerPage: 0,currentPage: 0},useTotalResults: false}}, ExternalMessage = {dateCreated: null,message: [],service: 0,extendedData: []}, PostResponse = {IsPinned: false,popularity: 0,isActive: false,isAnnouncement: false,userRating: 0,userHasRated: false,userHasMutedPost: false,latestReplyPostId: 0,latestReplyAuthorId: 0,ageLocked: false,ignoreStatus: {isIgnored: false,ignoreFlags: 0},postId: {},parentPostId: {},topicId: {},lastReplyId: {},threadDepth: 0,category: 0,authorMembershipId: 0,editorMembershipId: 0,subject: [],body: [],urlLinkOrImage: [],metadata: {},creationDate: null,lastModified: null,lastReplyDate: null,editCount: 0,replyCount: 0,topicReplyCount: 0,ratingCount: 0,rating: 0,upvotes: 0,downvotes: 0,ratingScore: 0,groupOwnerId: 0,isGroupPrivate: false,parentGroupId: 0,parentTopicId: 0,flags: 0,lockedForReplies: false,parentAuthorId: 0,topicAuthorId: 0,tags: [],isTopicBanned: false,actualParentPostId: 0,playerSupportFlags: 0,playerSupportMetadata: [],pinned: 0,tagIds: []}, PostSearchResponse = {relatedPosts: [],authors: [],groups: [],searchedTags: [],polls: [],availablePages: 0,results: [],totalResults: 0,hasMore: false,query: {itemsPerPage: 0,currentPage: 0},useTotalResults: false}, TagResponse = {tagText: [],ignoreStatus: {isIgnored: false,ignoreFlags: 0},globalIgnoreEndDate: null}, PollResponse = {topicId: 0,results: [],totalVotes: 0}, PollResult = {answerText: [],answerSlot: 0,lastVoteDate: null,votes: 0,requestingUserVoted: false}, AggregatedActivitySearchResponse = {users: [],groups: [],posts: [],results: [],totalResults: 0,hasMore: false,query: {itemsPerPage: 0,currentPage: 0},useTotalResults: false}, AggregatedActivityMessage = {activity: {activityType: 0,affectedItemId: 0,affectedItemType: 0,mostRecentDate: null,count: 0,activities: [],followers: [],aggregationType: 0,tagText: []},message: [],messageTemplate: []}, AggregatedActivity = {activityType: 0,affectedItemId: 0,affectedItemType: 0,mostRecentDate: null,count: 0,activities: [],followers: [],aggregationType: 0,tagText: []}, Activity = {activityId: 0,activityType: 0,affectedItemId: 0,affectedItemType: 0,membershipId: 0,creationDate: null,affectedItemSubtype: 0,relatedMembershipId: 0,relatedItemId: 0,affectedItemDescription: [],relatedItemDescription: [],groupId: 0}, SearchResultOfLegacyFollowingResponse = {results: [],totalResults: 0,hasMore: false,query: {itemsPerPage: 0,currentPage: 0},useTotalResults: false}, LegacyFollowingResponse = {detail: {displayName: [],avatarImage: [],sourceMissing: false,memberType: 0,allianceStatus: 0},following: {entityId: 0,identifier: [],entityType: [],activityCount: 0}}, FollowingDecorations = {displayName: [],avatarImage: [],sourceMissing: false,memberType: 0,allianceStatus: 0}, LegacyFollowing = {entityId: 0,identifier: [],entityType: [],activityCount: 0}, GroupSearchResponse = {founders: [],relatedGroups: [],results: [],totalResults: 0,hasMore: false,query: {itemsPerPage: 0,currentPage: 0},useTotalResults: false}, SearchResultOfFollowerResponse = {results: [],totalResults: 0,hasMore: false,query: {itemsPerPage: 0,currentPage: 0},useTotalResults: false}, FollowerResponse = {user: {membershipId: 0,uniqueName: [],normalizedName: [],displayName: [],profilePicture: 0,profileTheme: 0,userTitle: 0,successMessageFlags: 0,isDeleted: false,about: [],firstAccess: null,lastUpdate: null,legacyPortalUID: 0,context: {isFollowing: false,ignoreStatus: {isIgnored: false,ignoreFlags: 0},globalIgnoreEndDate: null},psnDisplayName: [],xboxDisplayName: [],fbDisplayName: [],showActivity: false,followerCount: 0,followingUserCount: 0,globalIgnoreEndDate: null,isThemeLight: false,adultMode: false,locale: [],localeInheritDefault: false,lastBanReportId: 0,showGroupMessaging: false,profilePicturePath: [],profileThemeName: [],userTitleDisplay: [],lastViewedConversations: null},dateFollowed: null}, ActivityMessageSearchResponse = {users: [],groups: [],posts: [],tags: [],results: [],totalResults: 0,hasMore: false,query: {itemsPerPage: 0,currentPage: 0},useTotalResults: false}, ActivityMessage = {activity: {activityId: 0,activityType: 0,affectedItemId: 0,affectedItemType: 0,membershipId: 0,creationDate: null,affectedItemSubtype: 0,relatedMembershipId: 0,relatedItemId: 0,affectedItemDescription: [],relatedItemDescription: [],groupId: 0},message: [],messageTemplate: []}, LegacyFriendSearchResponse = {users: [],results: [],totalResults: 0,hasMore: false,query: {itemsPerPage: 0,currentPage: 0},useTotalResults: false}, LegacyFriend = {credentialType: 0,platform: [],platformDisplayName: [],bungieNetMembershipId: 0,statusCode: 0,status: [],imagePath: [],destinyMembershipId: 0}, SearchResultOfFriend = {results: [],totalResults: 0,hasMore: false,query: {itemsPerPage: 0,currentPage: 0},useTotalResults: false}, GroupTheme = {name: [],folder: [],description: []}, GroupCreationResponse = {groupId: 0,clanEnabledStatus: 0}, SearchResultOfGroupMemberApplication = {results: [],totalResults: 0,hasMore: false,query: {itemsPerPage: 0,currentPage: 0},useTotalResults: false}, GroupMemberApplication = {groupId: 0,membershipId: 0,creationDate: null,resolveState: 0,resolveDate: null,resolvedByMembershipId: 0,requestMessage: [],resolveMessage: [],user: {membershipId: 0,uniqueName: [],normalizedName: [],displayName: [],profilePicture: 0,profileTheme: 0,userTitle: 0,successMessageFlags: 0,isDeleted: false,about: [],firstAccess: null,lastUpdate: null,legacyPortalUID: 0,context: {isFollowing: false,ignoreStatus: {isIgnored: false,ignoreFlags: 0},globalIgnoreEndDate: null},psnDisplayName: [],xboxDisplayName: [],fbDisplayName: [],showActivity: false,followerCount: 0,followingUserCount: 0,globalIgnoreEndDate: null,isThemeLight: false,adultMode: false,locale: [],localeInheritDefault: false,lastBanReportId: 0,showGroupMessaging: false,profilePicturePath: [],profileThemeName: [],userTitleDisplay: [],lastViewedConversations: null}}, InvitationSearchResultOfInvitation = {users: [],groups: [],memberships: [],invitations: {results: [],totalResults: 0,hasMore: false,query: {itemsPerPage: 0,currentPage: 0},useTotalResults: false}}, SearchResultOfInvitation = {results: [],totalResults: 0,hasMore: false,query: {itemsPerPage: 0,currentPage: 0},useTotalResults: false}, GroupMemberBriefSet = {groupId: 0,members: []}, GroupMemberBrief = {groupId: 0,membershipType: 0,membershipId: 0,isMember: false,memberType: 0,isOriginalFounder: false}, GroupAttributeCategoryDefinition = {categoryId: 0,key: [],displayName: [],attributes: []}, GroupAttributeDefinition = {attributeId: 0,key: [],displayName: [],defaultMinimum: 0,defaultMaximum: 0,attributeType: 0,minimumLabel: [],maximumLabel: [],tooltips: [],minimum: 0,maximum: 0,stepIncrement: 0,stepCount: 0}, SearchResultOfGroupMemberDetail = {results: [],totalResults: 0,hasMore: false,query: {itemsPerPage: 0,currentPage: 0},useTotalResults: false}, GroupMemberDetail = {user: {membershipId: 0,uniqueName: [],normalizedName: [],displayName: [],profilePicture: 0,profileTheme: 0,userTitle: 0,successMessageFlags: 0,isDeleted: false,about: [],firstAccess: null,lastUpdate: null,legacyPortalUID: 0,context: {isFollowing: false,ignoreStatus: {isIgnored: false,ignoreFlags: 0},globalIgnoreEndDate: null},psnDisplayName: [],xboxDisplayName: [],fbDisplayName: [],showActivity: false,followerCount: 0,followingUserCount: 0,globalIgnoreEndDate: null,isThemeLight: false,adultMode: false,locale: [],localeInheritDefault: false,lastBanReportId: 0,showGroupMessaging: false,profilePicturePath: [],profileThemeName: [],userTitleDisplay: [],lastViewedConversations: null},hasPendingApplication: false,hasRated: false,approvalDate: null,approvedByMembershipId: 0,deactivationDate: null,deactivatedByMembershipId: 0,rating: 0,groupId: 0,membershipType: 0,membershipId: 0,isMember: false,memberType: 0,isOriginalFounder: false}, SearchResultOfGroupBanResponse = {results: [],totalResults: 0,hasMore: false,query: {itemsPerPage: 0,currentPage: 0},useTotalResults: false}, GroupBanResponse = {groupId: 0,lastModifiedMembershipId: 0,lastModifiedDisplayName: [],createdMembershipId: 0,createdDisplayName: [],dateBanned: null,dateExpires: null,comment: [],flags: 0,user: {membershipId: 0,uniqueName: [],normalizedName: [],displayName: [],profilePicture: 0,profileTheme: 0,userTitle: 0,successMessageFlags: 0,isDeleted: false,about: [],firstAccess: null,lastUpdate: null,legacyPortalUID: 0,context: {isFollowing: false,ignoreStatus: {isIgnored: false,ignoreFlags: 0},globalIgnoreEndDate: null},psnDisplayName: [],xboxDisplayName: [],fbDisplayName: [],showActivity: false,followerCount: 0,followingUserCount: 0,globalIgnoreEndDate: null,isThemeLight: false,adultMode: false,locale: [],localeInheritDefault: false,lastBanReportId: 0,showGroupMessaging: false,profilePicturePath: [],profileThemeName: [],userTitleDisplay: [],lastViewedConversations: null}}, IgnoreSearchResult = {tags: [],groups: [],posts: [],users: [],totalResults: 0,hasMore: false,availablePages: 0,currentPage: 0,itemsPerPage: 0}, IgnoreDetailResponseTag = {tagText: [],displayName: [],dateCreated: null,dateExpires: null,dateModified: null,comment: [],flags: 0,reason: 0}, IgnoreDetailResponseGroup = {group: {groupId: 0,name: [],membershipIdCreated: 0,creationDate: null,modificationDate: null,groupType: 0,about: [],isDeleted: false,deletionDate: null,deletedByMembershipId: 0,tags: [],rating: 0,ratingCount: 0,memberCount: 0,pendingMemberCount: 0,isPublic: false,isMembershipClosed: false,isMembershipReviewed: false,isPublicTopicAdminOnly: false,primaryAlliedGroupId: 0,motto: [],clanCallsign: [],allowChat: false,isDefaultPostPublic: false,isDefaultPostAlliance: false,chatSecurity: 0,locale: [],globalIgnoreEndDate: null,avatarImageIndex: 0,founderMembershipId: 0,homepage: 0,membershipOption: 0,defaultPublicity: 0,theme: [],bannerPath: [],avatarPath: [],isAllianceOwner: false,conversationId: 0,clanReviewType: 0,enableInvitationMessagingForAdmins: false},displayName: [],dateCreated: null,dateExpires: null,dateModified: null,comment: [],flags: 0,reason: 0}, IgnoreDetailResponsePost = {post: {downvotes: 0,ratingScore: 0,globalIgnoreEndDate: null,isAnnouncement: false,postId: {},parentPostId: {},topicId: {},lastReplyId: {},threadDepth: 0,category: 0,authorMembershipId: 0,editorMembershipId: 0,subject: [],body: [],urlLinkOrImage: [],metadata: {},flags: 0,creationDate: null,lastModified: null,lastReplyDate: null,editCount: 0,replyCount: 0,topicReplyCount: 0,ratingCount: 0,rating: 0,upvotes: 0,pinned: 0,groupOwnerId: 0,isGroupPrivate: false,parentGroupId: 0,parentTopicId: 0,lockedForReplies: false,tags: [],isTopicBanned: false,actualParentPostId: 0,level: 0,playerSupportFlags: 0,playerSupportMetadata: []},displayName: [],dateCreated: null,dateExpires: null,dateModified: null,comment: [],flags: 0,reason: 0}, Post = {downvotes: 0,ratingScore: 0,globalIgnoreEndDate: null,isAnnouncement: false,postId: {},parentPostId: {},topicId: {},lastReplyId: {},threadDepth: 0,category: 0,authorMembershipId: 0,editorMembershipId: 0,subject: [],body: [],urlLinkOrImage: [],metadata: {},flags: 0,creationDate: null,lastModified: null,lastReplyDate: null,editCount: 0,replyCount: 0,topicReplyCount: 0,ratingCount: 0,rating: 0,upvotes: 0,pinned: 0,groupOwnerId: 0,isGroupPrivate: false,parentGroupId: 0,parentTopicId: 0,lockedForReplies: false,tags: [],isTopicBanned: false,actualParentPostId: 0,level: 0,playerSupportFlags: 0,playerSupportMetadata: []}, IgnoreDetailResponseUser = {user: {membershipId: 0,uniqueName: [],normalizedName: [],displayName: [],profilePicture: 0,profileTheme: 0,userTitle: 0,successMessageFlags: 0,isDeleted: false,about: [],firstAccess: null,lastUpdate: null,legacyPortalUID: 0,context: {isFollowing: false,ignoreStatus: {isIgnored: false,ignoreFlags: 0},globalIgnoreEndDate: null},psnDisplayName: [],xboxDisplayName: [],fbDisplayName: [],showActivity: false,followerCount: 0,followingUserCount: 0,globalIgnoreEndDate: null,isThemeLight: false,adultMode: false,locale: [],localeInheritDefault: false,lastBanReportId: 0,showGroupMessaging: false,profilePicturePath: [],profileThemeName: [],userTitleDisplay: [],lastViewedConversations: null},displayName: [],dateCreated: null,dateExpires: null,dateModified: null,comment: [],flags: 0,reason: 0}, IgnoreDetailResponse = {displayName: [],dateCreated: null,dateExpires: null,dateModified: null,comment: [],flags: 0,reason: 0}, LastReportedItemResponse = {membershipId: 0,reportId: 0,banSourceId: [],banSourceType: 0,banReason: 0}, LegacyGamePlayer = {HaloReach: {Gamertag: [],GamesPlayed: {},ServiceTag: [],EmblemUrl: [],PlayerModelUrl: [],PlayerModelAvatarUrl: [],Status: 0},Halo3Odst: {Gamertag: [],GamesPlayed: {},ServiceTag: [],EmblemUrl: [],PlayerModelUrl: [],PlayerModelAvatarUrl: [],Status: 0},Halo3: {Gamertag: [],GamesPlayed: {},ServiceTag: [],EmblemUrl: [],PlayerModelUrl: [],PlayerModelAvatarUrl: [],Status: 0},Halo2: {Gamertag: [],GamesPlayed: {},ServiceTag: [],EmblemUrl: [],PlayerModelUrl: [],PlayerModelAvatarUrl: [],Status: 0}}, ReportedItemResponse = {moderatedMemberDisplayName: [],reportId: 0,reportedItem: [],reportedItemType: 0,dateCreated: null,dateResolved: null,comment: [],result: 0,reason: 0,moderatorMembershipId: 0,dateAssigned: null,overturnComment: [],resultOverturned: 0,dateOverturned: null,overturnedMembershipId: 0,entity: {},reportCount: 0}, SearchResultOfReportedItemResponse = {results: [],totalResults: 0,hasMore: false,query: {itemsPerPage: 0,currentPage: 0},useTotalResults: false}, UserBanState = {membershipId: 0,isBanned: false,bnetBanExpireDate: null,psnBanExpireDate: null,xblBanExpireDate: null,demonBanExpireDate: null}, StringDatePackage = {Data: [],Date: null}, OfferHistoryResponse = {OfferKey: [],OfferDisplayName: [],OfferDisplayDetail: [],OfferImagePath: [],OfferPurchaseDate: null,OfferQuantity: 0,ConsumableQuantity: 0,RedeemType: 0}, TokenThrottleStateResponse = {IsThrottled: false,ThrottleExpires: null,NumberOfFailedAttemptsToday: 0,MaximumFailedAttemptsPerDay: 0,AgeVerificationState: false}, ClaimResponse = {tokenId: 0,membershipId: 0,membershipType: 0,OfferName: [],OfferClaimText: []}, PlatformMarketplaceCodeResponse = {offerKey: [],deviceType: 0,platformCodeRegion: 0,OfferDistributionDate: null,platformCode: [],OfferDisplayName: [],OfferDisplayDetail: []}, DestinyManifest = {version: [],mobileAssetContentPath: [],mobileGearAssetDataBases: [],mobileWorldContentPaths: [],mobileGearCDN: []}, GearAssetDataBaseDefinition = {version: 0,path: []}, ServiceResultDestinySingleDefinitionResponse = {data: {requestedId: {},activity: {activityHash: {},activityName: [],activityDescription: [],icon: [],releaseIcon: [],releaseTime: 0,activityLevel: 0,completionFlagHash: {},activityPower: 0,minParty: 0,maxParty: 0,maxPlayers: 0,activeRanges: [],destinationHash: {},placeHash: {},activityTypeHash: {},tier: 0,pgcrImage: [],rewards: [],skulls: [],activityOptions: []},activityType: {activityTypeHash: {},identifier: [],activityTypeName: [],activityTypeDescription: [],icon: [],activeBackgroundVirtualPath: [],completedBackgroundVirtualPath: [],hiddenOverrideVirtualPath: [],tooltipBackgroundVirtualPath: [],enlargedActiveBackgroundVirtualPath: [],enlargedCompletedBackgroundVirtualPath: [],enlargedHiddenOverrideVirtualPath: [],enlargedTooltipBackgroundVirtualPath: [],order: 0,statGroup: [],friendlyUrlId: []},classDefinition: {classHash: {},classType: 0,className: [],classNameMale: [],classNameFemale: [],classIdentifier: [],mentorVendorIdentifier: []},gender: {genderHash: {},genderType: 0,genderName: [],genderDescription: []},inventoryBucket: {bucketHash: {},bucketName: [],bucketDescription: [],scope: 0,category: 0,bucketOrder: 0,bucketIdentifier: [],itemCount: 0,location: 0,hasTransferDestination: false},inventoryItem: {itemHash: {},itemName: [],itemDescription: [],icon: [],secondaryIcon: [],displaySource: [],actionName: [],actionDescription: [],hasAction: false,deleteOnAction: false,tierTypeName: [],tierType: 0,itemTypeName: [],bucketTypeHash: {},primaryBaseStatHash: {},stats: [],perkHashes: [],itemIdentifier: [],specialItemType: 0,talentGridHash: {},equippingBlock: {weaponSandboxPatternIndex: 0,gearArtArrangementIndex: 0,defaultDyes: [],lockedDyes: [],customDyes: [],customDyeExpression: {},weaponPatternHash: {}},hasGeometry: false,statGroupHash: {},itemLevels: [],qualityLevel: 0,equippable: false,instanced: false,progressionRewards: [],rewardItemHash: {},values: [],itemTypeIdentifier: [],itemType: 0,itemSubType: 0,classType: 0,sources: [],rewardReferences: {sheets: [],maps: [],activities: [],actions: [],vendors: [],overrideSource: {sourceData: {spawnIndexes: [],isVisible: false,sourceHashes: []}},spawnAttributes: [],statSets: []},sourceHashes: [],nonTransferrable: false,originalItemIdentifier: [],originalDisplayStringId: [],exclusive: 0,maxStackSize: 0},progression: {progressionHash: {},name: [],scope: 0,repeatLastStep: false,icon: [],identifier: [],description: [],source: [],steps: []},race: {raceHash: {},raceType: 0,raceName: [],raceNameMale: [],raceNameFemale: [],raceDescription: []},stat: {statHash: {},statName: [],statDescription: [],icon: [],statIdentifier: [],interpolationPoints: [],qualityToValuePoints: [],slotAllocations: [],interpolate: false},talentGrid: {gridHash: {},maxGridLevel: 0,gridLevelPerColumn: 0,progressionHash: {},nodes: [],calcMaxGridLevel: 0,calcProgressToMaxLevel: 0},statGroup: {statGroupHash: {},maximumValue: 0,uiPosition: 0,scaledStats: [],overrides: []},unlockFlag: {flagHash: {},name: [],index: 0,displayName: [],displayDescription: [],calendarEvents: [],dateRanges: [],isOffer: false,unlockType: 0},vendor: {summary: {vendorHash: {},vendorName: [],vendorDescription: [],vendorIcon: [],vendorOrder: 0,factionName: [],factionIcon: [],factionHash: {},factionDescription: [],resetIntervalMinutes: 0,resetOffsetMinutes: 0,vendorIdentifier: [],positionX: 0,positionY: 0,transitionNodeIdentifier: [],visible: false,progressionHash: {},sellString: [],buyString: [],vendorPortrait: [],vendorBanner: [],unlockFlagHashes: [],enabledUnlockFlagHashes: [],mapSectionIdentifier: [],mapSectionName: [],mapSectionOrder: 0,showOnMap: false,eventHash: {},vendorCategoryHash: {}},acceptedItems: [],categories: [],sales: [],unlockRanges: []},destination: {destinationHash: {},destinationName: [],destinationDescription: [],icon: [],placeHash: {},destinationIdentifier: [],locationIdentifier: [],location: []},place: {placeHash: {},placeName: [],placeDescription: [],icon: []},directorBook: {bookHash: {},bookName: [],bookDescription: [],bookNumber: [],nodes: [],connections: [],bookIdentifier: [],visible: false,isOverview: false,transitionNodes: [],notificationNodes: [],urlFriendlyName: [],imagePaths: [],isDefaultExpression: {},isVisibleExpression: {},destinationHash: {},tileMap: {tileImages: [],numColumns: 0,numRows: 0,tileWidth: 0,tileHeight: 0},mapImage: []},materialRequirementSet: {setHash: {},materials: []},sandboxPerk: {perkHash: {},displayName: [],displayDescription: [],displayIcon: [],perkIdentifier: [],isDisplayable: false,perkGroups: {weaponPerformance: 0,impactEffects: 0,guardianAttributes: 0,lightAbilities: 0,damageTypes: 0}},artDye: {artDyeHash: {},artDyeName: [],index: 0,dyeManifestHash: {},dyeManifestName: []},artDyeChannel: {channelHash: {},index: 0,channelName: []},activityBundle: {bundleHash: {},activityName: [],activityDescription: [],icon: [],releaseIcon: [],releaseTime: 0,destinationHash: {},placeHash: {},activityTypeHash: {},activityHashes: []},gearAsset: {GearAssets: [],content: []}},definitions: {destinations: [],places: [],activityTypes: [],items: [],buckets: [],stats: [],perks: [],talentGrids: [],statGroups: [],progressionMappings: [],sources: [],progressions: [],materialRequirements: [],factions: [],events: [],vendorSummaries: [],vendorCategories: [],activityBundles: [],books: []}}, DestinySingleDefinitionResponse = {requestedId: {},activity: {activityHash: {},activityName: [],activityDescription: [],icon: [],releaseIcon: [],releaseTime: 0,activityLevel: 0,completionFlagHash: {},activityPower: 0,minParty: 0,maxParty: 0,maxPlayers: 0,activeRanges: [],destinationHash: {},placeHash: {},activityTypeHash: {},tier: 0,pgcrImage: [],rewards: [],skulls: [],activityOptions: []},activityType: {activityTypeHash: {},identifier: [],activityTypeName: [],activityTypeDescription: [],icon: [],activeBackgroundVirtualPath: [],completedBackgroundVirtualPath: [],hiddenOverrideVirtualPath: [],tooltipBackgroundVirtualPath: [],enlargedActiveBackgroundVirtualPath: [],enlargedCompletedBackgroundVirtualPath: [],enlargedHiddenOverrideVirtualPath: [],enlargedTooltipBackgroundVirtualPath: [],order: 0,statGroup: [],friendlyUrlId: []},classDefinition: {classHash: {},classType: 0,className: [],classNameMale: [],classNameFemale: [],classIdentifier: [],mentorVendorIdentifier: []},gender: {genderHash: {},genderType: 0,genderName: [],genderDescription: []},inventoryBucket: {bucketHash: {},bucketName: [],bucketDescription: [],scope: 0,category: 0,bucketOrder: 0,bucketIdentifier: [],itemCount: 0,location: 0,hasTransferDestination: false},inventoryItem: {itemHash: {},itemName: [],itemDescription: [],icon: [],secondaryIcon: [],displaySource: [],actionName: [],actionDescription: [],hasAction: false,deleteOnAction: false,tierTypeName: [],tierType: 0,itemTypeName: [],bucketTypeHash: {},primaryBaseStatHash: {},stats: [],perkHashes: [],itemIdentifier: [],specialItemType: 0,talentGridHash: {},equippingBlock: {weaponSandboxPatternIndex: 0,gearArtArrangementIndex: 0,defaultDyes: [],lockedDyes: [],customDyes: [],customDyeExpression: {},weaponPatternHash: {}},hasGeometry: false,statGroupHash: {},itemLevels: [],qualityLevel: 0,equippable: false,instanced: false,progressionRewards: [],rewardItemHash: {},values: [],itemTypeIdentifier: [],itemType: 0,itemSubType: 0,classType: 0,sources: [],rewardReferences: {sheets: [],maps: [],activities: [],actions: [],vendors: [],overrideSource: {sourceData: {spawnIndexes: [],isVisible: false,sourceHashes: []}},spawnAttributes: [],statSets: []},sourceHashes: [],nonTransferrable: false,originalItemIdentifier: [],originalDisplayStringId: [],exclusive: 0,maxStackSize: 0},progression: {progressionHash: {},name: [],scope: 0,repeatLastStep: false,icon: [],identifier: [],description: [],source: [],steps: []},race: {raceHash: {},raceType: 0,raceName: [],raceNameMale: [],raceNameFemale: [],raceDescription: []},stat: {statHash: {},statName: [],statDescription: [],icon: [],statIdentifier: [],interpolationPoints: [],qualityToValuePoints: [],slotAllocations: [],interpolate: false},talentGrid: {gridHash: {},maxGridLevel: 0,gridLevelPerColumn: 0,progressionHash: {},nodes: [],calcMaxGridLevel: 0,calcProgressToMaxLevel: 0},statGroup: {statGroupHash: {},maximumValue: 0,uiPosition: 0,scaledStats: [],overrides: []},unlockFlag: {flagHash: {},name: [],index: 0,displayName: [],displayDescription: [],calendarEvents: [],dateRanges: [],isOffer: false,unlockType: 0},vendor: {summary: {vendorHash: {},vendorName: [],vendorDescription: [],vendorIcon: [],vendorOrder: 0,factionName: [],factionIcon: [],factionHash: {},factionDescription: [],resetIntervalMinutes: 0,resetOffsetMinutes: 0,vendorIdentifier: [],positionX: 0,positionY: 0,transitionNodeIdentifier: [],visible: false,progressionHash: {},sellString: [],buyString: [],vendorPortrait: [],vendorBanner: [],unlockFlagHashes: [],enabledUnlockFlagHashes: [],mapSectionIdentifier: [],mapSectionName: [],mapSectionOrder: 0,showOnMap: false,eventHash: {},vendorCategoryHash: {}},acceptedItems: [],categories: [],sales: [],unlockRanges: []},destination: {destinationHash: {},destinationName: [],destinationDescription: [],icon: [],placeHash: {},destinationIdentifier: [],locationIdentifier: [],location: []},place: {placeHash: {},placeName: [],placeDescription: [],icon: []},directorBook: {bookHash: {},bookName: [],bookDescription: [],bookNumber: [],nodes: [],connections: [],bookIdentifier: [],visible: false,isOverview: false,transitionNodes: [],notificationNodes: [],urlFriendlyName: [],imagePaths: [],isDefaultExpression: {},isVisibleExpression: {},destinationHash: {},tileMap: {tileImages: [],numColumns: 0,numRows: 0,tileWidth: 0,tileHeight: 0},mapImage: []},materialRequirementSet: {setHash: {},materials: []},sandboxPerk: {perkHash: {},displayName: [],displayDescription: [],displayIcon: [],perkIdentifier: [],isDisplayable: false,perkGroups: {weaponPerformance: 0,impactEffects: 0,guardianAttributes: 0,lightAbilities: 0,damageTypes: 0}},artDye: {artDyeHash: {},artDyeName: [],index: 0,dyeManifestHash: {},dyeManifestName: []},artDyeChannel: {channelHash: {},index: 0,channelName: []},activityBundle: {bundleHash: {},activityName: [],activityDescription: [],icon: [],releaseIcon: [],releaseTime: 0,destinationHash: {},placeHash: {},activityTypeHash: {},activityHashes: []},gearAsset: {GearAssets: [],content: []}}, DestinyActivityDefinition = {activityHash: {},activityName: [],activityDescription: [],icon: [],releaseIcon: [],releaseTime: 0,activityLevel: 0,completionFlagHash: {},activityPower: 0,minParty: 0,maxParty: 0,maxPlayers: 0,activeRanges: [],destinationHash: {},placeHash: {},activityTypeHash: {},tier: 0,pgcrImage: [],rewards: [],skulls: [],activityOptions: []}, DateRange = {start: null,end: null}, DestinyActivityRewardDefinition = {rewardText: [],rewardItems: [],rewardUnlock: {}}, DestinyItemQuantity = {itemHash: {},value: 0}, DestinySkullDefinition = {displayName: [],description: [],icon: []}, DestinyActivityOptionSet = {unlockExpression: {},entityArrayProperties: [],entityValueProperties: [],booleanProperties: [],unknownProperties: []}, DestinyActivityOptionEntityMappingArray = {optionRawValues: [],entityType: [],entityHashes: [],optionName: [],optionHash: {},optionType: []}, DestinyActivityOptionEntityMappingValue = {optionRawValue: 0,entityType: [],entityHashes: [],optionName: [],optionHash: {},optionType: []}, DestinyActivityBooleanOption = {optionRawValue: false,optionName: [],optionHash: {},optionType: []}, DestinyActivityOption = {optionName: [],optionHash: {},optionType: []}, DestinyActivityTypeDefinition = {activityTypeHash: {},identifier: [],activityTypeName: [],activityTypeDescription: [],icon: [],activeBackgroundVirtualPath: [],completedBackgroundVirtualPath: [],hiddenOverrideVirtualPath: [],tooltipBackgroundVirtualPath: [],enlargedActiveBackgroundVirtualPath: [],enlargedCompletedBackgroundVirtualPath: [],enlargedHiddenOverrideVirtualPath: [],enlargedTooltipBackgroundVirtualPath: [],order: 0,statGroup: [],friendlyUrlId: []}, DestinyInventoryBucketDefinition = {bucketHash: {},bucketName: [],bucketDescription: [],scope: 0,category: 0,bucketOrder: 0,bucketIdentifier: [],itemCount: 0,location: 0,hasTransferDestination: false}, DestinyInventoryItemDefinition = {itemHash: {},itemName: [],itemDescription: [],icon: [],secondaryIcon: [],displaySource: [],actionName: [],actionDescription: [],hasAction: false,deleteOnAction: false,tierTypeName: [],tierType: 0,itemTypeName: [],bucketTypeHash: {},primaryBaseStatHash: {},stats: [],perkHashes: [],itemIdentifier: [],specialItemType: 0,talentGridHash: {},equippingBlock: {weaponSandboxPatternIndex: 0,gearArtArrangementIndex: 0,defaultDyes: [],lockedDyes: [],customDyes: [],customDyeExpression: {},weaponPatternHash: {}},hasGeometry: false,statGroupHash: {},itemLevels: [],qualityLevel: 0,equippable: false,instanced: false,progressionRewards: [],rewardItemHash: {},values: [],itemTypeIdentifier: [],itemType: 0,itemSubType: 0,classType: 0,sources: [],rewardReferences: {sheets: [],maps: [],activities: [],actions: [],vendors: [],overrideSource: {sourceData: {spawnIndexes: [],isVisible: false,sourceHashes: []}},spawnAttributes: [],statSets: []},sourceHashes: [],nonTransferrable: false,originalItemIdentifier: [],originalDisplayStringId: [],exclusive: 0,maxStackSize: 0}, DestinyEquippingBlockDefinition = {weaponSandboxPatternIndex: 0,gearArtArrangementIndex: 0,defaultDyes: [],lockedDyes: [],customDyes: [],customDyeExpression: {},weaponPatternHash: {}}, DyeReference = {channelHash: {},dyeHash: {}}, RewardItemReferenceSet = {sheets: [],maps: [],activities: [],actions: [],vendors: [],overrideSource: {sourceData: {spawnIndexes: [],isVisible: false,sourceHashes: []}},spawnAttributes: [],statSets: []}, RewardSourceData = {spawnIndexes: [],isVisible: false,sourceHashes: []}, RewardItemSheetReference = {sheetHash: {},sheetEntryIndex: 0,itemListHash: {},valueIndex: 0,adjustorHash: {},exclusivity: 0}, RewardItemMappedReference = {mappingHash: {},sheetReferenceIndex: 0,sourceData: {spawnIndexes: [],isVisible: false,sourceHashes: []},entryType: 0}, RewardItemActivityReference = {activityHash: {},mapReferenceIndex: 0,sourceData: {spawnIndexes: [],isVisible: false,sourceHashes: []}}, RewardItemActionReference = {sourceItemHash: {},specific: false,sheetReferenceIndex: 0,sourceData: {spawnIndexes: [],isVisible: false,sourceHashes: []}}, RewardItemVendorReference = {vendorHash: {},vendorItemIndex: 0,sourceData: {spawnIndexes: [],isVisible: false,sourceHashes: []}}, ItemSpawnAttribute = {statSetIndex: 0,levelRequired: 0}, ItemSpawnStatSet = {itemLevel: 0,quality: 0,stats: [],minQuality: 0,maxQuality: 0,minItemLevel: 0,maxItemLevel: 0}, DestinyInventoryItemStatDefinition = {statHash: {},value: 0,minimum: 0,maximum: 0}, DestinyItemSourceDefinition = {expansionIndex: 0,level: 0,minQuality: 0,maxQuality: 0,minLevelRequired: 0,maxLevelRequired: 0,exclusivity: 0,computedStats: [],sourceHashes: [],spawnIndexes: []}, DestinyProgressionDefinition = {progressionHash: {},name: [],scope: 0,repeatLastStep: false,icon: [],identifier: [],description: [],source: [],steps: []}, DestinyProgressionStepDefinition = {stepName: [],progressTotal: 0}, DestinyStatDefinition = {statHash: {},statName: [],statDescription: [],icon: [],statIdentifier: [],interpolationPoints: [],qualityToValuePoints: [],slotAllocations: [],interpolate: false}, InterpolationPoint = {value: 0,weight: 0}, DestinySlotAllocationDefinition = {roundUp: false,slotHash: {},weight: 0}, DestinyTalentGridDefinition = {gridHash: {},maxGridLevel: 0,gridLevelPerColumn: 0,progressionHash: {},nodes: [],calcMaxGridLevel: 0,calcProgressToMaxLevel: 0}, DestinyTalentNodeDefinition = {nodeIndex: 0,nodeHash: {},row: 0,column: 0,prerequisiteNodeIndexes: [],binaryPairNodeIndex: 0,autoUnlocks: false,lastStepRepeats: false,isRandom: false,randomActivationRequirement: {gridLevel: 0,materialRequirementHashes: []},isRandomRepurchasable: false,steps: [],exlusiveWithNodes: [],randomStartProgressionBarAtProgression: 0}, DestinyNodeActivationRequirement = {gridLevel: 0,materialRequirementHashes: []}, DestinyNodeStepDefinition = {stepIndex: 0,nodeStepHash: {},nodeStepName: [],nodeStepDescription: [],interactionDescription: [],icon: [],damageType: 0,activationRequirement: {gridLevel: 0,materialRequirementHashes: []},canActivateNextStep: false,nextStepIndex: 0,isNextStepRandom: false,perkHashes: [],startProgressionBarAtProgress: 0,statHashes: [],affectsQuality: false,stepGroups: {weaponPerformance: 0,impactEffects: 0,guardianAttributes: 0,lightAbilities: 0,damageTypes: 0},trueStepIndex: 0,truePropertyIndex: 0,affectsLevel: false,visibility: {minLevel: 0,maxLevel: 0,unlocks: []}}, DestinyTalentNodeStepGroups = {weaponPerformance: 0,impactEffects: 0,guardianAttributes: 0,lightAbilities: 0,damageTypes: 0}, DestinyNodeVisibilityDefinition = {minLevel: 0,maxLevel: 0,unlocks: []}, DestinyStatGroupDefinition = {statGroupHash: {},maximumValue: 0,uiPosition: 0,scaledStats: [],overrides: []}, DestinyStatDisplayDefinition = {statHash: {},maximumValue: 0,displayAsNumeric: false,displayInterpolation: []}, DestinyStatOverrideDefinition = {statHash: {},displayName: [],displayDescription: [],displayIcon: []}, DestinyUnlockFlagDefinition = {flagHash: {},name: [],index: 0,displayName: [],displayDescription: [],calendarEvents: [],dateRanges: [],isOffer: false,unlockType: 0}, DestinyCalendarEventDefinition = {eventDate: null,unlockState: 0}, DestinyVendorDefinition = {summary: {vendorHash: {},vendorName: [],vendorDescription: [],vendorIcon: [],vendorOrder: 0,factionName: [],factionIcon: [],factionHash: {},factionDescription: [],resetIntervalMinutes: 0,resetOffsetMinutes: 0,vendorIdentifier: [],positionX: 0,positionY: 0,transitionNodeIdentifier: [],visible: false,progressionHash: {},sellString: [],buyString: [],vendorPortrait: [],vendorBanner: [],unlockFlagHashes: [],enabledUnlockFlagHashes: [],mapSectionIdentifier: [],mapSectionName: [],mapSectionOrder: 0,showOnMap: false,eventHash: {},vendorCategoryHash: {}},acceptedItems: [],categories: [],sales: [],unlockRanges: []}, DestinyVendorSummaryDefinition = {vendorHash: {},vendorName: [],vendorDescription: [],vendorIcon: [],vendorOrder: 0,factionName: [],factionIcon: [],factionHash: {},factionDescription: [],resetIntervalMinutes: 0,resetOffsetMinutes: 0,vendorIdentifier: [],positionX: 0,positionY: 0,transitionNodeIdentifier: [],visible: false,progressionHash: {},sellString: [],buyString: [],vendorPortrait: [],vendorBanner: [],unlockFlagHashes: [],enabledUnlockFlagHashes: [],mapSectionIdentifier: [],mapSectionName: [],mapSectionOrder: 0,showOnMap: false,eventHash: {},vendorCategoryHash: {}}, DestinyVendorAcceptedItemDefinition = {acceptedBucket: {},destinationBucket: {}}, DestinySaleCategoryDefinition = {categoryHash: {},displayTitle: [],overlayCurrencyItemHash: {},quantityAvailable: 0,showUnavailableItems: false,hideIfNoCurrency: false,buyStringOverride: [],disabledDescription: [],overlayTitle: [],overlayDescription: [],overlayChoice: [],overlayIcon: [],hasOverlay: false}, DestinyVendorItemSummaryDefinition = {priceOverride: false,itemHash: {},bucketHash: {},categoryHash: {},categoryTitle: [],quantityPurchased: 0,currencies: [],price: 0,currencyHash: {},hasCurrency: false}, DestinyVendorItemCurrencyDefinition = {itemHash: {},quantity: 0}, DestinyDestinationDefinition = {destinationHash: {},destinationName: [],destinationDescription: [],icon: [],placeHash: {},destinationIdentifier: [],locationIdentifier: [],location: []}, DestinyPlaceDefinition = {placeHash: {},placeName: [],placeDescription: [],icon: []}, DestinyDirectorBookDefinition = {bookHash: {},bookName: [],bookDescription: [],bookNumber: [],nodes: [],connections: [],bookIdentifier: [],visible: false,isOverview: false,transitionNodes: [],notificationNodes: [],urlFriendlyName: [],imagePaths: [],isDefaultExpression: {},isVisibleExpression: {},destinationHash: {},tileMap: {tileImages: [],numColumns: 0,numRows: 0,tileWidth: 0,tileHeight: 0},mapImage: []}, TileMap = {tileImages: [],numColumns: 0,numRows: 0,tileWidth: 0,tileHeight: 0}, DestinyDirectorNodeDefinition = {nodeDefinitionHash: {},styleHash: {},positionX: 0,positionY: 0,positionZ: 0,displayLabel: [],overrideDisplayDescription: [],overrideDisplayIcon: [],overrideDisplayName: [],activityBundleHashes: [],states: [],uiModifier: 0}, DestinyDirectorNodeStateDefinition = {state: 0,expression: {}}, DestinyDirectorConnectionDefinition = {sourceNodeIndex: 0,destinationNodeIndex: 0}, DestinyDirectorTransitionNodeDefinition = {identifier: [],positionX: 0,positionY: 0,transitionBookHash: {},transitionType: 0,width: 0,height: 0,parallaxIndex: 0,imagePath: [],alphaImagePath: [],destinationBackgroundImagePath: [],destinationDetailImagePath: [],destinationContextImagePath: [],label: [],tileMap: {tileImages: [],numColumns: 0,numRows: 0,tileWidth: 0,tileHeight: 0},mapImage: []}, DestinyDirectorNotificationNodeDefinition = {identifier: [],transitionNodeIdentifier: [],positionX: 0,positionY: 0,width: 0,height: 0,backgroundImagePath: [],showCount: false,activityBundleHashes: [],vendorHashes: []}, DestinyMaterialRequirementSetDefinition = {setHash: {},materials: []}, DestinyMaterialRequirement = {itemHash: {},deleteOnAction: false,count: 0,omitFromRequirements: false}, DestinySandboxPerkDefinition = {perkHash: {},displayName: [],displayDescription: [],displayIcon: [],perkIdentifier: [],isDisplayable: false,perkGroups: {weaponPerformance: 0,impactEffects: 0,guardianAttributes: 0,lightAbilities: 0,damageTypes: 0}}, DestinyArtDyeReferenceDefinition = {artDyeHash: {},artDyeName: [],index: 0,dyeManifestHash: {},dyeManifestName: []}, DestinyArtDyeChannelDefinition = {channelHash: {},index: 0,channelName: []}, DestinyActivityBundleDefinition = {bundleHash: {},activityName: [],activityDescription: [],icon: [],releaseIcon: [],releaseTime: 0,destinationHash: {},placeHash: {},activityTypeHash: {},activityHashes: []}, DestinyGearAssetsDefinition = {GearAssets: [],content: []}, DestinyGearPlatformContent = {platform: [],GeometryAssets: [],TextureAssets: [],PlateRegions: [],MaleIndexSet: {textures: [],geometry: [],plate_regions: []},DyeIndexSet: {textures: [],geometry: [],plate_regions: []},FemaleIndexSet: {textures: [],geometry: [],plate_regions: []},RegionIndexSets: []}, DestinyGearAssetsIndexSet = {textures: [],geometry: [],plate_regions: []}, DefinitionSetDestinySingleDefinitionResponse = {destinations: [],places: [],activityTypes: [],items: [],buckets: [],stats: [],perks: [],talentGrids: [],statGroups: [],progressionMappings: [],sources: [],progressions: [],materialRequirements: [],factions: [],events: [],vendorSummaries: [],vendorCategories: [],activityBundles: [],books: []}, DestinyProgressionMappingDefinition = {mappingHash: {},displayName: [],description: [],displayUnits: [],progressionHashes: []}, DestinyRewardSourceDefinition = {sourceHash: {},category: 0,identifier: [],sourceName: [],description: [],icon: []}, DestinyFactionDefinition = {factionHash: {},factionName: [],factionDescription: [],factionIcon: [],progressionHash: {}}, DestinySpecialEventDefinition = {eventHash: {},eventIdentifier: [],backgroundImageWeb: [],title: [],subtitle: [],link: [],icon: [],progressionHash: {},vendorHash: {},liveTileTag: [],activeUnlockFlagHashes: [],dateRanges: []}, DestinyVendorCategoryDefinition = {categoryHash: {},order: 0,categoryName: [],mobileBannerPath: [],identifier: []}, ServiceResultDestinyAccount = {data: {membershipId: 0,membershipType: 0,characters: [],clanName: [],clanTag: [],inventory: {buckets: [],currencies: []},grimoireScore: 0},definitions: {races: [],genders: [],classes: [],activities: [],destinations: [],places: [],activityTypes: [],items: [],buckets: [],stats: [],perks: [],talentGrids: [],statGroups: [],progressionMappings: [],sources: [],progressions: [],materialRequirements: [],flags: []}}, DestinyAccount = {membershipId: 0,membershipType: 0,characters: [],clanName: [],clanTag: [],inventory: {buckets: [],currencies: []},grimoireScore: 0}, DestinyInventory = {buckets: [],currencies: []}, DestinyInventoryBucket = {items: [],bucketHash: {}}, DestinyInventoryItem = {itemHash: {},bindStatus: 0,isEquipped: false,itemInstanceId: 0,itemLevel: 0,stackSize: 0,qualityLevel: 0,stats: [],primaryStat: {statHash: {},value: 0,maximumValue: 0},canEquip: false,equipRequiredLevel: 0,unlockFlagHashRequiredToEquip: {},cannotEquipReason: 0,damageType: 0,damageTypeNodeIndex: 0,damageTypeStepIndex: 0,progression: {dailyProgress: 0,weeklyProgress: 0,currentProgress: 0,level: 0,step: 0,progressToNextLevel: 0,nextLevelAt: 0,progressionHash: {}},talentGridHash: {},nodes: [],useCustomDyes: false,artRegions: [],isEquipment: false,isGridComplete: false,perks: [],location: 0,transferStatus: 0,locked: false,lockable: false}, DestinyStat = {statHash: {},value: 0,maximumValue: 0}, DestinyTalentNodeSummary = {isActivated: false,stepIndex: 0,nodeHash: {}}, DestinyTalentPerk = {iconPath: [],perkHash: {},isActive: false}, DestinyCharacterSummary = {characterBase: {membershipId: 0,membershipType: 0,characterId: 0,dateLastPlayed: null,minutesPlayedThisSession: 0,minutesPlayedTotal: 0,powerLevel: 0,raceHash: {},genderHash: {},classHash: {},currentActivityHash: {},lastCompletedStoryHash: {},stats: [],customization: {personality: {},face: {},skinColor: {},lipColor: {},eyeColor: {},hairColor: {},featureColor: {},decalColor: {},wearHelmet: false,hairIndex: 0,featureIndex: 0,decalIndex: 0},grimoireScore: {},peerView: {equipment: []},genderType: 0,classType: 0,buildStatGroupHash: {}},levelProgression: {dailyProgress: 0,weeklyProgress: 0,currentProgress: 0,level: 0,step: 0,progressToNextLevel: 0,nextLevelAt: 0,progressionHash: {}},emblemPath: [],backgroundPath: [],emblemHash: {},characterLevel: 0,baseCharacterLevel: 0,isPrestigeLevel: false,percentToNextLevel: {}}, DestinyCharacterBase = {membershipId: 0,membershipType: 0,characterId: 0,dateLastPlayed: null,minutesPlayedThisSession: 0,minutesPlayedTotal: 0,powerLevel: 0,raceHash: {},genderHash: {},classHash: {},currentActivityHash: {},lastCompletedStoryHash: {},stats: [],customization: {personality: {},face: {},skinColor: {},lipColor: {},eyeColor: {},hairColor: {},featureColor: {},decalColor: {},wearHelmet: false,hairIndex: 0,featureIndex: 0,decalIndex: 0},grimoireScore: {},peerView: {equipment: []},genderType: 0,classType: 0,buildStatGroupHash: {}}, DestinyCharacterCustomization = {personality: {},face: {},skinColor: {},lipColor: {},eyeColor: {},hairColor: {},featureColor: {},decalColor: {},wearHelmet: false,hairIndex: 0,featureIndex: 0,decalIndex: 0}, DestinyCharacterPeerView = {equipment: []}, DestinyItemPeerView = {itemHash: {},dyes: []}, DefinitionSetDestinyAccount = {races: [],genders: [],classes: [],activities: [],destinations: [],places: [],activityTypes: [],items: [],buckets: [],stats: [],perks: [],talentGrids: [],statGroups: [],progressionMappings: [],sources: [],progressions: [],materialRequirements: [],flags: []}, ServiceResultDestinyInventoryBuckets = {data: {buckets: []},definitions: {buckets: [],items: [],stats: [],perks: [],talentGrids: [],statGroups: [],progressionMappings: [],sources: [],progressions: [],materialRequirements: [],flags: []}}, DestinyInventoryBuckets = {buckets: []}, DefinitionSetDestinyInventoryBuckets = {buckets: [],items: [],stats: [],perks: [],talentGrids: [],statGroups: [],progressionMappings: [],sources: [],progressions: [],materialRequirements: [],flags: []}, ServiceResultDestinyCharacterSummary = {data: {characterBase: {membershipId: 0,membershipType: 0,characterId: 0,dateLastPlayed: null,minutesPlayedThisSession: 0,minutesPlayedTotal: 0,powerLevel: 0,raceHash: {},genderHash: {},classHash: {},currentActivityHash: {},lastCompletedStoryHash: {},stats: [],customization: {personality: {},face: {},skinColor: {},lipColor: {},eyeColor: {},hairColor: {},featureColor: {},decalColor: {},wearHelmet: false,hairIndex: 0,featureIndex: 0,decalIndex: 0},grimoireScore: {},peerView: {equipment: []},genderType: 0,classType: 0,buildStatGroupHash: {}},levelProgression: {dailyProgress: 0,weeklyProgress: 0,currentProgress: 0,level: 0,step: 0,progressToNextLevel: 0,nextLevelAt: 0,progressionHash: {}},emblemPath: [],backgroundPath: [],emblemHash: {},characterLevel: 0,baseCharacterLevel: 0,isPrestigeLevel: false,percentToNextLevel: {}},definitions: {races: [],genders: [],classes: [],activities: [],destinations: [],places: [],activityTypes: [],items: [],buckets: [],stats: [],perks: [],talentGrids: [],statGroups: [],progressionMappings: [],sources: [],progressions: [],materialRequirements: []}}, DefinitionSetDestinyCharacterSummary = {races: [],genders: [],classes: [],activities: [],destinations: [],places: [],activityTypes: [],items: [],buckets: [],stats: [],perks: [],talentGrids: [],statGroups: [],progressionMappings: [],sources: [],progressions: [],materialRequirements: []}, ServiceResultDestinyCharacter = {data: {characterBase: {membershipId: 0,membershipType: 0,characterId: 0,dateLastPlayed: null,minutesPlayedThisSession: 0,minutesPlayedTotal: 0,powerLevel: 0,raceHash: {},genderHash: {},classHash: {},currentActivityHash: {},lastCompletedStoryHash: {},stats: [],customization: {personality: {},face: {},skinColor: {},lipColor: {},eyeColor: {},hairColor: {},featureColor: {},decalColor: {},wearHelmet: false,hairIndex: 0,featureIndex: 0,decalIndex: 0},grimoireScore: {},peerView: {equipment: []},genderType: 0,classType: 0,buildStatGroupHash: {}},activities: {dateActivityStarted: null,available: []},directorNodeStates: [],visibleBookHashes: [],defaultBookHash: {},inventory: {buckets: [],currencies: []},progressions: {progressions: [],levelProgression: {dailyProgress: 0,weeklyProgress: 0,currentProgress: 0,level: 0,step: 0,progressToNextLevel: 0,nextLevelAt: 0,progressionHash: {}},baseCharacterLevel: 0,isPrestigeLevel: false,factionProgressionHash: {},percentToNextLevel: {}},customDyes: [],characterLevel: 0},definitions: {books: [],destinations: [],activityBundles: [],places: [],activityTypes: [],races: [],genders: [],classes: [],activities: [],items: [],buckets: [],stats: [],perks: [],talentGrids: [],statGroups: [],progressionMappings: [],sources: [],progressions: [],materialRequirements: [],flags: []}}, DestinyCharacter = {characterBase: {membershipId: 0,membershipType: 0,characterId: 0,dateLastPlayed: null,minutesPlayedThisSession: 0,minutesPlayedTotal: 0,powerLevel: 0,raceHash: {},genderHash: {},classHash: {},currentActivityHash: {},lastCompletedStoryHash: {},stats: [],customization: {personality: {},face: {},skinColor: {},lipColor: {},eyeColor: {},hairColor: {},featureColor: {},decalColor: {},wearHelmet: false,hairIndex: 0,featureIndex: 0,decalIndex: 0},grimoireScore: {},peerView: {equipment: []},genderType: 0,classType: 0,buildStatGroupHash: {}},activities: {dateActivityStarted: null,available: []},directorNodeStates: [],visibleBookHashes: [],defaultBookHash: {},inventory: {buckets: [],currencies: []},progressions: {progressions: [],levelProgression: {dailyProgress: 0,weeklyProgress: 0,currentProgress: 0,level: 0,step: 0,progressToNextLevel: 0,nextLevelAt: 0,progressionHash: {}},baseCharacterLevel: 0,isPrestigeLevel: false,factionProgressionHash: {},percentToNextLevel: {}},customDyes: [],characterLevel: 0}, DestinyCharacterActivities = {dateActivityStarted: null,available: []}, DestinyActivity = {activityHash: {},isNew: false,canLead: false,canJoin: false,isCompleted: false,isVisible: false}, DestinyCharacterProgressions = {progressions: [],levelProgression: {dailyProgress: 0,weeklyProgress: 0,currentProgress: 0,level: 0,step: 0,progressToNextLevel: 0,nextLevelAt: 0,progressionHash: {}},baseCharacterLevel: 0,isPrestigeLevel: false,factionProgressionHash: {},percentToNextLevel: {}}, DefinitionSetDestinyCharacter = {books: [],destinations: [],activityBundles: [],places: [],activityTypes: [],races: [],genders: [],classes: [],activities: [],items: [],buckets: [],stats: [],perks: [],talentGrids: [],statGroups: [],progressionMappings: [],sources: [],progressions: [],materialRequirements: [],flags: []}, ServiceResultDestinyInventory = {data: {buckets: [],currencies: []},definitions: {items: [],buckets: [],stats: [],perks: [],talentGrids: [],statGroups: [],progressionMappings: [],sources: [],progressions: [],materialRequirements: [],flags: []}}, DefinitionSetDestinyInventory = {items: [],buckets: [],stats: [],perks: [],talentGrids: [],statGroups: [],progressionMappings: [],sources: [],progressions: [],materialRequirements: [],flags: []}, ServiceResultDestinyInventoryItemDetail = {data: {item: {itemHash: {},bindStatus: 0,isEquipped: false,itemInstanceId: 0,itemLevel: 0,stackSize: 0,qualityLevel: 0,stats: [],primaryStat: {statHash: {},value: 0,maximumValue: 0},canEquip: false,equipRequiredLevel: 0,unlockFlagHashRequiredToEquip: {},cannotEquipReason: 0,damageType: 0,damageTypeNodeIndex: 0,damageTypeStepIndex: 0,progression: {dailyProgress: 0,weeklyProgress: 0,currentProgress: 0,level: 0,step: 0,progressToNextLevel: 0,nextLevelAt: 0,progressionHash: {}},talentGridHash: {},nodes: [],useCustomDyes: false,artRegions: [],isEquipment: false,isGridComplete: false,perks: [],location: 0,transferStatus: 0,locked: false,lockable: false},talentNodes: [],statsOnNodes: [],characterStatsToDisplay: [],materialItemHashes: []},definitions: {items: [],buckets: [],stats: [],perks: [],talentGrids: [],statGroups: [],progressionMappings: [],sources: [],progressions: [],materialRequirements: [],flags: []}}, DestinyInventoryItemDetail = {item: {itemHash: {},bindStatus: 0,isEquipped: false,itemInstanceId: 0,itemLevel: 0,stackSize: 0,qualityLevel: 0,stats: [],primaryStat: {statHash: {},value: 0,maximumValue: 0},canEquip: false,equipRequiredLevel: 0,unlockFlagHashRequiredToEquip: {},cannotEquipReason: 0,damageType: 0,damageTypeNodeIndex: 0,damageTypeStepIndex: 0,progression: {dailyProgress: 0,weeklyProgress: 0,currentProgress: 0,level: 0,step: 0,progressToNextLevel: 0,nextLevelAt: 0,progressionHash: {}},talentGridHash: {},nodes: [],useCustomDyes: false,artRegions: [],isEquipment: false,isGridComplete: false,perks: [],location: 0,transferStatus: 0,locked: false,lockable: false},talentNodes: [],statsOnNodes: [],characterStatsToDisplay: [],materialItemHashes: []}, DestinyTalentNode = {nodeIndex: 0,nodeHash: {},state: 0,stateId: [],isActivated: false,stepIndex: 0,materialsToUpgrade: [],activationGridLevel: 0,progressPercent: {}}, DestinyTalentNodeStat = {currentNodeStats: [],nextNodeStats: []}, DefinitionSetDestinyInventoryItemDetail = {items: [],buckets: [],stats: [],perks: [],talentGrids: [],statGroups: [],progressionMappings: [],sources: [],progressions: [],materialRequirements: [],flags: []}, ServiceResultDestinyCharacterActivities = {data: {dateActivityStarted: null,available: []},definitions: {activities: [],destinations: [],places: [],activityTypes: [],items: [],buckets: [],stats: [],perks: [],talentGrids: [],statGroups: [],progressionMappings: [],sources: [],progressions: [],materialRequirements: []}}, DefinitionSetDestinyCharacterActivities = {activities: [],destinations: [],places: [],activityTypes: [],items: [],buckets: [],stats: [],perks: [],talentGrids: [],statGroups: [],progressionMappings: [],sources: [],progressions: [],materialRequirements: []}, ServiceResultDestinyCharacterProgressions = {data: {progressions: [],levelProgression: {dailyProgress: 0,weeklyProgress: 0,currentProgress: 0,level: 0,step: 0,progressToNextLevel: 0,nextLevelAt: 0,progressionHash: {}},baseCharacterLevel: 0,isPrestigeLevel: false,factionProgressionHash: {},percentToNextLevel: {}},definitions: {progressions: []}}, DefinitionSetDestinyCharacterProgressions = {progressions: []}, ServiceResultDestinyCharacterVendors = {data: {vendors: []},definitions: {vendorDetails: [],buckets: [],items: [],stats: [],perks: [],talentGrids: [],statGroups: [],progressionMappings: [],sources: [],progressions: [],materialRequirements: [],factions: [],events: [],vendorCategories: [],vendorSummaries: [],flags: []}}, DestinyCharacterVendors = {vendors: []}, DestinyCharacterVendor = {vendorHash: {},ackState: {needsAck: false,ackId: []},nextRefreshDate: null,enabled: false,saleItemCategories: [],inventoryBuckets: [],progression: {dailyProgress: 0,weeklyProgress: 0,currentProgress: 0,level: 0,step: 0,progressToNextLevel: 0,nextLevelAt: 0,progressionHash: {}}}, AckState = {needsAck: false,ackId: []}, DestinyVendorCategorySaleItems = {categoryTitle: [],saleItems: []}, DestinyVendorSaleItem = {item: {itemHash: {},bindStatus: 0,isEquipped: false,itemInstanceId: 0,itemLevel: 0,stackSize: 0,qualityLevel: 0,stats: [],primaryStat: {statHash: {},value: 0,maximumValue: 0},canEquip: false,equipRequiredLevel: 0,unlockFlagHashRequiredToEquip: {},cannotEquipReason: 0,damageType: 0,damageTypeNodeIndex: 0,damageTypeStepIndex: 0,progression: {dailyProgress: 0,weeklyProgress: 0,currentProgress: 0,level: 0,step: 0,progressToNextLevel: 0,nextLevelAt: 0,progressionHash: {}},talentGridHash: {},nodes: [],useCustomDyes: false,artRegions: [],isEquipment: false,isGridComplete: false,perks: [],location: 0,transferStatus: 0,locked: false,lockable: false},vendorItemIndex: 0,itemStatus: 0,costs: [],requiredUnlockFlags: [],unlockStatuses: []}, DestinyUnlockFlagStatus = {unlockFlagHash: {},isSet: false}, DefinitionSetDestinyCharacterVendors = {vendorDetails: [],buckets: [],items: [],stats: [],perks: [],talentGrids: [],statGroups: [],progressionMappings: [],sources: [],progressions: [],materialRequirements: [],factions: [],events: [],vendorCategories: [],vendorSummaries: [],flags: []}, ServiceResultDestinyCharacterVendorSummaries = {data: {vendors: []},definitions: {vendorDetails: [],buckets: [],items: [],stats: [],perks: [],talentGrids: [],statGroups: [],progressionMappings: [],sources: [],progressions: [],materialRequirements: [],factions: [],events: [],vendorCategories: [],vendorSummaries: []}}, DestinyCharacterVendorSummaries = {vendors: []}, DestinyCharacterVendorSummary = {vendorHash: {},ackState: {needsAck: false,ackId: []},nextRefreshDate: null,enabled: false}, DefinitionSetDestinyCharacterVendorSummaries = {vendorDetails: [],buckets: [],items: [],stats: [],perks: [],talentGrids: [],statGroups: [],progressionMappings: [],sources: [],progressions: [],materialRequirements: [],factions: [],events: [],vendorCategories: [],vendorSummaries: []}, ServiceResultDestinyCharacterVendor = {data: {vendorHash: {},ackState: {needsAck: false,ackId: []},nextRefreshDate: null,enabled: false,saleItemCategories: [],inventoryBuckets: [],progression: {dailyProgress: 0,weeklyProgress: 0,currentProgress: 0,level: 0,step: 0,progressToNextLevel: 0,nextLevelAt: 0,progressionHash: {}}},definitions: {vendorDetails: [],buckets: [],items: [],stats: [],perks: [],talentGrids: [],statGroups: [],progressionMappings: [],sources: [],progressions: [],materialRequirements: [],factions: [],events: [],vendorCategories: [],vendorSummaries: [],flags: []}}, DefinitionSetDestinyCharacterVendor = {vendorDetails: [],buckets: [],items: [],stats: [],perks: [],talentGrids: [],statGroups: [],progressionMappings: [],sources: [],progressions: [],materialRequirements: [],factions: [],events: [],vendorCategories: [],vendorSummaries: [],flags: []}, ServiceResultDestinyVendorItemDetail = {data: {itemDetail: {item: {itemHash: {},bindStatus: 0,isEquipped: false,itemInstanceId: 0,itemLevel: 0,stackSize: 0,qualityLevel: 0,stats: [],primaryStat: {statHash: {},value: 0,maximumValue: 0},canEquip: false,equipRequiredLevel: 0,unlockFlagHashRequiredToEquip: {},cannotEquipReason: 0,damageType: 0,damageTypeNodeIndex: 0,damageTypeStepIndex: 0,progression: {dailyProgress: 0,weeklyProgress: 0,currentProgress: 0,level: 0,step: 0,progressToNextLevel: 0,nextLevelAt: 0,progressionHash: {}},talentGridHash: {},nodes: [],useCustomDyes: false,artRegions: [],isEquipment: false,isGridComplete: false,perks: [],location: 0,transferStatus: 0,locked: false,lockable: false},talentNodes: [],statsOnNodes: [],characterStatsToDisplay: [],materialItemHashes: []},vendorItemIndex: 0,itemStatus: 0,costs: [],requiredUnlockFlags: [],unlockStatuses: []},definitions: {flags: [],items: [],buckets: [],stats: [],perks: [],talentGrids: [],statGroups: [],progressionMappings: [],sources: [],progressions: [],materialRequirements: []}}, DestinyVendorItemDetail = {itemDetail: {item: {itemHash: {},bindStatus: 0,isEquipped: false,itemInstanceId: 0,itemLevel: 0,stackSize: 0,qualityLevel: 0,stats: [],primaryStat: {statHash: {},value: 0,maximumValue: 0},canEquip: false,equipRequiredLevel: 0,unlockFlagHashRequiredToEquip: {},cannotEquipReason: 0,damageType: 0,damageTypeNodeIndex: 0,damageTypeStepIndex: 0,progression: {dailyProgress: 0,weeklyProgress: 0,currentProgress: 0,level: 0,step: 0,progressToNextLevel: 0,nextLevelAt: 0,progressionHash: {}},talentGridHash: {},nodes: [],useCustomDyes: false,artRegions: [],isEquipment: false,isGridComplete: false,perks: [],location: 0,transferStatus: 0,locked: false,lockable: false},talentNodes: [],statsOnNodes: [],characterStatsToDisplay: [],materialItemHashes: []},vendorItemIndex: 0,itemStatus: 0,costs: [],requiredUnlockFlags: [],unlockStatuses: []}, DefinitionSetDestinyVendorItemDetail = {flags: [],items: [],buckets: [],stats: [],perks: [],talentGrids: [],statGroups: [],progressionMappings: [],sources: [],progressions: [],materialRequirements: []}, ServiceResultDestinyAdvisorPublicData = {data: {nightfallActivityHash: {},heroicStrikeHashes: [],dailyChapterHashes: [],nightfallResetDate: null,heroicStrikeResetDate: null,dailyChapterResetDate: null,events: {events: []},dailyCrucibleHash: {},dailyCrucibleResetDate: null,nightfallRewardIndexes: [],dailyCrucibleRewardIndexes: [],heroicStrikeRewardIndexes: [],dailyChapterRewardIndexes: []},definitions: {activities: [],destinations: [],places: [],activityTypes: [],items: [],buckets: [],stats: [],perks: [],talentGrids: [],statGroups: [],progressionMappings: [],sources: [],progressions: [],materialRequirements: [],events: [],vendorSummaries: [],factions: [],vendorCategories: []}}, DefinitionSetDestinyAdvisorPublicData = {activities: [],destinations: [],places: [],activityTypes: [],items: [],buckets: [],stats: [],perks: [],talentGrids: [],statGroups: [],progressionMappings: [],sources: [],progressions: [],materialRequirements: [],events: [],vendorSummaries: [],factions: [],vendorCategories: []}, ServiceResultDestinyAdvisorData = {data: {vendorAdvisors: [],activityAdvisors: [],areOffersAvailable: false,events: [],bonuses: [],earnedCurrency: [],factions: [],arena: [],trials: {highestWinRank: 0,active: false,scheduled: false,startDate: null,expirationDate: null,ticket: {hasTicket: false,maxWins: 0,maxLosses: 0,wins: 0,losses: 0},winDetails: [],buffs: [],currency: {itemHash: {},value: 0}}},definitions: {vendorDetails: [],buckets: [],items: [],stats: [],perks: [],talentGrids: [],statGroups: [],progressionMappings: [],sources: [],progressions: [],materialRequirements: [],factions: [],events: [],vendorCategories: [],vendorSummaries: [],activityBundles: [],destinations: [],places: [],activityTypes: [],scriptedSkulls: [],enemyRaces: [],flags: [],activities: []}}, DestinyAdvisorData = {vendorAdvisors: [],activityAdvisors: [],areOffersAvailable: false,events: [],bonuses: [],earnedCurrency: [],factions: [],arena: [],trials: {highestWinRank: 0,active: false,scheduled: false,startDate: null,expirationDate: null,ticket: {hasTicket: false,maxWins: 0,maxLosses: 0,wins: 0,losses: 0},winDetails: [],buffs: [],currency: {itemHash: {},value: 0}}}, DestinyAdvisorTrials = {highestWinRank: 0,active: false,scheduled: false,startDate: null,expirationDate: null,ticket: {hasTicket: false,maxWins: 0,maxLosses: 0,wins: 0,losses: 0},winDetails: [],buffs: [],currency: {itemHash: {},value: 0}}, DestinyAdvisorTrialTicket = {hasTicket: false,maxWins: 0,maxLosses: 0,wins: 0,losses: 0}, DestinyAdvisorTrialWinDetail = {hasReward: false,winCount: 0,redeemed: false,unredeemedRewards: []}, DestinyAdvisorTrialBuff = {itemHash: {},saleItem: {item: {itemHash: {},bindStatus: 0,isEquipped: false,itemInstanceId: 0,itemLevel: 0,stackSize: 0,qualityLevel: 0,stats: [],primaryStat: {statHash: {},value: 0,maximumValue: 0},canEquip: false,equipRequiredLevel: 0,unlockFlagHashRequiredToEquip: {},cannotEquipReason: 0,damageType: 0,damageTypeNodeIndex: 0,damageTypeStepIndex: 0,progression: {dailyProgress: 0,weeklyProgress: 0,currentProgress: 0,level: 0,step: 0,progressToNextLevel: 0,nextLevelAt: 0,progressionHash: {}},talentGridHash: {},nodes: [],useCustomDyes: false,artRegions: [],isEquipment: false,isGridComplete: false,perks: [],location: 0,transferStatus: 0,locked: false,lockable: false},vendorItemIndex: 0,itemStatus: 0,costs: [],requiredUnlockFlags: [],unlockStatuses: []},isUsed: false,isActive: false}, DestinyGrimoireBonusAdvisorData = {cardId: 0,cardName: [],statName: [],bonusName: [],bonusDescription: [],bonusRank: {statId: 0,rank: 0},value: 0,threshold: 0,smallImage: {rect: {x: 0,y: 0,height: 0,width: 0},sheetPath: [],sheetSize: {x: 0,y: 0,height: 0,width: 0}}}, DestinyGrimoireBonusUnlock = {statId: 0,rank: 0}, SpriteDefinition = {rect: {x: 0,y: 0,height: 0,width: 0},sheetPath: [],sheetSize: {x: 0,y: 0,height: 0,width: 0}}, Rectangle = {x: 0,y: 0,height: 0,width: 0}, DestinyAdvisorArena = {activityHash: {},iconPath: [],rounds: [],bossFight: false,bossSkulls: [],rewardItems: [],isCompleted: false}, DestinyAdvisorArenaRound = {enemyRaceHash: {},skulls: []}, DestinyVendorAdvisorData = {specialCurrencySales: [],rotationAckId: [],needsAck: false,nextRefreshDate: null,pendingBounties: {saleItems: []},rewardClaimSales: [],progression: {dailyProgress: 0,weeklyProgress: 0,currentProgress: 0,level: 0,step: 0,progressToNextLevel: 0,nextLevelAt: 0,progressionHash: {}}}, DestinyAdvisorVendorSales = {saleItems: []}, DestinyAdvisorVendorSalesByCurrency = {currencyItemHash: {},saleItems: []}, DestinyActivityAdvisorData = {activityBundleHash: {},materialUpgrades: {activityBundleHash: {},materialItemHash: {},itemSoidsUpgradable: []},raidActivities: {activityBundleHash: {},raidIdentifier: [],expirationDate: null,tiers: [],iconPath: []},nightfall: {activityBundleHash: {},expirationDate: null,tiers: [],iconPath: []},heroicStrike: {activityBundleHash: {},expirationDate: null,tiers: [],iconPath: []},dailyChapterActivities: {activityBundleHash: {},expirationDate: null,isCompleted: false,isLocked: false,tierActivityHashes: [],activeRewardIndexes: [],iconPath: []},dailyCrucible: {activityBundleHash: {},expirationDate: null,isCompleted: false,activeRewardIndexes: [],iconPath: []}}, DestinyAdvisorItemUpgradeMaterial = {activityBundleHash: {},materialItemHash: {},itemSoidsUpgradable: []}, DestinyAdvisorRaid = {activityBundleHash: {},raidIdentifier: [],expirationDate: null,tiers: [],iconPath: []}, DestinyAdvisorRaidTier = {activityHash: {},stepsComplete: 0,stepsTotal: 0,difficultyIdentifier: [],activeRewardIndexes: []}, DestinyAdvisorNightfall = {activityBundleHash: {},expirationDate: null,tiers: [],iconPath: []}, DestinyAdvisorNightfallTier = {activityHash: {},isCompleted: false,isSuccessful: false,activeRewardIndexes: []}, DestinyAdvisorHeroicStrike = {activityBundleHash: {},expirationDate: null,tiers: [],iconPath: []}, DestinyAdvisorHeroicStrikeTier = {activityHash: {},isCompleted: false,activeRewardIndexes: []}, DestinyAdvisorDailyChapter = {activityBundleHash: {},expirationDate: null,isCompleted: false,isLocked: false,tierActivityHashes: [],activeRewardIndexes: [],iconPath: []}, DestinyAdvisorDailyCrucible = {activityBundleHash: {},expirationDate: null,isCompleted: false,activeRewardIndexes: [],iconPath: []}, DestinyFaction = {factionHash: {},progression: {dailyProgress: 0,weeklyProgress: 0,currentProgress: 0,level: 0,step: 0,progressToNextLevel: 0,nextLevelAt: 0,progressionHash: {}}}, DefinitionSetDestinyAdvisorData = {vendorDetails: [],buckets: [],items: [],stats: [],perks: [],talentGrids: [],statGroups: [],progressionMappings: [],sources: [],progressions: [],materialRequirements: [],factions: [],events: [],vendorCategories: [],vendorSummaries: [],activityBundles: [],destinations: [],places: [],activityTypes: [],scriptedSkulls: [],enemyRaces: [],flags: [],activities: []}, DestinyScriptedSkullDefinition = {skullHash: {},identifier: [],skullName: [],description: [],iconPath: []}, DestinyEnemyRaceDefinition = {raceHash: {},identifier: [],raceName: [],description: [],iconPath: []}, ServiceResultDestinyAdvisorSpecialEvents = {data: {events: []},definitions: {events: [],progressions: [],vendorSummaries: [],factions: [],vendorCategories: []}}, DefinitionSetDestinyAdvisorSpecialEvents = {events: [],progressions: [],vendorSummaries: [],factions: [],vendorCategories: []}, DestinyEquipItemResults = {equipResults: [],character: {characterBase: {membershipId: 0,membershipType: 0,characterId: 0,dateLastPlayed: null,minutesPlayedThisSession: 0,minutesPlayedTotal: 0,powerLevel: 0,raceHash: {},genderHash: {},classHash: {},currentActivityHash: {},lastCompletedStoryHash: {},stats: [],customization: {personality: {},face: {},skinColor: {},lipColor: {},eyeColor: {},hairColor: {},featureColor: {},decalColor: {},wearHelmet: false,hairIndex: 0,featureIndex: 0,decalIndex: 0},grimoireScore: {},peerView: {equipment: []},genderType: 0,classType: 0,buildStatGroupHash: {}},activities: {dateActivityStarted: null,available: []},directorNodeStates: [],visibleBookHashes: [],defaultBookHash: {},inventory: {buckets: [],currencies: []},progressions: {progressions: [],levelProgression: {dailyProgress: 0,weeklyProgress: 0,currentProgress: 0,level: 0,step: 0,progressToNextLevel: 0,nextLevelAt: 0,progressionHash: {}},baseCharacterLevel: 0,isPrestigeLevel: false,factionProgressionHash: {},percentToNextLevel: {}},customDyes: [],characterLevel: 0},summary: {characterBase: {membershipId: 0,membershipType: 0,characterId: 0,dateLastPlayed: null,minutesPlayedThisSession: 0,minutesPlayedTotal: 0,powerLevel: 0,raceHash: {},genderHash: {},classHash: {},currentActivityHash: {},lastCompletedStoryHash: {},stats: [],customization: {personality: {},face: {},skinColor: {},lipColor: {},eyeColor: {},hairColor: {},featureColor: {},decalColor: {},wearHelmet: false,hairIndex: 0,featureIndex: 0,decalIndex: 0},grimoireScore: {},peerView: {equipment: []},genderType: 0,classType: 0,buildStatGroupHash: {}},levelProgression: {dailyProgress: 0,weeklyProgress: 0,currentProgress: 0,level: 0,step: 0,progressToNextLevel: 0,nextLevelAt: 0,progressionHash: {}},emblemPath: [],backgroundPath: [],emblemHash: {},characterLevel: 0,baseCharacterLevel: 0,isPrestigeLevel: false,percentToNextLevel: {}}}, DestinyEquipItemResult = {itemInstanceId: 0,equipStatus: 0}, DestinyHistoricalStatsDefinition = {bagId: [],propertyId: [],divisorStatId: [],statId: [],group: 0,periodTypes: [],modes: [],category: 0,statName: [],statDescription: [],unitType: 0,iconImage: [],mergeMethod: 0,unitLabel: [],weight: 0,activityBlobState: []}, DestinyHistoricalStatsResults = {allPvE: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},story: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},strike: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},raid: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},patrol: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},allPvP: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},pvpIntroduction: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},threeVsThree: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},control: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},lockdown: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},team: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},freeForAll: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},nightfall: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},heroic: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},trialsOfOsiris: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},doubles: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},allStrikes: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},ironBanner: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},allArena: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},arena: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},arenaChallenge: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []}}, DestinyHistoricalStatsByPeriod = {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []}, DestinyHistoricalStatsPeriodGroup = {period: null,activityDetails: {referenceId: {},instanceId: 0,mode: 0},values: []}, DestinyHistoricalStatsActivity = {referenceId: {},instanceId: 0,mode: 0}, DestinyHistoricalStatsValue = {statId: [],basic: {value: 0,displayValue: []},pga: {value: 0,displayValue: []},weighted: {value: 0,displayValue: []}}, DestinyHistoricalStatsAccountResult = {mergedDeletedCharacters: {results: {allPvE: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},story: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},strike: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},raid: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},patrol: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},allPvP: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},pvpIntroduction: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},threeVsThree: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},control: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},lockdown: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},team: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},freeForAll: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},nightfall: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},heroic: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},trialsOfOsiris: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},doubles: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},allStrikes: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},ironBanner: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},allArena: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},arena: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},arenaChallenge: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []}},merged: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []}},mergedAllCharacters: {results: {allPvE: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},story: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},strike: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},raid: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},patrol: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},allPvP: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},pvpIntroduction: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},threeVsThree: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},control: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},lockdown: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},team: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},freeForAll: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},nightfall: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},heroic: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},trialsOfOsiris: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},doubles: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},allStrikes: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},ironBanner: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},allArena: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},arena: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},arenaChallenge: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []}},merged: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []}},characters: []}, DestinyHistoricalStatsWithMerged = {results: {allPvE: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},story: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},strike: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},raid: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},patrol: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},allPvP: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},pvpIntroduction: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},threeVsThree: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},control: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},lockdown: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},team: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},freeForAll: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},nightfall: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},heroic: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},trialsOfOsiris: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},doubles: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},allStrikes: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},ironBanner: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},allArena: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},arena: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},arenaChallenge: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []}},merged: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []}}, DestinyHistoricalStatsPerCharacter = {characterId: 0,deleted: false,results: {allPvE: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},story: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},strike: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},raid: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},patrol: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},allPvP: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},pvpIntroduction: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},threeVsThree: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},control: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},lockdown: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},team: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},freeForAll: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},nightfall: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},heroic: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},trialsOfOsiris: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},doubles: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},allStrikes: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},ironBanner: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},allArena: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},arena: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []},arenaChallenge: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []}},merged: {allTime: [],allTimeTier1: [],allTimeTier2: [],allTimeTier3: [],daily: [],monthly: []}}, ServiceResultDestinyActivityHistoryResults = {data: {activities: []},definitions: {activities: [],destinations: [],places: [],activityTypes: [],items: [],buckets: [],stats: [],perks: [],talentGrids: [],statGroups: [],progressionMappings: [],sources: [],progressions: [],materialRequirements: []}}, DestinyActivityHistoryResults = {activities: []}, DefinitionSetDestinyActivityHistoryResults = {activities: [],destinations: [],places: [],activityTypes: [],items: [],buckets: [],stats: [],perks: [],talentGrids: [],statGroups: [],progressionMappings: [],sources: [],progressions: [],materialRequirements: []}, ServiceResultDestinyHistoricalWeaponStatsData = {data: {weapons: []},definitions: {items: [],buckets: [],stats: [],perks: [],talentGrids: [],statGroups: [],progressionMappings: [],sources: [],progressions: [],materialRequirements: []}}, DestinyHistoricalWeaponStatsData = {weapons: []}, DestinyHistoricalWeaponStats = {referenceId: {},values: []}, DefinitionSetDestinyHistoricalWeaponStatsData = {items: [],buckets: [],stats: [],perks: [],talentGrids: [],statGroups: [],progressionMappings: [],sources: [],progressions: [],materialRequirements: []}, DestinyLeaderboardResults = {focusMembershipId: 0,focusCharacterId: 0,allPvE: [],story: [],strike: [],raid: [],patrol: [],allPvP: [],pvpIntroduction: [],threeVsThree: [],control: [],lockdown: [],team: [],freeForAll: [],trialsOfOsiris: [],doubles: [],nightfall: [],heroic: [],allStrikes: [],ironBanner: [],allArena: [],arena: [],arenaChallenge: []}, DestinyLeaderboard = {statId: [],entries: []}, DestinyLeaderboardEntry = {rank: 0,player: {destinyUserInfo: {supplementalDisplayName: [],iconPath: [],membershipType: 0,membershipId: 0,displayName: []},characterClass: [],characterLevel: 0,bungieNetUserInfo: {supplementalDisplayName: [],iconPath: [],membershipType: 0,membershipId: 0,displayName: []},clanName: [],clanTag: []},characterId: 0,value: {statId: [],basic: {value: 0,displayValue: []},pga: {value: 0,displayValue: []},weighted: {value: 0,displayValue: []}}}, DestinyPlayer = {destinyUserInfo: {supplementalDisplayName: [],iconPath: [],membershipType: 0,membershipId: 0,displayName: []},characterClass: [],characterLevel: 0,bungieNetUserInfo: {supplementalDisplayName: [],iconPath: [],membershipType: 0,membershipId: 0,displayName: []},clanName: [],clanTag: []}, ServiceResultDestinyPostGameCarnageReportData = {data: {period: null,activityDetails: {referenceId: {},instanceId: 0,mode: 0},entries: [],teams: []},definitions: {items: [],buckets: [],stats: [],perks: [],talentGrids: [],statGroups: [],progressionMappings: [],sources: [],progressions: [],materialRequirements: [],activities: [],destinations: [],places: [],activityTypes: []}}, DestinyPostGameCarnageReportData = {period: null,activityDetails: {referenceId: {},instanceId: 0,mode: 0},entries: [],teams: []}, DestinyPostGameCarnageReportEntry = {standing: 0,score: {statId: [],basic: {value: 0,displayValue: []},pga: {value: 0,displayValue: []},weighted: {value: 0,displayValue: []}},player: {destinyUserInfo: {supplementalDisplayName: [],iconPath: [],membershipType: 0,membershipId: 0,displayName: []},characterClass: [],characterLevel: 0,bungieNetUserInfo: {supplementalDisplayName: [],iconPath: [],membershipType: 0,membershipId: 0,displayName: []},clanName: [],clanTag: []},characterId: 0,values: [],extended: {weapons: [],values: []}}, DestinyPostGameCarnageReportExtendedData = {weapons: [],values: []}, DestinyPostGameCarnageReportTeamEntry = {teamId: 0,standing: {statId: [],basic: {value: 0,displayValue: []},pga: {value: 0,displayValue: []},weighted: {value: 0,displayValue: []}},score: {statId: [],basic: {value: 0,displayValue: []},pga: {value: 0,displayValue: []},weighted: {value: 0,displayValue: []}},teamName: []}, DefinitionSetDestinyPostGameCarnageReportData = {items: [],buckets: [],stats: [],perks: [],talentGrids: [],statGroups: [],progressionMappings: [],sources: [],progressions: [],materialRequirements: [],activities: [],destinations: [],places: [],activityTypes: []}, ServiceResultDestinyAggregateActivityResults = {data: {activities: []},definitions: {activities: [],destinations: [],places: [],activityTypes: [],items: [],buckets: [],stats: [],perks: [],talentGrids: [],statGroups: [],progressionMappings: [],sources: [],progressions: [],materialRequirements: []}}, DestinyAggregateActivityResults = {activities: []}, DestinyAggregateActivityStats = {activityHash: {},values: []}, DefinitionSetDestinyAggregateActivityResults = {activities: [],destinations: [],places: [],activityTypes: [],items: [],buckets: [],stats: [],perks: [],talentGrids: [],statGroups: [],progressionMappings: [],sources: [],progressions: [],materialRequirements: []}, ServiceResultDestinyExcellenceBadges = {data: {badges: []},definitions: {badges: []}}, DestinyExcellenceBadges = {badges: []}, DestinyExcellenceBadge = {badgeHashId: {},ackState: {needsAck: false,ackId: []}}, DefinitionSetDestinyExcellenceBadges = {badges: []}, DestinyExcellenceBadgeDefinition = {badgeHashId: {},badgeName: [],badgeDescription: [],tier: 0,largeImageUrl: [],smallImageUrl: [],internalDefinition: {requiredUnlockFlagStringIds: [],requiredUnlockFlagHashIds: []}}, DestinyExcellenceBadgeInternalDefinition = {requiredUnlockFlagStringIds: [],requiredUnlockFlagHashIds: []}, GrimoirePlayerDataResult = {data: {ackState: {needsAck: false,ackId: []},score: 0,cardCollection: [],cardsToHide: [],bonuses: []},cardDefinitions: []}, GrimoirePlayerData = {ackState: {needsAck: false,ackId: []},score: 0,cardCollection: [],cardsToHide: [],bonuses: []}, GrimoireUnlockedCard = {cardId: 0,score: 0,points: 0,statisticCollection: [],ackState: {needsAck: false,ackId: []}}, GrimoireUnlockedStatistic = {statNumber: 0,value: 0,displayValue: [],rankCollection: []}, GrimoireUnlockedRank = {rank: 0,points: 0,ackState: {needsAck: false,ackId: []}}, DestinyGrimoireDefinition = {themeCollection: []}, DestinyGrimoireThemeDefinition = {themeId: [],themeName: [],themeIntro: [],themeDescription: [],normalResolution: {image: {rect: {x: 0,y: 0,height: 0,width: 0},sheetPath: [],sheetSize: {x: 0,y: 0,height: 0,width: 0}},smallImage: {rect: {x: 0,y: 0,height: 0,width: 0},sheetPath: [],sheetSize: {x: 0,y: 0,height: 0,width: 0}}},highResolution: {image: {rect: {x: 0,y: 0,height: 0,width: 0},sheetPath: [],sheetSize: {x: 0,y: 0,height: 0,width: 0}},smallImage: {rect: {x: 0,y: 0,height: 0,width: 0},sheetPath: [],sheetSize: {x: 0,y: 0,height: 0,width: 0}}},pageCollection: []}, DestinyGrimoireImageDefinition = {image: {rect: {x: 0,y: 0,height: 0,width: 0},sheetPath: [],sheetSize: {x: 0,y: 0,height: 0,width: 0}},smallImage: {rect: {x: 0,y: 0,height: 0,width: 0},sheetPath: [],sheetSize: {x: 0,y: 0,height: 0,width: 0}}}, DestinyGrimoirePageDefinition = {pageId: [],pageName: [],pageIntro: [],pageDescription: [],normalResolution: {image: {rect: {x: 0,y: 0,height: 0,width: 0},sheetPath: [],sheetSize: {x: 0,y: 0,height: 0,width: 0}},smallImage: {rect: {x: 0,y: 0,height: 0,width: 0},sheetPath: [],sheetSize: {x: 0,y: 0,height: 0,width: 0}}},highResolution: {image: {rect: {x: 0,y: 0,height: 0,width: 0},sheetPath: [],sheetSize: {x: 0,y: 0,height: 0,width: 0}},smallImage: {rect: {x: 0,y: 0,height: 0,width: 0},sheetPath: [],sheetSize: {x: 0,y: 0,height: 0,width: 0}}},cardCollection: [],cardBriefs: []}, DestinyGrimoireCardDefinition = {cardId: 0,cardName: [],cardIntro: [],cardIntroAttribution: [],cardDescription: [],bonusName: [],bonusDescription: [],bonusRank: {statId: 0,rank: 0},unlockHowToText: [],cardLabel: [],rarity: 0,plcOfferId: [],unlockMethod: [],unlockFlagHash: {},unlockFlagId: [],points: 0,releaseId: [],normalResolution: {image: {rect: {x: 0,y: 0,height: 0,width: 0},sheetPath: [],sheetSize: {x: 0,y: 0,height: 0,width: 0}},smallImage: {rect: {x: 0,y: 0,height: 0,width: 0},sheetPath: [],sheetSize: {x: 0,y: 0,height: 0,width: 0}}},highResolution: {image: {rect: {x: 0,y: 0,height: 0,width: 0},sheetPath: [],sheetSize: {x: 0,y: 0,height: 0,width: 0}},smallImage: {rect: {x: 0,y: 0,height: 0,width: 0},sheetPath: [],sheetSize: {x: 0,y: 0,height: 0,width: 0}}},statisticCollection: [],referenceIdList: [],bossIdList: [],exclusive: {exclusiveToPlatform: 0,exclusiveUntil: null},notes: {rewardNumber: 0,coolDownSeconds: 0,imageState: []}}, DestinyGrimoireExclusive = {exclusiveToPlatform: 0,exclusiveUntil: null}, DestinyGrimoireCardNotes = {rewardNumber: 0,coolDownSeconds: 0,imageState: []}, DestinyGrimoireStatisticDefinition = {statNumber: 0,cardId: 0,statDescription: [],statName: [],accumulatorHash: {},accumulatorId: [],flavourStatisticId: [],rankCollection: []}, DestinyGrimoireStatisticRankDefinition = {rank: 0,threshold: 0,unlockFlagHash: {},unlockFlagId: [],points: 0}, DestinyGrimoireCardBrief = {cardId: 0,points: 0,totalPoints: 0}, ServiceResultDestinyExplorerItems = {data: {itemHashes: [],totalResults: 0,hasMore: false,query: {itemsPerPage: 0,currentPage: 0},useTotalResults: false},definitions: {items: [],buckets: [],stats: [],perks: [],talentGrids: [],statGroups: [],progressionMappings: [],sources: [],progressions: [],materialRequirements: []}}, DestinyExplorerItems = {itemHashes: [],totalResults: 0,hasMore: false,query: {itemsPerPage: 0,currentPage: 0},useTotalResults: false}, DefinitionSetDestinyExplorerItems = {items: [],buckets: [],stats: [],perks: [],talentGrids: [],statGroups: [],progressionMappings: [],sources: [],progressions: [],materialRequirements: []}, ServiceResultDestinyExplorerNodeSteps = {data: {stepHashes: [],totalResults: 0,hasMore: false,query: {itemsPerPage: 0,currentPage: 0},useTotalResults: false},definitions: {nodeSteps: [],perks: [],stats: []}}, DestinyExplorerNodeSteps = {stepHashes: [],totalResults: 0,hasMore: false,query: {itemsPerPage: 0,currentPage: 0},useTotalResults: false}, DefinitionSetDestinyExplorerNodeSteps = {nodeSteps: [],perks: [],stats: []}, DestinyNodeStepSummaryDefinition = {nodeStepHash: {},nodeStepName: [],nodeStepDescription: [],icon: [],perkHashes: [],statHashes: [],affectsQuality: false,stepGroups: {weaponPerformance: 0,impactEffects: 0,guardianAttributes: 0,lightAbilities: 0,damageTypes: 0}}, CoreSettingsConfiguration = {ignoreReasons: [],forumCategories: [],groupAvatars: [],destinyMembershipTypes: [],systems: []}, CoreSetting = {identifier: [],isDefault: false,displayName: [],summary: [],imagePath: [],childSettings: []}, CoreSystem = {enabled: false,parameters: []}, GlobalAlert = {AlertKey: [],AlertHtml: [],AlertTimestamp: null,AlertLevel: 0};
(function(a) {
    bungieNetPlatform.assetRenderer = {renderAsset: function(u) {
            var b = a.extend({path: "",width: "auto",height: "auto",fixedRatioHeight: "auto",hasAgeGate: false,minimumAge: 0,ratingImagePath: "",display: "auto"}, u), w, d, i;
            if (a(".ageGateTemplate").length == 0 || typeof viewModels == "undefined" || !viewModels.userMinimumAge)
                b.hasAgeGate = false;
            if (typeof viewModels != "undefined")
                if (viewModels.loggedInUserModelIsLoaded())
                    if (viewModels.loggedInUserModel().adultMode())
                        b.hasAgeGate = false;
            var g = "";
            if (b.display != "auto")
                g = "display: " + b.display + ";";
            var p = Utility.urlToLinkObject(b.path);
            if (i = p.pathname.match(/\.(jpg|jpeg|png|gif)$/i)) {
                var k = b.width == "auto" ? "" : "width: " + b.width + "; ", f = b.height == "auto" ? "" : "height: " + b.height + "; ";
                d = "<img src='" + Utility.ContentVersioned(b.path) + "' style='" + k + f + g + "' />"
            } else if (i = p.pathname.match(/\.(mov|avi)$/i)) {
                var k = b.width == "auto" ? "" : "width='" + b.width + "' ", f = b.height == "auto" ? "" : "height='" + b.height + "' ";
                d = "<video " + k + f + " style='" + g + "'><source src='" + Utility.ContentVersioned(b.path) + "' type='video/" + i[0] + "' /></video>"
            } else if (i = b.path.match(/^(?:https?:\/\/)?(?:(www|m)\.)?(youtube\.com|youtu\.be)+(\/\w)/i))
                if (b.path.toLowerCase().indexOf("playlist") > -1)
                    d = "<a class='externalLink' href='" + b.path + "' style='" + g + "'>" + b.path + "</a>";
                else {
                    var c = b.path, v = false, j, l = {};
                    if (b.path.indexOf("v=") > -1)
                        c = b.path.replace(/^((?:https?:\/\/)?(?:(?:www|m)\.)?)(youtube\.com|youtu\.be)[\s\S]*?v=([0-9A-Za-z\_\-]+)((&[\s\S]+)|$)/i, "$1youtube.com/embed/$3");
                    else
                        c = b.path.replace(/^((?:https?:\/\/)?(?:(?:www|m)\.)?)(youtube\.com|youtu\.be)[\s\S]*\/([0-9A-Za-z\_\-]+)((&[\s\S]+)|$)/i, "$1youtube.com/embed/$3");
                    c = c.replace("/m.", "/www.");
                    if (c.indexOf("?") > -1) {
                        l = Utility.parseQueryString(c);
                        var t = c.split("?");
                        c = t[0]
                    }
                    if (b.path.indexOf("#t=") > -1 || b.path.indexOf("?t=") > -1) {
                        var h = b.path.match(/[#|\?]t=((\d+m)?(\d+[s]?)?)/i);
                        if (h.length > 1)
                            h = h[0].split("=")[1];
                        var q = h.match("m") ? h.split("m")[0] : 0, r = q.length ? h.split("m")[1].split("s")[0] : h.split("s")[0];
                        j = parseInt(q * 60) + parseInt(r ? r : 0)
                    }
                    if (typeof l.start !== "undefined")
                        j = l.start;
                    if (window.location.protocol.indexOf("https") > -1 && c.indexOf("https") === -1)
                        c = c.replace("http", "https");
                    if (j)
                        c = c + "?start=" + j;
                    var k = b.width == "auto" ? "" : "width='" + b.width + "' ", f = b.height == "auto" ? "" : "height='" + b.height + "' ";
                    if (b.fixedRatioHeight != "auto")
                        f = "height='" + b.fixedRatioHeight + "' ";
                    var s = j ? "&" : "?";
                    d = "<iframe class='youtube-player' style='" + g + "' type='text/html' " + k + f + " src='" + c + s + "wmode=transparent&rel=0&fs=1' frameborder='0' allowfullscreen></iframe>"
                }
            else if (i = b.path.match(/player\.ooyala\.com/i)) {
                var k = b.width == "auto" ? "" : "width='" + b.width + "' ", f = b.height == "auto" ? "" : "height='" + b.height + "' ";
                if (b.fixedRatioHeight != "auto")
                    f = "height='" + b.fixedRatioHeight + "' ";
                return "<iframe src='" + b.path + "' " + k + f + " style='" + g + "' frameBorder='0'></iframe>"
            } else if (i = b.path.match(/soundcloud\.com/i)) {
                var n = b.path.replace("http://soundcloud.com", "http://api.soundcloud.com");
                n = encodeURIComponent(n.replace("http://www.soundcloud.com", "http://api.soundcloud.com"));
                var k = b.width == "auto" ? "" : "width='" + b.width + "' ", f = b.height == "auto" ? "" : "height='" + b.height + "' ";
                if (b.fixedRatioHeight != "auto")
                    f = "height='" + b.fixedRatioHeight + "' ";
                var o = "https://w.soundcloud.com/player/?url=" + n + "&buying=false&sharing=false&download=false&show_bpm=false&show_playcount=false&auto_play=false&show_artwork=false&show_comments=false&show_user=false";
                o = a("<div />").text(o).html();
                d = "<iframe " + k + f + " scrolling='no' frameborder='no' src='" + o + "'></iframe>"
            } else if (b.path.match(/^http/i))
                d = "<a class='externalLink' href='" + b.path + "' style='" + g + "'>" + b.path + "</a>";
            else
                d = "";
            if (b.hasAgeGate) {
                var e = a("<div>" + a(".ageGateTemplate").html() + "</div>"), m = e.find(".ageGateContents");
                m.attr("data-minimumAge", b.minimumAge);
                e.find(".ageGatePrompt").attr("data-minimumAge", b.minimumAge);
                b.width && b.width != "auto" && e.find(".ageGatePrompt").css("width", b.width + "px");
                b.height && b.height != "auto" && e.find(".ageGatePrompt").css("height", b.height + "px");
                e.find(".ratingImage").attr("src", b.ratingImagePath);
                e.find(".ratingImage").css("width", "auto");
                e.find(".ratingAllowed li").each(function() {
                    var c = a(this);
                    c.html(c.html().replace("#AGE", b.minimumAge))
                });
                m.html(d);
                if (b.minimumAge <= viewModels.userMinimumAge()) {
                    e.find(".ageGatePrompt").addClass("hide");
                    m.removeClass("hide")
                }
                d = "<div class='ageGate'>" + e.html() + "</div>"
            }
            return d
        },getYoutubeId: function(a) {
            return (matches = a.match(/youtube\.com|youtu\.be/i)) ? a.indexOf("v=") > -1 ? a.replace(/^([\s\S]*)(youtube\.com|youtu\.be)[\s\S]*?v=([0-9A-Za-z\_\-]+)((&[\s\S]+)|$)/i, "$3") : a.replace(/^([\s\S]*)(youtube\.com|youtu\.be)[\s\S]*\/([0-9A-Za-z\_\-]+)((&[\s\S]+)|$)/i, "$3") : ""
        },renderAssetThumbnail: function(i) {
            var b = a.extend({path: "",width: "auto",height: "auto",quality: "default"}, i), c = "", d, f = false, g = "";
            if (b.width != "auto")
                g = "width: " + b.width + ";";
            var e = "";
            if (b.height != "auto")
                e = "height: " + b.height + ";";
            if (d = b.path.match(/\.(jpg|jpeg|png|bmp|gif|tiff)(\?(.)*){0,1}$/i))
                c = b.path;
            else if (d = b.path.match(/youtube\.com|youtu\.be/i)) {
                f = true;
                var h = bungieNetPlatform.assetRenderer.getYoutubeId(b.path);
                if (h != "")
                    c = "http://i2.ytimg.com/vi/" + h + "/" + b.quality + ".jpg"
            } else if (d = b.path.match(/player\.ooyala\.com/i))
                return "<div style='" + g + e + "; padding: 10px; border: solid 1px black; overflow: hide;'><iframe src='" + b.path + "' frameBorder='0'></iframe></div>";
            return c != "" ? f ? "<img draggable='false' src='" + Utility.ContentVersioned(c) + "' class='thumbnailImages youtubeVideo' />" : b.path.indexOf("http://") > -1 ? "<img draggable='false' src='" + c + "' class='thumbnailImages' />" : "<img draggable='false' src='" + Utility.ContentVersioned(c) + "' class='thumbnailImages' />" : ""
        }}
})(jQuery);
(function(a) {
    function b(e, g, f, h) {
        var c = a.extend({templateType: "",isTypeAgnostic: false,headOnly: false,itemRenderedCallback: function() {
            },renderCompleteCallback: function() {
            },errorCallback: function() {
            },renderAttributes: []}, e);
        c.query = a.extend(g, e.query);
        var b = {results: [],query: {itemsPerPage: 10,currentPage: 1}};
        for (var d in bungieNetPlatform.contentCache)
            if (f(bungieNetPlatform.contentCache[d], c)) {
                b.results.push(bungieNetPlatform.contentCache[d]);
                break
            }
        if (b.results.length > 0) {
            b.query.itemsPerPage = b.results.length;
            b.totalResults = b.results.length;
            b.hasMore = false;
            bungieNetPlatform.contentRenderer.renderContentItemList(b, c)
        } else {
            var i = h(c);
            a.when(i).done(function(a) {
                bungieNetPlatform.contentRenderer.renderContentItemList(a, c)
            })
        }
    }
    bungieNetPlatform.contentRenderer = {renderContentItemList: function(f, h) {
            var c, d, b, e = f.results, g = h;
            if (e.length > 0)
                h.firstResultCallback();
            else
                h.renderCompleteCallback(e.length, b, f);
            a.each(e, function() {
                var f = this;
                if (c) {
                    var e = a.Deferred();
                    a.when(c).done(function() {
                        a.when(bungieNetPlatform.contentRenderer.loadTemplateDeferred(f, g)).done(function(a) {
                            b = b + a;
                            e.resolve()
                        }).fail(function() {
                            console.log("renderContentItemList: LoadTemplateDeferred Failed.");
                            e.resolve()
                        })
                    });
                    c = e
                } else {
                    d = a.Deferred();
                    c = d;
                    a.when(bungieNetPlatform.contentRenderer.loadTemplateDeferred(f, g)).done(function(a) {
                        b = b + a;
                        d.resolve()
                    }).fail(function() {
                        console.log("renderContentItemList: LoadTemplateDeferred Failed.");
                        d.resolve()
                    })
                }
            });
            c && a.when(c).done(function() {
                g.renderCompleteCallback(e.length, b, f)
            }).fail(function() {
                console.log("renderContentItemList: renderCompleteCallback Failed.")
            })
        },loadTemplateDeferred: function(c, b) {
            var d = c.cType;
            if (b.isTypeAgnostic)
                d = "generic";
            var e = "/Scripts/templates/";
            e += b.templateType + "/" + d + ".js";
            return templateEngine.getTemplate(e, b.templateType + "/" + d, c, b.parents, b.renderAttributes, function(d) {
                if (bungieNetPlatform.platformSettings.renderContentEditLinks) {
                    var f = a(d), e = "<div class='firehoseEditLink'><a href='/Firehose/Content/EditWithNewPackage/" + c.contentId + "'>(Edit this item)</a></div>";
                    f.prepend(e);
                    if (d.trim()[0] == "<")
                        d = d.slice(0, d.indexOf(">") + 1) + e + d.slice(d.indexOf(">") + 1);
                    else
                        d = e + d
                }
                b.itemRenderedCallback(c, d)
            })
        },renderContentFromId: function(d) {
            var b = a.extend({contentId: 0,locale: bungieNetPlatform.platformSettings.currentLocale,templateType: "",isTypeAgnostic: false,headOnly: false,itemRenderedCallback: function() {
                },renderCompleteCallback: function() {
                },errorCallback: function() {
                },renderAttributes: []}, d);
            if (typeof bungieNetPlatform.contentCache[b.contentId] != "undefined")
                a.when(bungieNetPlatform.contentRenderer.loadTemplateDeferred(bungieNetPlatform.contentCache[b.contentId], b)).done(function(a) {
                    b.renderCompleteCallback(1, a, bungieNetPlatform.contentCache[b.contentId])
                });
            else {
                if (isNaN(b.contentId) || b.contentId <= 0) {
                    b.renderCompleteCallback(0, "", null);
                    return
                }
                var c = bungieNetPlatform.previewableContentServices.getForId({contentId: b.contentId,locale: b.locale,headOnly: b.headOnly,callback: function() {
                    },errorCallback: function(a) {
                        console.log("renderContentFromId: Failed (" + a + ")");
                        b.errorCallback(a)
                    }});
                a.when(c).done(function(c) {
                    a.when(bungieNetPlatform.contentRenderer.loadTemplateDeferred(c, b)).done(function(a) {
                        b.renderCompleteCallback(1, a, c)
                    })
                })
            }
        },renderContent: function(c) {
            var b = a.extend({contentObject: null,templateType: "",isTypeAgnostic: false,itemRenderedCallback: function() {
                },renderCompleteCallback: function() {
                },errorCallback: function() {
                },renderAttributes: []}, c);
            if (!b.contentObject) {
                b.renderCompleteCallback(0, "", null);
                return
            }
            a.when(bungieNetPlatform.contentRenderer.loadTemplateDeferred(b.contentObject, b)).done(function(a) {
                b.renderCompleteCallback(1, a, b.contentObject)
            })
        },renderNewsContent: function(a) {
            b(a, {contentType: "",newsType: "",locale: bungieNetPlatform.platformSettings.currentLocale,itemsPerPage: 10,currentPage: 1}, function(b, a) {
                return b.cType == a.query.contentType
            }, function(a) {
                return bungieNetPlatform.contentService.GetNews(a.query.newsType, a.query.locale, a.query.itemsPerPage, a.query.currentPage, function() {
                }, function(b) {
                    console.log("renderNewsContent: Search Failed (" + b + ")");
                    a.errorCallback(b)
                })
            })
        },renderContentFromQuery: function(a) {
            b(a, {contentTypes: [],tag: "",notTag: "",locale: bungieNetPlatform.platformSettings.currentLocale,itemsPerPage: 100,currentPage: 1,sortBy: Globals.ContentSortBy.CreationDate,creationDate: Globals.ContentDateRange.All,modifiedDate: Globals.ContentDateRange.All}, function(b, a) {
                return b.cType == a.query.contentTypes[contentType]
            }, function(a) {
                return bungieNetPlatform.contentService.SearchContentEx(a.query, a.query.locale, a.headOnly, function() {
                }, function(b) {
                    console.log("renderContentFromQuery: Search Failed (" + b + ")");
                    a.errorCallback(b)
                })
            })
        },renderPromoWidget: function(d) {
            var b = a.extend({locale: bungieNetPlatform.platformSettings.currentLocale,templateType: "",isTypeAgnostic: false,headOnly: false,itemRenderedCallback: function() {
                },renderCompleteCallback: function() {
                },errorCallback: function() {
                },renderAttributes: []}, d), c = bungieNetPlatform.contentService.GetPromoWidget(function() {
            }, function(a) {
                console.log("renderContentFromId: Failed (" + a + ")");
                b.errorCallback(a)
            });
            a.when(c).done(function(c) {
                a.when(bungieNetPlatform.contentRenderer.loadTemplateDeferred(c, b)).done(function(a) {
                    b.renderCompleteCallback(1, a, c)
                })
            })
        },renderContentFromTagAndType: function(a) {
            b(a, {contentType: "",tag: "",locale: bungieNetPlatform.platformSettings.currentLocale,itemsPerPage: 10,currentPage: 1}, function(b, a) {
                return b.cType == a.query.contentType
            }, function(a) {
                return bungieNetPlatform.previewableContentServices.searchForTagAndType({tag: a.query.tag,contentType: a.query.contentType,locale: a.query.locale,headOnly: a.headOnly,currentPage: a.query.currentPage,itemsPerPage: a.query.itemsPerPage,callback: function() {
                    },errorCallback: function(b) {
                        console.log("renderContentFromTagAndType: Search Failed (" + b + ")");
                        a.errorCallback(b)
                    },headOnly: false})
            })
        },renderContentItemFromTagAndType: function(d) {
            var b = a.extend({contentType: "",tag: "",locale: bungieNetPlatform.platformSettings.currentLocale,templateType: "",isTypeAgnostic: false,headOnly: false,renderCompleteCallback: function() {
                },errorCallback: function() {
                },renderAttributes: []}, d), c = bungieNetPlatform.previewableContentServices.getForTagAndType({tag: b.tag,contentType: b.contentType,locale: b.locale,callback: function() {
                },errorCallback: function(a) {
                    console.log("renderContentItemFromTagAndType: Search Failed (" + a + ")");
                    b.errorCallback(a)
                },headOnly: b.headOnly});
            a.when(c).done(function(c) {
                a.when(bungieNetPlatform.contentRenderer.loadTemplateDeferred(c, b)).done(function(a) {
                    b.renderCompleteCallback(1, a, c)
                })
            })
        },renderContentData: function(f) {
            var b = a.extend({content: "",width: "auto",height: "auto",templateType: ""}, f), c = "", e;
            if (b.content == "")
                return "(blank)";
            if (typeof b.content === "object") {
                for (var d = 0; d < b.content.length; d++) {
                    c += "Item " + d + ": " + bungieNetPlatform.contentRenderer.renderContentData(a.extend(a.extend({}, b), {content: b.content[d]}));
                    c += "<br />"
                }
                return c
            }
            if (!isNaN(b.content)) {
                c = "(Content Item Reference #" + b.content + ")<br /> [[data-content-id='" + b.content + "' data-template-type='" + b.templateType + "']]";
                return c
            }
            if (e = b.content.match(/\<\//)) {
                c = "<div style='width: " + b.width + "; height: " + b.height + ";'>" + b.content + "</div>";
                return c
            }
            c = bungieNetPlatform.assetRenderer.renderAsset({path: b.content,width: b.width,height: b.height});
            if (c != "") {
                c += "<div data-asset-path='" + b.content + "'></div><div><strong>Stored URL:</strong>" + b.content + "</div>\n";
                return c
            }
            return b.content
        }}
})(jQuery);
(function() {
    function c(c) {
        var b = c.split("[[").join("<div class='MacroProcess' ").split("]]").join("></div>");
        b = a(b).trim();
        return b
    }
    function a(a) {
        var g = new RegExp(/\{\{url=\'([^\}]+)\'\}\}([^\{]+)\{\{\/url\}\}/g), b;
        while ((b = g.exec(a)) != null) {
            var f = b[0], c = b[1], e = b[2];
            if (c[0] == "/")
                c = "/" + bungieNetPlatform.platformSettings.currentLocale + c;
            var d = "<a href='" + c + "'>" + e + "</a>";
            a = a.split(f).join(d)
        }
        return a
    }
    function b(a) {
        if (a[0] == "/")
            a = "/" + bungieNetPlatform.platformSettings.currentLocale + a;
        return a
    }
    bungieNetPlatform.macroProcessor = {getNormalizedHtml: function(a) {
            return c(a)
        },renderWithHints: function(a, b) {
            a = a.replace(/\{\{more\}\}[\s\S]*/g, "");
            a = a.replace(/\{\{([^}]*)\}\}/g, "");
            a = bungieNetPlatform.macroProcessor.processTemplateOverride(a, b);
            return a
        },renderIgnoreHints: function(a, b) {
            a = a.replace(/\{\{([^}]*)\}\}/g, "");
            a = bungieNetPlatform.macroProcessor.processTemplateOverride(a, b);
            return a
        },renderWithHintDebug: function(b, c) {
            b = a(b);
            b = b.replace(/\{\{([^}]*)\}\}/g, "<br /><strong><i>&lt;-- $1 --&gt;</i></strong><br />");
            b = bungieNetPlatform.macroProcessor.processTemplateOverride(b, c);
            return b
        },processUrls: a,convertRelativeUrl: b,processTemplateOverride: function(b, a) {
            return typeof a != "undefined" && a != null && a != "" ? b.replace(/data\-template\-type\=\'([^\']+)\'/g, "data-template-type='" + a + "'") : b
        }}
})(jQuery);
(function(a) {
    bungieNetPlatform.contentRepresentationServices = {dataStore: [],data: {"get": function(a, b) {
                return bungieNetPlatform.contentRepresentationServices.dataStore[a + "_" + b]
            },"set": function(a, c, b) {
                bungieNetPlatform.contentRepresentationServices.dataStore[a + "_" + c] = b
            }},getRepresentationsForType: function(e) {
            var b = a.extend({contentType: "",locale: bungieNetPlatform.platformSettings.currentLocale,callback: function() {
                },errorCallback: function() {
                }}, e), c = bungieNetPlatform.contentRepresentationServices.data.get(b.contentType, b.locale);
            if (c)
                return a.Deferred(function(a) {
                    b.callback(c);
                    a.resolve(c)
                }).promise();
            var d = bungieNetPlatform.platformSettings.platformUrl + "/Content/Representation/GetRepresentationsForType/" + b.contentType + "/" + b.locale + "/";
            return bungieNetPlatform.serviceLibrary.get(d, function(a) {
                bungieNetPlatform.contentRepresentationServices.data.set(b.contentType, b.locale, a);
                b.callback(a)
            }, b.errorCallback)
        }}
})(jQuery);
(function(a) {
    bungieNetPlatform.previewableContentServices = {dataStore: [],contentData: {getContent: function(a, b) {
                return bungieNetPlatform.previewableContentServices.dataStore[a + "_" + b]
            },setContent: function(a) {
                bungieNetPlatform.previewableContentServices.dataStore[a.contentId + "_" + a.locale] = a
            }},getCachedResultsForQuery: function(b) {
            var a = {results: [],query: b,totalResults: 0};
            for (var c in bungieNetPlatform.contentCache)
                for (var d in b.contentTypes)
                    if (bungieNetPlatform.contentCache[c].cType == b.contentTypes[d]) {
                        a.results.push(bungieNetPlatform.contentCache[c]);
                        break
                    }
            a.totalResults = a.results.length;
            return a
        },getCachedResultsForType: function(c) {
            var a = {results: [],query: {contentType: c},totalResults: 0};
            for (var b in bungieNetPlatform.contentCache)
                bungieNetPlatform.contentCache[b].cType == c && a.results.push(bungieNetPlatform.contentCache[b]);
            a.totalResults = a.results.length;
            return a
        },search: function(d) {
            var b = a.extend({callback: function() {
                },errorCallback: function() {
                },headOnly: false}, d), f = a.extend({contentTypes: [""],tag: "",notTag: "",locale: bungieNetPlatform.platformSettings.currentLocale,itemsPerPage: 100,currentPage: 1,sortBy: Globals.ContentSortBy.CreationDate,creationDate: Globals.ContentDateRange.All,modifiedDate: Globals.ContentDateRange.All}, d.query), c = bungieNetPlatform.previewableContentServices.getCachedResultsForQuery(b.query);
            if (c.results.length > 0) {
                var e = a.Deferred();
                b.callback(c);
                e.resolve();
                return e
            } else
                return bungieNetPlatform.contentService.SearchContentEx(f, f.locale, b.headOnly, b.callback, b.errorCallback)
        },getHomepageContent: function(f) {
            var c = a.extend({locale: bungieNetPlatform.platformSettings.currentLocale,callback: function() {
                },errorCallback: function() {
                }}, f), b = bungieNetPlatform.previewableContentServices.getCachedResultsForQuery({contentTypes: ["ContentSet"]}), d = bungieNetPlatform.previewableContentServices.getCachedResultsForQuery({contentTypes: ["News"]});
            if (b.results.length > 0 || d.results.length > 0) {
                var e = a.Deferred(), g = {rotator: {ErrorCode: 1,ErrorStatus: b.results.length > 0 ? "Success" : "Fail",Message: "Ok",Response: b.results.length > 0 ? b.results[0] : null},blog: {ErrorCode: 1,ErrorStatus: "Success",Message: "Ok",Response: d.results},calloutSet: {ErrorCode: 1,ErrorStatus: b.results.length > 0 ? "Success" : "Fail",Message: "Ok",Response: b.results.length > 0 ? b.results[0] : null}};
                c.callback(g);
                e.resolve();
                return e
            } else
                return bungieNetPlatform.contentService.GetHomepageContent(c.locale, c.callback, c.errorCallback)
        },getForId: function(e) {
            var b = a.extend({contentId: 0,locale: bungieNetPlatform.platformSettings.currentLocale,callback: function() {
                },errorCallback: function() {
                },headOnly: false}, e);
            if (typeof bungieNetPlatform.contentCache[b.contentId] != "undefined") {
                var d = a.Deferred();
                b.callback(bungieNetPlatform.contentCache[b.contentId]);
                d.resolve();
                return d
            } else {
                var c = null;
                c = bungieNetPlatform.previewableContentServices.contentData.getContent(b.contentId, b.locale);
                return c ? a.Deferred(function(a) {
                    b.callback(c);
                    a.resolve(c)
                }).promise() : bungieNetPlatform.contentService.GetContentById(b.contentId, b.locale, b.headOnly, function(a) {
                    bungieNetPlatform.previewableContentServices.contentData.setContent(a);
                    b.callback(a)
                }, b.errorCallback)
            }
        },getForTagAndType: function(d) {
            var b = a.extend({tag: "",contentType: "",locale: bungieNetPlatform.platformSettings.currentLocale,callback: function() {
                },errorCallback: function() {
                },headOnly: false}, d), c = bungieNetPlatform.previewableContentServices.getCachedResultsForType(d.contentType);
            return c.results.length ? a.Deferred(function(a) {
                b.callback(c.results[0]);
                a.resolve(c.results[0])
            }).promise() : bungieNetPlatform.contentService.GetContentByTagAndType(b.tag, b.contentType, b.locale, b.headOnly, b.callback, b.errorCallback)
        },searchForTagAndType: function(d) {
            var b = a.extend({tag: "",contentType: "",locale: bungieNetPlatform.platformSettings.currentLocale,currentPage: 1,itemsPerPage: 10,callback: function() {
                },errorCallback: function() {
                },headOnly: false}, d), c = bungieNetPlatform.previewableContentServices.getCachedResultsForType(d.contentType);
            return c.results.length ? a.Deferred(function(a) {
                b.callback(c);
                a.resolve(c)
            }).promise() : bungieNetPlatform.contentService.SearchContentByTagAndType(b.tag, b.contentType, b.locale, b.headOnly, b.currentPage, b.itemsPerPage, b.callback, b.errorCallback)
        },getJobs: function(e) {
            var b = a.extend({locale: bungieNetPlatform.platformSettings.currentLocale,callback: function() {
                },errorCallback: function() {
                }}, e), c = bungieNetPlatform.previewableContentServices.getCachedResultsForQuery({contentTypes: ["ContentSet"]});
            if (c.results.length > 0) {
                var d = a.Deferred();
                b.callback(c);
                d.resolve();
                return d
            } else
                bungieNetPlatform.contentService.GetJobs(b.locale, b.callback, b.errorCallback)
        },getPublications: function(e) {
            var b = a.extend({locale: bungieNetPlatform.platformSettings.currentLocale,callback: function() {
                },errorCallback: function() {
                }}, e), c = bungieNetPlatform.previewableContentServices.getCachedResultsForQuery({contentTypes: ["ContentSet"]});
            if (c.results.length > 0) {
                var d = a.Deferred();
                b.callback(c);
                d.resolve();
                return d
            } else
                bungieNetPlatform.contentService.GetPublications(b.locale, b.callback, b.errorCallback)
        }}
})(jQuery);
this.templateEngine = {version: "cv=0&av=0"};
(function() {
    var a = {};
    templateEngine.template = function(b) {
        b.identifier = b.identifier || b.str;
        var c;
        if (a[b.identifier])
            c = a[b.identifier];
        else {
            var d = "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + b.str.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');", c = !/\W/.test(b.str) && b.str != "" ? templateEngine.template({str: document.getElementById(b.str).innerHTML,identifier: b.identifier}) : new Function("obj", "parents", "renderAttributes", d);
            if (!/\W/.test(b.identifier))
                a[b.identifier] = c
        }
        return b.data ? c(b.data, b.parents, b.renderAttributes) : c
    };
    var b = 1;
    templateEngine.getTemplate = function(f, c, h, g, d, b, e) {
        return a[c] ? $.Deferred(function(f) {
            var e = a[c](h, g, d);
            e = bungieNetPlatform.macroProcessor.getNormalizedHtml(e);
            b && b(e);
            f.resolve(e)
        }).promise() : $.Deferred(function(a) {
            $.ajax({type: "GET",url: f + "?" + templateEngine.version,dataType: "text",success: function(f) {
                    var e = templateEngine.template({str: f,identifier: c,data: h,parents: g,renderAttributes: d});
                    e = bungieNetPlatform.macroProcessor.getNormalizedHtml(e);
                    b && b(e);
                    a.resolve(e)
                },error: function(d, b, c) {
                    e && e(d, b, c);
                    console.log("templateEngine.getTemplate: template not found at '" + f + "'.");
                    a.reject()
                }})
        }).promise()
    }
})();
(function(a) {
    function d(d, a) {
        var c = b(d);
        if (c.length < a)
            return false
    }
    function b(a) {
        return c(a).pop()
    }
    function c(a) {
        return a.split(/,\s*/)
    }
    a.fn.tagAutocomplete = function(f) {
        var e = a.extend({minimumChars: "1",multiple: false,onSelect: function() {
            }}, f);
        return this.each(function() {
            var f = a(this);
            f.autocomplete({source: function(d, c) {
                    var f = d.term;
                    e.multiple && b(d.term);
                    bungieNetPlatform.tagServices.search({phrase: f,callback: function(b) {
                            c(a.map(b, function(a) {
                                return a.tagText
                            }))
                        },errorCallback: function() {
                            c([])
                        }})
                },search: function() {
                    return d(this.value, e.minimumChars)
                },focus: function() {
                    return false
                },select: function(d, b) {
                    var a = b.item.value;
                    if (e.multiple) {
                        var a = c(this.value);
                        a.pop();
                        a.push(b.item.value);
                        a.push("");
                        this.value = a.join(", ")
                    } else
                        this.value = a;
                    f.trigger("tagSelect", a);
                    e.onSelect(a);
                    return false
                }})
        })
    }
})(jQuery);
(function(a) {
    a.fn.htmlWithMacroProcessing = function(d) {
        var e = bungieNetPlatform.macroProcessor.getNormalizedHtml(d.content);
        return this.each(function() {
            var f = a(this);
            f.html(e);
            f.each(function() {
                var e = c(d);
                b(a(this), e)
            })
        })
    };
    a.fn.appendWithMacroProcessing = function(e) {
        var d = bungieNetPlatform.macroProcessor.getNormalizedHtml(e.content);
        if (d != "")
            return this.each(function() {
                var g = a(this), f = a(d);
                g.append(f);
                f.each(function() {
                    var d = c(e);
                    b(a(this), d)
                })
            })
    };
    a.fn.MacroProcess = function(d) {
        return this.each(function() {
            var e = a(this), f = c(d);
            b(e, f)
        })
    };
    function c(c) {
        var b = a.extend({content: "",parents: [],itemRenderedCallback: function() {
            },renderCompleteCallback: function() {
            }}, c);
        b.parents = a.merge([], b.parents);
        return b
    }
    function b(b, c) {
        return b.hasClass("MacroProcess") ? a.when(b.renderContentFromAttributes(c), b.find(".MacroProcess").renderContentFromAttributes(c)) : a.when(b.find(".MacroProcess").renderContentFromAttributes(c))
    }
})(jQuery);
(function(a) {
    a.fn.renderAsset = function(c) {
        var b = a.extend({path: "",width: "auto",height: "auto",onComplete: function() {
            }}, c);
        return this.each(function() {
            var c = a(this), d = {path: c.attr("data-asset-path") ? c.attr("data-asset-path") : b.path,width: c.attr("data-asset-width") ? c.attr("data-asset-width") : b.width,height: c.attr("data-asset-height") ? c.attr("data-asset-height") : b.height}, e = bungieNetPlatform.assetRenderer.renderAsset(d);
            c.append(e);
            b.onComplete(c)
        })
    };
    a.fn.renderAssetThumbnail = function(c) {
        var b = a.extend({path: "",width: "auto",height: "auto",onComplete: function() {
            }}, c);
        return this.each(function() {
            var c = a(this), d = {path: c.attr("data-asset-path") ? c.attr("data-asset-path") : b.path,width: c.attr("data-asset-width") ? c.attr("data-asset-width") : b.width,height: c.attr("data-asset-height") ? c.attr("data-asset-height") : b.height}, e = bungieNetPlatform.assetRenderer.renderAssetThumbnail(d);
            c.append(e);
            b.onComplete(c)
        })
    }
})(jQuery);
(function(a) {
    var b = function() {
        var a = this;
        a.count = 0;
        a.identifiers = 0;
        a.actions = [];
        a.pushCall = function(c) {
            a.count++;
            var b = a.identifiers;
            a.identifiers++;
            a.actions.push({command: c,identifier: b});
            return b
        };
        a.popCall = function(b) {
            for (i = 0; i < a.actions.length; i++)
                if (a.actions[i].identifier == b) {
                    a.actions.splice(i, 1);
                    return true
                }
            console.log("Transaction: No Identifier for popped call " + b + "!")
        }
    }, j = [];
    function g(b, f, d, e, a, c) {
        var g = b.children();
        b.hasClass("MacroProcess") && b.replaceWith(g);
        c(f, d, e);
        a.transaction.popCall(a.identifier);
        a.transaction.actions.length == 0 && a.traversalCompleteCallback(a.transaction.count)
    }
    function h(g, c, e, b, f) {
        var d;
        if (c)
            d = a.merge(a.merge([], b.parents), [c]);
        else
            d = a.merge([], b.parents);
        g.appendWithMacroProcessing({content: e,parents: d,templateType: b.templateType,transaction: b.transaction,traversalCompleteCallback: b.traversalCompleteCallback});
        f(c, e)
    }
    function c(d, e) {
        var c = e[0];
        d.renderAttributes = [];
        for (var b = 0; b < c.attributes.length; b++) {
            var a = c.attributes[b];
            if (a)
                if (a.name.indexOf("data-") > -1)
                    d.renderAttributes[a.name] = a.value
        }
    }
    function d(c, b) {
        var f = c.itemRenderedCallback, e = c.renderCompleteCallback, d = a.extend({}, c, {path: b.attr("data-content-path") ? b.attr("data-content-path") : c.contentPath,contentId: b.attr("data-content-id") ? b.attr("data-content-id") : c.contentId,locale: b.attr("data-content-locale") ? b.attr("data-content-locale") : c.locale,templateType: b.attr("data-template-type") ? b.attr("data-template-type") : c.templateType,propertyName: b.attr("data-property-name") ? b.attr("data-property-name") : c.propertyName,isTypeAgnostic: b.attr("data-is-type-agnostic") ? b.attr("data-is-type-agnostic").toLowerCase() == "true" : c.isTypeAgnostic});
        d.itemRenderedCallback = function(c, a) {
            h(b, c, a, d, f)
        };
        d.renderCompleteCallback = function(f, a, c) {
            g(b, f, a, c, d, e)
        };
        d.firstResultCallback = function() {
            b.html("")
        };
        return d
    }
    a.fn.renderContentFromId = function(f) {
        var e = a.extend({contentId: 0,locale: bungieNetPlatform.platformSettings.currentLocale,templateType: "",isTypeAgnostic: false,itemRenderedCallback: function() {
            },renderCompleteCallback: function() {
            },traversalCompleteCallback: function() {
            },errorCallback: function() {
            },parents: [],transaction: new b,headOnly: false,renderAttributes: []}, f);
        return this.each(function() {
            var f = a(this), b = d(e, f);
            b.identifier = b.transaction.pushCall("renderContentFromId");
            c(b, f);
            bungieNetPlatform.contentRenderer.renderContentFromId(b)
        })
    };
    a.fn.renderContentItemFromTagAndType = function(a) {
        f("renderContentItemFromTagAndType", bungieNetPlatform.contentRenderer.renderContentItemFromTagAndType, a, {tag: "",contentType: "",locale: bungieNetPlatform.platformSettings.currentLocale}, {contentType: "data-content-type",tag: "data-content-tag",locale: "data-content-locale"}, this)
    };
    a.fn.renderPromoWidget = function(a) {
        f("renderPromoWidget", bungieNetPlatform.contentRenderer.renderPromoWidget, a, {}, {}, this)
    };
    a.fn.renderContent = function(f) {
        var e = a.extend({contentObject: null,templateType: "",isTypeAgnostic: false,itemRenderedCallback: function() {
            },renderCompleteCallback: function() {
            },traversalCompleteCallback: function() {
            },errorCallback: function() {
            },parents: [],transaction: new b,headOnly: false,renderAttributes: []}, f);
        return this.each(function() {
            var f = a(this), b = d(e, f);
            b.identifier = b.transaction.pushCall("renderContent");
            c(b, f);
            bungieNetPlatform.contentRenderer.renderContent(b)
        })
    };
    a.fn.renderContentList = function(f) {
        var e = a.extend({contentList: [],templateType: "",isTypeAgnostic: false,itemRenderedCallback: function() {
            },renderCompleteCallback: function() {
            },traversalCompleteCallback: function() {
            },errorCallback: function() {
            },parents: [],transaction: new b,headOnly: false,renderAttributes: []}, f);
        return this.each(function() {
            var f = a(this), b = d(e, f);
            b.identifier = b.transaction.pushCall("renderContentList");
            c(b, f);
            var g = {hasMore: false,query: {contentTypes: [],creationDate: 0,currentPage: 1,itemsPerPage: b.contentList.length,modifiedDate: 0,sortBy: 0,tag: ""},results: b.contentList,totalResults: b.contentList.length};
            bungieNetPlatform.contentRenderer.renderContentItemList(g, b)
        })
    };
    a.fn.renderContentFromAttributes = function(d) {
        var c = a.extend({templateType: "",locale: bungieNetPlatform.platformSettings.currentLocale,itemRenderedCallback: function() {
            },renderCompleteCallback: function() {
            },traversalCompleteCallback: function() {
            },errorCallback: function() {
            },parents: [],transaction: new b,headOnly: false,renderAttributes: []}, d);
        return this.each(function() {
            var b = a(this), d = "id";
            if (b.attr("data-render-command"))
                var d = b.attr("data-render-command");
            switch (d) {
                case "id":
                    b.renderContentFromId(c);
                    break;
                case "query":
                    b.renderContentFromQuery(c)
            }
        })
    };
    a.fn.renderContentFromQuery = function(a) {
        e("renderContentFromQuery", bungieNetPlatform.contentRenderer.renderContentFromQuery, a, {contentTypes: [],tag: "",notTag: "",locale: bungieNetPlatform.platformSettings.currentLocale,itemsPerPage: 100,currentPage: 1,sortBy: Globals.ContentSortBy.CreationDate,creationDate: Globals.ContentDateRange.All,modifiedDate: Globals.ContentDateRange.All}, {contentTypes: "data-content-types",tag: "data-content-tag",notTag: "data-content-not-tag",locale: "data-content-locale",itemsPerPage: "data-content-items-per-page",currentPage: "data-content-current-page",sortBy: "data-content-sort-by"}, this)
    };
    a.fn.renderContentFromTagAndType = function(a) {
        e("renderContentFromTagAndType", bungieNetPlatform.contentRenderer.renderContentFromTagAndType, a, {contentType: "",tag: "",locale: bungieNetPlatform.platformSettings.currentLocale,itemsPerPage: 10,currentPage: 1}, {contentType: "data-content-type",tag: "data-content-tag",locale: "data-content-locale",itemsPerPage: "data-content-items-per-page",currentPage: "data-content-current-page"}, this)
    };
    a.fn.renderNewsContent = function(a) {
        e("renderNewsContent", bungieNetPlatform.contentRenderer.renderNewsContent, a, {contentTypes: "",newsType: "",locale: bungieNetPlatform.platformSettings.currentLocale,itemsPerPage: 10,currentPage: 1}, {contentType: "data-content-type",newsType: "data-content-news-type",locale: "data-content-locale",itemsPerPage: "data-content-items-per-page",currentPage: "data-content-current-page"}, this)
    };
    function e(h, k, j, g, e, i) {
        var f = a.extend({templateType: "",isTypeAgnostic: false,itemRenderedCallback: function() {
            },renderCompleteCallback: function() {
            },traversalCompleteCallback: function() {
            },errorCallback: function() {
            },parents: [],transaction: new b,headOnly: false,renderAttributes: []}, j);
        return i.each(function() {
            var j = a(this), b = d(f, j);
            b.query = a.extend(g, f.query);
            for (var i in g)
                if (typeof e[i] != "undefined")
                    b.query[i] = j.attr(e[i]) ? j.attr(e[i]) : b.query[i];
            b.identifier = b.transaction.pushCall(h);
            c(b, j);
            k(b)
        })
    }
    function f(h, k, j, g, e, i) {
        var f = a.extend({templateType: "",isTypeAgnostic: false,itemRenderedCallback: function() {
            },renderCompleteCallback: function() {
            },traversalCompleteCallback: function() {
            },errorCallback: function() {
            },parents: [],transaction: new b,headOnly: false,renderAttributes: []}, j);
        return i.each(function() {
            var j = a(this);
            f.identifier = f.transaction.pushCall(h);
            var b = d(f, j);
            b = a.extend(g, b);
            for (var i in g)
                if (typeof e[i] != "undefined")
                    b[i] = j.attr(e[i]) ? j.attr(e[i]) : b[i];
            c(b, j);
            k(b)
        })
    }
})(jQuery);
var Cookies = {Path: "/",Set: function(b, a) {
        document.cookie = b + "=" + encodeURIComponent(a) + ";path=" + this.Path
    },SetWithExpires: function(c, b, a) {
        document.cookie = c + "=" + encodeURIComponent(b) + ";path=" + this.Path + ";expires=" + a.toUTCString()
    },Get: function(b) {
        var a = document.cookie.match(b + "=(.*?)(;|$)");
        return a ? decodeURIComponent(a[1]) : null
    },GetMulti: function(f, e) {
        var a = document.cookie.match(f + "=(.*?)(;|$)");
        if (a && a.length >= 1)
            for (var c = a[1].split("&"), b = 0; b < c.length; b++) {
                var d = c[b].split("=");
                if (d[0] == e)
                    return decodeURIComponent(d[1])
            }
        return null
    },GetMultiDictionary: function(f) {
        var a = {}, b = document.cookie.match(f + "=(.*?)(;|$)");
        if (b && b.length >= 1)
            for (var d = b[1].split("&"), c = 0; c < d.length; c++) {
                var e = d[c].split("=");
                a[e[0]] = e[1]
            }
        if (a == null)
            a = {};
        return a
    },SetMulti: function(d, b) {
        var a = "";
        for (var c in b)
            a += encodeURIComponent(c) + "=" + encodeURIComponent(b[c]) + "&";
        if (a.length > 0)
            a = a.substr(0, a.length - 1);
        document.cookie = d + "=" + a + ";path=" + this.Path
    },SetMultiWithExpires: function(e, d, b) {
        var a = "";
        for (var c in b)
            a += encodeURIComponent(c) + "=" + encodeURIComponent(b[c]) + "&";
        if (a.length > 0)
            a = a.substr(0, a.length - 1);
        document.cookie = e + "=" + a + ";path=" + this.Path + ";expires=" + d.toUTCString()
    },GetInMulti: function(c, b) {
        var a = Cookies.GetMultiDictionary(c);
        return a[b]
    },SetInMulti: function(b, d, c) {
        var a = Cookies.GetMultiDictionary(b);
        a[d] = c;
        Cookies.SetMulti(b, a)
    },SetInMultiWithExpires: function(b, e, c, d) {
        var a = Cookies.GetMultiDictionary(b);
        a[e] = c;
        Cookies.SetMultiWithExpires(b, d, a)
    },SetInMultiFromDictionary: function(c, a) {
        var b = Cookies.GetMultiDictionary(c);
        for (var d in a)
            b[d] = a[d];
        Cookies.SetMulti(c, b)
    },SetInMultiFromDictionaryWithExpires: function(c, e, a) {
        var b = Cookies.GetMultiDictionary(c);
        for (var d in a)
            b[d] = a[d];
        Cookies.SetMultiWithExpires(c, e, b)
    },Delete: function(b) {
        if (this.Get(b)) {
            var a = new Date;
            a.setTime(a.getTime() - 1);
            document.cookie = b + "=;path=" + this.Path + ";expires=" + a.toUTCString()
        }
        return true
    }};
bungieNetPlatform.dateUtility = {formatShortDate: function(a) {
        return a.getMonth() + 1 + "/" + a.getDate() + "/" + a.getFullYear()
    },formatTime: function(a) {
        var c = a.getHours() % 12, b = a.getMinutes();
        return c + ":" + b
    },getAmPm: function(a) {
        return a.getHours() / 12 >= 1 ? "PM" : "AM"
    }};
(function() {
    bungieNetPlatform.linkHelper = {linkRegex: new RegExp(/([\s\(\>]|^|>)((http|https)\:\/\/([^\s\<\[]*))((?=[\,\.\!\:\;\-\"\)]([\s\<]|$)))/gi),linkFineRegex: new RegExp(/([\s]|^|>)((http|https)\:\/\/([^\"\s\<]*))/gi),injectLinks: function(b) {
            var a = "";
            if (typeof b !== "undefined") {
                a = b.replace(bungieNetPlatform.linkHelper.linkRegex, '$1<a href="$2" rel="nofollow" class="externalLink">$2</a>');
                a = a.replace(bungieNetPlatform.linkHelper.linkFineRegex, '$1<a href="$2" rel="nofollow" class="externalLink">$2</a>')
            }
            return a
        }}
})();
(function() {
    bungieNetPlatform.tagHelper = {hashRegex: new RegExp(/(\#([a-zA-Z\u00C0-\u017F\u01FA-\u0217][a-zA-Z\u00C0-\u017F\u01FA-\u0217_0-9]{2,29}))(?!.*?\[\/(url|google)\])/gi),injectSpans: function(a) {
            return a.replace(bungieNetPlatform.tagHelper.hashRegex, '<span data-tag="$2">$1</span>')
        }}
})();
