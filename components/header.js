class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header>
        <nav class="menu-nav">
            <div class="inner-wrapper">
                <h1 class="bounce-in-top"><a href="index.html">Gauthier Studios</a></h1>
                <!-- Navigation menu, hidden by default -->
                <a href="javascript:void(0);" class="remove" onclick="mobileMenu()"><i id="icon"
                        class="fa-solid fa-gears bounce-in-top"></i></a>
                <div id="menu" class="bounce-in-top menu-items inner-wrapper">
                    <ul>
                        <li><a class="nav-item" href="#about">About</a></li>
                        <li><a class="nav-item" href="#work">Work</a></li>
                        <li><a class="nav-item" onclick="popupContact()" href="#contact">Contact</a></li>
                        <li><a class="nav-item" href="https://github.com/GauthierStudio"><i id="git" class="fa-brands fa-github-alt"></i></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    `;
  }
}

customElements.define('header-component', Header);