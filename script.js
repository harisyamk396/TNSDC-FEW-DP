// Alert when clicking on Contact section

document.getElementById("contact").addEventListener("click", function() {

  alert("Thanks for visiting my portfolio!");

});

// Small effect: highlight nav links on click

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

  link.addEventListener("click", () => {

    navLinks.forEach(l => l.classList.remove("active"));

    link.classList.add("active");

  });

});