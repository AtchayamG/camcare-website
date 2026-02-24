document.addEventListener("DOMContentLoaded", function () {

  // Load Header
  fetch("components/header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;
    });

  // Load Footer
  fetch("components/footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;

      // Set Year
      document.getElementById("year").textContent = new Date().getFullYear();

      // WhatsApp Link
      const phone = "919094713923"; // Change later
      document.getElementById("whatsappBtn").href =
        "https://wa.me/" + phone;
    });

});