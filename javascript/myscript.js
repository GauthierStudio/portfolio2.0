
let navbar = document.getElementById("menu")[0];
let icon = document.getElementById("icon")[0];
let menuNav = document.getElementsByClassName('menu-nav')[0];
let menuitems = document.getElementsByClassName('menu-items')[0];
let navitem = document.getElementsByClassName('nav-item')[0];


function mobileMenu() {
    let navbar = document.getElementById("menu");
    let icon = document.getElementById("icon");
    // Close menu
    if (navbar.style.display === "inline-block") {
        icon.classList.add("icon-hover");
        navbar.style.animation = "slide-out-top 1s ease-in-out backwards";
        setTimeout(function () {
            navbar.style.display = "none";
        }, 300);
    }

    // Open Menu
    else {
        navbar.style.display = "inline-block";
        navbar.style.animation = "";
        icon.classList.remove("icon-hover");
    }
}


window.onscroll = function (event) {
    var scroll = window.pageYOffset;
    if (scroll >= 710) {
        menuNav.style.backgroundColor = 'var(--text-red)';
    }
    else {
        menuNav.style.backgroundColor = '';
    }
}




function popupContact() {
    let open = document.getElementById("contact-popup-button");
    let form = document.getElementById("form");
    let close = document.getElementById("close-button");
    // Close menu
    if (form.style.display === "flex") {
        form.style.display = "none";
        open.style.display = "flex";
    }

    // Open Menu
    else {
        form.style.display = "flex";
        open.style.display ="none";

    }
}
