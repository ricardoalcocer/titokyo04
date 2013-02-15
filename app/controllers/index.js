// ########################################
// $.drawermenu exposes 2 containers:
// 		$.drawermenu.drawermainview
// 		$.drawermenu.drawermenuview
//

// ADD MAIN APP VIEW
var appMainObj=Alloy.createController('appmain');

appMainObj.menuButton.addEventListener('click',function(){
	$.drawermenu.showhidemenu();
})

var appMain=appMainObj.getView();
$.drawermenu.drawermainview.add(appMain);
//

// ADD MENU VIEW
var appMainObj=Alloy.createController('appmenu');
$.drawermenu.drawermenuview.add(appMainObj.getView());
//

$.index.open();