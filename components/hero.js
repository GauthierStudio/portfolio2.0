class Hero extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
    <section class="hero inner-wrapper">
        <h2>Content<br>Creation</h2>
        <p>Turn your vision into reality.</p>
        <a href="#work">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 881 800"
                style="enable-background:new 0 0 881 800;" xml:space="preserve">
                <style type="text/css">
                    .st0 {
                        fill: #FFFFFF;
                    }

                    .st1 {
                        fill: #f9f9f9;
                    }
                </style>
                <rect x="241.8" y="693" class="st0" width="397.4" height="48" />
                <path class="st0" d="M778,66.2H103c-21.2,0-37.5,16.3-37.5,37.5v400c0,21.2,16.2,37.5,37.5,37.5h675c21.2,0,37.5-16.2,37.5-37.5
        	v-400C815.5,82.5,799.2,66.2,778,66.2L778,66.2z" />
                <path class="st0" d="M346.8,566.2h187.5V680H346.8V566.2z" />
                <path d="M778,41.2H103c-35,0-62.5,27.5-62.5,62.5v400c0,35,27.5,62.5,62.5,62.5h218.8V680h-105v78.8h447.5V680h-105V566.3H778
        	c35,0,62.5-27.5,62.5-62.5v-400C840.5,68.8,813,41.3,778,41.2L778,41.2z M639.2,705v28.7H241.8V705H639.2z M346.8,680V566.2h187.5
        	V680H346.8L346.8,680z M815.5,503.7c0,21.2-16.2,37.5-37.5,37.5H103c-21.2,0-37.5-16.2-37.5-37.5v-400c0-21.2,16.2-37.5,37.5-37.5
        	h675c21.2,0,37.5,16.3,37.5,37.5V503.7z" />
                <path id="mouse" class="st1"
                    d="M522.6,352l-71.8-74.9l32.2-38l-127.4-20.6l20,128l37.5-37.5l76.2,76.2L522.6,352z" />
                <path d="M476,278.1l51.2-51.2l-201.2-35l35,201.3l53.8-53.8l76.2,76.2l61.3-61.2L476,278.1z M377.2,340.6l-20-118.7l118.8,20l-35,35
        	l76.2,76.2L491,379.3l-76.3-76.2L377.2,340.6z" />
            </svg>
        </a>
    </section>
    `;
    }
}

customElements.define('hero-component', Hero);