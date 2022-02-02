
$(document).ready(function(){

  $('.filter').on('click', function(){
    if($('.filter-list-block').hasClass('hidden')){
      $('.filter').find('.dropdown').css({transform:"rotate(180deg)"})
      $('.filter-list-block').removeClass('hidden')
      if($(window).width() < 1279 && $(window).width() > 1024){
        $('.filter-list-block').animate({height: "350px",paddingTop:"30px"}, 500)
      }
      else if($(window).width() < 1023 && $(window).width() > 750){
        $('.filter-list-block').animate({minHeight: "330px",paddingTop:"20px"}, 500)
      }
      else if($(window).width() < 750){
        $('.filter-list-block').animate({minHeight: "630px",paddingTop:"20px"}, 500)
      }
      else {
        $('.filter-list-block').animate({height: "350px",paddingTop:"30px"}, 500)
      }
      $('.reset-filter').toggleClass('animate')
    }
    else{
      if($(window).width() > 1024){
        $('.filter').find('.dropdown').css({transform:"rotate(0deg)"})
        $('.filter-list-block').addClass('hidden')
        $('.filter-list-block').animate({height: "0",paddingTop:"0"}, 500)
        $('#resetFilter').toggleClass('animate')
      }
      else if($(window).width() < 1024){
        $('.filter').find('.dropdown').css({transform:"rotate(0deg)"})
        $('.filter-list-block').addClass('hidden')
        $('.filter-list-block').animate({height: "0",minHeight:"0"}, 500)
        $('#resetFilter').toggleClass('animate')
      }
    }
  })

  $('.reset-filter').on('click',function(){
    let checked = $('.filter-list-block').find('input:checked')
    $(checked).each(function(){
      $(this).prop('checked', false)
    })
    $('.ingridient-type').each(function(){
      $(this).data('ingridient','')
    })
    $('.filtered').html('')

  })

  $('.ingridient-type').on('click', function(){
    let elem = $(this).clone()
    $(elem).removeClass('ingridient-type')
    $(elem).addClass('filtered-type')
    if($(this).data('ingridient') != 'checked'){
      $(this).data('ingridient','checked')
      elem.appendTo($('.filtered'))
    }
    else {
      $(elem).data('ingridient','checked')
    }
})

  let dotsToLeft = function(){
    let left = $('.container').offset().left

    $('.main-slider .slick-dots').css({left:left})
  }

  dotsToLeft()

  $(window).on('resize', function(){
    dotsToLeft()
  })

})
