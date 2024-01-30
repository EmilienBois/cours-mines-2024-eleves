import {html, css, LitElement} from 'lit-html';
import formatDistanceToNow from 'distancetonow';

class PingElement extends LitElement {
    static properties = {
        message: {type: String},
        author : {type: String},
        date: {type: Date},
        likes: {type: Number},
    }

    constructor() {
    // Always call super first in constructor
        super();
        this.likes = 0
        this.author = "";
        this.date = new Date();
        this.message = "";
    }

    createRenderRoot() {
        return this;
    }
    render() {
        return html`
        <div class="card mb-3" >
              <div class="card-body">
                
                <h4 class="card-title">${this.author} - ${formatDistanceToNow(this.date)}</h4>
                <p id="contenu" class="card-text">${this.message}</p>
                <p id="nb-like">${this.likes} likes</p>
                <a href="#" class="btn btn-secondary">Liker</a>
                <a href="#" class="btn btn-tertiary">Répondre</a>
              </div>
            </div>
        `;
    }
}

customElements.define('ping-element', PingElement);