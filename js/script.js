const header= document.querySelector('header');
window.addEventListener('scroll', function(){
    header.classList.toggle('sticky', window.scrollY > 100);
});

Let menu = document.querySelector('#menu-icon');
Let nav = document.querySelector('.nav');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    nav.classList.remove('open');
}