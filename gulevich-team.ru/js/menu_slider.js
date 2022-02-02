window.addEventListener('DOMContentLoaded', function() {
    'use strict'
    let btn = document.querySelectorAll('.menu__class__btn'),
        list = document.querySelector('.menu__list'),
        content = document.querySelectorAll('.menu__class');
    
    function hideBtnContent(a) {
        for (let i = a; i < content.length; i++) {
            content[i].classList.remove('show');
            content[i].classList.add('hide');
        }
    }

    function removeBtnActive(c) {
        for(let i = c; i < btn.length; i++) {
            btn[i].classList.remove('active');
            btn[i].classList.add('inactive');
        }
    }

    hideBtnContent(1);
    removeBtnActive(1);

    function showBtnContent(b) {
        if (content[b].classList.contains('hide')) {
            content[b].classList.remove('hide');
            content[b].classList.add('show');
        }
    }

    function addBtnActive(d) {
        if (btn[d].classList.contains('inactive')) {
            btn[d].classList.remove('inactive');
            btn[d].classList.add('active');
        }
    }

    list.addEventListener('click', function(event){
        let target = event.target;
        if (target && target.classList.contains('menu__class__btn')) {
            for (let i = 0; i < btn.length; i++) {
                if (target == btn[i]) {
                    hideBtnContent(0);
                    removeBtnActive(0);
                    showBtnContent(i);
                    addBtnActive(i);
                    break;
                }
            }
        }
    })
});