import { html, LitElement, css } from 'lit-element';
import { customElement, } from 'lit/decorators.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('custom-input')
export default class CustomInput extends LitElement {

    static styles = css`
    .editable {
      display: inline-block;
      width: 100px;
      border: 1px solid #ccc;
      padding: 2px 6px;
    }
  `;

    public value: string = '';


    private _onClick = () => {
        console.log('clicked');
    }

    private _onChanged = () => {
        console.log('changed');
    }

    render() {
        return html`
         <span>
          <button @click=${this._onClick}>Auto generated</button>
          <input .value=${this.value || ''} @input=${this._onChanged} />
         </span>
        `;
    }
}

// declare global {
//     interface HTMLElementTagNameMap {
//         'custom-input': CustomInput;
//     }
// }