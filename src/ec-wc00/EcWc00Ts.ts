import { LitElement, html, css, property } from 'lit-element';
import { Requester } from '../utils.js';

export class EcWc00Ts extends Requester(LitElement) {
  // export class EcWc00Ts extends LitElement {
  @property({type: String}) name = 'EcWc00Ts';
  @property() blahblah;
  connectedCallback() {
    super.connectedCallback();
    this.blahblah = this.requestInstance('blahblah');
  }
  static styles = css`
    div {
      border: 1px solid blue;
    }
  `;
  render() {
    return html`
      <div>
        <p>name = ${this.name}</p>
        <p>blahblah = ${JSON.stringify(this.blahblah)}</p>
      </div>
    `;
  }
}
