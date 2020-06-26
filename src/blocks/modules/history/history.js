import Swiper from 'swiper';
document.addEventListener('DOMContentLoaded', () => {
    historySliderInit();
});


const historySliderInit = () => {
    if (document.querySelector('.history-slider')) {
        const sliderInner = document.querySelector('.history-slider');
        var mySwiper = new Swiper(sliderInner, {
            slidesPerView: 1,
            effect: 'fade',
            pagination: {
                el: '.history-pagination',
                clickable: true,
            },
        })
    }
};