$('#personal').attr('checked','true')
$('.lk-item').each(function(){        
    if($(this).data('item') == $('.personal-btn').data('item')){
        $(this).css({'display':'block'})
    }
    else {
        $(this).css({'display':'none'})
    }
})

$('.lk-nav').on('click', function(e){
    let target = e.target
    if(target && $(target).hasClass('lk-nav-item')){

        $('.lk-item').each(function(){
            
            if($(this).data('item') == $(target).data('item')){
                $(this).css({'display':'block'})
            }
            else {
                $(this).css({'display':'none'})
            }
        })
    }
})

$('.change').on('click', function(){
    $('.modal.lk-change').toggleClass('hide')
    $('.overlay').toggleClass('hide')
    if($(this).data('name') == 'name'){
        $('.modal.lk-change').css({'height':'360px'})
        $('.modal.lk-change')
        .find('.modal-form-contetn')
        .html('<label class="modal-label" for="">Имя</label><input class="modal-input" type="text" placeholder="Ваше имя"><label class="modal-label" for="">Фамилия</label><input class="modal-input" type="text" placeholder="Ваша фамилия">')
    }
    else if ($(this).data('name') == 'tel'){
        $('.modal.lk-change').css({'height':'290px'})
        $('.modal.lk-change')
        .find('.modal-form-contetn')
        .html('<label class="modal-label" for="">Телефон</label><input class="modal-input" type="tel" placeholder="Ваш телефон">')
    }
    else if ($(this).data('name') == 'mail'){
        $('.modal.lk-change').css({'height':'290px'})
        $('.modal.lk-change')
        .find('.modal-form-contetn')
        .html('<label class="modal-label" for="">Ваш E-mail</label><input class="modal-input" type="text" placeholder="Ваша почта">')
    }
    else if ($(this).data('name') == 'date'){
        $('.modal.lk-change').css({'height':'290px'})
        $('.modal.lk-change')
        .find('.modal-form-contetn')
        .html('<label class="modal-label" for="">День рождения</label><input class="modal-input" type="date" placeholder="День рождения">')
    }
})

$('.month').on('click', function(e){
    let target = e.target
    
    $('.month').each(function(){
        
        if(this == target ){
            $(this).addClass('active')
        }
        else {
            $(this).removeClass('active')
        }
    })
})

$('.year').on('click', function(e){
    let target = e.target
    
    $('.year').each(function(){
        
        if(this == target ){
            $(this).addClass('active')
        }
        else {
            $(this).removeClass('active')
        }
    })
})
//открытие и закрытие плашек в личном кабинете

$('.order-item-closeble').each(function(){
    $(this).attr('height',this.clientHeight)
    $(this).css({height: '70px'})
    $(this).addClass('closed')
})

$('.order-item').on('click', function(e){
    let target = e.target

    if(target && $(target).hasClass('order-item-toggler') && $(this).hasClass('closed')){
        $(this).css({height: $(this).attr('height')}) 
        $(this).removeClass('closed')
    }             
    else if(target && $(target).hasClass('order-item-toggler')){
        $(this).css({height: '70px'})
        $(this).addClass('closed')
    }
})