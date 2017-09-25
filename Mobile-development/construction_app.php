
<!DOCTYPE html>
<html class=" desktop">
<head>
<title>Construction App</title>
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
<article class="mobile-page construction scroll-content-wrapper"
data-page-class="mobile-page construction"
data-component="recipe-view-component"
>
<div class="sections-wrapper scroll-content">
<div class="fullscreen-js">

<section class="intro">
<div class="constraint-wrapper">
<div class="labels">
<h1 class="title large-copy">Construction App</h1>
</div>
<div class="img-wrapper">
</div>
</div>
</section>

<div class="content-sections">
<section id="producer" class="producer-section">
<p class="quote large-copy">A half million construction professionals can’t be wrong. That’s the estimated number of people using the app, which allows the transfer of maintenance logs, daily reports, project estimates and time sheets between company headquarters and construction sites. It also gives salespeople and estimators the ability to create on-site estimates for construction and repair projects.</p>
</section>

<section class="other-section">
<h2 class="header section-name-header stroke">Other Apps</h2>
<div class="links">
<a href="business_app.php" class="recipe-link business">
<div class="img-wrapper">
</div>
<div class="labels-wrapper">
<h2 class="title large-copy">Business App</h2>
</div>
</a>
<a href="mobile_commerce.php" class="recipe-link commerce">
<div class="img-wrapper">
</div>
<div class="labels-wrapper">
<h2 class="title large-copy">Mobile Commerce </h2>
</div>
</a>
</div>
</section>
</div>

</div>
</div>
</article>
</div>
 <!-- End age-content -->
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