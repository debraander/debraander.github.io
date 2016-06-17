$(document).ready(function () {
    /*
     *  Simple image gallery. Uses default settings
     */

    $('.fancybox').fancybox({
        'type': 'iframe',
        'scrolling': 'no',
        'openEffect': 'fade',
        'prevEffect': 'fade',
        'nextEffect': 'fade',
        'nextSpeed': 500,
        'openSpeed': 500,
        'iframe': { 'scrolling': 'no' },
        'helpers' : {
            overlay : {
                css : { 'overflow' : 'hidden' }
            }
        }
    });


    // functions for animating the scrolling:
    function filterPath(string) {
    return string
        .replace(/^\//,'')  
        .replace(/(index|default).[a-zA-Z]{3,4}$/,'')  
        .replace(/\/$/,'');
    }

    $('a[href*=#]').each(function() {
        if ( filterPath(location.pathname) == filterPath(this.pathname)
            && location.hostname == this.hostname
            && this.hash.replace(/#/,'') ) {
            var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
            var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
            if ($target) {
                var targetOffset = $target.offset().top;
                $(this).click(function() {
                    $('html, body').animate({scrollTop: targetOffset}, 500);
                    return false;
                });
            }
        }
    });
});

