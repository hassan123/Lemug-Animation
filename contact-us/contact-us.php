<!DOCTYPE html>
<html>
        <meta name="viewport" content="width=device-width, initial-scale=1"> 
        <title>contact us</title>
        <link rel="stylesheet" href="assets/css/firewatchlaunch.css" type="text/css" media="screen" charset="utf-8">           
    </head>

    <body>
    <div id="homemenu"><?php include('../includes/sidemenu.php');?> </div>
        <div id="page">
         <!-- Start contact-detail -->
          <div class="contact-detail">
          <div class="contact-detailinner">
              <!-- Start contact-txt -->
              <div class="contact-txt">
                <h2>HEAD OFFICE</h2>
                <p>India Office Address: D-88, Sector 30, Noida, UP 201307 </p>

  <p>India Correspondence Address: B-503, Ajnara GenX, </p>
  <p> Crossings Republik, Ghaziabad, UP 201009 </p>

  <p>USA Address: 5352 S Justine, Chicago, IL, USA 60609</p>
              </div>
               <!-- End contact-txt -->
               
               <!-- Start contact-txt -->
              <div class="contact-txt">
                <h2>CALL US</h2>
                <p>India Phone: +91-997-176-6793</p>

  <p>USA Phone: +1-234-564-2156 </p>

              </div>
               <!-- End contact-txt -->

               <!-- Start contact-txt -->
              <div class="contact-txt">
                <h2>EMAIL US</h2>
                <p>Primary Email: allenross653@gmail.com </p>

  <p>Secondary Email: wantroteam@gmail.com </p>

              </div>
               <!-- End contact-txt -->
     </div>
     <!-- End contact-detailinner -->
          </div>
            <!-- End contact-detail -->

            <div class="keyart" id="parallax">
                <div class="keyart_layer parallax" id="keyart-0" data-speed="2" style="transform: translate3d(0px, 0px, 0px)"></div>        <!-- 00.0 -->
                <div class="keyart_layer parallax" id="keyart-1" data-speed="5" style="transform: translate3d(0px, 0px, 0px)"></div>    <!-- 12.5 -->
                <div class="keyart_layer parallax" id="keyart-2" data-speed="11" style="transform: translate3d(0px, 0px, 0px)"></div>       <!-- 25.0 -->
                <div class="keyart_layer parallax" id="keyart-3" data-speed="16" style="transform: translate3d(0px, 0px, 0px)"></div>   <!-- 37.5 -->
                <div class="keyart_layer parallax" id="keyart-4" data-speed="26" style="transform: translate3d(0px, 0px, 0px)"></div>       <!-- 50.0 -->
                <div class="keyart_layer parallax" id="keyart-5" data-speed="36" style="transform: translate3d(0px, 0px, 0px)"></div>   <!-- 62.5 -->
                <div class="keyart_layer parallax" id="keyart-6" data-speed="49" style="transform: translate3d(0px, 0px, 0px)"></div>       <!-- 75.0 -->
                <div class="keyart_layer" id="keyart-scrim"></div>
                <div class="keyart_layer parallax" id="keyart-7" data-speed="69" style="transform: translate3d(0px, 0px, 0px)"></div>       <!-- 87.5 -->
                <div class="keyart_layer" id="keyart-8" data-speed="100"></div>     <!-- 100. -->
            </div>

     

        </div>

        <div class="contact-form">
                
                <form>
<ul class="form-style-1">
    <li>
    <label>Full Name </label>
    <input type="text" name="field1" class="field-divided" placeholder="First" />&nbsp;<input type="text" name="field2" class="field-divided" placeholder="Last" /></li>
    <li>
        <label>Email </label>
        <input type="email" name="field3" class="field-long" />
    </li>
    <li>
        <label>Subject</label>
        <select name="field4" class="field-select">
        <option value="Advertise">Advertise</option>
        <option value="Partnership">Partnership</option>
        <option value="General Question">General</option>
        </select>
    </li>
    <li>
        <label>Your Message </label>
        <textarea name="field5" id="field5" class="field-long field-textarea"></textarea>
    </li>
    <li>
        <input type="submit" value="Submit" />
    </li>
</ul>
</form> 

            </div>

        <script type="text/javascript" src="assets/js/jquery-1.12.0.min.js.download"></script>
        <script type="text/javascript" src="assets/js/jquery.simplr.smoothscroll.min.js.download"></script>
        <script type="text/javascript" src="assets/js/firewizard.js.download"></script>
        <?php include('../includes/common-js.php');?>
        <script>
            jQuery(document).scroll(function () {
    var y = jQuery(this).scrollTop();
    if (y > 700) {
        jQuery('.contact-detailinner').fadeOut();
    } else {
        jQuery('.contact-detailinner').fadeIn();
    }

      });
        </script>
</body>
</html>