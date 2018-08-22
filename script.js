jQuery(document).ready(function($){

  setTimeout(function(){

    doAnimation();

  }, 300);

  $(window).scroll(function(){

    doAnimation();

  })

  function doAnimation() {

    var allAnimators = $('.start'),
        x = $(window).scrollTop(),
        y = x + $(window).innerHeight();

    for ( i = 0; i < allAnimators.length; i++ ) {

      var z = $(allAnimators[i]).offset().top;

      console.log(x + " " + y + " " + z);

      if ( z > x && z < y ) {

        $(allAnimators[i]).removeClass('start');

      }

    }

  }

});
