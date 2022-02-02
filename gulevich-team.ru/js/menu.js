window.addEventListener('DOMContentLoaded', function() {
    'use strict'
    let burger = document.getElementById('burger'),
        menu = document.querySelector('.burger__menu'),
        slogan = document.querySelector('.sloganp');


    burger.addEventListener('click', function() {
        if (menu.classList.contains('hide')) {
            menu.classList.remove('hide');
            menu.classList.add('show');
        } 
        else {
            menu.classList.remove('show');
            menu.classList.add('hide');    
        }
    })

    slogan.addEventListener('click', function(event) {
        let target = event.target;
        if (target == slogan) {
            menu.classList.remove('show');
            menu.classList.add('hide'); 
        }
    })
});