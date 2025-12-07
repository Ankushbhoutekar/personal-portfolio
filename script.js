// ✅ Public Key init
emailjs.init("p9uIDTTPOjBGA0w4T");

// ✅ Form submit handler
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    document.getElementById("status").innerText = "Sending...";

    emailjs
      .sendForm(
        "service_bie2wr1",      // ✅ Tera Service ID
        "template_dz2rwve",    // ✅ Tera Template ID
        this
      )
      .then(() => {
        document.getElementById("status").innerText =
          "Message sent successfully ✅";
        this.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        document.getElementById("status").innerText =
          "Failed to send message ❌";
      });
  });
