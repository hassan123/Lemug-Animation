 <?php $title = "Kick Starter";
  include("layout/top.php");?>

            <div id="wrap-projects" class="cb-wrap" data-page-title="Projects — Cuberto" style="">
              <div class="cb-projects">
                <div class="cb-projects-left" style="transform: matrix(1, 0, 0, 1, 0, 0);">
                  <div class="cb-projects-bg"></div>
                  <div class="cb-projects-header">
                    <h1>Projects</h1>
                  </div>
                  <div class="cb-projects-items">
                   <div id="palgha"> <?php include("projects/algha.php");?></div>
                   <div id="pthroin"><?php include("projects/throin.php");?> </div>
                     <div id="phero"><?php include("projects/hero-genesis.php");?> </div>
                     <div id="pz40"> <?php include("projects/z40.php");?></div>
                      <div id="pland">  <?php include("projects/diminutive-land.php");?></div>
                      <div id="parton"><?php include("projects/arton-activewear.php");?> </div>
                     <div id="pairplank"> <?php include("projects/airplank.php");?></div>
                     <div id="pclipboard"><?php include("projects/crippled-bound.php");?> </div>
                      <div id="pvilespirit"><?php include("projects/vilesprit.php");?> </div>
                     

                    </div>
                  </div>
                  <div class="cb-projects-right" style="transform: matrix(1, 0, 0, 1, 0, 0);">
                    <div class="cb-projects-line"></div>
                    <div class="cb-projects-menu">
                     <?php include("rightside.php");?>
                    </div>
                  </div>
                </div>
              </div>
              </div>
             <?php include('../includes/common-js.php');?>

                      <script type="text/javascript" async="" src="assets/js/watch.js"></script>
                      <script src="assets/js/vendor.js"></script>
                      <script src="assets/js/bundle.js?v=2.8.13"></script>
                      <!-- Yandex.Metrika counter-->
                      <script>
    jQuery(document).ready(function($) {
   $('#algha').hover(function() { 
    jQuery("#alghadetail").addClass('-active -prev');
      jQuery("#throindetail").removeClass('-active -prev');
      jQuery("#polymatica").removeClass('-active -prev');
      jQuery("#borough").removeClass('-active -prev');
      jQuery("#hyphen").removeClass('-active -prev');
      jQuery("#polymaze").removeClass('-active -prev');
      jQuery("#tradingview").removeClass('-active -prev');
      jQuery("#yolla").removeClass('-active -prev');
      jQuery("#neemble").removeClass('-active -prev');
    });  
      /*********** Show Throin **************/ 
    $('#throin').hover(function() { 
      jQuery("#throindetail").addClass('-active -prev');
      jQuery("#alghadetail").removeClass('-active -prev');
      jQuery("#polymatica").removeClass('-active -prev');
      jQuery("#borough").removeClass('-active -prev');
      jQuery("#hyphen").removeClass('-active -prev');
      jQuery("#polymaze").removeClass('-active -prev');
      jQuery("#tradingview").removeClass('-active -prev');
      jQuery("#yolla").removeClass('-active -prev');
      jQuery("#neemble").removeClass('-active -prev');

    }); 
  
    /*********** Show Hero Genesis **************/
    jQuery('#herogenesis').hover(function() { 
      jQuery("#polymatica").addClass('-active -prev');
      jQuery("#alghadetail").removeClass('-active -prev');
      jQuery("#throindetail").removeClass('-active -prev');
      jQuery("#borough").removeClass('-active -prev');
      jQuery("#hyphen").removeClass('-active -prev');
      jQuery("#polymaze").removeClass('-active -prev');
      jQuery("#tradingview").removeClass('-active -prev');
      jQuery("#yolla").removeClass('-active -prev');
      jQuery("#neemble").removeClass('-active -prev');
    }); 

      /*********** Show Z40 **************/
    jQuery('#z40').hover(function() { 
       jQuery("#borough").addClass('-active -prev');
      jQuery("#polymatica").removeClass('-active -prev');
      jQuery("#alghadetail").removeClass('-active -prev');
      jQuery("#throindetail").removeClass('-active -prev');
      jQuery("#hyphen").removeClass('-active -prev');
      jQuery("#polymaze").removeClass('-active -prev');
      jQuery("#tradingview").removeClass('-active -prev');
      jQuery("#yolla").removeClass('-active -prev');
      jQuery("#neemble").removeClass('-active -prev');
    }); 

      /*********** Show Diminutive Land **************/
    jQuery('#diminutiveland').hover(function() { 
       jQuery("#hyphen").addClass('-active -prev');
      jQuery("#polymatica").removeClass('-active -prev');
      jQuery("#alghadetail").removeClass('-active -prev');
      jQuery("#throindetail").removeClass('-active -prev');
      jQuery("#borough").removeClass('-active -prev');
      jQuery("#polymaze").removeClass('-active -prev');
      jQuery("#tradingview").removeClass('-active -prev');
      jQuery("#yolla").removeClass('-active -prev');
      jQuery("#neemble").removeClass('-active -prev');
    }); 

      /*********** Show Art On Action **************/
    jQuery('#artonaction').hover(function() { 
       jQuery("#polymaze").addClass('-active -prev');
      jQuery("#polymatica").removeClass('-active -prev');
      jQuery("#alghadetail").removeClass('-active -prev');
      jQuery("#throindetail").removeClass('-active -prev');
      jQuery("#borough").removeClass('-active -prev');
      jQuery("#hyphen").removeClass('-active -prev');
      jQuery("#tradingview").removeClass('-active -prev');
      jQuery("#yolla").removeClass('-active -prev');
      jQuery("#neemble").removeClass('-active -prev');
    }); 

      /*********** Show Air plank **************/
    jQuery('#airplank').hover(function() { 
      jQuery("#tradingview").addClass('-active -prev');
      jQuery("#polymatica").removeClass('-active -prev');
      jQuery("#alghadetail").removeClass('-active -prev');
      jQuery("#throindetail").removeClass('-active -prev');
      jQuery("#borough").removeClass('-active -prev');
      jQuery("#hyphen").removeClass('-active -prev');
      jQuery("#polymaze").removeClass('-active -prev');
      jQuery("#yolla").removeClass('-active -prev');
      jQuery("#neemble").removeClass('-active -prev');
    }); 

      /*********** Show Clip Board **************/
    jQuery('#clipboard').hover(function() { 
      jQuery("#yolla").addClass('-active -prev');
      jQuery("#polymatica").removeClass('-active -prev');
      jQuery("#alghadetail").removeClass('-active -prev');
      jQuery("#throindetail").removeClass('-active -prev');
      jQuery("#borough").removeClass('-active -prev');
      jQuery("#hyphen").removeClass('-active -prev');
      jQuery("#polymaze").removeClass('-active -prev');
      jQuery("#tradingview").removeClass('-active -prev');
      jQuery("#neemble").removeClass('-active -prev');
    }); 

      /*********** Show Vile Spirit **************/
    jQuery('#vilespirit').hover(function() { 
      jQuery("#polymatica").removeClass('-active -prev');
      jQuery("#alghadetail").removeClass('-active -prev');
      jQuery("#throindetail").removeClass('-active -prev');
      jQuery("#borough").removeClass('-active -prev');
      jQuery("#hyphen").removeClass('-active -prev');
      jQuery("#polymaze").removeClass('-active -prev');
      jQuery("#tradingview").removeClass('-active -prev');
      jQuery("#yolla").removeClass('-active -prev');
      jQuery("#neemble").addClass('-active -prev');
    }); 

                      });
                     
                        (function (d, w, c) {
                          (w[c] = w[c] || []).push(function() {
                            try {
                              w.yaCounter22519915 = new Ya.Metrika({
                                id:22519915,
                                clickmap:true,
                                trackLinks:true,
                                accurateTrackBounce:true,
                                webvisor:true
                              });
                              w.yaCounter = w.yaCounter22519915;
                            } catch(e) { }
                          });

                          var n = d.getElementsByTagName("script")[0],
                          s = d.createElement("script"),
                          f = function () { n.parentNode.insertBefore(s, n); };
                          s.type = "text/javascript";
                          s.async = true;
                          s.src = "assets/js/watch.js";

                          if (w.opera == "[object Opera]") {
                            d.addEventListener("DOMContentLoaded", f, false);
                          } else { f(); }
                        })(document, window, "yandex_metrika_callbacks");
                      </script>

                    </body>
                    </html>