class PingElement extends HTMLElement {
    static observedAttributes = ["message", "author","date","likes"];

    constructor() {
    // Always call super first in constructor
    super();

    const pingTemplate = document.querySelector("#ping-temp")
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(pingTemplate.content.cloneNode(true));
    }

    connectedCallback() {
        console.log('Custom element added to page.');
    }

    disconnectedCallback() {
        console.log('Custom element removed from page.');
    }

    adoptedCallback() {
        console.log('Custom element moved to new page.');
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log('Custom element attributes changed.');
        if (name==="message") {
            const pingMessage= this.shadowRoot.querySelector(".ping-message")
            pingMessage.textContent = newValue
        } else if (name === "author") {
            const pingAuthor= this.shadowRoot.querySelector(".ping-author")
            pingAuthor.textContent = newValue
        } else if (name === "date") {
            const pingDate= this.shadowRoot.querySelector(".ping-date")
            pingDate.textContent = newValue
        } else if (name === "likes") {
            const pingLikes= this.shadowRoot.querySelector(".ping-likes")
            pingLikes.textContent = newValue
        }
    }   
}

customElements.define('ping-element', PingElement);