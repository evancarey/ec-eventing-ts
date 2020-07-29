import { html, fixture, expect } from '@open-wc/testing';

import {EcEventingTs} from '../src/EcEventingTs.js';
import '../src/ec-eventing-ts.js';

describe('EcEventingTs', () => {
  let element: EcEventingTs;
  beforeEach(async () => {
    element = await fixture(html`
      <ec-eventing-ts></ec-eventing-ts>
    `);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
