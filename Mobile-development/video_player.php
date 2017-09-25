
	<!DOCTYPE html>
	<html class=" desktop">
	<head>
	<title> Video Player</title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
	<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<link href='https://fonts.googleapis.com/css?family=Fira+Sans:400,300,500&subset=latin' rel='stylesheet' type='text/css'>
	<script src="js/picturefill.js" async></script>
	<script src="js/main.js"></script>
	</head>
	<body class="mobile-page">

	
	<div class="page-content-wrapper">
	<div id="homemenu"><?php include('../includes/sidemenu.php');?> </div>

	<div id="page-content">
	<article class="mobile-page videoapp scroll-content-wrapper"
	data-page-class="mobile-page videoapp"
	data-component="recipe-view-component">
	<div class="sections-wrapper scroll-content">
	<div class="fullscreen-js">

	<section class="intro">
	<div class="constraint-wrapper">
	<div class="labels">
	<h1 class="title large-copy">Video Player</h1>
	</div>
	<div class="img-wrapper">
	</div>
	</div>
	</section>

	<div class="content-sections">
	<section id="producer" class="producer-section">
	<p class="quote large-copy">Video Player is designed to play iPhone formats like 3gp, h263, and h264 baseline profile. It also claims to play some baseline MP4 files, but not all (it had no problem with mine). Other files will need converting, but the developer page does point you in the direction of some free software that will do the job nicely. Act 1 is not only a tiny 500KB, but it can also be moved to your SD card.</p>


	</section>

	<section class="other-section">
	<h2 class="header section-name-header stroke">Other Apps</h2>
	<div class="links">
	<a href="taxiapp.php" class="recipe-link taxi">
	<div class="img-wrapper">
	</div>
	<div class="labels-wrapper">
	<h2 class="title large-copy">Taxi app</h2>
	</div>
	</a>
	<a href="weather_app.php" class="recipe-link weatherapp">
	<div class="img-wrapper">
	</div>
	<div class="labels-wrapper">
	<h2 class="title large-copy">Weather App</h2>
	</div>
	</a>
	</div>
	</section>
	</div>

	</div>
	</div>
	</article>
	</div>
	</div>
	<script type="text/javascript">

/************************ Side Menu ***************************/

 function openNav() {
       document.getElementById("mySidenav").style.display = 'block';
                document.getElementById("mySidenav").style.width = "250px";
            }

            function closeNav() {
                document.getElementById("mySidenav").style.display = 'none';
                document.getElementById("mySidenav").style.width = "0";
            }
   jQuery('.dropdown').click(function() {
     jQuery('.sub-menu').toggle(1000);
   });
</script>
	</body>

	</html>