$(document).ready(function () {

const section = document.querySelector('.main-section'),
  header = document.querySelector('.header'),
  link = document.querySelector('.contacts-link'),
  nav = document.querySelector('.nav-list'),
  burger = document.querySelector('.burger'),
  tel = document.querySelector('.footer-tel');

window.addEventListener('scroll', function () {
  let b = section.clientHeight - 100;

  if (pageYOffset > b && pageYOffset < b * 2) {
    nav.style.color = '#000';
    link.style.borderColor = '#000';
    burger.style.color = '#000';
    tel.style.color = '#000';
  }
  else {
    nav.style.color = '#fff';
    burger.style.color = '#fff';
    link.style.borderColor = '#fff';
    tel.style.color = '#fff';
  }
})

let showVideoBlock = function(video, player){
  $(video).removeClass('hide');
  $(video).addClass('show');
  $('.slider-nav').css({ zIndex: '0' });
  $(player).each(function(){this.player.play()});  
  setTimeout(function () {
    $('.portfolio-about').addClass('hide');
    $(video).css({ transform: 'scale(1)' });
    $('.blocks-overlay').css({ opacity: '0' });            
    $('.slider-nav').css({ zIndex: '0' });
  }, 200);
};

let hideVideoBlock = function(element, video, aboutBlock, player,action){
  $(element).on(action, function () {    
    if(video.hasClass('show')) {
      $(video).removeClass('show');
      $(aboutBlock).addClass('hide');
      $(player).each(function(){this.player.pause()});
      $(video).css({ transform: 'scale(0)' });
      setTimeout(function () {
        $(video).addClass('hide');
        $('.slider-nav').css({ zIndex: '10' });
        $('.blocks-overlay').css({ opacity: '1' });
      }, 800);
      return;
    }
    else if(video.hasClass('showMore')) {
      $(aboutBlock).removeClass('fadeInRightBig');
      $(video).addClass('show');
      $(video).removeClass('showMore');      
      $(aboutBlock).css({ right: '-100%' })
      $('.video-back').css({ left: '-200px' });
      $(player).each(function(){this.player.pause()});
      $('.footer-container').removeClass('more-block');
      $('.header').find('.container').removeClass('more-block');
      nav.style.color = '#fff';
      link.style.borderColor = '#fff';
      $('.blocks-overlay').css({ opacity: '0' });
      $('.footer-tel').css({ color: '#fff' });
      return;
    }
  });
};

let showAboutVideo = function(moreBtn, aboutBlock, video, player){
  $(moreBtn).on('click', function () {
    $(aboutBlock).removeClass('hide');
    $(video).removeClass('show');
    $(video).addClass('showMore');
    setTimeout(function () {
      $(aboutBlock).css({ right: '0' })
      $(video).find($('.video-back')).css({ left: '0' });
      $('.footer-tel').css({ color: '#000' });
      $('.blocks-overlay').css({ opacity: '1' });
    }, 200);
    $(player).each(function(){this.player.pause()});
    $('.footer-container').addClass('more-block');
    $('.header').find('.container').addClass('more-block');
    nav.style.color = '#000';
    link.style.borderColor = '#000';
  });
}

let closeVideoBlock = function(video,aboutBlock){
  console.log(1111);
  
  $(video).removeClass('show');
  $(video).removeClass('showMore');
  $(aboutBlock).addClass('hide');
  $(video).css({ transform: 'scale(0)' });
  let player = video.find('.portfolio-video').mediaelementplayer({
    stretching: 'fill',
    features: ['current', 'progress'],
    success: function (player, node) {
    }
  });
  $(player).each(function(){this.player.remove()});
  setTimeout(function() {
    $(video).addClass('hide');
    $('.slider-nav').css({ zIndex: '10' });
    $('.blocks-overlay').css({ opacity: '1' });
    $('.footer-container').removeClass('more-block');
    $('.header').find('.container').removeClass('more-block');
    $('.footer-tel').css({ color: '#fff' });
    nav.style.color = '#fff';
    link.style.borderColor = '#fff';
  }, 800);
  
  return;
}

let showNextVideo = function(nextBtn, player){ 
  $(player).each(function(){this.player.remove()});
    let next = $(nextBtn).data('next');
    $('.video').each(function(){
      if($(this).data('video') == next){
        $('.portfolio-slider').slick('slickNext');
        setTimeout(()=>{
          openVideo($(this),'video');
        }, 800);
      }
    });
}

let videoBlockNav = function(video, backBtn, moreBtn, aboutBlock,nextBtn){

  let player = video.find('.portfolio-video').mediaelementplayer({
    stretching: 'fill',
    features: ['current', 'progress'],
    success: function (player, node) {
    }
  });
  showVideoBlock(video,player);
  showAboutVideo(moreBtn, aboutBlock, video, player);
  hideVideoBlock(backBtn, video, aboutBlock, player,'click'); 
  hideVideoBlock(window, video, aboutBlock, player, 'scroll'); 
  
}

let openVideo = function(btn,text){
  $('.video').each(function() {
    let videoBlock = $(this),
      backBtn = $(this).find('.video-back'),
      moreBtn = $(this).find('.video-more'),
      nextBtn = $(this).find('.next-button'),
      aboutBlock = $(this).find('.portfolio-about');

    if ($(btn).data(text) == $(videoBlock).data('video')) {
      
      videoBlockNav(videoBlock,backBtn,moreBtn,aboutBlock);
      
    }

  });
}

$('.portfolio-btn').on('click', function () {
  let btn = $(this);
  openVideo(btn,'portfolio');
});

$('.next-button').on('click', function () { 
  showNextVideo($(this));
});




let $ServiceSlider = $('.service-slider');

if ($ServiceSlider.length) {
  let currentSlide;
  let slidesCount;
  let current = document.querySelector('.service-current');
  let total = document.querySelector('.service-total');

  let updateSliderCounter = function (slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;
    $(current).text(currentSlide);
    $(total).text(slidesCount);
  };

  $ServiceSlider.on('init', function (event, slick) {
    updateSliderCounter(slick);
  });

  $ServiceSlider.on('afterChange', function (event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });
  $('.service-slider').slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.service-prev').on('click', function () {
    $('.service-slider').slick('slickPrev');
  });
  $('.service-next').on('click', function () {
    $('.service-slider').slick('slickNext');
  });
}

