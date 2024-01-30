import {html, css, LitElement} from 'lit-html';
import formatDistanceToNow from 'distancetonow';

class PingElement extends LitElement {
    static properties = {
        pings
    }

    constructor() {
    // Always call super first in constructor
        super();
        this.pings=[];
    }

    createRenderRoot() {
        return this;
    }
    render() {
        return html`
        <div>
              ${this.pings.map(ping => html`<m-ping message="${ping.message}" author="${ping.author}" date="${ping.date}" likes="${ping.likes}"></m-ping>`)};
        </div>
        `;
    }
}

customElements.define('ping-list', PingListe);