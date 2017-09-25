<!DOCTYPE html>
<!-- saved from url=(0025)http://weareroyale.com/#/ -->
<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
 
    <title>Design</title>
    <link rel="stylesheet" href="assets/css/style.min.css">
 

  </head>

  <body class="standard-device">
  <div id="homemenu"><?php include('../includes/sidemenu.php');?> </div>
    <div class="home-data" style="position:fixed;">
      <video  controls="false" height="100%" width="100%" name="media" autoplay="autoplay" id="video-player">
      <source src="http://weareroyale.com/wp-content/uploads/2015/07/Weareroyale_manifesto_audio_TEXTLESS_3mbps1080.mp4" type="video/mp4" allowfullscreen>
      </video>
    <div class="right-link-nave">
    <ul>
        <li><a href="design.php">Home</a></li>
        <li><a href="featured.php">Work</a></li>
        </ul>
        </div>    
    </div>

     <div id="descriptive-content-that-is-definitely-not-for-search-robots">
      <div id="1" class="trip"><h1>We design Sensible things</h1></div>
      <div id="2" class="trip"><h1>We Are IT Company</h1></div>
      <div id="3" class="trip"><h1>An innovative development company</h1></div>
      <div id="4" class="trip"><h1>We take the idea</h1></div>
      <div id="5" class="trip"><h1>And let it accomplish in creative way</h1></div>
    </div>


 <?php include('../includes/common-js.php');?>
<script type="text/javascript">

document.getElementById('video-player').controls = false</script>

<script type="text/javascript">
  var $elem = $('#descriptive-content-that-is-definitely-not-for-search-robots .trip'), l = $elem.length, i = 0;

function go() {
    $elem.eq(i % l).fadeIn(2500, function() {
        $elem.eq(i % l).fadeOut(2500, go);
        i++;
    })
}

go();
</script>
</body></html>

