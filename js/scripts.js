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
    }, 1500)
  });

});
