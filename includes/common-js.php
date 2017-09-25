<script src="<?php echo $weburl;?>commonjs/jquery.js"></script>
<script src="<?php echo $weburl;?>commonjs/bootstrap.js"></script>
<script src="<?php echo $weburl;?>commonjs/bootstrap.min.js"></script>
<script type="text/javascript">

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