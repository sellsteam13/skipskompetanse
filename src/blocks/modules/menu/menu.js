document.addEventListener('DOMContentLoaded', () => {
    menuBind();
    setOverflowHeight();
});

const menuBind = () => {
    if (document.querySelector('.menu')) {
        const triggers = document.querySelectorAll('.menu-trigger');
        triggers.forEach(each => {
            each.addEventListener('click', (e) => {
                e.preventDefault();
                if (!document.body.classList.contains('menu-opened')) {
                    document.body.style.overflow = 'hidden';
                    document.body.classList.add('menu-opened');
                } else {
                    document.body.style.overflow = '';
                    document.body.classList.remove('menu-opened');
                }
                document.body.addEventListener('click', (e) => {
                    let eventHappened = document.querySelector('.menu').contains(e.target) || document.querySelector('.header__burger').contains(e.target);
                    if (!eventHappened && document.body.classList.contains('menu-opened')) {
                        document.body.classList.remove('menu-opened');
                        document.body.style.overflow = '';
                    }
                });
            });
        });
        window.addEventListener('resize', () => {
            setOverflowHeight();
        });
    }
};

const setOverflowHeight = () => {
    if (document.querySelector('.menu-lang')) {
        const langPopup = document.querySelector('.menu-lang .header-choices-popup');
        const menu = document.querySelector('.menu');
        langPopup.style.minHeight = menu.scrollHeight + 'px';
    }
};