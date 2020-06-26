import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
    productGalleryMainInit();
});


const productGalleryMainInit = () => {
    if (document.querySelector('.product-gallery-main')) {
        const inner = document.querySelector('.product-gallery-main');
        const mainSlider = new Swiper(inner, {
            effect: 'fade',
            slidesPerView: 1,
        });
        const thumbs = document.querySelector('.product-gallery-thumbs-track');
        const thumbsSlider = new Swiper(thumbs, {
            navigation: {
                nextEl: '.product-gallery__next',
                prevEl: '.product-gallery__prev',
            },
            slidesPerView: 1,
            spaceBetween: (window.innerWidth <= 1279) ? 20 : 40,
        });
        mainSlider.controller.control = thumbsSlider;
        thumbsSlider.controller.control = mainSlider;
        const slides = Array.from(document.querySelectorAll('.product-gallery-thumbs-track .swiper-slide'));
        slides.forEach(each => {
            each.addEventListener('click', () => {
                thumbsSlider.slideTo(slides.indexOf(each));
            });
        });
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 1279) {
                thumbsSlider.params.spaceBetween = 20;
            } else {
                thumbsSlider.params.spaceBetween = 40;
            }
        });
    }
};