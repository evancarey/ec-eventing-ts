import { LitElement, html, css, property } from 'lit-element';
import { openWcLogo } from './open-wc-logo.js';
import './ec-wc0/ec-wc0-ts.js';
import { Provider } from './utils.js';

export class EcEventingTs extends Provider(LitElement) {
  //export class EcEventingTs extends LitElement {

  @property({type: String}) page = 'main';

  @property({type: String}) title = '';

  @property() blahblah = {
    a: 'a',
    b: 'b'
  };

  constructor() {
    super();
    this.provideInstance('blahblah', this.blahblah);
  }

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
    }

    main {
      flex-grow: 1;
    }

    .logo > svg {
      margin-top: 36px;
      animation: app-logo-spin infinite 20s linear;
    }

    @keyframes app-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
  `;

  render() {
    return html`
      <main>
        <div class="logo">${openWcLogo}</div>
        <h1>My app</h1>
        <ec-wc0-ts></ec-wc0-ts>
      </main>
      <p class="app-footer">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>
    `;
  }
}
