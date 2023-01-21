
function mobileMenu() {
    "use strict";
    let navbar = document.getElementById("menu");
    let icon = document.getElementById("icon");

    // Close menu
    if (navbar.style.display === "inline-block") {
        icon.classList.remove("icon-hover");
        navbar.style.animation = "slide-out-top 1s ease-in-out backwards";
        setTimeout(function () {
            navbar.style.display = "none";
        }, 900);



    }

     // Open Menu

    else {
        navbar.style.display = "inline-block";
        navbar.style.animation = "";
        icon.classList.add("icon-hover");
    }


}


let menuNav = document.getElementsByClassName('menu-nav')[0];
let menuitems = document.getElementsByClassName('menu-items')[0];
let icon = document.getElementById("icon");

// trigger this function every time the user scrolls
window.onscroll = function (event) {
    var scroll = window.pageYOffset;
    if (scroll >= 710) {
        // blue
        menuNav.style.backgroundColor = 'var(--text-red)';
    }
    else {
        // purple
        menuNav.style.backgroundColor = '';
    }
}




