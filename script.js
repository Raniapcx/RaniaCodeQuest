document.addEventListener('DOMContentLoaded', function() {
    // تغيير لون الخلفية
    const colorPicker = document.getElementById('colorpicker');
    colorPicker.addEventListener('click', function(e) {
        e.preventDefault();
        const colors = ['#f0f0f0', '#e8f4f8', '#fff0f5', '#f0fff0'];
        document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    });

    // تأثير قلب الصفحة
    const navLinks = document.querySelectorAll('#toolbox a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.body.style.opacity = 0;
            setTimeout(() => {
                window.location.href = this.getAttribute('href');
            }, 500);
        });
    });

    // تكبير المشاريع عند النقر
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('click', function() {
            this.style.transform = this.style.transform === 'scale(1.2)' ? 'scale(1)' : 'scale(1.2)';
        });
    });
});