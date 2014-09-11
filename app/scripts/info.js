(function () {
  'use strict';

  $(window).scroll(function() {
    if ($(".static-container").offset().top > 20) {
        $(".static-container").addClass("turn-black");
    } else {
        $(".static-container").removeClass("turn-black");
    }
  });
})();
