function main(){
   var header = $('.header');

   $(window).scroll(function(){
      if ($(this).scrollTop() > 150) {
         header.addClass('scrolled');
      } else {
         header.removeClass('scrolled');
      }
   }); 

   new WOW().init(); 

   $(document).on("scroll", onScroll);

   //smoothscroll
   $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");

      $('a').each(function () {
         $(this).removeClass('active');
      })
      $(this).addClass('active');

      var target = this.hash,
          menu = target;
      $target = $(target);
      $('html, body').stop().animate({
         'scrollTop': $target.offset().top - 55
      }, 500, 'swing', function () {
         window.location.hash = target;
         $(document).on("scroll", onScroll);
      });
   });
}

function onScroll(event){
   var scrollPos = $(document).scrollTop();
   $('.header a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
         $('.header a').removeClass("active");
         currLink.addClass("active");
      }
      else{
         currLink.removeClass("active");
      }
   });
}

function initMap(){
   var mapDiv = document.getElementById('map');
   debugger;
   var map = new google.maps.Map(mapDiv, {
      center: {lat: 27.4862419, lng: -109.9377804},
      zoom: 15
   });

   var marker = new google.maps.Marker({
      position: {lat: 27.4862419, lng: -109.9377804},
      map: map,
      title: 'Innart'
   });
}

function software(){
   $('.carousel').carousel({
      interval: 2500
   });
}