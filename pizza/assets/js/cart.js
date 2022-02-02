

let cartPrice = 0;

    $('.cart-item').each(function(){
        let totalPrice = +$(this).data('totalprice') * +$(this).find('.quantity').html();
        
        $(this).data('totalprice', totalPrice) 
        }  
    )

    $('.cart-item').each(function(){
        cartPrice += +$(this).data('totalprice') 
        }  
    )

    cartPrice = cartPrice.toFixed(2).toString().split(".")
    $('.cart-total').find('.price-val').find('span').html(cartPrice[0]);
    $('.cart-total').find('.price-val').find('sup').html(cartPrice[1]);


    $('.cart-item').on('click', function(event){
        let target = event.target;
        if(target && $(target).hasClass('close')){
            $(this).remove();
        }
        if(target && $(target).hasClass('add-ingridients')){
            $('.ingridients, .overlay').removeClass('hide');
            $('.ingridients, .overlay').addClass('show');
            $('.close, .overlay').on('click', function(){
                $('.ingridients, .overlay').addClass('hide');
                $('.ingridients, .overlay').removeClass('show');
            })
        }
        let counter = +$(this).find('.quantity').html();
        if(target && $(target).hasClass('minus') && counter > 0){
            
            counter = counter - 1;
            $(this).find('.quantity').html(counter);
            let price = +$(this).data('price') * counter;
            $(this).data('totalprice', price);
            
        }
        else if (target && $(target).hasClass('plus')){
            counter = counter + 1;
            $(this).find('.quantity').html(counter);
            let price = +$(this).data('price') * counter;
            $(this).data('totalprice', price);

        }

        let cartPrice = 0;
    
        $('.cart-item').each(function(){
            cartPrice += +$(this).data('totalprice') 
            }  
        )
        
        
    
        cartPrice = cartPrice.toFixed(2).toString().split(".")
        $('.cart-total').find('.price-val').find('span').html(cartPrice[0]);
        $('.cart-total').find('.price-val').find('sup').html(cartPrice[1]);
    })