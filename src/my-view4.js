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
import "@polymer/app-route/app-route.js";

class MyView4 extends PolymerElement {
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
        .cancel-btn:hover {
          background-color: var(--paper-indigo-100) !important;
        }
        paper-button.indigo {
          background-color: var(--paper-indigo-500);
          color: white;
          --paper-button-raised-keyboard-focus: {
            background-color: var(--paper-pink-a200) !important;
            color: white !important;
          }
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
      <app-location route="{{route}}"></app-location>
      <div class="card">
        <paper-input
          type="number"
          always-float-label
          label="Vehicle Number"
          placeholder="Enter Vehicle Number"
        ></paper-input>
        <br />
        <div>Insurance Duration</div>
        <paper-input type="date" always-float-label label="From"></paper-input>
        <paper-input type="date" always-float-label label="To"></paper-input>
        <paper-input
          type="number"
          always-float-label
          label="Insurance Amount"
          placeholder="Insurance Amount"
        ></paper-input>
        <div class="center">
          <paper-button raised class="custom indigo" on-click="handleClick"
            >Ok</paper-button
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

window.customElements.define("my-view4", MyView4);
