/**
 * @file user-form.component.ts
 * @fileoverview This defines the user form component of the application.
 */

import { BaseComponent } from "./base.component.js";

/**
 * @class UserFormComponent
 * @description The user form component of the application.
 */
export class UserFormComponent extends BaseComponent {
  constructor() {
    super("section", "user-form-container");
  }

  /**
   * Renders the user form component.
   * @returns {HTMLElement} The rendered component element.
   */
  public render(): HTMLElement {
    const form = document.createElement("form");
    form.id = "user-form";
    form.innerHTML = `
      <input name="name" placeholder="Full Name" required class="w-100 border-box mb-m" />
      <span class="error-msg mb-m"></span>
      <input name="email" placeholder="Email" required class="w-100 border-box mb-m" />
      <span class="error-msg mb-m"></span>
      <input name="phone" placeholder="Phone Number" required class="w-100 border-box mb-m" />
      <span class="error-msg mb-m"></span>
      <div class="w-100 border-box border-thin mb-m">
        <span>Gender:</span>
        <label>
          <input type="radio" name="gender" value="male" checked />
          Male
        </label>
        <label>
          <input type="radio" name="gender" value="female" />
          Female
        </label>
        <label>
          <input type="radio" name="gender" value="others" />
          Others
        </label>
      </div>
      <button type="submit">Submit</button>
    `;

    const oldForm = this.container.querySelector("#user-form");
    if (oldForm) {
      this.container.replaceChild(form, oldForm);
    } else {
      this.container.appendChild(form);
    }

    return this.container;
  }
}
