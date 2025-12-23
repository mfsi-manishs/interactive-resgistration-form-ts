/**
 * @file users-table.component.ts
 * @fileoverview This defines the users table component of the application.
 */

import type { UsersRecord } from "../../models/user.model.js";
import { BaseComponent } from "./base.component.js";

/**
 * @class UsersTableComponent
 * @description The users table component of the application.
 */
export class UsersTableComponent extends BaseComponent {
  private users: UsersRecord;

  /**
   * Constructor for the UsersTableComponent class.
   * @param {UsersRecord} users The UsersRecord object to initialize the component with.
   */
  constructor(users: UsersRecord) {
    super("section", "users-table-component");
    this.users = users;
  }

  /**
   * Renders the users table component of the application.
   * @returns {HTMLElement} The rendered users table component element.
   */
  public render(): HTMLElement {
    const table = document.createElement("table");
    table.id = "user-table";
    table.className = "table-fixed w-100";
    table.innerHTML = `
      <thead>
        <tr>
          <th class="w-40 text-left">Name</th>
          <th class="w-40 text-left">Email</th>
          <th class="w-10 text-center">Edit</th>
          <th class="w-10 text-center">Delete</th>
        </tr>
      </thead>
      <tbody>
        ${Object.entries(this.users)
          .map(
            ([id, user]) => `
              <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td class="text-center">
                  <button data-id="${id}" class="edit-btn">Edit</button>
                </td>
                <td class="text-center">
                  <button data-id="${id}" class="delete-btn">Delete</button>
                </td>
              </tr>
            `
          )
          .join("")}
      </tbody>
    `;
    this.container.appendChild(table);
    return this.container;
  }
}
