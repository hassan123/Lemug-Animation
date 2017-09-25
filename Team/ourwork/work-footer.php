<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCm2lHOHGBC_cl2QIxDpmvFmk-K5Ouu-wM"></script>
<script src="javascripts/application.min.js?v1494047651"></script>
<?php //include('../includes/common-js.php');?>
<script>
	function loadfile(url)
	 {
	 	window.open(url,"_self");
	 	
	 }
 jQuery(document).ready(function($) {
 	//jQuery(".grid").removeAttr("style");
 	//jQuery(".branding").removeAttr("style");
 	//jQuery("#seoid").css("top":"242px");
 	// jQuery(".designingdiv").removeAttr("style");
 	// jQuery(".experiential").removeAttr("style");
 	// jQuery(".games").removeAttr("style");
 	// jQuery(".mobile").removeAttr("style");
 	// jQuery(".social").removeAttr("style");
 	// jQuery(".videos").removeAttr("style");
 	// jQuery(".virtual-reality").removeAttr("style");
 	// jQuery(".campaigns").removeAttr("style");
 	// jQuery(".websites").removeAttr("style");

 	jQuery("#designingid").click(function() {
 		jQuery(".branding").css({"transform": ""});

 	});
 });

</script>

<script>
    /************************ Side Menu ***************************/

 function openNav() {
     //alert("Open");
       // document.getElementById("mySidenav").style.display = 'block';
     //   document.getElementById("mySidenav").style.width = "250px";
       document.getElementById("mySidenav").style.display = 'block';
       document.getElementById("mySidenav").style.width = "250px";
       document.getElementById("mySidenav").style.visibility = "visible";

            }

            function closeNav() {
                // document.getElementById("mySidenav").style.display = 'none';
             //    document.getElementById("mySidenav").style.width = "0";
            document.getElementById("mySidenav").style.display = 'none';
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("mySidenav").style.visibility = "hidden";

            }
   jQuery('.dropdown').click(function() {
     jQuery('.sub-menu').toggle(1000);
   });
</script>