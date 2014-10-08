jQuery(document).ready(function() {
            var offset = 400;
            var duration = 750;
            jQuery(window).scroll(function() {
                if (jQuery(this).scrollTop() > offset) {
                    jQuery('.strap').fadeIn(duration);
                } else {
                    jQuery('.strap').fadeOut(duration);
                }
            });
            
            jQuery('.back-to-top').click(function(event) {
                event.preventDefault();
                jQuery('html, body').animate({scrollTop: 0}, duration);
                return false;
            })
        });