
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

// Header background change on scroll
const header = $('header');
$(window).scroll(function () {
    header.toggleClass('shadow', $(this).scrollTop() > 0);
});

// Popup and form toggle functionality
const wrapper = $('.wrapper');
const body = $('body');

$('.register-link').click(function () {
    wrapper.addClass('active');
});

$('.login-link').click(function () {
    wrapper.removeClass('active');
});

$('.btnLogin-popup').click(function () {
    wrapper.addClass('active-popup');
    body.css('overflow', 'hidden');
    $(window).scrollTop(0);
});

$('.icon-close').click(function () {
    wrapper.removeClass('active active-popup');
    body.css('overflow', 'auto');
});
