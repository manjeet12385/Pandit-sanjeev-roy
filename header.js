
fetch("header.html")
.then(response => response.text())
.then(data => {

    document.getElementById("header").innerHTML = data;

    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    menuBtn.addEventListener("click", function() {

        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuBtn.setAttribute("aria-expanded", isOpen);

    });

})
.catch(error => console.error("Header loading error:", error));
