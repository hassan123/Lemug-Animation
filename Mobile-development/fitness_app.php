<!DOCTYPE html>
	<html class=" desktop">
	<head>
	<title>Fitness App</title>
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
	<div id="homemenu"><?php include('../includes/sidemenu.php');?> </div>

	<div class="page-content-wrapper">
	<div id="page-content">
	<article class="mobile-page fitness scroll-content-wrapper"
	data-page-class="mobile-page fitness"
	data-component="recipe-view-component">
	<div class="sections-wrapper scroll-content">
	<div class="fullscreen-js">

	<section class="intro">
	<div class="constraint-wrapper">
	<div class="labels">
	<h1 class="title large-copy">Fitness App</h1>
	</div>
	<div class="img-wrapper">
	</div>
	</div>
	</section>

	<div class="content-sections">
	<section id="producer" class="producer-section">
	<p class="quote large-copy">“If you want real hard stats about your workouts, accelerometers and GPS aren't enough. You need a heart rate monitor...and an app that can access the information it collects. One option is the fitness app for iPhone and Android. You can pair it with any supported heart rate monitor to track your runs, bicycle rides, and other workouts. App records heart rate, of course, but also distance, time, and pace. All the components needed to track heart rate can add up, so plan to spend somewhere to get full use of this app. ”</p>
	</section>
      <!-- Other Apps -->
	<section class="other-section">
	<h2 class="header section-name-header stroke">Other Apps</h2>
	<div class="links">
	<a href="mobile_emoticons.php" class="recipe-link emoticons">
	<div class="img-wrapper">
	</div>
	<div class="labels-wrapper">
	<h2 class="title large-copy">Mobile Emoticons</h2>
	</div>
	</a>

	<a href="food.php" class="recipe-link food">
	<div class="img-wrapper"></div>
	<div class="labels-wrapper">
	<h2 class="title large-copy">Food App</h2>
	</div></a>
	</div>
	</section>
	<!-- End Other Apps -->
	</div>

	</div>
	</div>
	</article></div>
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