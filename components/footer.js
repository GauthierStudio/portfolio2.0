class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
    <footer>
        <p>&copy; 2022 Jesse Gauthier Studios | All Rights Reserved</p>
    </footer>
    `;
    }
}

customElements.define('footer-component', Footer);