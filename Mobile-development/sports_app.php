
	<!DOCTYPE html>
	<html class=" desktop">
	<head>
	<title>Sports App</title>
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
	<article class="mobile-page sports scroll-content-wrapper"
	data-page-class="mobile-page sports"
	data-component="recipe-view-component"
	>
	<div class="sections-wrapper scroll-content">
	<div class="fullscreen-js">

	<section class="intro">
	<div class="constraint-wrapper">
	<div class="labels">
	<h1 class="title large-copy">Sports App</h1>
	</div>
	<div class="img-wrapper">
	</div>
	</div>
	</section>

	<div class="content-sections">
	<section id="producer" class="producer-section">
	<p class="quote large-copy">The Sports App (Android, iOS) shines in delivering up-to-the-second game updates and statistics, as well as breaking sports news. An event calendar lets you easily look up upcoming games, statistics for past matches, as well as the latest scores and most important plays. Matches include detailed statistical breakdowns to warm the hearts of stat junkies, as well as play-by-play breakdowns. The app allows users to follow teams and individual players, giving you notifications of related news or big plays. Social features make stories, stats and game summaries easy to share with your friends and followers.</p>


	</section>

	<section class="other-section">
	<h2 class="header section-name-header stroke">Other recipes</h2>
	<div class="links">
	<a href="shopping_app.php" class="recipe-link shopping">
	<div class="img-wrapper">
	</div>
	<div class="labels-wrapper">
	<h2 class="title large-copy">Shopping Apps</h2>
	</div>
	</a>
	<a href="taxiapp.php" class="recipe-link taxi">
	<div class="img-wrapper">
	</div>
	<div class="labels-wrapper">
	<h2 class="title large-copy">Taxi Apps</h2>
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