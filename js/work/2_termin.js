$(document).ready(function(){
  // In dieser Datei findest du alle Funktionen die, die Terminsteuerrung bzw. den
  // Slider auf der Startseite steuern.

  // Zeigt beim laden der Seite den ersten Termin
  $('.termine').children('.termin').first().addClass('aktiv');

  $(window).resize(function(){
    var height = $('.aktiv').height();
    $('.termine').css( 'height', height + 'px' ); // Ändert die Höhe der Box
  });

  $('.termine').css({
    height: $('.termine').children('.termin').first().height() + 'px' // Ändert die Höhe der Box
  });

  // Triggert die Funktion die, den nächsten Termin zeigt
  $('.termine').stop().on('click',function(){

    // #1 Als erstes wird die Terminbox die aktuell zu sehen ist aus dem "Canvas" gezogen, also versteckt.
    $(this).children('.aktiv').stop().animate({left:'-100%'},250,function(){
      $(this).css('left','100%');
    });

    // #2 Danach wird geguckt ob das nächste Element ein Termin ist.
    if($(this).children('.aktiv').next().hasClass('termin')) {
      $('.termine').css({
        height: $(this).children('.aktiv').next('.termin').height() + 'px' // Ändert die Höhe der Box
      });
      $(this).children('.aktiv').next('.termin').stop().animate({left:'0'},250,function(){
        $('.termine').children().removeClass('aktiv'); // "Aktiv"-Element wird die aktiv classen entzogen
        $(this).addClass('aktiv'); // Element wird das "Aktiv"-Element
      });
    } else {
      $(this).children('.termin').first().stop().animate({left:'0'},250,function(){
        $('.termine').children().removeClass('aktiv'); // "Aktiv"-Element wird die aktiv classen entzogen
        $(this).addClass('aktiv'); // Element wird das "Aktiv"-Element
      });
    }
  })


// DOKUMENT READYy
});