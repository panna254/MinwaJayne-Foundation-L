// Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu after clicking a link
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

// Form validation
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted:', form.id);
    });
});

// Sticky Navigation
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        // Scroll Down
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        // Scroll Up
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Mobile Dropdown Toggle
document.querySelectorAll('.dropdown').forEach(dropdown => {
    const dropdownLink = dropdown.querySelector('a');
    dropdownLink.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const dropdownContent = dropdown.querySelector('.dropdown-content');
            dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        }
    });
});

// Form Submissions
const partnerForm = document.getElementById('partner-form');
if (partnerForm) {
    partnerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        // Here you would typically send the data to a server
        alert('Thank you for your partnership inquiry! We will contact you soon.');
        this.reset();
    });
}

const volunteerForm = document.getElementById('volunteer-form');
if (volunteerForm) {
    volunteerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        // Here you would typically send the data to a server
        alert('Thank you for volunteering! We will contact you soon.');
        this.reset();
    });
}

// Gallery Lightbox
const galleryItems = document.querySelectorAll('.gallery-item');
if (galleryItems) {
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <img src="${imgSrc}" alt="Gallery Image">
                <span class="close-lightbox">&times;</span>
            `;
            document.body.appendChild(lightbox);
            
            // Close lightbox when clicking the close button or outside
            const closeBtn = lightbox.querySelector('.close-lightbox');
            closeBtn.addEventListener('click', () => lightbox.remove());
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) {
                    lightbox.remove();
                }
            });
        });
    });
}

// Blog Read More
const blogCards = document.querySelectorAll('.blog-card');
if (blogCards) {
    blogCards.forEach(card => {
        const readMoreBtn = card.querySelector('.btn.secondary');
        if (readMoreBtn) {
            readMoreBtn.addEventListener('click', function(e) {
                e.preventDefault();
                const blogId = this.closest('.blog-card').id;
                // Here you would typically navigate to the blog post page
                alert(`Viewing blog post: ${blogId}`);
            });
        }
    });
}

// Success Stories Read More
const storyCards = document.querySelectorAll('.story-card');
if (storyCards) {
    storyCards.forEach(card => {
        const readMoreBtn = card.querySelector('.btn.secondary');
        if (readMoreBtn) {
            readMoreBtn.addEventListener('click', function(e) {
                e.preventDefault();
                const storyId = this.closest('.story-card').id;
                // Here you would typically navigate to the story page
                alert(`Viewing success story: ${storyId}`);
            });
        }
    });
}

// Initialize all sections
function initializeSections() {
    // Add any section-specific initialization here
    console.log('All sections initialized');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeSections);

// Form Validation
const registrationForm = document.getElementById('registration-form');
const contactForm = document.getElementById('contact-form');
const newsletterForm = document.querySelector('.newsletter-form');

function validateForm(form) {
    const inputs = form.querySelectorAll('input, select, textarea');
    let isValid = true;

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            input.style.borderColor = 'red';
            isValid = false;
        } else {
            input.style.borderColor = '#ddd';
        }
    });

    return isValid;
}

// Registration Form Handling
registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (validateForm(registrationForm)) {
        // Here you would typically send the form data to a server
        alert('Thank you for joining our community!');
        registrationForm.reset();
    }
});

// Contact Form Handling
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (validateForm(contactForm)) {
        // Here you would typically send the form data to a server
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    }
});

// Newsletter Form Handling
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = newsletterForm.querySelector('input').value;
    
    if (email.trim() === '') {
        newsletterForm.querySelector('input').style.borderColor = 'red';
    } else {
        // Here you would typically send the email to a server
        alert('Thank you for subscribing to our newsletter!');
        newsletterForm.reset();
    }
});

// Form Input Focus Effects
document.querySelectorAll('.form-group input, .form-group select, .form-group textarea').forEach(input => {
    input.addEventListener('focus', () => {
        input.style.borderColor = '#6c5ce7';
    });
    
    input.addEventListener('blur', () => {
        if (input.value.trim() === '') {
            input.style.borderColor = '#ddd';
        }
    });
});

// Scroll Animation for Elements
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.stat-item, .program-card, .resource-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initialize scroll animation
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Initialize stats animation
const stats = document.querySelectorAll('.stat-item');
stats.forEach(stat => {
    stat.style.opacity = '0';
    stat.style.transform = 'translateY(20px)';
});

// Initialize program cards animation
const programCards = document.querySelectorAll('.program-card');
programCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
});

// Initialize resource cards animation
const resourceCards = document.querySelectorAll('.resource-card');
resourceCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
});

// Add transition styles
stats.forEach(stat => {
    stat.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

programCards.forEach(card => {
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

resourceCards.forEach(card => {
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    function handleNavbarVisibility() {
        if (window.scrollY > 80) {
            navbar.classList.add('navbar-visible');
        } else {
            navbar.classList.remove('navbar-visible');
        }
    }
    window.addEventListener('scroll', handleNavbarVisibility);
    handleNavbarVisibility(); // Initial check
});