let $portfolioSlider = $('.portfolio-slider');

if ($portfolioSlider.length) {
  let currentSlide;
  let slidesCount;
  let current = document.querySelector('.portfolio-current');
  let total = document.querySelector('.portfolio-total');

  let updateSliderCounter = function (slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;
    $(current).text(currentSlide);
    $(total).text(slidesCount);
  };

  $portfolioSlider.on('init', function (event, slick) {
    updateSliderCounter(slick);
  });

  $portfolioSlider.on('afterChange', function (event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });
  $('.portfolio-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.portfolio-prev').on('click', function () {
    $('.portfolio-slider').slick('slickPrev');
  });
  $('.portfolio-next').on('click', function () {
    $('.portfolio-slider').slick('slickNext');
  });
}

$('.burger').on('click', function () {
  $('.nav-list').css({ right: '0' });
  $('.nav-link').css({ color: '#000' });
  $('.close').css({ display: 'block' });
});

$('.close').on('click', function () {
  $('.nav-list').css({ right: '-100%' });
  $('.close').css({ display: 'none' });
});

$('.nav-link').on('click', function () {
  $('.nav-list').css({ right: '-100%' });
  $('.close').css({ display: 'none' });
});

$('.pop-up-btn').on('click', function(){
  $('.pop-up-consult').find('.pop-up-name').html($(this).data('name'))
  $('.pop-up-overlay').removeClass('hide');
  $('.pop-up-consult').removeClass('hide');
  $('.pop-up-consult').animate({opacity:'1',top:'50%'},800);
})

$('.pop-up-btn-call').on('click', function(){
  $('.pop-up-overlay').removeClass('hide');
  $('.pop-up-call').removeClass('hide');
  $('.pop-up-call').animate({opacity:'1',top:'50%'},800);
})





$('.pop-up-btn-showreal').on('click', function(){
  $('.pop-up-overlay').removeClass('hide');
  $('.pop-up-showreal').removeClass('hide');
  $('.pop-up-showreal').animate({opacity:'1',top:'50%'},800);  
})

let showrealPlayer = $('.pop-video-container').find('.pop-up-video').mediaelementplayer({
  stretching: 'fill',
  features: ['current', 'progress'],
  success: function (player, node) {
  }
});

$('.showreal-close').on('click', function(){
  
  
  $(showrealPlayer).each(function(){this.player.pause()});
  
});

});
