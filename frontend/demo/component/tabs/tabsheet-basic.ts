import 'Frontend/demo/init'; // hidden-source-line

import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@vaadin/tabs';
import '@vaadin/tabsheet';
import { applyTheme } from 'Frontend/generated/theme';

@customElement('tabsheet-basic')
export class Example extends LitElement {
  protected createRenderRoot() {
    const root = super.createRenderRoot();
    // Apply custom theme (only supported if your app uses one)
    applyTheme(root);
    return root;
  }

  render() {
    return html`
      <!-- tag::snippet[] -->
      <vaadin-tabsheet>
        <vaadin-tabs slot="tabs">
          <vaadin-tab id="dashboard-tab">Dashboard</vaadin-tab>
          <vaadin-tab id="payment-tab">Payment</vaadin-tab>
          <vaadin-tab id="shipping-tab">Shipping</vaadin-tab>
        </vaadin-tabs>

        <div tab="dashboard-tab">This is the Dashboard tab content</div>
        <div tab="payment-tab">This is the Payment tab content</div>
        <div tab="shipping-tab">This is the Shipping tab content</div>
      </vaadin-tabsheet>
      <!-- end::snippet[] -->
    `;
  }
}
