let box1 = document.querySelector('.box1');
let box2 = document.querySelector('.box2');
let box3 = document.querySelector('.box3');
let box4 = document.querySelector('.box4');
let box5 = document.querySelector('.box5');
let box6 = document.querySelector('.box6');
let dark = document.querySelector('.dark');
let button = document.querySelector('.button');
let body = document.querySelector('#body');

window.onscroll = function() {
    "use strict";
    let value = scrollY;
    if (scrollY <= 1200){
        box1.style.marginLeft = 300 + 'px';
        box4.style.marginRight = 300 + 'px';
    }
}
button.onclick = function(){
    "use strict";
    body.classList.toggle('dark');
    if (this.textContent === 'dark'){
    this.textContent = 'light';
    button.style.backgroundColor = '#fff';
    button.style.color = '#000';
    }else{
        this.textContent = 'dark';
        button.style.backgroundColor = '#000';
        button.style.color = '#fff';
    }
}