<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <title>Testing</title>
    <link href="css/style.css" rel="stylesheet" type="text/css" />
    <link href="css/mobile.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="js/jquery-2.1.1.min.js"></script>
    <script type="text/javascript" src="js/interaction.js"></script>
</head>
<!-- Hello curious developer ! This website is designed and coded by Nicolas Tarier -->

<body>
<div id="aboutmenu"><?php include('../includes/sidemenu.php');?> </div>
    <div id="grid" class="launch transitionlaunch">
    
        <div class="left">
            <div class="projet projet01">
                <div class="fond">
                    <img src="images/Selenium.jpg" width="700" height="557" alt="Selenium Testing" />
                </div>
                <h2>Selenium Testing</h2>
                
            </div>
            <div class="projet projet03">
                <div class="fond">
                    <img src="images/SoapUI.jpg" width="700" height="557" alt="SoapUI Testing" />
                </div>
                <h2>SoapUI Testing</h2>
               
            </div>
        </div>
        <div class="right">
            <div class="projet projet02">
                <div class="fond">
                    <div>
                        <img src="images/JMeter.jpg" width="700" height="557" alt="JMeter Testing" />
                    </div>
                </div>
                <h2>JMeter testing</h2>
                
            </div>
            <div class="projet projet04">
                <div class="fond">
                    <img src="images/Loadrunner.jpg" width="700" height="557" alt="Loadrunner Testing" />
                </div>
                <h2>Load Runner Testing</h2>
                
        </div>
    </div>
    <div id="casestudies"></div>
    <div id="whiteframe">
        <div id="previous">
            <img src="images/flecheprev.png" width="9" height="5" alt="Previous project" /><span>Previous</span>
        </div>
        <div id="next"><span>Next</span>
            <img src="images/fleche.png" width="9" height="5" alt="Next project" />
        </div>
        <div class="closecase">
            <img src="images/close.png" width="12" height="12" alt="Close project" />
        </div>
    </div>
    <div id="background"></div>
    <div id="line1"></div>
    <div id="line2"></div>
    <div id="line3"></div>
    <div id="line4"></div>
    <?php include('../includes/common-js.php');?>
</body>

</html>