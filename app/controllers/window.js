
function doItem() {
  alert(1);
}


function changeMenu() {

  var activity = Alloy.Globals.tabs.activeTab.window.getActivity();
  // Re-create Menu
  if(activity){
    activity.onCreateOptionsMenu = function(e){
      var menuItem = e.menu.add({
        title : "New Title"+new Date().getSeconds(),
        visible: true,
        showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS
      });
      menuItem.addEventListener('click', doItem);
    };
    Alloy.Globals.tabs.activity.invalidateOptionsMenu();
  }

}
