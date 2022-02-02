window.addEventListener('DOMContentLoaded', function() {
    'use strict'
    let picture = document.querySelectorAll('img'),
        overflow = document.querySelector('.gallery__overflow'),
        gallery = document.querySelector('.gallery__container'),
        pictureBig = document.querySelector('.gallery__img'),
        photos = document.querySelector('.photo__galery'),
        number = 0;
    
    function showBigPicture(a) {
        overflow.style.display = 'block';
        gallery.style.display = 'block';
        let bgi = window.getComputedStyle(picture[a]).backgroundImage;
        pictureBig.style.backgroundImage = bgi;
    }

    photos.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('photo')) {
            for (let i = 0; i < picture.length; i++) {
                if (target == picture[i]) {
                    showBigPicture(i);
                    number = i;        
                    break;                 
                }
            }
        }
    })    

    overflow.addEventListener('click', function(event) {
        overflow.style.display = 'none';
        gallery.style.display = 'none';
    })

    gallery.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('right')) {
            if (number == picture.length - 1) {
                number = -1;
                showBigPicture(++number);
            }
            else showBigPicture(++number);
        }
    })

    gallery.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('left')) {
            if (number == 0) {
                number = picture.length;
                showBigPicture(--number);
            }
            else showBigPicture(--number);
        }
    })
        
});
