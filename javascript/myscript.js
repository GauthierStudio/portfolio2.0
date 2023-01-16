
function mobileMenu() {
    "use strict";
    let navbar = document.getElementById("menu");
    let icon = document.getElementById("icon");
    let animation = document.getElementById("remove-animation");

    // Close menu
    if (navbar.style.display === "flex") {
        navbar.style.display = "none";
        icon.style.color = "#fff";
        animation.classList.add("load-blink");


    // Open Menu

    } else {
        navbar.style.display = "flex";
        icon.style.color = "#FF5E5B";
        animation.classList.remove("load-blink");
    }


}



