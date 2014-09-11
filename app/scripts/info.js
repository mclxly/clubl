(function () {
  'use strict';

  $(window).scroll(function() {
    if ($(".static-container").offset().top > 50) {
        $(".static-container").addClass("turn-black");
    } else {
        $(".static-container").removeClass("turn-black");
    }
  });
})();
