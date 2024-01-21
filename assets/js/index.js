const acordeonTriggers = document.querySelectorAll('.acordeon .trigger');

acordeonTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (event) => {
        const acordeonSection = trigger.parentElement;
        const isOpen = acordeonSection.classList.contains('open');

        if (isOpen) {
            acordeonSection.classList.remove('open');
        }
        else {
            acordeonSection.classList.add('open');
        }
    });
});