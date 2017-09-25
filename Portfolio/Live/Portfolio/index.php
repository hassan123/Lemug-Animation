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
<!-- 	<link rel="canonical" href="https://www.indiefolio.com/" class="ng-scope"> -->		
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

         </div></div>

         <div style="position: absolute; top: -10000px; height: 0px; width: 0px;">
         <div></div></div></div>

         

         </body>
         </html>