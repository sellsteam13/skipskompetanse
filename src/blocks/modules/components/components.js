import Accordion from 'accordion-js';

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.ac-cont')) {
        new Accordion('.ac-cont');
    }
});