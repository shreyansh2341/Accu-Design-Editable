const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const faqLink = item.querySelector('.faq-link');

    faqLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        item.classList.toggle('active'); // Toggle the "active" class
    });
});
