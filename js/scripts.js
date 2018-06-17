$(document).ready(function(){
    $('nav').hide();
    $('.close').hide();
    $('.open').click(function(){
        $('nav').show()
        $('.open').hide()
        $('.close').show()
    });
    $('.close').click(function(){
      $('nav').hide()
      $('.open').show()
      $('.close').hide()
    });
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



});
