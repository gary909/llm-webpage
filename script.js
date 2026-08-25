// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Demo form submission UI feedback
const contactForm = document.querySelector('form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevents page reload
        
        const nameInput = document.getElementById('name');
        const name = nameInput ? nameInput.value : 'there';
        
        alert(`Thanks, ${name}! (Demo mode: message logged to console)`);
        console.log('Form submission data:', new FormData(this));
        
        this.reset();
    });
}
