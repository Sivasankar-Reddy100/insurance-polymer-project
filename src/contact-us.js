/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "./shared-styles.js";
import "@polymer/paper-button/paper-button.js";
import "@polymer/paper-input/paper-input.js";
import "@polymer/paper-button/paper-button.js";
import "@polymer/app-route/app-route.js";

class ContactUs extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        paper-button.indigo {
          background-color: var(--paper-indigo-500);
          color: white;
          --paper-button-raised-keyboard-focus: {
            background-color: var(--paper-pink-a200) !important;
            color: white !important;
          }
        }
        .center {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      </style>
      <app-location route="{{route}}"></app-location>
      <div class="card">
        <h3 class="center">Contact Us</h3>
        <paper-input
          id="userName"
          always-float-label
          label="Name"
          value="{{userName}}"
        ></paper-input>
        <paper-input
          id="pws"
          type="email"
          always-float-label
          label="Enter Email"
        ></paper-input>
        <paper-input
          id="pws"
          type="number"
          always-float-label
          label="Enter Mobile No"
        ></paper-input>
        <br />
        <div class="center">
          <paper-button raised class="custom indigo" on-click="handleClick"
            >SUBMIT</paper-button
          >
        </div>
        <template is="dom-if" if="loggedIn">
          <home-component></home-component>
        </template>
      </div>
    `;
  }
}

window.customElements.define("contact-us", ContactUs);
