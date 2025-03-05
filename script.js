document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("FLgchiFd30MmrZYB3"); // Replace with your EmailJS Public Key

    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        let templateParams = {
            from_name: name,
            from_email: email,
            message: message
        };

        emailjs.send("service_mk1ataa", "template_in33vqv", templateParams)
            .then(function (response) {
                document.getElementById("responseMessage").textContent = "Message sent successfully!";
                document.getElementById("responseMessage").style.color = "green";
                document.getElementById("contactForm").reset();
            }, function (error) {
                document.getElementById("responseMessage").textContent = "Failed to send message!";
                document.getElementById("responseMessage").style.color = "red";
                console.error("EmailJS Error:", error);
            });
    });
});
