let button = document.querySelector(".button");
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
