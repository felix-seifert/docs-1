import 'Frontend/demo/init'; // hidden-source-line

import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '@vaadin/grid';
import { gridRowDetailsRenderer } from '@vaadin/grid/lit.js';
import type { GridActiveItemChangedEvent } from '@vaadin/grid';
import '@vaadin/form-layout';
import '@vaadin/text-field';
import { getPeople } from 'Frontend/demo/domain/DataService';
import type Person from 'Frontend/generated/com/vaadin/demo/domain/Person';
import { applyTheme } from 'Frontend/generated/theme';

// tag::snippet[]
@customElement('grid-item-details')
export class Example extends LitElement {
  protected createRenderRoot() {
    const root = super.createRenderRoot();
    // Apply custom theme (only supported if your app uses one)
    applyTheme(root);
    return root;
  }

  @state()
  private items: Person[] = [];

  @state()
  private detailsOpenedItem: Person[] = [];

  async firstUpdated() {
    const people = (await getPeople()).people.map((person) => ({
      ...person,
      displayName: `${person.firstName} ${person.lastName}`,
    }));
    this.items = people;
  }

  render() {
    return html`
      <vaadin-grid
        theme="row-stripes"
        .items="${this.items}"
        .detailsOpenedItems="${this.detailsOpenedItem}"
        @active-item-changed="${(e: GridActiveItemChangedEvent<Person>) =>
          (this.detailsOpenedItem = [e.detail.value])}"
        ${gridRowDetailsRenderer<Person>(
          (person) => html`
            <vaadin-form-layout .responsiveSteps="${[{ minWidth: '0', columns: 3 }]}">
              <vaadin-text-field
                label="Email address"
                .value="${person.email}"
                colspan="3"
                readonly
              ></vaadin-text-field>
              <vaadin-text-field
                label="Phone number"
                .value="${person.address.phone}"
                colspan="3"
                readonly
              ></vaadin-text-field>
              <vaadin-text-field
                label="Street address"
                .value="${person.address.street}"
                colspan="3"
                readonly
              ></vaadin-text-field>
              <vaadin-text-field
                label="ZIP code"
                .value="${person.address.zip}"
                readonly
              ></vaadin-text-field>
              <vaadin-text-field
                label="City"
                .value="${person.address.city}"
                readonly
              ></vaadin-text-field>
              <vaadin-text-field
                label="State"
                .value="${person.address.state}"
                readonly
              ></vaadin-text-field>
            </vaadin-form-layout>
          `,
          []
        )}
      >
        <vaadin-grid-column path="displayName" header="Name"></vaadin-grid-column>
        <vaadin-grid-column path="profession"></vaadin-grid-column>
      </vaadin-grid>
    `;
  }
}
// end::snippet[]
