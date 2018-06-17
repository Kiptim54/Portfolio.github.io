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
      $('#mesection').css('display', 'block');
      $('.details').animate({
        left: '-34%'

      });
    });



});
