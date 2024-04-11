import { html, css, LitElement } from '../lib/lit-element';

class CustomFormInput extends LitElement {

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

  updated(changedProperties) {
    // Check if the property has changed
    if (changedProperties.has('value')) {
      this.dispatchEvent(new CustomEvent('custom-input-changed', {
        detail: { newValue: this.value }
      }));
    }
  }

  static styles = css`
    .editable {
      display: inline-block;
      width: 100px;
      border: 1px solid #ccc;
      padding: 2px 6px;
    }
  `;

  _onClick = () => {
    console.log('clicked');
  }

  _onChanged = ($event) => {
    console.log($event.target.value, 'changed');
    this.value = $event.target.value;
  }

  render() {
    const { value } = this;
    return html`
          <input value=${value} @input=${this._onChanged}/>
        `;
  }
}
customElements.define('custom-form-input', CustomFormInput);
