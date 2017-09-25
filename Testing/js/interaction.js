$(document).ready(function(){
	
	setTimeout(function() { $("#grid").removeClass("launch"); }, 500);	
	setTimeout(function() { $("#grid").removeClass("transitionlaunch"); }, 2100);	
	
	var currentproject;
	var opening = false;

	$(".projet").click(function(){
		if (opening == false) {
			opening = true;
			if ($(this).hasClass("projet01")) { 
				$("body").addClass("selenium");
				$("#casestudies").load("Selenium.php", function(){ openprojet() }); 
			};
			if ($(this).hasClass("projet02")) { 
				$("body").addClass("jmeter");
				$("#casestudies").load("JMeter.php", function(){ openprojet() }); 
			};
			if ($(this).hasClass("projet03")) { 
				$("body").addClass("soapui");
				$("#casestudies").load("soapUI.php", function(){ openprojet() }); 
			};
			if ($(this).hasClass("projet04")) { 
				$("body").addClass("loadrunner");
				$("#casestudies").load("loadrunner.php", function(){ openprojet() }); 
			};
			
		}
	});
	
	function openprojet() {
		setTimeout(function() { $("body").addClass("active"); }, 100);	
		setTimeout(function() { $("#grid").addClass("fix"); }, 2500);	
		setTimeout(function() {  $("html, body").animate({ scrollTop: 0 }, 0); }, 2300);
		setTimeout(function() { opening = false; }, 3000);	
	};
	
	$(".closecase").click(function(){
		opening = true;
		$("body").removeClass("active");
		setTimeout(function() { 
			$("body").removeClass();
			opening = false;
		}, 2000);
		setTimeout(function() { $("#grid").removeClass("fix"); }, 1100);	
		$("html, body").animate({ scrollTop: 0 }, 1200);
	});
	
	function switchprojet() {
		setTimeout(function() {
			$("#casestudies").removeClass("switch");
			$("#casestudies").addClass("afterswitch");
			$("#background").removeClass("switch");
		}, 100);
		setTimeout(function() {
			$("#casestudies").removeClass("afterswitch");
			opening = false;
		}, 1500);
	}
	
	function change(add,remove,lien) {
		$("body").addClass(add);
		$("body").removeClass(remove);
		setTimeout(function() { $("#casestudies").load(lien+".php", 
		function(){ switchprojet() }); }, 1600);
		if ($("#previous").hasClass("opening")) {
			setTimeout(function() { $("#previous").removeClass("opening"); }, 2600);
		};
		if ($("#next").hasClass("opening")) {
			setTimeout(function() { $("#next").removeClass("opening"); }, 2600);
		};
		$("#casestudies").addClass("switch");
		$("#background").addClass("switch");
		$("html, body").animate({ scrollTop: 0 }, 500);
	}
	
	$("#next").click(function(){
		$(this).addClass("opening"); 
		if (opening == false) {
			opening = true;
			if ($("body").hasClass("selenium")) { change("jmeter","selenium","jmeter"); }
			else if ($("body").hasClass("jmeter")) { change("soapui","jmeter","soapui"); }
			else if ($("body").hasClass("soapui")) { change("loadrunner","soapui","loadrunner"); }
			
			
		}
	});
	
	$("#previous").click(function(){
		$(this).addClass("opening"); 
		if (opening == false) {
			opening = true;
			if ($("body").hasClass("selenium")) { change("loadrunner","selenium","loadrunner"); }
			else if ($("body").hasClass("jmeter")) { change("selenium","jmeter","selenium"); }
			else if ($("body").hasClass("soapui")) { change("jmeter","soapui","jmeter"); }
			else if ($("body").hasClass("loadrunner")) { change("soapui","loadrunner","soapui"); }
			
		}
	});
	
	
	$("#logo, #logotexte, #backtoworks").click(function(){
		$("body").removeClass("abco");
		setTimeout(function() { $("#grid").removeClass("fix"); }, 2500);	
		if ($("body").hasClass("about")) {
			$("body").removeClass("about");
			setTimeout(function() { $("#header").removeClass("front"); }, 2700);
		}
		if ($("body").hasClass("contact")) {
			$("body").removeClass("contact");
			setTimeout(function() { $("#header").removeClass("front"); }, 2700);
		}
	});
	
	var topvalue = 0;
	var leftvalue = 0;
	var sizevalue = 0;
	var carres = new Array();
	
	for (i = 0; i < 160; i++) { 
		$( "#bg" ).append( "<div class='carre carre"+[i]+"'></div>" );
		topvalue = Math.floor(Math.random() * (2000 - 100 + 1)) + 100;
		carres.push(topvalue);
		leftvalue = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
		sizevalue = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
		$(".carre"+[i]).css("top",topvalue);
		$(".carre"+[i]).css("left",leftvalue+"%");
		//$(".carre"+[i]).css("width",sizevalue);
		//$(".carre"+[i]).css("height",sizevalue);
	}
	
	var projets = new Array($(".projet01"), $(".projet02"), $(".projet03"), $(".projet04"));
	var lastScrollTop = 0;
	$(window).scroll(function(event){
		if($( window ).width() > 960 && window.devicePixelRatio < 1.4) {
		   var st = $(this).scrollTop();
		   var st1 = 120 - st/2.1;
		   var st2 = - st/3;
			  $(".right").css("margin-top",st1);
			  $(".left").css("margin-top",st2);
		   var st3 = 0;
		   var offs = 0;
		   var scrollvalue = 0;
		   for (i = 0; i < projets.length; i++) { 
				offs = projets[i].offset().top;
				if (offs - st < 350) {
				   st3 = - ( (350-(offs-st) ) /10);
				   projets[i].find("h2").css("margin-top",st3);
			   } 
			}
			for (i = 0; i < 40; i++) { 
				scrollvalue = 0;
				scrollvalue = carres[i] - st/2;
				$(".carre"+[i]).css("top",scrollvalue);
			}
			for (i = 40; i < 80; i++) { 
				scrollvalue = 0;
				scrollvalue = carres[i] - st/1.2;
				$(".carre"+[i]).css("top",scrollvalue);
			}
			for (i = 80; i < 120; i++) { 
				scrollvalue = 0;
				scrollvalue = carres[i] - st/1.6;
				$(".carre"+[i]).css("top",scrollvalue);
			}
			for (i = 120; i < 161; i++) { 
				scrollvalue = 0;
				scrollvalue = carres[i] - st/2.4;
				$(".carre"+[i]).css("top",scrollvalue);
			}
				 
		   lastScrollTop = st;
		}
	});
	
});