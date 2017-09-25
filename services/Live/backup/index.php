<!doctype html>
<html lang="en" class="wf-proximanova-n7-active wf-ffmetaserifwebpro-i5-active wf-ffmetaserifwebpro-n5-active wf-proximanova-n4-active wf-active"><head>
 <title>Services</title>
 <?php include("includes/topsection.php");?>
</head>

    <body style="overflow: hidden; background-color: rgb(255, 255, 255);">
        <script>R.init();</script>

        <div class="site-nav">
            <div class="nav-bar">
                <div class="nav-bar-bg" style="background-color: rgb(198, 207, 212); visibility: hidden;"></div>
                <a href="#" class="nav-link-logo">Our Services</a>

                <div class="nav-pagination pagination" style="display: none; opacity: 1;">
                    <ul>
                        
                        <li class="null selected"><a href="#">1</a></li>
                        
                        <li class="null"><a href="#">2</a></li>
                        
                        <li class="null"><a href="#">3</a></li>
                        
                        <li class=""><a href="#">4</a></li>
                        
                    </ul>
                </div>

                <a href="#" class="nav-link-menu" style="transform: translate3d(0px, 0px, 0px);">
                    <div class="nav-link-menu-content">
                        <div class="nav-link-menu-outer">
                            <span class="nav-link-menu-inner">
                                Menu
                            </span>
                        </div>
                    </div>
                </a>
            </div>

            <div id="nav-menu" class="national-parks" data-path="/">
    <div id="nav-menu-content" style="background-color: rgb(198, 207, 212);">
        <div class="nav-menu-columns-container">
            <div class="nav-menu-column">
                <h2>Work</h2>
                <ul>
                    <li><a href="/city-guides/">City Guides</a></li>
                    <li><a href="/snowbird/">Snowbird</a></li>
                    <li><a href="/national-parks/">National Parks</a></li>
                </ul>
            </div>
            <div class="nav-menu-column">
                <h2>About</h2>
                <ul>
                    <li><a href="/">The Studio</a></li>
                </ul>
            </div>
            <div class="nav-menu-column">
                <h2>Contact</h2>
                <ul>
                    <!--<li id="menu-phone"><a href="tel:1-435-901-1752">+1 435 901 1752</a></li>-->
                    <li><a href="mailto:info@rallyinteractive.com">info@rallyinteractive.com</a></li>
                </ul>
            </div>
        </div>
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
                                <span class="badge-current">1</span> of
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
                        
                        <li class="null selected"><a href="#">1</a></li>
                        
                        <li class="null"><a href="#">2</a></li>
                        
                        <li class="null"><a href="#">3</a></li>
                        
                        <li class=""><a href="#">4</a></li>
                        
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
                    
                    <div class="page-head studio-header" style="display: block;">
    <div class="page-head-content">
        <h1>
            <span class="huge-text">Services</span><br>
            <hr>
            Continuing Professional Development
        </h1>

       
    </div>
</div>
<div class="page-head city-guides-header" style="display: none;">
    <div class="page-head-content">
        <h1>
            <span class="huge-text">Branding and reputation</span><br>
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
<div class="page-head national-parks-header selected" style="display: none;">
    <div class="page-head-content">
        <h1>
            <span class="huge-text">Business Process Execution</span>
        </h1>
    </div>
</div>

                    
                </div>
            </div>

            <!-- Content area -->
            <div class="site-body" style="background-color: rgb(255, 255, 255);">
                <div class="page-area">
                    
                    

<div class="page-body selected" id="studio" style="padding-right: 15px; display: block;">
   <?php include("includes/home.php");?>
</div>
<div class="page-body case-study" id="city-guides" style="display: none; padding-right: 15px;">
    <?php include("includes/branding.php");?>
</div>

<div class="page-body case-study" id="snowbird" style="display: none; padding-right: 15px;">
   <?php include("includes/promotion.php");?>
</div>

<div class="page-body case-study" id="national-parks" style="display: none; padding-right: 15px;">
   <?php include("includes/business.php");?>
</div>

                    
                </div>
            </div>
        </div>

        <script>
            R.domReady();
            var site = new R.Site().init();
            
        </script>
    

<script src="js/index.js"></script></body></html>