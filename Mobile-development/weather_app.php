<!DOCTYPE html>
	<html class=" desktop">
	<head>
	<title>Weather App</title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
	<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<link href='https://fonts.googleapis.com/css?family=Fira+Sans:400,300,500&subset=latin' rel='stylesheet' type='text/css'>
	<script src="js/picturefill.js" async></script>
	<script src="js/main.js"></script>
	</head>
	</head>
	<body class="mobile-page">


	<div class="page-content-wrapper">
	<div id="homemenu"><?php include('../includes/sidemenu.php');?> </div>

	<div id="page-content">
	<article class="mobile-page weatherapp scroll-content-wrapper"
	data-page-class="mobile-page weatherapp"
	data-component="recipe-view-component"
	>
	<div class="sections-wrapper scroll-content">
	<div class="fullscreen-js">

	<section class="intro">
	<div class="constraint-wrapper">
	<div class="labels">
	<h1 class="title large-copy">Weather App</h1>
	</div>
	<div class="img-wrapper">
	</div>
	</div>
	</section>

	<div class="content-sections">
	<section id="producer" class="producer-section">
	<p class="quote large-copy">The Weather App has been a long time authority on weather and on Android it’s no different. That said, it actually is a pretty decent weather app with all the information you could need including forecasts, alerts, current weather, radar, and smaller stuff like wind forecast, pollen, and even Weather Channel videos so you can keep up on the latest weather news. There is a mechanic called points that do not really do much, but you can disable that in the settings to make the app run a bit smoother.</p>

	</section>

	<section class="other-section">
	<h2 class="header section-name-header stroke">Other Apps</h2>
	<div class="links">
	<a href="video_player.php" class="recipe-link videoapp">
	<div class="img-wrapper">
	</div>
	<div class="labels-wrapper">
	<h2 class="title large-copy">Video Player</h2>
	</div>
	</a>
	<a href="business_app.php" class="recipe-link business">
	<div class="img-wrapper">
	</div>
	<div class="labels-wrapper">
	<h2 class="title large-copy">Business App</h2>
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