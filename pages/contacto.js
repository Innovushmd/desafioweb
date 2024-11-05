document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const message = document.getElementById("message").value;
    fetch("https://apx.school/api/utils/email-to-student", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            to: "tu-email-de-estudiante@gmail.com",
            message: message
        })
    })
    .then(response => response.json())
    .then(data => alert("Mensaje enviado correctamente"))
    .catch(error => console.error("Error:", error));
});
