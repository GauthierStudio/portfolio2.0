class Help extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
     <section class="contact-button" onclick="popupContact()" id="contact-popup-button" title="Contact">
        <svg width="100" height="100">
            <g fill-rule="evenodd">
            <circle cx="16" cy="16" r="16"/>
            <path fill="#FFF" d="M16.28 23.325a11.45 11.45 0 0 0 2.084-.34 5.696 5.696 0 0 0 2.602.17.627.627 0 0 1 .104-.008c.31 0 .717.18 1.31.56v-.625a.61.61 0 0 1 .311-.531c.258-.146.498-.314.717-.499.864-.732 1.352-1.708 1.352-2.742 0-.347-.055-.684-.159-1.006.261-.487.472-.999.627-1.53A4.59 4.59 0 0 1 26 19.31c0 1.405-.654 2.715-1.785 3.673a5.843 5.843 0 0 1-.595.442v1.461c0 .503-.58.792-.989.493a15.032 15.032 0 0 0-1.2-.81 2.986 2.986 0 0 0-.368-.187c-.34.051-.688.077-1.039.077-1.412 0-2.716-.423-3.743-1.134zm-7.466-2.922C7.03 18.89 6 16.829 6 14.62c0-4.513 4.258-8.12 9.457-8.12 5.2 0 9.458 3.607 9.458 8.12 0 4.514-4.259 8.121-9.458 8.121-.584 0-1.162-.045-1.728-.135-.245.058-1.224.64-2.635 1.67-.511.374-1.236.013-1.236-.616v-2.492a9.27 9.27 0 0 1-1.044-.765zm4.949.666c.043 0 .087.003.13.01.51.086 1.034.13 1.564.13 4.392 0 7.907-2.978 7.907-6.589 0-3.61-3.515-6.588-7.907-6.588-4.39 0-7.907 2.978-7.907 6.588 0 1.746.821 3.39 2.273 4.62.365.308.766.588 1.196.832.241.136.39.39.39.664v1.437c1.116-.749 1.85-1.104 2.354-1.104zm-2.337-4.916c-.685 0-1.24-.55-1.24-1.226 0-.677.555-1.226 1.24-1.226.685 0 1.24.549 1.24 1.226 0 .677-.555 1.226-1.24 1.226zm4.031 0c-.685 0-1.24-.55-1.24-1.226 0-.677.555-1.226 1.24-1.226.685 0 1.24.549 1.24 1.226 0 .677-.555 1.226-1.24 1.226zm4.031 0c-.685 0-1.24-.55-1.24-1.226 0-.677.555-1.226 1.24-1.226.685 0 1.24.549 1.24 1.226 0 .677-.555 1.226-1.24 1.226z" /></g></svg>
            <i class="fa-solid fa-comment-dots"></i>
            </section>
    <section class="contact-popup" onclick="popupContact()" id="form">
        <div>
            <i title="Close Menu" onclick="popupContact()" id="close-button" class="fa-regular fa-circle-xmark"></i>
            <h2>Need Help?</h2>
            <a href="mailto:jesse@gauthierstudios.ca" target="_blank"><span title="Send An Email"><span>Send An Email</a>
            <a href="https://gauthierstudios.hbportal.co/schedule/63cb52d125d48a1cc47c9484" target="_blank"><span title="Book A Chat"><span>Book A Call</a>
        </div>
    </section>
    </section>
    `;
    }
}

customElements.define('help-component', Help);