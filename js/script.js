$(document).ready(function () {
    $("li").mouseover(function () {
        $(this).animate({
            borderBottom: '2px solid white',
            width : '125px'
        }, 100);
        $(this).css({
                      borderBottom: '2px solid white',

            });
    $(this).css("color", "white");
    });
    $("li").mouseout(function () {
        $(this).animate({
            borderBottom: '2px solid white',
            width : '140px'
        }, 100);
        $(this).css({
            borderBottom: '2px solid #AAA37E',
            });
        $(this).css("color", "#AAA37E");

    });

    $("#wallbutton").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#container").offset().top
        }, 700);
    });

    $("img").on("contextmenu",function(){
          return false;
       });

       function clock() {// We create a new Date object and assign it to a variable called "time".
       var time = new Date(),

           // Access the "getHours" method on the Date object with the dot accessor.
           hours = time.getHours(),

           // Access the "getMinutes" method with the dot accessor.
           minutes = time.getMinutes(),


           seconds = time.getSeconds();

       document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);

         function harold(standIn) {
           if (standIn < 10) {
             standIn = '0' + standIn
           }
           return standIn;
         }
       }
       setInterval(clock, 1000);


$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});

});
