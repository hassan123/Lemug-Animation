
<!DOCTYPE html>
<html class=" desktop">
<head>
<title>Location App</title>
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
<article class="mobile-page location scroll-content-wrapper"
data-page-class="mobile-page location"
data-component="recipe-view-component"
>
<div class="sections-wrapper scroll-content">
<div class="fullscreen-js">

<section class="intro">
<div class="constraint-wrapper">
<div class="labels">
<h1 class="title large-copy">Location App</h1>
</div>
<div class="img-wrapper">
</div>
</div>
</section>

<div class="content-sections">
<section id="producer" class="producer-section">
<p class="quote large-copy">Location based App was an innovator in location-aware apps, helping popularize the idea of "checking in" to locations through your mobile device. The App has since split its app into two parts: Main app continued on as a location-aware smart search tool focusing on discovery of nearby locations, events, restaurants and shops, while other app was released for those addicted to checking in and location sharing with friends. Users enter their favorite foods and activities, and location app helps them find nearby places that fit the bill. Other app helps you meet up with your friends by broadcasting your location to your Location app contacts, letting you quickly see who's nearby, and where. Check in to a place, post a status message that you're looking to hang out and get in touch with your friends.</p>
</section>

  <!-- Start Other Apps -->
<section class="other-section">
<h2 class="header section-name-header stroke">Other Apps</h2>
<div class="links">
<a href="food.php" class="recipe-link food">
<div class="img-wrapper">
</div>
<div class="labels-wrapper">
<h2 class="title large-copy">Food App</h2>
</div></a>
<a href="shopping_app.php" class="recipe-link shopping">
<div class="img-wrapper">
</div>
<div class="labels-wrapper">
<h2 class="title large-copy">Shopping App</h2>
</div>
</a>
</div>
</section>
<!-- End Other Apps -->
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