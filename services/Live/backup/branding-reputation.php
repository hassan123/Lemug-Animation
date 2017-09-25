<html class="wf-proximanova-n7-active wf-proximanova-n4-active wf-ffmetaserifwebpro-i5-active wf-ffmetaserifwebpro-n5-active wf-active"><head>
        <title>Branding and reputation</title>
<?php include("includes/topsection.php");?>
</head>

    <body style="overflow: hidden;">
        <script>R.init();</script>

        <div class="site-nav">
            <div class="nav-bar">
                <div class="nav-bar-bg" style="background-color: rgb(183, 89, 255);"></div>
                <a href="#" class="nav-link-logo">Branding</a>

                <div class="nav-pagination pagination">
                    <ul>
                        
                        <li class=""><a href="#">1</a></li>
                        
                        <li class="null selected"><a href="#">2</a></li>
                        
                        <li><a href="#">3</a></li>
                        
                        <li><a href="#">4</a></li>
                        
                    </ul>
                </div>

               
            </div>

           

        </div>

        <div class="site-ribbon">
            <canvas id="ribbon" width="1280" height="281" style="width: 1280px; height: 341px;"></canvas>
            <!--<div id="ribbon"></div>-->
        </div>

        <div class="site">

            <!-- Masthead area -->
            <div class="site-head">
                <div class="site-badge">
                    <div class="site-badge-content">
                        <div class="site-badge-perspective" style="transition: none;">
                            <div class="badge-diamond">
                                <div class="badge-diamond-bg"></div>
                            </div>

                            <div class="badge-text">
                                <span class="badge-back">Back</span>
                                <span class="badge-current">2</span> of
                                <span class="badge-total">4</span>
                                <span class="badge-next">Next</span>
                            </div>
                        </div>
                    </div>

                    <div class="badge-links">
                        <a href="#" class="badge-back-link">Back</a>
                        <a href="#" class="badge-next-link">Next</a>
                    </div>
                </div>

                <div class="site-head-pagination pagination">
                    <ul>
                        
                        <li class=""><a href="#">1</a></li>
                        
                        <li class="null selected"><a href="#">2</a></li>
                        
                        <li><a href="#">3</a></li>
                        
                        <li><a href="#">4</a></li>
                        
                    </ul>
                </div>

                <div class="site-head-arrows">
                    <div class="arrow up">Up</div>
                    <div class="arrow left">Left</div>
                    <div class="arrow down">Down</div>
                    <div class="arrow right">Right</div>
                </div>

                <a href="#" class="down-arrow" style="opacity: 1;">
                    <div class="arrow">Down</div>
                </a>

                <div class="page-area">
                    
                    <div class="page-head studio-header selected" style="display: none;">
    <div class="page-head-content">
        <h1>
            <span class="huge-text">Services</span><br>
            <hr>
            Continuing Professional Development
        </h1>
    </div>
</div>
<div class="page-head city-guides-header" style="display: block;">
    <div class="page-head-content">
        <h1>
            <span class="huge-text">Branding </span><br>
            Online reputation
        </h1>
    </div>
</div>

<div class="page-head snowbird-header" style="display: none;">
     <div class="page-head-content">
        <h1>
            <span class="huge-text">Promotion and campaigning</span>
        </h1>
    </div>
</div>
<div class="page-head national-parks-header" style="display: none;">
     <div class="page-head-content">
        <h1>
            <span class="huge-text">Business Process Execution</span>
        </h1>
    </div>
</div>


                    
                </div>

            </div>

            <!-- Content area -->
            <div class="site-body" style="background-color: rgb(62, 56, 79);">
                <div class="page-area">
                    
                    
<div class="page-body selected" id="studio" style="padding-right: 15px; display: none;">
    <?php include("includes/home.php");?>
</div>
<div class="page-body case-study" id="city-guides" style="display: block; padding-right: 15px;">
 <?php include("includes/branding.php");?>

</div>

<div class="page-body case-study" id="snowbird" style="display: none;">
<?php include("includes/promotion.php");?>
    

</div>

<div class="page-body case-study" id="national-parks" style="display: none;">
   <?php include("includes/business.php");?>
</div>


                    
                </div>
            </div>
        </div>

        <script>
            R.domReady();
            var site = new R.Site().init();
        </script>
    

</body></html>