if (OS_ANDROID) {

    $.tabGroup.addEventListener('open', function() {

        // When we are asked to create the TabGroup Action Bar menu
        $.tabGroup.activity.onCreateOptionsMenu = function(e) {

            // If the Window of the active Tab has defined a menu
            if ($.tabGroup.activeTab.window.activity.onCreateOptionsMenu) {

                // Pass the request on
                $.tabGroup.activeTab.window.activity.onCreateOptionsMenu(e);
            }

        };
    });

    // When the active tab changes
    $.tabGroup.addEventListener('focus', function(e) {

        // Recreate the TabGroup Action Bar menu
        $.tabGroup.activity.invalidateOptionsMenu();
    });
}

Alloy.Globals.tabs = $.tabGroup;

$.tabGroup.open();
