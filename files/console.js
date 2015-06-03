bungieNetPlatform.destinyService.SetItemLockState({
    state: true,
    membershipType: "1",
    characterId: "2305843009215015447",
    itemId: "6917529049945379989"
}, function(resp) {
    console.log('Request successful:', resp)
}, function(err) {
    console.warn('Request unsuccessful:', err)
})
