import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
    projectsSlideInit();
    hoverAccordeion()

});

const projectsSlideInit = () => {
    if (document.querySelector('.projects-slider-track')) {
        const sliderInner = document.querySelector('.projects-slider-track');
        const slides = sliderInner.querySelectorAll('.swiper-slide');
        var mySwiper = new Swiper(sliderInner, {
            slidesPerView: 1,
            effect: 'fade',
            navigation: {
                nextEl: '.projects-slider__next',
                prevEl: '.projects-slider__prev',
            },
            pagination: {
                clickable: true,
                el: '.swiper-pagination'
            }
        })
        mySwiper.on('slideChange', function() {
            if ((mySwiper.previousIndex - mySwiper.activeIndex) < 0) {
                slides.forEach(each => {
                    if (each.classList.contains('swiper-slide-active')) {
                        each.classList.add('animated');
                    }
                });
            } else {
                slides.forEach(each => {
                    if (each.classList.contains('swiper-slide-active')) {
                        each.classList.remove('animated');
                    }
                });
            }
        });
    }
};


const hoverAccordeion = () => {
    if (document.querySelector('.projects-module__item')) {
        const items = document.querySelectorAll('.projects-module__item');
        items.forEach(each => {
            const mainArea = each.querySelector('.projects-module__item-main');
            const accordeon = each.querySelector('.projects-module__item-descr .projects-module__item-popup');
            mainArea.addEventListener('mouseenter', () => {
                if (window.innerWidth >= 1280) {
                    accordeon.style.height = accordeon.scrollHeight + 'px';
                }
            });
            mainArea.addEventListener('mouseleave', () => {
                if (window.innerWidth >= 1280) {
                    accordeon.style.height = 0;
                }
            });
        });
    }
    if (document.querySelector('.projects-module__item-descr')) {
        const items = document.querySelectorAll('.projects-module__item-descr');
        let realWidth = document.querySelector('.projects-module-list').offsetWidth;
        const allItems = Array.from(document.querySelectorAll('.projects-module__item'));
        window.addEventListener('resize', () => {
            realWidth = document.querySelector('.projects-module-list').offsetWidth;
        });

        items.forEach(each => {
            const mainArea = each.querySelector('.projects-module__item-descr-trigger');
            const accordeon = each.querySelector('.projects-module__item-popup');
            accordeon.style.width = realWidth + 'px';
            accordeon.style.marginLeft = -(accordeon.offsetLeft) + 'px';
            window.addEventListener('resize', () => {
                accordeon.style.width = realWidth + 'px';
                if (accordeon.offsetLeft > 0) {
                    allItems[0].querySelector('.projects-module__item-popup').style.marginLeft = 0;
                    for (let i = 1; i < allItems.length; i++) {
                        allItems[i].querySelector('.projects-module__item-popup').style.marginLeft = -each.offsetWidth * i + 'px';
                    }
                } else {
                    allItems[0].querySelector('.projects-module__item-popup').style.marginLeft = 0;
                    for (let i = 1; i < allItems.length; i++) {
                        allItems[i].querySelector('.projects-module__item-popup').style.marginLeft = -((each.offsetWidth * i) + accordeon.offsetLeft) + 'px';
                    }
                }
            })
            mainArea.addEventListener('click', () => {
                if (!each.classList.contains('is-active')) {
                    accordeon.style.height = accordeon.scrollHeight + 'px';
                    each.classList.add('is-active');
                } else {
                    accordeon.style.height = 0;
                    each.classList.remove('is-active');
                }
            });
        });
    }
}