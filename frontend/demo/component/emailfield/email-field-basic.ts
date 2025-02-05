import 'Frontend/demo/init'; // hidden-source-line

import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@vaadin/email-field';
import '@vaadin/horizontal-layout';
import { applyTheme } from 'Frontend/generated/theme';

@customElement('email-field-basic')
export class Example extends LitElement {
  protected createRenderRoot() {
    const root = super.createRenderRoot();
    // Apply custom theme (only supported if your app uses one)
    applyTheme(root);
    return root;
  }

  render() {
    return html`
      <vaadin-horizontal-layout theme="spacing">
        <!-- tag::snippet[] -->
        <vaadin-email-field
          label="Email address"
          name="email"
          value="julia.scheider@email.com"
          error-message="Enter a valid email address"
          clear-button-visible
        ></vaadin-email-field>

        <vaadin-email-field
          label="Email address"
          name="email"
          value="This is not an email"
          error-message="Enter a valid email address"
          clear-button-visible
          invalid
        ></vaadin-email-field>
        <!-- end::snippet[] -->
      </vaadin-horizontal-layout>
    `;
  }
}
