// import { LitElement, html } from 'litElement';
// import { html, LitElement } from 'lit/decorators';
import { html, LitElement, css } from './../lib/lit-element';


// import * as LitElement from '../../node_modules/lit-element/development';


class MyLitElementComponent extends LitElement {
  render() {
    return html`
      <p>Hello from LitElement!</p>
    `;
  }
}

customElements.define('my-lit-element', MyLitElementComponent);