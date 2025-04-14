
document.getElementById("contactForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent default form submission

    // Gather form data
    const formData = new FormData(event.target);

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            alert("Your message has been sent successfully!");
            event.target.reset(); // Reset the form after successful submission
        } else {
            alert("Failed to send your message. Please try again.");
        }
    } catch (error) {
        alert("An error occurred while sending your message. Please check your connection and try again.");
        console.error("Error:", error);
    }
});
