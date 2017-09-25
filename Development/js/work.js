jQuery(document).ready(function(){
    jQuery("#travel-addicts").click(function(){
        jQuery(this).load("travel-addicts.html");
        jQuery('#pagemenu').hide();
        jQuery('#pagelogo').hide();
        jQuery('.sprite-menu-hamburger').hide();
     });

    /********************** Load gif.html ******************/
    jQuery("#giffile").click(function(){
        jQuery(this).load("gif.html");
        jQuery('#pagemenu').hide();
        jQuery('#pagelogo').hide();
        jQuery('.sprite-menu-hamburger').hide();
     });

    jQuery('#hidetravel').click(function() {
            window.location = 'index.html';
        
           });
 });