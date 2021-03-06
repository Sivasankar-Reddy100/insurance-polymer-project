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
import "@polymer/paper-input/paper-input.js";
import "@polymer/paper-button/paper-button.js";
import "@polymer/app-route/app-route.js";

class MyView1 extends PolymerElement {
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
        paper-button {
          margin: auto;
        }
        h3 {
          text-align: center;
        }
        .center {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      </style>
      <app-location route="{{route}}"></app-location>
      <div class="card">
        <h3>Login Form</h3>
        <paper-input
          id="userName"
          always-float-label
          label="User Name"
          value="{{userName}}"
        ></paper-input>
        <paper-input
          id="pws"
          type="password"
          always-float-label
          label="User Password"
        ></paper-input>
        <br />
        <div class="center">
          <paper-button raised class="custom indigo" on-click="handleClick"
            >LOGIN</paper-button
          >
        </div>
        <template is="dom-if" if="loggedIn">
          <home-component></home-component>
        </template>
      </div>
      <br />
      <div>{{userName}}</div>
    `;
  }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: "_pageChanged",
      },
      routeData: Object,
      subroute: Object,
    };
  }
  handleClick() {
    this.set("route.path", "/view2");
    localStorage.setItem("name", formValues.username);
  }
}

window.customElements.define("my-view1", MyView1);
