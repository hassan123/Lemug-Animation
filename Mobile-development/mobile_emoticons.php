
<!DOCTYPE html>
<html class=" desktop">
<head>
<title>Mobile Emoticons</title>
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
<article class="mobile-page emoticons scroll-content-wrapper" data-page-class="mobile-page emoticons"
data-component="recipe-view-component">
<div class="sections-wrapper scroll-content">
<div class="fullscreen-js">

<section class="intro">
<div class="constraint-wrapper">
<div class="labels">
<h1 class="title large-copy"> Mobile Emoticons</h1>
</div>
<div class="img-wrapper">
</div>
</div>
</section>

<div class="content-sections">
<section id="producer" class="producer-section">
<p class="quote large-copy">“Emoji Keyboard – Emoticons is a simple looking keyboard with some cute looking emoji and options customize color, font and layout. There are only two steps to go through and you get access to over 3000 smiley, emoticons, emoji, sticker and text face. It’s quite user friendly and can look for matching emoji for your words using the smart emoji prediction feature. However, free users don’t get to customize a lot and features like changing keyboard wallpaper, choosing always capital letter option and white theme are only available for Pro users. Moreover, it requires re-enabling after updating which can be a problem for some users. You can use emoji in email, SMS, chat and inside social apps.”</p>
</section>


<section class="other-section">
<h2 class="header section-name-header stroke">Other Apps</h2>
<div class="links">
<a href="mobile_commerce.php" class="recipe-link commerce">
<div class="img-wrapper">
</div>
<div class="labels-wrapper">
<h2 class="title large-copy">Mobile Commerce</h2>
</div>
</a>
<a href="fitness_app.php" class="recipe-link fitness">
<div class="img-wrapper">
</div>
<div class="labels-wrapper">
<h2 class="title large-copy">Fitness App</h2>
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