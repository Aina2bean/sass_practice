let hamburger_btn = document.getElementById('header_hamburger');
let hamburger_menu = document.getElementById('header_menu');
hamburger_btn.addEventListener('click', function(){
    if(hamburger_menu.classList.contains('open')) {
        hamburger_btn.classList.remove('open');
        hamburger_menu.classList.remove('open');
    } else {
        hamburger_btn.classList.add('open');
        hamburger_menu.classList.add('open');
    }
});

/*==================== slick ====================*/
$('#slide_visual__img').slick({
    autoplay: true,
    arrows: true,
    dots: true,
    dotsClass: 'slide-dots',
});
/*==================== slick ====================*/