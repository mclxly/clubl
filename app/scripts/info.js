(function () {
  'use strict';

  $(window).scroll(function() {
    if ($(".static-container").offset().top > 20) {
        $(".static-container").addClass("turn-black");
    } else {
        $(".static-container").removeClass("turn-black");
    }
  });

  $('.menu-set li').on('click', function () {
    // console.log('ab');
    $('.menu-set div.selected').removeClass('selected');

    $(this).next().addClass('selected');    
    $(this).next().animate({
      width: [ "toggle", "swing" ],
      height: [ "toggle", "swing" ],
      opacity: "toggle"
    }, 500);
    $('.menu-set div:not(.selected)').hide(500);

    // $(this).next().toggleClass('hide', 500);
    // $('.menu-set div:not(.selected)').addClass('hide', 500);


  });
})();
