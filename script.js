document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.style.background = "#002855";
        } else {
            header.style.background = "linear-gradient(90deg, #004a99, #001f4d)";
        }
    });
	
	
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Molimo ispunite sva polja!");
        return;
    }

    alert("Poruka je uspješno poslana!");
    this.reset();
});


    const services = document.querySelectorAll(".service-card");
    services.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.style.transform = "scale(1.15)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
        });
    });
});



