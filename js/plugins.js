$(document).ready(function(){
    $(window).on("scroll",function(){
       var sc = $(window).scrollTop();
        if(sc > 1000){
            $(".buttonn").fadeIn(1000);
        }else{
            $(".buttonn").fadeOut(1000)
        }
    });
    $(".buttonn").click(function(){
        $("html , body").animate({scrollTop: 0},1000,function(){
            $(".buttonn").fadeOut(1000)
        });
    });
});