<html lang="en" class="js willchange csspointerevents no-touchevents fp-enabled" style="background-color: rgb(56, 44, 99); overflow: hidden; height: 100%;" data-useragent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.96 Safari/537.36">
<head>
<link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700">
<meta charset="utf-8">
<title>Web Engineer</title>
<?php include("ourwork/headstyle.php");?>
</head>

<body class="fp-viewing-0" style="pointer-events: auto; overflow: hidden; height: 100%;">
<?php include('home/svgimg.php');?>
<div id="main" class="main" data-view="work">
<main class="section">
<?php include('ourwork/topsection.php');?>
<div class="grid-wrapper projects-wrapper">
<?php include('ourwork/worktabs.php');?>
<div class="grid-container">
<div class="grid" style="position: relative; width: 964px; height: 4704px;">
 <?php include('work-common.php');?>
</div>
</div>

</div>
<div class="project" style="opacity: 1; display: block;">
  <div class="project-content">
    <h2 class="project-title inner-content delay-fade do-change-title" style="opacity: 1;">
    Developer/ Engineer</h2>

    <div class="project-gallery gallery-wrapper">
      <span class="project-gallery-line" style="transform: matrix(1, 0, 0, 1, 0, 0);"></span>
      <div class="gallery delay-fade do-change-gallery" style="opacity: 1;">
        <div class="content">
        <div class="gallery-item active" data-item="0" style="background-image: url(images/web-developer/dave.jpg); opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">
        </div>

    <div class="gallery-item" data-item="1" style="background-image: url(images/web-developer/dave.jpg)"></div>
  </div>
      </div>
    </div>
    <div class="project-video inner-content hidden do-add-video"></div>

    <div class="project-description inner-content delay-fade do-change-description" style="opacity: 1;">
      <p class="project-lead">
        Description
        <svg class="shape-chevron">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#shape-chevron"></use>
        </svg>
      </p>
      <p class="project-copy">A backend guru, Dave ensures a seamless integration of backend functionality with the front end interface. To him, what you don’t see working away in the background is just as important as what you see in the front end. When he’s not coding up a storm, you will find him practicing Tae Kwon-Do, going to the gym, running or binge-watching his favorite TV series!</p>
    </div>
    <button class="project-close do-hide-project-overlay delay-fade" style="opacity: 1;">
      <span class="small-hidden">close</span>
      <svg class="shape-cross">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#shape-cross"></use>
      </svg>
    </button>
  </div>
</div>

</div>
 <?php include('ourwork/footer-one.php');?>
</main>
<?php include('ourwork/footer-second.php');?>
</div>
<?php include('ourwork/work-footer.php');?>

</body>

</html>
