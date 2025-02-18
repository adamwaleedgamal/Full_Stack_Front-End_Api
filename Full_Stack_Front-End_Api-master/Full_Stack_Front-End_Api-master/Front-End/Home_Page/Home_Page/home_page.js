document.addEventListener('scroll', function() {
    const elementsLeft = document.querySelectorAll('.animate-on-scroll-left');
    const elementsRight = document.querySelectorAll('.animate-on-scroll-right');
    elementsLeft.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            element.classList.add('visible', 'animate__animated', 'animate__fadeInLeft');
        }
    });
    elementsRight.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            element.classList.add('visible', 'animate__animated', 'animate__fadeInRight');
        }
    });
});