<!DOCTYPE html>
<html>
<head>
	<title> Landing Page</title>
</head>
<body style="height: 1500px;">
<div data-slide-name="intro" id="intro"  class="cb-slider-item -in" >
	 Intro
</div>
<div data-slide-name="ewa" id="ewa" class="cb-slider-item -out -next">
	 EWA
</div>

<div data-slide-name="yolla" id="yolla" class="cb-slider-item">
	YOLLA
</div>

 <div data-slide-name="hyphen" id="hyphen" class="cb-slider-item">
 	 Hyphen
 </div>

 <div data-slide-name="neemble" id="neemble"  class="cb-slider-item">
 	 Neemble
 </div>

 <div data-slide-name="tradingview" id="tradingview"  class="cb-slider-item">
 	 Trading View
 </div>

  <script src="assets/js/jquery-2.1.1.min.js"></script>
   <!--  <script src="assets/js/vendor.js"></script>
    <script src="assets/js/bundle.js?v=2.8.13"></script> -->
    <!-- Yandex.Metrika counter-->
    <script>
   
    jQuery(document).ready(function($) {
    var s = jQuery("#intro");
    var intropos = s.position();
    
      jQuery(window).scroll(function() {    
        var windowpos = jQuery(window).scrollTop();
         
        if (windowpos >= intropos.top & windowpos <=200 && windowpos >=0) {
        	jQuery("#intro").show();
            jQuery("#intro").addClass("-in");
            jQuery("#intro").removeClass("-out");
         }

      else if (windowpos <=400 && windowpos >=200 ) {
      	
      	jQuery("#ewa").show();
        jQuery("#intro").hide();  
        
        jQuery("#intro").removeClass("-in");
        jQuery("#intro").addClass("-out");
        jQuery("#ewa").addClass("-in");
        jQuery("#ewa").removeClass("-out");
        } 
         else if (windowpos <=600 && windowpos >=400 ) {
      	jQuery("#yolla").show();
        jQuery("#intro").hide();  
        jQuery("#ewa").hide();

        jQuery("#ewa").removeClass("-in");
        jQuery("#ewa").addClass("-out");
        jQuery("#yolla").addClass("-in");
        jQuery("#yolla").removeClass("-out");
        } 

       else if (windowpos <=800 && windowpos >=600 ) {
      	jQuery("#hyphen").show();
        jQuery("#intro").hide();  
        jQuery("#ewa").hide();
        jQuery("#yolla").hide();

        jQuery("#yolla").removeClass("-in");
        jQuery("#yolla").addClass("-out");
        jQuery("#hyphen").addClass("-in");
        jQuery("#hyphen").removeClass("-out");
        } 

        else if (windowpos <=1000 && windowpos >=800 ) {
      	jQuery("#neemble").show();
        jQuery("#intro").hide();  
        jQuery("#ewa").hide();
        jQuery("#yolla").hide();
        jQuery("#hyphen").hide();

        jQuery("#hyphen").removeClass("-in");
        jQuery("#hyphen").addClass("-out");
        jQuery("#neemble").addClass("-in");
        jQuery("#neemble").removeClass("-out");

        } 
    
        else if (windowpos <=1200 && windowpos >=1000 ) {
      	jQuery("#tradingview").show();
        jQuery("#intro").hide();  
        jQuery("#ewa").hide();
        jQuery("#ewa").hide();
        jQuery("#hyphen").hide();
        jQuery("#neemble").hide();
        } 

    });

       });
    </script>
</body>
</html>