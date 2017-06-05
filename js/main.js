$(document).on('ready', function() {       
    //slow scroll 
    $(".scroll").on("click","a", function (event) {
        //remove default event click on link
        event.preventDefault();

        //get id with active href
        var id  = $(this).attr('href');
        
        //get height menu to block
        var top = $(id).offset().top-60;
        
        //animation scroll, menu - top for 800 ms
        $('body,html').animate({scrollTop: top}, 800);
    });


    //poup-up menu
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 100 && $(".navbar").hasClass("menu-default") ){
            $(".navbar").fadeOut('fast',function(){
                $(this).removeClass("menu-default")
                .addClass("menu-fixed menu-transbg")
                .fadeIn('fast');
            });
        } else if($(this).scrollTop() <= 100 && $(".navbar").hasClass("menu-fixed")) {
            $(".navbar").fadeOut('fast',function(){
                $(this).removeClass("menu-fixed menu-transbg")
                .addClass("menu-default")
                .fadeIn('fast');
            });
        }
    });//

    //modal winows more
    $(".more-modal").fancybox({
        'titlePosition' : 'inside',
        'transitionIn' : 'none',
        'transitionOut' : 'none',

    });

});
