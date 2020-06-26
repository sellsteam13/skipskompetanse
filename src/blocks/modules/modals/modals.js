document.addEventListener('DOMContentLoaded', () => {
    modalBind('.modal-video1', '.call-video1');
    modalBind('.modal-video2', '.call-video2');
});

const modalBind = (modalName, trigger) => {
    const triggers = document.querySelectorAll(trigger);
    const modal = document.querySelector(modalName);
    const allModals = document.querySelectorAll('.modal');
    const closeBtn = modal.querySelector('.modal-close');
    triggers.forEach(each => {
        each.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('opened');
            document.body.style.overflow = 'hidden';
        });
    });
    closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.remove('opened');
        document.body.style.overflow = '';
    });
};