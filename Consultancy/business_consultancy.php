<!DOCTYPE html>
<html lang="en" class="no-js">

<head itemscope itemtype="http://schema.org/WebSite">
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Business Consultancy Services</title>
    <meta name="description" content="Business Consultancy Services">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="msapplication-tap-highlight" content="no">
    <style>
        body {
            background-color: #252a60 !important;
        }
        
        body.loaded {
            background-color: #f3f3f3 !important;
        }
        
        #page-wrap {
            opacity: 0;
        }
        
        .loaded #page-wrap {
            opacity: 1;
        }
        
        @-webkit-keyframes "stripe" {
            0% {
                left: 0;
                width: 0px;
            }
            25% {
                left: 0;
                width: 100%;
            }
            50% {
                left: 100%;
                width: 0px;
            }
            75% {
                left: 0;
                width: 100%;
            }
            100% {
                left: 0;
                width: 0px;
            }
        }
        
        @keyframes "stripe" {
            0% {
                left: 0;
                width: 0px;
            }
            25% {
                left: 0;
                width: 100%;
            }
            50% {
                left: 100%;
                width: 0px;
            }
            75% {
                left: 0;
                width: 100%;
            }
            100% {
                left: 0;
                width: 0px;
            }
        }
        
        #loader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #252a60;
            opacity: 1;
            visibility: visible;
            transition: opacity 0.7s, visibility 0.7s, z-index 0.7s;
            z-index: 61
        }
        
        #loader.is-hidden {
            opacity: 0;
            visibility: hidden;
            z-index: -1
        }
        
        .no-js #loader {
            display: none
        }
        
        .loader-content {
            position: absolute;
            -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            width: 300px;
            height: 90px;
            overflow: hidden;
            opacity: 1;
            visibility: visible;
            transition: all 0.25s ease;
            z-index: 70
        }
        
        .loader-content.is-hidden {
            opacity: 0;
            visibility: hidden
        }
        
        .loader-content > * {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0
        }
        
        .stripe-loader {
            width: 100%;
            height: 90px
        }
        
        .stripe {
            height: 30px;
            width: 0;
            background: #ffffff;
            position: relative;
            margin: 0
        }
        
        .stripe:first-child {
            -webkit-animation: stripe 1.5s cubic-bezier(0.694, 0.048, 0.335, 1) infinite;
            animation: stripe 1.5s cubic-bezier(0.694, 0.048, 0.335, 1) infinite
        }
        
        .stripe:nth-child(2) {
            -webkit-animation: stripe 1.5s cubic-bezier(0.694, 0.048, 0.335, 1) 0.1s infinite;
            animation: stripe 1.5s cubic-bezier(0.694, 0.048, 0.335, 1) 0.1s infinite
        }
        
        .stripe:nth-child(3) {
            -webkit-animation: stripe 1.5s cubic-bezier(0.694, 0.048, 0.335, 1) 0.2s infinite;
            animation: stripe 1.5s cubic-bezier(0.694, 0.048, 0.335, 1) 0.2s infinite
        }
        
        #loader-after {
            position: fixed;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background-color: #1c1d25;
            opacity: 1;
            visibility: visible;
            transition: opacity 0.7s, visibility 0.7s, z-index 0.7s;
            z-index: 62
        }
        
        #loader-after.is-hidden {
            opacity: 0;
            visibility: hidden;
            z-index: -1
        }
    </style>
    <link rel="stylesheet" href="css/application.css">
</head>

<body itemscope itemtype="http://schema.org/WebPage">
    <div id="loader">
        <div class="loader-content">
            <div class="stripe-loader">
                <div class="stripe"></div>
                <div class="stripe"></div>
                <div class="stripe"></div>
            </div>
        </div>
    </div>
    <div id="loader-after"></div>
    <div id="page-transition">
        <div class="page-transition-content">
            <div class="stripe-loader">
                <div class="stripe"></div>
                <div class="stripe"></div>
                <div class="stripe"></div>
            </div>
        </div>
    </div>
    <div id="page-transition-after"></div>
    <div id="page-wrap">
        
        <nav class="main-navigation">
            <div class="content nav-content">

                <div aria-label="Mobile Menu" class="nav-toggle"><span class="menu-trigger"><i class="menu-trigger-bar top"></i><i class="menu-trigger-bar middle"></i><i class="menu-trigger-bar bottom"></i></span></div>
                <ul class="nav-links">
                    
                    <li class="in-single-work"><a href="consultancy.php" data-destination="home" rel="nofollow"><span aria-label="Back" class="nav-link-icon"><svg xmlns="http://www.w3.org/2000/svg" width="476.2" height="476.2" viewbox="174 -174.2 476.2 476.2"><path d="M244.6 134.5l21.2-21.2-34.4-34.4h418.8v-30H231.4l34.4-34.4-21.2-21.2L174 63.9"></path></svg></span>Turn Back </a></li>
                    
                </ul>
            </div>
        </nav>
        <div id="single-work"  class="cerasa">
            <header style="background-image: url('img/business-consultancy.jpg');" id="top" class="hero-single-work">
                <div class="hero-single-work-content">
                    <div class="text-loading-mask">
                        <div class="text-loading-overlay"></div>
                        <h1 itemprop="name" class="hero-single-work-title">Business Consultancy Services</h1></div>
                    <div class="text-loading-mask">
                        <div style="transition-delay: 0.1s;" class="text-loading-overlay"></div>
                        <h1 class="hero-single-work-subtitle">Business Consultancy Services</h1></div>
                </div>
               
                
            </header>
            <main class="single-work">
               
            <section class="single-work-section">
                <div class="content">
                <div class="section-text-mask">
                <div class="inner-container">
                
                <div class="single-work-content-desc">
                <p>Wantro provides expert business consultancy services which drive growth, business transformation and improved effectiveness.</p>
                <p>We are passionate about business growth and effectiveness, so if you are looking for help with this – you are in the right place. We help clients to take positive action and provide blueprints for growth. Each year our consultancy services drive increases in sales, profitability, market share and efficiency for our clients. </p>
                <p>You will benefit from tremendous business knowledge, vision and experience, – which we will directly tailor to your business and support you to take advantage of.  We have done this successfully for clients based in the country and internationally – including commercial businesses, public sector agencies, universities, colleges, not for profit companies, social enterprises and charities. They are large and small, young and old (-our “oldest” client commenced trading in the fifteenth century!).
                </p>
                </div>
                

                </div>
            </section>     
            </main>
        </div>    
    </div>
    
    <script src="js/jquery.min.js"></script>
    <script>
        window.jQuery || document.write('<script src="js/jquery.min.js"><\\/script>');
    </script>
    <script src="js/application.js"></script>
</body>

</html>