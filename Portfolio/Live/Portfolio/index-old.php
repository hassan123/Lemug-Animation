<!DOCTYPE html>
<html lang="en" data-ng-app="indiefolio" manifest="https://www.indiefolio.com/assets/manifest/cache.manifest" class="ng-scope js no-touch csstransitions">
<head>
<?php include("includes/topstyle.php");?>
 <style type="text/css">
						#pinContainer {
							width: 100%;
							height: 100%;
							overflow: hidden;
						}
						.panel {
							height: 100%;
							width: 100%;
							position: absolute;
						}
					</style>
 
 	 	</head>

<body data-ng-class="{'processing' : processing}" class="selected  no-padding" ng-strict-di="">
 <?php include("includes/homeheader.php");?>

 	         <!-- ngView:  -->
  <div id="main-content" data-ng-view="" class="ng-scope">
	 	<link rel="canonical" href="https://www.indiefolio.com/" class="ng-scope">
		
	     <!-- End Menu -->
      
		<?php include("homesections/sunset.php"); ?>
		<?php include("homesections/features.php"); ?>
	      <!-- End feature section -->
<?php include("homesections/pinspacer.php"); ?>
		
	    <!-- End page slider section -->
    <?php include("homesections/magicspacer.php"); ?>
	    <!-- End scroll magic pin spacer -->
     <?php include("homesections/videoscreen.php"); ?>

     <?php include("homesections/testimonial-screen.php"); ?>
	  
	  <?php include("homesections/footer-screen.php"); ?>

	    
    </div>
      <!-- End main-content -->
        
         <a id="goto-link" href="." style="display: none"></a>
         <div id="overlay">
         <!-- ngIf: overlayClosable -->
         <div class="overlay-content">
         <!-- ngInclude: overlayTemplate -->
         </div></div>

         <div id="scrim" style="display: none" data-ng-click="showNavigation(false)"></div>
        

	 
       <!--   <script src="js/jquery-2.1.1.min.js"></script>
<script src="js/modernizr.custom.min.js"></script>
<script src="js/TweenMax.min.js"></script>
<script src="js/ScrollMagic.js"></script>
<script src="js/animation.gsap.js"></script>
<script src="js/debug.addIndicators.js"></script> -->
<script>
						$(function () { // wait for document ready
							// init
							var controller = new ScrollMagic.Controller();

							// define movement of panels
							var wipeAnimation = new TimelineMax()
								.fromTo("#map-section", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
								.fromTo("#e-section",    1, {x:  "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
					.fromTo("#slide-1", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone}); // in from top

							// create scene to pin and link animation
							new ScrollMagic.Scene({
									triggerElement: "#pinContainer",
									triggerHook: "onLeave",
									duration: "300%"
								})
								.setPin("#pinContainer")
								.setTween(wipeAnimation)
								.addIndicators() // add indicators (requires plugin)
								.addTo(controller);
						});
					</script>
<script>
	$(function () { // wait for document ready
		// init
		//var controller = new ScrollMagic.Controller();

		// define movement of panels
		// var wipeAnimation = new TimelineMax()
		// 	// animate to second panel
		// 	.to("#page-slider-section", 0.5, {z: -150})		// move back in 3D space
		// 	.to("#page-slider-section", 1,   {x: "-25%"})	// move in to first panel
		// 	.to("#page-slider-section", 0.5, {z: 0})				// move back to origin in 3D space
		// 	// animate to third panel
		// 	.to("#page-slider-section", 0.5, {z: -150, delay: 1})
		// 	.to("#page-slider-section", 1,   {x: "-50%"})
		// 	.to("#page-slider-section", 0.5, {z: 0})
		// 	// animate to forth panel
		// 	.to("#page-slider-section", 0.5, {z: -150, delay: 1})
		// 	.to("#page-slider-section", 1,   {x: "-75%"})
		// 	.to("#page-slider-section", 0.5, {z: 0});

		// create scene to pin and link animation
	// 	new ScrollMagic.Scene({
	// 			triggerElement: "#main-content",
	// 			triggerHook: "onLeave",
	// 			duration: "500%"
	// 		})
	// 		.setPin("#main-content")
	// 		.setTween(wipeAnimation)
	// 		.addIndicators() // add indicators (requires plugin)
	// 		.addTo(controller);
	 });

// 	var slide = $("div[data-slide='true']");
// var opening = false;
// var closing = false;
// $(window).scroll(function() {
//     var pos = $(window).scrollTop();
//     console.log(pos);
//     if (pos > 100) {
//         if (!opening) {
//             opening = true; closing = false;
//             slide.stop().animate({
//                 opacity: 1,
//                 'margin-left': -350
//             }, 1350, function() {
//                 opening = false;
//             });
//         }

//     } else {
//         if (!closing) {
//             closing = true; opening = false;
//             slide.stop().animate({
//                 opacity: 0,
//                 'margin-left': 0
//             }, 500, function() {
//                 closing = false;
//             });
//         }
//     }
//  });

</script>
         <!-- <script async="" src="https://cdn.indiefolio.com/assets/js/indiefolio-1478944889510.min.js"></script>
         <div id="fb-root" class=" fb_reset"><div style="position: absolute; top: -10000px; height: 0px; width: 0px;">
         <div>
          -->
         </div></div>

         <div style="position: absolute; top: -10000px; height: 0px; width: 0px;">
         <div></div></div></div>

         

         </body>
         </html>