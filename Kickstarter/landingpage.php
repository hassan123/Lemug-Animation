<html lang="en" class="js flexbox flexboxlegacy canvas canvastext webgl no-touch geolocation postmessage websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths desktop mac landscape mac os macos10 macos10_10 32bit chrome chrome58 chrome58_0 webkit en-us skrollr skrollr-desktop"><head>
    <meta charset="utf-8">
    <title>Cuberto — Interactive Design Studio</title>
   
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    
    <link rel="stylesheet" href="assets/css/main.css?v=2.8.13">
    
    <link rel="manifest" href="manifest.json">
  </head>
  <body>
    <div class="cb-loader -hidden" style="display: block;">
      <div class="cb-loader-img"><img src="assets/img/loader/C-tru-2.gif" alt=""></div>
    </div>
    <div class="cb-scroller"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 25 40" style="enable-background:new 0 0 25 40;" xml:space="preserve"><path d="M11,39.5C5.2,39.5,0.5,34.8,0.5,29V11C0.5,5.2,5.2,0.5,11,0.5h3c5.8,0,10.5,4.7,10.5,10.5v18c0,5.8-4.7,10.5-10.5,10.5H11z"></path><circle cx="12.5" cy="11.5" r="1.5"></circle></svg>
    </div>
    <div class="cb-content">
         <a href="https://codepen.io/ChrisJohnson/pen/dIGDA">https://codepen.io/ChrisJohnson/pen/dIGDA</a>
      <div id="wrap-main" data-navbar-class="-default" class="cb-wrap">
        <div class="cb-slider -done" tabindex="0">
          <div class="cb-slider-control">
          <a class="cb-slider-control-item -prev"><i class="cb-icon -arrow-up"></i></a>
          <a class="cb-slider-control-item -next"><i class="cb-icon -arrow-down"></i></a></div>
          <div class="cb-slider-nav -visible">
            <div class="cb-slider-nav-inner">
      <a class="cb-slider-nav-item -active"><span>E</span><span>W</span><span>A</span></a>
      <a class="cb-slider-nav-item"><span>Y</span><span>O</span><span>L</span><span>L</span><span>A</span></a>
      <a class="cb-slider-nav-item "><span>H</span><span>Y</span><span>P</span><span>H</span><span>E</span><span>N</span></a>
      <a class="cb-slider-nav-item"><span>N</span><span>E</span><span>E</span><span>M</span><span>B</span>
      <span>L</span><span>E</span></a>
      <a class="cb-slider-nav-item"><span>T</span><span>R</span><span>A</span><span>D</span>
      <span>I</span><span>N</span><span>G</span></a>
      </div>
          </div>
          <div class="cb-slider-items">
           <?php include("landing/intro.php");?>
             <?php include("landing/ewa.php");?>
             <?php include("landing/yolla.php");?>
           <?php include("landing/hyphen.php");?>
           <?php include("landing/neemble.php");?>
           <?php include("landing/tradingview.php");?>
            
          </div>
        </div>
      </div>
    </div>
    
    <script src="assets/js/jquery-2.1.1.min.js"></script>
    <script src="assets/js/vendor.js"></script>
    <script src="assets/js/bundle.js?v=2.8.13"></script>
    <!-- Yandex.Metrika counter-->
    <script>
   
    jQuery(document).ready(function($) {
    var s = jQuery("#intro");
    var intropos = s.position();
    
      jQuery(window).scroll(function() {    
        var windowpos = jQuery(window).scrollTop();
          if(intropos == 200) { alert(windowpos);}
          
      //   if (windowpos >= intropos.top & windowpos <=1000 && windowpos >=0) {
      //     jQuery("#intro").show();
      //       jQuery("#intro").addClass("-in");
      //       jQuery("#intro").removeClass("-out");
      //    }

      // else if (windowpos <=2000 && windowpos >=1000 ) {
        
      //   jQuery("#ewa").show();
      //   jQuery("#intro").hide();  
        
      //   jQuery("#intro").removeClass("-in");
      //   jQuery("#intro").addClass("-out");
      //   jQuery("#ewa").addClass("-in");
      //   jQuery("#ewa").removeClass("-out");
      //   } 
      //    else if (windowpos <=3000 && windowpos >=2000 ) {
      //   jQuery("#yolla").show();
      //   jQuery("#intro").hide();  
      //   jQuery("#ewa").hide();

      //   jQuery("#ewa").removeClass("-in");
      //   jQuery("#ewa").addClass("-out");
      //   jQuery("#yolla").addClass("-in");
      //   jQuery("#yolla").removeClass("-out");
      //   } 

      //  else if (windowpos <=4000 && windowpos >=3000 ) {
      //   jQuery("#hyphen").show();
      //   jQuery("#intro").hide();  
      //   jQuery("#ewa").hide();
      //   jQuery("#yolla").hide();

      //   jQuery("#yolla").removeClass("-in");
      //   jQuery("#yolla").addClass("-out");
      //   jQuery("#hyphen").addClass("-in");
      //   jQuery("#hyphen").removeClass("-out");
      //   } 

      //   else if (windowpos <=5000 && windowpos >=4000 ) {
      //   jQuery("#neemble").show();
      //   jQuery("#intro").hide();  
      //   jQuery("#ewa").hide();
      //   jQuery("#yolla").hide();
      //   jQuery("#hyphen").hide();

      //   jQuery("#hyphen").removeClass("-in");
      //   jQuery("#hyphen").addClass("-out");
      //   jQuery("#neemble").addClass("-in");
      //   jQuery("#neemble").removeClass("-out");

      //   } 
    
      //   else if (windowpos <=6000 && windowpos >=5000 ) {
      //   jQuery("#tradingview").show();
      //   jQuery("#intro").hide();  
      //   jQuery("#ewa").hide();
      //   jQuery("#ewa").hide();
      //   jQuery("#hyphen").hide();
      //   jQuery("#neemble").hide();
      //   } 

    });

       });
    </script>
    
  
    </body></html>