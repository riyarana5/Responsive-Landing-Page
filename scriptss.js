document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handler
    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert('Thank you for your message!');
            // Here you would typically send the form data to a server
            document.getElementById('contact-form').reset();
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Button click example
    document.getElementById('cta-button').addEventListener('click', () => {
        alert('Button clicked!');
        // You can redirect or perform other actions here
    });
});
