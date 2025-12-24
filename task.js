window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;

  document.querySelectorAll('[data-speed]').forEach(el => {
    const speed = el.getAttribute('data-speed');

    if (el.classList.contains('comet')) {
      el.style.transform = `translate(${scrolled * 1.5}px, ${-scrolled * speed}px)`;
    }
    else if (el.classList.contains('ship')) {
      const start = 800;
      const end = 2000;

      const progress = Math.min(
        Math.max((scrolled - start) / (end - start), 0),
        1
      );

      const x = progress * 1200;   
      const y = -progress * 400;     
      const scale = 1 + progress * 2; 

      el.style.transform = `
        translate(${x}px, ${y}px)
        scale(${scale})
      `;
    }
    
    else {
      el.style.transform = `translateY(${-scrolled * speed}px)`;
    }
  });
});
