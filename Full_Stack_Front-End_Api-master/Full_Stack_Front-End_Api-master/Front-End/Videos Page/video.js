document.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        element.classList.add('visible', 'animate__animated', 'animate__fadeIn');
      }
    });
  });