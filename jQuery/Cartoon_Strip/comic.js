$(function() {
  var $blinds = $('[id^=blind]'),
      delay = 2500,
      speed = 250;

  function startAnimation() {
    $blinds.each(function(i) {
      var $blind = $blinds.eq(i);

      $blind.delay(250 + i * 1500).animate({
        top: "+=" + $blind.height(),
        height: 0
      }, speed);
    });
  }

  $('a').on('click', function(e) {
    e.preventDefault();

    $blinds.finish();
    $blinds.removeAttr('style');
    startAnimation();
    //document.location.reload();
  });

  startAnimation();
});
