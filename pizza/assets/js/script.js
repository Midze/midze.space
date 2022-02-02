$(document).ready(function(){

  let changeAttr = function(parent,elem,attribute,data){
    parent.find(elem).each(function(){
      let attr = $(this).attr(attribute)
      $(this).attr(attribute, attr+"_"+data)
    })
  }

//add & remove favorite start
  $('.favorite').on('click', function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active')
    }
    else $(this).addClass('active')
  })
//add & remove favorite end

  // if($(window).width() > 1024){
    $('.card, .product').on('click', function(e){
      let target = e.target
      let price = $(this).find('.card-price').find('input')
      let label = $(this).find('.card-size').find('label')
      let weight = $(this).find('.weight-val')
      let totalPrice = $(this).find('.price-val')
      let currentWeight = $(weight).html()

      if(target && $(target).hasClass('size-label')){
        for (let i = 0; i < price.length; i++) {
          let currentPrice = price[i]
          if(target === label[i]){
            $(currentPrice).prop('checked', true)
          }
        }
      }

      if($(this).find('.type-input:checked').data('price') != undefined){
        let count = +$(this).find('.price-input:checked').data('price') + +$(this).find('.type-input:checked').data('price')
        count = count.toFixed(2).toString().split(".")
        $(weight).html($(this).find('.size-input:checked').data('weight') + $(this).find('.type-input:checked').data('weight'))
        $(totalPrice).find('span').html(count[0])
        $(totalPrice).find('sup').html(count[1])
      }
      else if($(this).find('.type-input:checked').data('price') === undefined){
        let count = +$(this).find('.price-input:checked').data('price')
        count = count.toFixed(2).toString().split(".")
        $(weight).html($(this).find('.size-input:checked').data('weight') + $(this).find('.type-input:checked').data('weight'))
        $(totalPrice).find('span').html(count[0])
        $(totalPrice).find('sup').html(count[1])
      }

      if(target && $(target).hasClass('add-ingridients')){
        e.preventDefault();
        let data = $(this).data('name')
        changeAttr($('.modal.ingridients'),'label','for',data)
        changeAttr($('.modal.ingridients'),'input','id',data)
        $('.overlay').toggleClass('hide')
        $('.overlay').addClass('overlay-ingridients')
        $('.ingridients').toggleClass('hide')
        $('.close').on('click', function(){
          $('.ingridients').addClass('hide')
          $('.overlay').addClass('hide')
          $('.overlay').removeClass('overlay-ingridients')
          return;
        })
      }
    })
  // }

  let mobileCardText = $('.mobile-card').data('text')

  if($(window).width() < 1024){
    $('.card-pizza').on('click', function(e){
      let target = e.target
      var data = $(this).data('name')
      console.log(data);
      let card = $(this).clone()
      if(target && $(target).hasClass('add-to-cart')){
        e.preventDefault();
        $('.overlay').toggleClass('hide')
        $('.overlay').addClass('overlay-card')
        $('.mobile-card').toggleClass('hide')


        $('.mobile-card').html(card)
        $('.mobile-card').append('<div class="mobile-card-text">'+mobileCardText+'</div>')

        $(card).find('label').each(function(){
          let attr = $(this).attr('for')
          $(this).attr('for', attr+"_modal")
        })
        $(card).find('input').each(function(){
          let attr = $(this).attr('id')
          $(this).attr('id', attr+"_modal")
        })

        $('.card-pizza').on('click', function(e){ 
          let target = e.target
          let price = $(this).find('.card-price').find('input')
          let label = $(this).find('.card-size').find('label')
          let weight = $(this).find('.weight-val')
          let totalPrice = $(this).find('.price-val')
          let currentWeight = $(weight).html()

          if(target && $(target).hasClass('size-label')){
            for (let i = 0; i < price.length; i++) {
              let currentPrice = price[i]
              if(target === label[i]){
                $(currentPrice).prop('checked', true)
              }
            }
          }
          let count = +$(this).find('.price-input:checked').data('price') + +$(this).find('.type-input:checked').data('price')
          count = count.toFixed(2).toString().split(".")
          $(weight).html($(this).find('.size-input:checked').data('weight') + $(this).find('.type-input:checked').data('weight'))
          $(totalPrice).find('span').html(count[0])
          $(totalPrice).find('sup').html(count[1])
        })
      }


      $('.mobile-card').on('click', function(e){
        let target = e.target
        if(target && $(target).hasClass('add-ingridients')){
          e.preventDefault();
          changeAttr($('.modal.ingridients'),'label','for',data)
          changeAttr($('.modal.ingridients'),'input','id',data)
          $('.ingridients').removeClass('hide')
          $('.mobile-card').addClass('hide')
          $('.overlay').removeClass('overlay-card')
          $('.overlay').addClass('overlay-ingridients-mobile')
          $('.close').on('click', function(){
            $('.ingridients').addClass('hide')
            $('.mobile-card').removeClass('hide')
            $('.overlay').removeClass('overlay-ingridients-mobile')
            $('.overlay').addClass('overlay-card')
          })
        }
      })
    })
  }

  $('.modal-right').on('click', function(e){
    let target = e.target
    if(target && $(target).hasClass('reset-filter')){
      $(this).find('input').each(function(){
        $(this).prop('checked', false)
      })
    }
  })

  $('.filter-list-item').on('click', function(e){
    let target = e.target
    if(target && $(target).hasClass('item-name')){
      if($(this).hasClass('open')){
        $(this).removeClass('open')
      }
      else{
        $(this).addClass('open')
      }
    }
  })

  let modalClose = function(overlay, modal){
    $(overlay).toggleClass('hide')
    $(modal).toggleClass('hide')
  }

  $('.overlay').on('click', function(){
    if($(this).hasClass('overlay-login')){
      $(this).toggleClass('hide')
      $('.modal.login').toggleClass('hide')
      $(this).removeClass('overlay-login')
    }
    else if ($(this).hasClass('overlay-register')){
      $(this).toggleClass('hide')
      $('.modal.register').toggleClass('hide')
      $(this).removeClass('overlay-register')
    }
    else if ($(this).hasClass('overlay-card')){
      $(this).addClass('hide')
      $('.mobile-card').addClass('hide')
      $(this).removeClass('overlay-card')
    }
    else if ($(this).hasClass('overlay-ingridients')){
      $(this).removeClass('overlay-ingridients')
      $('.modal.ingridients').toggleClass('hide')
      $('.overlay').toggleClass('hide')
    }
    else if ($(this).hasClass('overlay-ingridients-mobile')){
      $(this).removeClass('overlay-ingridients-mobile')
      $('.modal.ingridients').addClass('hide')
      $('.mobile-card').removeClass('hide')
      $('.overlay').addClass('overlay-card')
    }
  })

  $('.menu-button').on('click',function(){
    $('.header-menu').css({top:0})
    $('body').css({height:'100vh'})
    $('body').css({overflow:'hidden'})
    $('header').css({zIndex:'6'})
  })

  $('.close-menu').on('click',function(){
    $('.header-menu').css({top:'-100vh'})
    $('body').css({height:'auto'})
    $('body').css({overflow:'visible'})
    $('header').css({zIndex:'5'})
  })

  let data = {
    width: $(window).width(),
    height: $(window).height(),
    user: navigator.userAgent
  }
  console.log(data);

})
