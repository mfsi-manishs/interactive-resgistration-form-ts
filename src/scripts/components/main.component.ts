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
    super("section", "main-container");
  }
  /**
   * Renders the main component of the application, consisting of the user form, users table, and heading.
   * @returns {HTMLElement} The main component element.
   */
  public render(): HTMLElement {
    const headingDiv = document.createElement("div");
    headingDiv.className = "h-10";
    this.container.appendChild(headingDiv);

    const heading = document.createElement("h1");
    heading.textContent = "User Registration";
    headingDiv.appendChild(heading);

    const appContentDiv = document.createElement("div");
    appContentDiv.id = "app-content";
    appContentDiv.className = "flex-box-row gap-m h-90";
    this.container.appendChild(appContentDiv);

    const userForm = new UserFormComponent().render();
    appContentDiv.appendChild(userForm);

    const usersTable = new UsersTableComponent({}).render();
    appContentDiv.appendChild(usersTable);

    return this.container;
  }
}
