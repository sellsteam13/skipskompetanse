document.addEventListener('DOMContentLoaded', () => {
    headerChoicesInit();
    checkForScroll()
});


const headerChoicesInit = () => {
    if (document.querySelector('.header-choices')) {
        const allChoices = document.querySelectorAll('.header-choices');
        allChoices.forEach(each => {
            const trigger = each.querySelector('.header-choices__trigger');
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                if (!each.classList.contains('is-opened')) {
                    allChoices.forEach(choice => {
                        choice.classList.remove('is-opened');
                    });
                    each.classList.add('is-opened');
                    document.body.style.overflow = 'hidden';
                } else {
                    document.body.style.overflow = '';
                    allChoices.forEach(choice => {
                        choice.classList.remove('is-opened');
                    });
                }
                document.addEventListener('click', (e) => {
                    if ((e.target).parentNode.classList.contains('is-opened')) {
                        e.target.parentNode.classList.remove('is-opened');
                        document.body.style.overflow = '';
                    }
                });
            });
        });
    }
};


const checkForScroll = () => {
    document.addEventListener('scroll', () => {
        if (document.body.getBoundingClientRect().top < -120) {
            document.querySelector('.header').classList.add('is-fixed');
        } else {
            document.querySelector('.header').classList.remove('is-fixed');
        }

    });
};