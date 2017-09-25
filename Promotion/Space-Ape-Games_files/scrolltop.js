$(function() {
  $('#up').click(function() {

        $('html,body').animate({
          scrollTop: 0
        }, 1000);
        return false;

  });

  $( document ).ready(function() {
        // bind a click event to the 'skip' link
        $(".skip").click(function(event){
            event.preventDefault();
            // strip the leading hash and declare
            // the content we're skipping to
            var skipTo=".tocontent";
    
            // Setting 'tabindex' to -1 takes an element out of normal 
            // tab flow but allows it to be focused via javascript
            $(skipTo).attr('tabindex', -1).on('blur focusout', function () {
    
                // when focus leaves this element, 
                // remove the tabindex attribute
                $(this).removeAttr('tabindex');
    
            }).focus(); // focus on the content container
        });
    });

    $("ul.team a").on("click", function(event) {
        event.preventDefault();
    });

});