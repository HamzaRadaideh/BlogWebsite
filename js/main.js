
//filter Js
$(document).ready(function () {
    $('.filter-item').click(function () {
        const value = $(this).attr('data-filter')
        if (value === 'all') {
            $('.post-box').show('1000')
        }
        else {
            $('.post-box').not('.' + value).hide('1000')
            $('.post-box').filter('.' + value).show('1000')
        }
    });
    // add active to btn
    $('.filter-item').click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });
})

// Header Background Change on Scroll
let header = document.querySelector('header');
window.addEventListener('scroll', function () {
    header.classList.toggle('shadow', window.scrollY > 0);
});

const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');


registerLink.onclick = () => {
    wrapper.classList.add('active');
};

loginLink.onclick = () => {
    wrapper.classList.remove('active');
};

btnPopup.onclick = () => {
    wrapper.classList.add('active-popup');
};

iconClose.onclick = () => {
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active');
};