import scrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import AOS from 'aos';


/** if true animation will work */
let ALLOW_ANIMATION_FLAG = true;

document.addEventListener('DOMContentLoaded', () => {
    if (ALLOW_ANIMATION_FLAG && window.innerWidth >= 1280) {

        /** animation for main page */

        gsap.registerPlugin(scrollTrigger);

        if (document.querySelector('.page-main')) {


            let blockquoteTimeLine = gsap.timeline({
                scrollTrigger: {
                    trigger: '.blockquote-block',
                    start: 'top top',
                    end: '+=' + document.querySelector('.advantages').offsetHeight
                }
            });

            blockquoteTimeLine.from('.advantages', {
                y: -(document.querySelector('.advantages').offsetHeight)
            });

            let projectsSliderTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '.projects',
                    start: 'center bottom',
                }
            });

            projectsSliderTimeline.from('.projects .line', .5, { y: '-100%' })
                .from('.projects .line span', .5, { opacity: 0 })
                .from('.projects-title', 0.4, { opacity: 0 }, '-=0.8')
                .from('.projects__item-title h3', 0.5, { y: 50, opacity: 0 }, '-=0.8')
                .from('.projects__item-count', 0.5, { y: 50, opacity: 0 }, '-=0.4')
                .from('.projects__item-info', 0.5, { y: 50, opacity: 0 }, '-=0.4')
                .from('.projects__item-preview img', 1, { opacity: 0 }, '-=0.4')
                .from('.projects__item-more', 0.5, { opacity: 0 }, '-=0.5')
                .from('.projects-slider__arrow .icon', 1, { opacity: 0 }, '-=0.8');


            let historyEnterTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '.projects',
                    start: 'bottom bottom',
                    scrub: 1.1,
                    end: '+=300'
                }
            });

            historyEnterTimeline.from('.history-slider-wrap', { y: -125 }).to('.projects', { y: 100 }, 0);

            let videoBlockAnimation = gsap.timeline({
                scrollTrigger: {
                    trigger: '.history',
                    start: 'top top',
                    scrub: 1.1,
                }
            });

            videoBlockAnimation.to('.history', { y: '100%', ease: 'power0' });

            let footerAnimation = gsap.timeline({
                scrollTrigger: {
                    trigger: '.news',
                    start: 'bottom bottom',
                    scrub: 1.1,
                }
            });

            footerAnimation.to('.news', { y: -100 });
        }

        /** preloader animation */

        window.addEventListener("load", function(e) {

            setTimeout(() => {
                if (document.querySelector('.preloader')) {
                    let tl = gsap.timeline();
                    tl.to('.preloader-square-blue', 1.5, { opacity: 0 })
                        .to('.preloader-logo', 1.5, { opacity: 0 })
                        .from('.header', 1, { y: -30, opacity: 0 }, '-=1.2')
                        .from('.welcome-title', 1, { y: 30, opacity: 0 }, '-=1')
                        .from('.welcome-subtitle', 1, { y: 30, opacity: 0 }, '-=1')
                        .from('.welcome-preview', 1, { y: 30, opacity: 0 }, '-=1')
                        .from('.welcome-arrow', 1, { y: -30, opacity: 0 }, '-=1')
                        .to('.welcome-bg img', 7, { scale: 1.1, ease: 'Power1.easeInOut' }, '-=2');
                }
            }, 1000);

        }, false)
    } else {
        if (document.querySelector('.preloader')) {
            document.querySelector('.preloader').style.display = 'none';
        }
    }
    /** basic aos animation setup */
    AOS.init({
        startEvent: 'DOMContentLoaded',
        once: true,
        easing: 'ease-in-out',
        offset: 150,
        duration: 700,
        disable: function() {
            var maxWidth = 1280;
            return window.innerWidth < maxWidth;
        }
    });
});