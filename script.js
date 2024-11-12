// Update footer with the current year
document.getElementById('year').textContent = new Date().getFullYear();

// Toggle custom amount field for donation
const donationAmountSelect = document.getElementById('donation-amount');
if (donationAmountSelect) {
    donationAmountSelect.addEventListener('change', function() {
        const customAmountContainer = document.getElementById('custom-amount-container');
        customAmountContainer.style.display = this.value === 'custom' ? 'block' : 'none';
    });
}

// Basic form validation for email format
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        const email = document.getElementById('email').value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            event.preventDefault();
        }
    });
}
