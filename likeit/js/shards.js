'use strict';

$(document).ready(function () {
  /*facts count animation START*/
  function startCount() {
    if (!$('.facts__value .done').length) {
      $('.facts__value span').each(function (index, elem) {
        $(elem).addClass('done');
        var initValue = Number(elem.dataset.goal),
            step = Number(elem.dataset.step);
        var countInterval = setInterval(function () {
          var currentVal = Number($(elem).text());
          if (currentVal >= initValue) {
            clearInterval(countInterval);
          } else {
            $(elem).text(currentVal + step);
          }
        }, 100);
      });
    }
  }
  /*facts count animation END*/

  /*facts shard load START*/
  if ($('.facts').length > 0) {
    var factsTop = $('.facts').offset().top;
    function checkFactsOffset() {
      if (window.pageYOffset > factsTop) {
        $('.facts .js-unload').removeClass('js-unload');
      }
      if (window.pageYOffset > factsTop - 200) {
        startCount();
      }
    };
    checkFactsOffset();
    $(window).on('scroll', function () {
      checkFactsOffset();
    });
  }
  /*facts shard load END*/

  /* parallax START*/
  $(".image_small, .header__elements .header__image_small img, .facts__image_small img").paroller({ factor: 0.08, type: 'foreground', direction: 'vertical', transition: 'transform 0.3s' });
  $(".image_big, .header__elements .header__image_big img, .facts__image_big img").paroller({ factor: 0.3, type: 'foreground', direction: 'vertical', transition: 'transform 0.3s' });
  $(".image_blur, .header__elements .header__image_blur img, .facts__image_blur img").paroller({ factor: 0.1, type: 'foreground', direction: 'vertical', transition: 'transform 0.3s' });
  // $(".header__elements .header__image:not(.header__image_bgLeft):not(.header__image_bgRight) img, .directions__elements .directions__image img, .facts__elements .facts__image img").paroller({ factor: 0.2, factorXs: 0.1, type: 'foreground', direction: 'vertical', transition: 'transform 0.3s' });
  // $(".header__elements .header__image.header__image_bgLeft img, .header__elements .header__image.header__image_bgRight img").paroller({ factor: 0.2, factorXs: 0.1, type: 'foreground', direction: 'vertical',transition: 'transform 0.3s' });
  /*var currentX = '';
  var currentY = '';
  var movementConstant = .005;
  $(document).on('mousemove', function(e) {
    console.log('asd');
    if(currentX == '') currentX = e.pageX;
    var xdiff = e.pageX - currentX;
    currentX = e.pageX;
    if(currentY == '') currentY = e.pageY;
    var ydiff = e.pageY - currentY;
    currentY = e.pageY;
    $('.header__elements .header__image').each(function(i, el) {
      var movement = (i + 1) * (xdiff * movementConstant);
      var movementy = (i + 1) * (ydiff * movementConstant);
      var newX = $(el).position().left + movement;
      var newY = $(el).position().top + movementy;
      $(el).css('left', newX + 'px');
      $(el).css('top', newY + 'px');
    });
  });*/
  /* parallax END*/
});

