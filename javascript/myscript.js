
function mobileMenu() {
    "use strict";
    let navbar = document.getElementById("menu");
    let icon = document.getElementById("icon");
    let animation = document.getElementById("remove-animation");

    // Close menu
    if (navbar.style.display === "inline-block") {
        navbar.style.display = "none";
        icon.style.color = "#fff";
        animation.classList.add("load-blink");


        // Open Menu

    } else {
        navbar.style.display = "inline-block";
        icon.style.color = "#FF5E5B";
        animation.classList.remove("load-blink");
    }


}


var viewpoint = document.getElementsByClassName('viewpoint')[0];

// trigger this function every time the user scrolls
window.onscroll = function (event) {
    var scroll = window.pageYOffset;
    if (scroll >= 700) {
        // blue
        viewpoint.style.backgroundColor = 'var(--text-red)';
    }
    else {
        // purple
        viewpoint.style.backgroundColor = '';
    }


}


