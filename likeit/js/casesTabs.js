'use strict';

$(document).ready(function () {

  /*cases tabs START*/

  let tab = document.querySelectorAll('.casesName__list-item'),
      link = document.querySelectorAll('.casesName-link'),
      tabBox = document.querySelectorAll('.casesPage__slider'),
      container = document.querySelector('.pageWrapper');

      function hideContent(a) {
        for(let i = a; i < tabBox.length; i++) {
          tabBox[i].classList.add('hide');
          tabBox[i].classList.remove('showFlex');
        }
      };

      function activate(b){
        for(let i = 0; i < tab.length; i++) {
          link[i].classList.remove('active');
        }
        link[b].classList.add('active');
      };

      function showContent(c){
        tabBox[c].classList.remove('hide');
        tabBox[c].classList.add('showFlex');
      };

      activate(0);
      hideContent(1);

      container.addEventListener('click', function(event){
        let target = event.target;
        if(target && target.classList.contains('casesName__list-item')) {
          for(let i = 0; i < tab.length; i++) {
            if(target == tab[i]) {
              console.log(tab[i]);
              activate(i);
              hideContent(0);
              showContent(i)
            }
          }
        }
      });

  /*cases tabs END*/


});
