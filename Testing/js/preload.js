$(document).ready(function(){
	function preload(arrayOfImages) {
		$(arrayOfImages).each(function(){
			$('<img/>')[0].src = this;
		});
	}
	
	function preloader() {
		preload([
			'images/Selenium.jpg',
			'images/SoapUI.jpg',
			'images/JMeter.jpg',
			'images/Loadrunner.jpg'
			
		]);
		
	}
	
	function addLoadEvent(func) {
		var oldonload = window.onload;
		if (typeof window.onload != 'function') {
			window.onload = func;
		} else {
			window.onload = function() {
				if (oldonload) {
					oldonload();
				}
				func();
			}
		}
	}
	addLoadEvent(preloader);

});