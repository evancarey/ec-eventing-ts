import { LitElement, html, css, property } from 'lit-element';
import '../ec-wc00/ec-wc00-ts.js';

export class EcWc0Ts extends LitElement {
  @property({type: String}) name = 'EcWc0Ts';
  static styles = css`
    div {
      border: 1px solid green;
    }
  `;
  render() {
    return html`
      <div>
        <p>name = ${this.name}</p>
        <ec-wc00-ts></ec-wc00-ts>
      </div>
    `;
  }
}
