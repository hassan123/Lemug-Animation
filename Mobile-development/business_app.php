<!DOCTYPE html>
<html class=" desktop">
<head>
<title>Business App</title>
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
<article class="mobile-page business scroll-content-wrapper" data-page-class="mobile-page business"data-component="recipe-view-component">
<div class="sections-wrapper scroll-content">
<div class="fullscreen-js">

	<section class="intro">
		<div class="constraint-wrapper">
		<div class="labels">
		<h1 class="title large-copy">Business App</h1>
		</div>
		<div class="img-wrapper">
		</div>
		</div>
	</section>
  <!-- End intro Section -->
 <!-- Start content-sections -->
	<div class="content-sections">
		<section id="producer" class="producer-section">
			<p class="quote large-copy">“Are you having successful meetings? How do you know? This is an intuitive and elegant 	application for iPads that makes it easy to gather up and “map” (thus the name) the information you need for truly successful meetings. This application tracks the role and the stance (opinion) of every participant in a meeting, and makes it easy to create action items or next steps and automatically schedule the actions for follow up. A related application is integrated with Sales Force and is optimized to serve as a strategic weapon for closing new sales.”</p>
		</section>
 <!-- End producer-section -->
	<section class="other-section">
		<h2 class="header section-name-header stroke">Other Apps</h2>
        <!-- Start Links -->
		<div class="links">
		<a href="weather_app.php" class="recipe-link weatherapp">
		<div class="img-wrapper"></div>
		<div class="labels-wrapper">
		<h2 class="title large-copy">Weather App</h2>
		</div></a>

		<a href="construction_app.php" class="recipe-link construction">
		<div class="img-wrapper"></div>
		<div class="labels-wrapper">
		<h2 class="title large-copy">Construction App</h2>
		</div></a>
		</div>
	</section>
	</div>
      <!-- End content-sections --> 
	</div>
	</div>
	</article>
	</div>
<!-- Start page-content -->
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