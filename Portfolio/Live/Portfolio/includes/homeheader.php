<div id="promo-banner-div" class="promo-banner-div">
	<p>
	<a target="_blank" href="https://globalcitizen.indiefolio.com">Win passes for the Coldplay concert in Mumbai by taking action through art with Global Citizen India &amp; IndieFolio!</a> 
	<span class="promo-banner-remove-div" data-ng-click="hidePromoBannerDiv($event)">x</span></p>
	</div>
     <!-- End Banner -->
	<div id="header" class="transparent">
		
		<div class="site-menu pull-left ng-hide" data-ng-show="loggedInUser">
		<div class="inline-block custom-dropdown hover-dropdown">
		<a class="inline-block" href="#">Explore</a>

		<div class="dropdown-items arrow-dark">
			<div class="submenu">
			<a href="./explore/discover" class="inline-block submenu-item">
			<div id="discover-icon" class="header-icon submenu-icon"></div>Discover </a>
			<a href="./explore/bustle" class="inline-block submenu-item" analytics-on="click" analytics-event="clicked_explore_bustle" analytics-category="header" analytics-label="Tue Dec 20 2016 10:10:59 GMT+0500 (PKT),https://www.indiefolio.com/">
			<div id="bustle-icon" class="header-icon submenu-icon"></div>Bustle </a>

			<a href="./explore/spotlight" class="inline-block submenu-item" analytics-on="click" analytics-event="clicked_explore_spotlight" analytics-category="header" analytics-label="Tue Dec 20 2016 10:10:59 GMT+0500 (PKT),https://www.indiefolio.com/">

			<div id="spotlight-icon" class="header-icon submenu-icon"></div>Spotlight</a>
			</div>
			</div>
		</div>

		<div class="inline-block custom-dropdown hover-dropdown">
		  <a class="inline-block" href="#" analytics-on="click" analytics-event="clicked_jobs" analytics-category="header" analytics-label="Tue Dec 20 2016 10:10:59 GMT+0500 (PKT),https://www.indiefolio.com/">Jobs</a>

			<div class="dropdown-items arrow-dark">
				<div class="submenu" style="width: 250px">
				<a href="./jobs/my" class="inline-block submenu-item" analytics-on="click" analytics-event="clicked_myjobs" analytics-category="header" analytics-label="Tue Dec 20 2016 10:10:59 GMT+0500 (PKT),https://www.indiefolio.com/">
				<div id="myjobs-icon" class="header-icon submenu-icon"></div>My Jobs </a>
				<a href="./jobs" class="inline-block submenu-item" analytics-on="click" analytics-event="clicked_browsejobs" analytics-category="header" analytics-label="Tue Dec 20 2016 10:10:59 GMT+0500 (PKT),https://www.indiefolio.com/">
				<div id="browsejob-icon" class="header-icon submenu-icon"></div>Browse Jobs </a>

				<a href="./jobs/post" class="inline-block submenu-item" analytics-on="click" analytics-event="clicked_postjob" analytics-category="header" analytics-label="Tue Dec 20 2016 10:10:59 GMT+0500 (PKT),https://www.indiefolio.com/">
				<div id="postjob-icon" class="header-icon submenu-icon"></div>Post Job</a></div></div></div>

				<a class="inline-block" href="https://blog.indiefolio.com" analytics-on="click" analytics-event="clicked_blog" analytics-category="header" analytics-label="Tue Dec 20 2016 10:10:59 GMT+0500 (PKT),https://www.indiefolio.com/">Blog</a> <a class="inline-block" href="#" data-ng-click="showInvite()" analytics-on="click" analytics-event="clicked_invite" analytics-category="header" analytics-label="Tue Dec 20 2016 10:10:59 GMT+0500 (PKT),https://www.indiefolio.com/">Invite
				</a>
			</div>

		<div class="site-nav pull-right">
		
		

		<div class="inline-block custom-dropdown near-icon" style="display: none !important" analytics-on="click" analytics-event="clicked_newmessage" analytics-category="header" analytics-label="Tue Dec 20 2016 10:10:59 GMT+0500 (PKT),https://www.indiefolio.com/">
			<div id="notifications" data-ng-click="getNotifications()" data-ng-show="loggedInUser" class="inline-block header-icon dropdown-link ng-hide"></div>

				<div class="dropdown-items arrow-white navigation-dropdown">
					<div class="notification-section"><div class="notification-header">
					<div class="row">
					<div class="col-6">
					<img src="https://cdn.indiefolio.com/assets/img/notification-green.png" class="notif-icon"></div>
					<div class="col-18 alpha">
					<div class="notification-text">Notification</div>
					</div></div></div>

					<div class="notification-content">
					<!-- ngRepeat: (key, nData) in notifications track by key -->

					</div>
					<div class="notification-footer">
					<div class="notif-see-more">
					<span class="clickable" data-ng-click="goto('/notifications')">See More</span></div>
					</div>
					</div>
				</div>
		</div>

		

		


		</div>
	</div>
      <!-- End Header -->
    
   