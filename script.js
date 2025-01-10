// Save this as script.js
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent default form submission

    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // For now, let's log it to console
    console.log('Form submission:', formData);
    
    // You could also display it on the page
    alert(`Message received!\n\nFrom: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    
    // Clear the form
    this.reset();
});
