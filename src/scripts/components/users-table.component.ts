/**
 * @file users-table.component.ts
 * @fileoverview This defines the users table component of the application.
 */

import type { UsersRecord } from "../models/user.model.js";
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
    super("section", "user-table-container");
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
          <th class="w-25 text-left">Name</th>
          <th class="w-25 text-left">Email</th>
          <th class="w-15 text-left">Phone</th>
          <th class="w-15 text-left">Gender</th>
          <th class="w-10 text-center">Edit</th>
          <th class="w-10 text-center">Delete</th>
        </tr>
      </thead>
      <tbody>
        ${
          Object.keys(this.users).length > 0
            ? Object.entries(this.users)
                .map(
                  ([id, user]) => `
              <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
                <td>${user.gender}</td>
                <td class="text-center">
                  <button data-id="${id}" class="edit-btn">Edit</button>
                </td>
                <td class="text-center">
                  <button data-id="${id}" class="delete-btn">Delete</button>
                </td>
              </tr>
            `
                )
                .join("")
            : `
            <tr>
              <td colspan="6" class="text-center">No users found. Please add a new user.</td>
            </tr>
          `
        }
      </tbody>
    `;

    const oldTable = document.getElementById("user-table");
    if (oldTable) {
      oldTable.replaceWith(table);
    } else {
      this.container.appendChild(table);
    }
    return this.container;
  }
}
