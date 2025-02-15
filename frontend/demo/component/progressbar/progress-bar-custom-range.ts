import 'Frontend/demo/init'; // hidden-source-line

import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@vaadin/progress-bar';
import { applyTheme } from 'Frontend/generated/theme';

@customElement('progress-bar-custom-range')
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
      <div style="color: var(--lumo-secondary-text-color);">
        <div>Processing files (50/100)</div>
        <vaadin-progress-bar min="0" max="100" value="50"></vaadin-progress-bar>
      </div>
      <!-- end::snippet[] -->
    `;
  }
}
