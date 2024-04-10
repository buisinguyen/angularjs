import { html, render } from 'lit-html';

const container = document.querySelector('#container');

const counterUi = (count) =>
  html` <span class="${count % 2 == 1 ? 'odd' : ''}"> ${count} </span>
    <button @click=${() => render(counterUi(count + 1), container)}>
      Increment
    </button>`;

render(counterUi(0), container);