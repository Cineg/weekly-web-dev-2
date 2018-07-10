/* NAV STYLE */
const nav = document.getElementById('navigation');

window.onscroll = function(){
    if(window.pageYOffset > 100){
        nav.classList.add('scrolled');
    }
    else{
        nav.classList.remove('scrolled');
    }
}



/* INPUTS STYLE */
//get input containers
let inputContainers = document.getElementsByClassName('input-field');

//for each not working (dunno why) 
for (let i= 0; i < inputContainers.length; i++) {
    //get active class
    const inputActive = inputContainers[i].querySelector('.active');
    //get input
    const input = inputContainers[i].querySelector('.input');
    //if input is active, div active is visible
    input.addEventListener("focusin", () => {
        inputActive.classList.add('visible');
    });
    //otherwise is not visible
    input.addEventListener('focusout', () => {
        inputActive.classList.remove('visible');
    })
}



/* BURGER MENU */
const burger = document.getElementById('burger');
const navitems = document.getElementById('nav-items')

burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    navitems.classList.toggle('openNav');
})