document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  alert("Message sent! (Demo only — connect backend to make it functional)");

  this.reset();
});
