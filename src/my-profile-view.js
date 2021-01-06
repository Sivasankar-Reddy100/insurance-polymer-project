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
import "@polymer/paper-input/paper-input.js";
import "@polymer/paper-button/paper-button.js";
import "@polymer/app-route/app-route.js";
import "./shared-styles.js";

class MyProfileView extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        paper-button.custom {
          --paper-button-ink-color: var(--paper-pink-a200);
          /* These could also be individually defined for each of the
              specific css classes, but we'll just do it once as an example */
          --paper-button-flat-keyboard-focus: {
            background-color: var(--paper-pink-a200) !important;
            color: white !important;
          }
          --paper-button-raised-keyboard-focus: {
            background-color: var(--paper-pink-a200) !important;
            color: white !important;
          }
        }
        paper-button.custom:hover {
          background-color: var(--paper-indigo-100);
        }
        paper-button.indigo {
          background-color: var(--paper-indigo-500);
          color: white;
          --paper-button-raised-keyboard-focus: {
            background-color: var(--paper-pink-a200) !important;
            color: white !important;
          }
        }
        paper-button.disabled {
          color: white;
          background-color: bisque;
        }
        .cancel-btn {
          color: white;
          background-color: red;
        }
        .center {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      </style>
      <div class="card">
        <paper-input
          type="number"
          always-float-label
          label="Ticket Id"
          placeholder="Enter Ticket Id"
        ></paper-input>
        <paper-input type="date" always-float-label label="DOJ"></paper-input>
        <paper-input
          type="number"
          always-float-label
          label="Claim Amount"
          placeholder="Claim Amount"
        ></paper-input>
        <paper-input
          type="number"
          always-float-label
          label="Bank Account Number"
          placeholder="Account Number"
        ></paper-input>
        <div class="center">
          <paper-button raised class="custom indigo" on-click="handleClick"
            >Confirm</paper-button
          >
          |
          <paper-button raised class="custom cancel-btn" on-click="handleClick"
            >Cancel</paper-button
          >
        </div>
      </div>
    `;
  }
}

window.customElements.define("my-profile-view", MyProfileView);
