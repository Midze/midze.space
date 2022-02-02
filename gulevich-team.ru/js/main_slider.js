window.addEventListener('DOMContentLoaded', function() {
    'use strict'

    let container = document.querySelector('.main__header'),
        arr = ["url('./img/24.jpg')","url('./img/25.jpg')", "url('./img/26.jpg')","url('./img/27.jpg')", "url('./img/28.jpg')"],
        i = 0;


    function counter () {
        if (i < arr.length) {
            i = i + 1;
        }
        else i = 0;
        
        console.log(i);
        container.style.backgroundImage = arr[i];
    }
    
    setInterval(counter,5000);

    
        
});