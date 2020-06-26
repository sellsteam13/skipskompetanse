import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
    aboutHistorySliderInit();
});


const aboutHistorySliderInit = () => {
    if (document.querySelector('.about-history-slider')) {
        const sliderInner = document.querySelector('.about-history-slider');
        var mySwiper = new Swiper(sliderInner, {
            slidesPerView: 1,
            effect: 'coverflow',
            coverflowEffect: {
                rotate: 30,
                slideShadows: false,
            },
            autoplay: {
                delay: 5000,
            },
            pagination: {
                el: '.about-history-pagination',
                clickable: true,
            },
        })
    }
};