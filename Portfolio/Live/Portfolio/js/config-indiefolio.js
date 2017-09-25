init = {};
init.restUrl = "https://api.indiefolio.com/v1/";
init.googleAppID = "681329100231-rqmgs5ij47iiai4nug0ods9n2aeo9031";
init.facebookAppID = '729418570495639';
init.errlyticsDisabled = false;
init.facebookAdminID = '697722442';

// Application cache check. To see if things have updated on the cache.
// Check if a new cache is available on page load.
window.addEventListener('load', function(e) {

    window.applicationCache.addEventListener('updateready', function(e) {
        if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
            // Browser downloaded a new app cache.
            if (confirm('A new version of this site is available. Reload?')) {
                window.location.reload();
            }
        } else {
            // Manifest didn't changed. Nothing new to server.
        }
    }, false);

}, false);