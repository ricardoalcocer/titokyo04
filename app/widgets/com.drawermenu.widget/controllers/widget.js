var menuOpen = false;

var showhidemenu=function(){
	if (menuOpen){
		moveTo="0";
		menuOpen=false;
	}else{
		moveTo="250dp";
		menuOpen=true;
	}

	$.drawermainview.width=Ti.Platform.displayCaps.platformWidth;
	$.drawermainview.animate({
		left:moveTo,
		duration:100
	});
}

var hidemenubutton=function(){
	$.menubutton.visible=false;
}

var showmenubutton=function(){
	$.menubutton.visible=true;	
}
Ti.Gesture.addEventListener('orientationchange', function(e) {
    $.drawermainview.width=Ti.Platform.displayCaps.platformWidth;
});

exports.hidemenubutton=hidemenubutton;
exports.showmenubutton=showmenubutton;
exports.showhidemenu=showhidemenu;