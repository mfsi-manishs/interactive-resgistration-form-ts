/**
 * @file main.component.ts
 * @fileoverview This defines the main component of the application.
 */

import { BaseComponent } from "./base.component.js";
import { UserFormComponent } from "./user-form.component.js";
import { UsersTableComponent } from "./users-table.component.js";

/**
 * @class MainComponent
 * @description The main component of the application.
 */
export class MainComponent extends BaseComponent {
  constructor() {
    super("section", "main-component");
  }
  /**
   * Renders the main component of the application, consisting of the user form, users table, and heading.
   * @returns {HTMLElement} The main component element.
   */
  public render(): HTMLElement {
    const heading = document.createElement("h1");
    heading.textContent = "User Registration";
    this.container.appendChild(heading);

    const userForm = new UserFormComponent().render();
    this.container.appendChild(userForm);

    const usersTable = new UsersTableComponent({}).render();
    this.container.appendChild(usersTable);

    return this.container;
  }
}
