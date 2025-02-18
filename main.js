// 1️⃣ FORM VALIDATION
const form = document.querySelector('.contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', function(event) {
    let valid = true;
    
    if (nameInput.value.trim() === '') {
        alert('Please enter your name');
        valid = false;
    }
    
    if (!emailInput.value.includes('@') || !emailInput.value.includes('.')) {
        alert('Please enter a valid email');
        valid = false;
    }
    
    if (messageInput.value.trim() === '') {
        alert('Please enter a message');
        valid = false;
    }
    
    if (!valid) {
        event.preventDefault();
    }
});

// 2️⃣ FAQ ACCORDION INTERACTIVITY
const faqButtons = document.querySelectorAll('.accordion-button');

faqButtons.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const isOpen = button.getAttribute('aria-expanded') === 'true';

        button.setAttribute('aria-expanded', !isOpen);
        content.style.display = isOpen ? 'none' : 'block';
    });
});

// 3️⃣ SMOOTH SCROLL ANIMATION
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// 4️⃣ BUTTON HOVER ANIMATION
const buttons = document.querySelectorAll('.btn, .btn2');

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
        button.style.transition = '0.3s ease-in-out';
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});
