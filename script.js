document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.001) {
                entry.target.classList.add('in-view');
            } else if (entry.intersectionRatio <= 0.001) {
                entry.target.classList.remove('in-view');
            }
        });
    }, {
        threshold: [0, 0.001, 0.5, 1] // Пороги: 0%, 0.1%, 50%, 100%
    });

    // Наблюдаем за всеми анимированными элементами
    document.querySelectorAll('.animated').forEach(element => {
        observer.observe(element);
    });
    
    // Принудительный показ героя при загрузке
    const hero = document.querySelector('.hero-content');
    if (hero) hero.classList.add('.animated.in-view');
});