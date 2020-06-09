jQuery(function($){
    $(document).ready(function(){

        //Adaptive Menu
        $('#adaptive-toggle-button').on('click', function(){
            $('.box-mobile-menu').toggle(500);
            $('.mobile-menu-overlay').show();
        });
        $('#mobile-menu-close, .mobile-menu-overlay, .mobile-menu-bottom li').on('click', function(){
            $('.box-mobile-menu').toggle(500);
            $('.mobile-menu-overlay').hide();
        });

        /*Menu Scroll*/
        $('.header-link-menu, .scroll-more').on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top - $('header').outerHeight();
            $('body,html').animate({scrollTop: top}, 2000);
        });


    });
});










