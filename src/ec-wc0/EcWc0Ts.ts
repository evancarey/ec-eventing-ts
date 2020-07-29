import { LitElement, html, css, property } from 'lit-element';
import '../ec-wc00/ec-wc00-ts.js';

export class EcWc0Ts extends LitElement {
  @property({type: String}) name = 'EcWc0Ts';
  render() {
    return html`
      <div>name = ${this.name}</div>
      <ec-wc00-ts>name = ${this.name}</ec-wc00-ts>`
    ;
  }
}
