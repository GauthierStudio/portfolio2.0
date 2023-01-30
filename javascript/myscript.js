
let navbar = document.getElementById("menu")[0];
let icon = document.getElementById("icon")[0];
let menuNav = document.getElementsByClassName('menu-nav')[0];
let menuitems = document.getElementsByClassName('menu-items')[0];
let navitem = document.getElementsByClassName('nav-item')[0];
let helpIcon = document.getElementsByClassName('fa-comment-dots')[0];


// Hides or displays menu on click
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

// Adds abackground to menu upon scroll

window.onscroll = function (event) {
    var scroll = window.pageYOffset;
    if (scroll >= 100) {
        menuNav.style.backgroundColor = 'var(--text-red)';
        // helpIcon.style.color = 'blue';

    }
    else {
        menuNav.style.backgroundColor = '';
    }
}




// Cards

// Hides or shows content on click



// Web Development Card
function hideWeb() {
    let webHide = document.getElementsByClassName("webhide")[0];

    if (webHide.style.display === "flex") {
        webHide.style.animation = "slide-out-blurred-top 0.45s cubic-bezier(0.755, 0.050, 0.855, 0.060) both";
        setTimeout(function () {
            webHide.style.display = "none";
        }, 450);
        console.log("Web Closed");
    }

    else {
        webHide.style.display = "flex";
        webHide.style.animation = "slide-in-blurred-top 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both";
        console.log("Web Opened");
    }
}




function hidePhoto() {
    let photoHide = document.getElementsByClassName("photohide")[0];

    if (photoHide.style.display === "flex") {
        photoHide.style.animation = "slide-out-blurred-top 0.45s cubic-bezier(0.755, 0.050, 0.855, 0.060) both";
        setTimeout(function () {
            photoHide.style.display = "none";
        }, 450);
        console.log("Photo Closed");

    }
    else {
        photoHide.style.display = "flex";
        photoHide.style.animation = "slide-in-blurred-top 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both";
        console.log("Web Opened");
    }
}

function hideImage() {
    let imageHide = document.getElementsByClassName("imagehide")[0];

    if (imageHide.style.display === "flex") {
        imageHide.style.animation = "slide-out-blurred-top 0.45s cubic-bezier(0.755, 0.050, 0.855, 0.060) both";
        setTimeout(function () {
            imageHide.style.display = "none";
        }, 450);
        console.log("image closed");
    }

    else {
        imageHide.style.display = "flex";
        imageHide.style.animation = "slide-in-blurred-top 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both";
        console.log("image Opened");
    }
}













// Popup contact form



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

(function (h, o, t, j, a, r) {
    h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
    h._hjSettings = { hjid: 3340144, hjsv: 6 };
    a = o.getElementsByTagName('head')[0];
    r = o.createElement('script'); r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
