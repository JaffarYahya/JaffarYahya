// تنفيذ التنقل السلس
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// تفعيل شريط التقدم للمهارات عند التمرير
window.addEventListener('scroll', function() {
    animateSkills();
});

// تفعيل شريط التقدم للمهارات
function animateSkills() {
    const skillSection = document.querySelector('.skills');
    if (!skillSection) return;
    
    const skillProgressBars = document.querySelectorAll('.skill-progress');
    if (skillProgressBars.length === 0) return;
    
    const sectionPosition = skillSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (sectionPosition < screenPosition) {
        // Animate progress bars when section is visible
        skillProgressBars.forEach(progress => {
            const width = progress.getAttribute('data-width');
            if (width) {
                progress.style.width = width;
            }
        });
    } else {
        // Reset progress bars to 0% when section is not visible
        skillProgressBars.forEach(progress => {
            progress.style.width = '0%';
        });
    }
}

// تهيئة الصفحة
window.onload = function() {
    // تفعيل الرسوم العائمة
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach(shape => {
        const randomDelay = Math.random() * 5;
        shape.style.animationDelay = `${randomDelay}s`;
    });
    
    // تفعيل المهارات عند تحميل الصفحة إذا كانت مرئية
    setTimeout(animateSkills, 100);
};