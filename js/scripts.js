$(document).ready(function(){
    $('#aboutme').click(function(){
      $('.details').fadeIn('slow');
      $('#experiencesection').css('display', 'none');
      $('#educationsection').css('display', 'none');
      $('#mesection').css('display', 'block');
      $('.details').animate({
        left:0

      });
    });
    $("#workexperience").click(function(){
      $('#mesection').css('display', 'none');
      $('#educationsection').css('display', 'none');
      $('#experiencesection').css('display', 'block');
      $('.details').animate({
        left: '-34%'

      });
    });
    $("#eduexperience").click(function(){
      $('#mesection').css('display', 'none');
      $('#experiencesection').css('display', 'none');
      $('#educationsection').css('display', 'block');

      $('.details').animate({
        left: '34%'

      });
    });
    /* code for scrolling navbar*/
    $('#me').click(function(){
      $('html, body').animate({
          scrollTop: $('#about_me').offset().top

      }, 1000)


  });
  $('#myprojects').click(function(){
    $('html, body').animate({
        scrollTop: $('#projects').offset().top
    }, 1000)
  });
  $('#talk').click(function(){
    $('html, body').animate({
        scrollTop: $('#contact_me').offset().top
    }, 2000)
  });
  $('#top').click(function(){
    $('html body').animate({
      scrollTop: $('#scrolltop').offset().top
    },2000)
  });

  $(window).scroll(function() {
       if ($(document).scrollTop() > 60) { // check if user scrolled more than 50 from top of the browser window
         $("nav").css({"background-color": "#006989", "opacity":".8"}); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
       } else {
         $("nav").css("background-color", "transparent"); // if not, change it back to transparent
       }
     });

});
