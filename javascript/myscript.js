
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

    // Close menu
    if (form.style.display === "flex") {
        form.classList.add("slide-out-fwd-center");
        open.classList.add("slide-in-fwd-br");
        open.classList.remove("slide-out-bck-br");
        open.style.display = "flex";
        setTimeout(function () {
            form.style.display = "none";
        }, 800);



    }

    // Open Menu
    else {
        form.style.display = "flex";
        form.classList.remove("slide-out-fwd-center");
        open.classList.add("slide-out-bck-br");
        open.classList.remove("slide-in-fwd-br");
        setTimeout(function () {
            open.style.display = "none";
        }, 80);



    }
}
