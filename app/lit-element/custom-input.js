import { html, css, LitElement } from './../lib/lit-element';
// import { property } from './../lib/lit/decorators/property.js';
// import { property } from './../lib/lit/decorators.js';

// @customElement('custom-input')
class CustomInput extends LitElement {

    constructor() {
        super()
    }

    static get properties() {
        return {
          value: { type: String },
        };
      }

      // declare the angular props
  static get ngProps() {
    return {
      value: { default: '' }
    }
  }
    // value = 'nguyenbs1';

    static styles = css`
    .editable {
      display: inline-block;
      width: 100px;
      border: 1px solid #ccc;
      padding: 2px 6px;
    }
  `;

    // value = '';


    _onClick = () => {
        console.log('clicked');
    }

    _onChanged = () => {
        console.log('changed');
    }

    render() {
        const { value } = this;
        return html`
         <span>
          <button @click=${this._onClick}>Auto generated</button>
          <input value=${value} @input=${this._onChanged} />
         </span>
        `;
    }
}
customElements.define('custom-input', CustomInput);

// declare global {
//     interface HTMLElementTagNameMap {
//         'custom-input': CustomInput;
//     }
// }