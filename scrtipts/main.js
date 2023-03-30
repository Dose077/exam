'use strict'

const body   = document.querySelector('body');
const checkbox = document.querySelector('.label__checkbox');


checkbox.addEventListener('change', function(e) {
    if(e.target.checked){
        body.classList.add("dark");
    }else{
        body.classList.remove("dark");
    }
});