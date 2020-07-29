import { LitElement, html, property } from 'lit-element';
//import { Requester } from '../utils.js';

// export class EcWc00Ts extends Requester(LitElement) {
export class EcWc00Ts extends LitElement {
  @property({type: String}) name = 'EcWc00Ts';
  //  @property() blahblah;
  constructor() {
    super();
    // this.blahblah = this.requesterInstance('blahblah');
  }
  render() {
    return html`<div>name = ${this.name}</div>`;
  }
}
