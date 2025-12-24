/**
 * @file users-table.events.ts
 * @fileoverview This defines the users table events class of the application.
 */

import { UserController } from "../controllers/user.controller.js";
import { EventHandler } from "./events.js";

/**
 * @class UsersTableEvents
 * @description The users table events class of the application.
 */
export class UsersTableEvents extends EventHandler {
  /**
   * @type {UserController}
   * @description The user controller to use for delete and edit operations.
   */
  private controller: UserController;

  /**
   * Constructor for the UsersTableEvents class.
   * @param {HTMLElement | Document} element The element to bind the events to.
   * @param {UserController} controller The user controller to use for delete and edit operations.
   */
  constructor(element: HTMLElement | Document, controller: UserController) {
    super(element);
    this.controller = controller;
  }

  /**
   * Binds the click event to the element to handle delete and edit button clicks.
   */
  protected bindEvents(): void {
    this.element.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains("delete-btn")) {
        if (typeof target.dataset.id === "string") {
          this.controller.deleteUser(target.dataset.id);
        }
      }
      if (target.classList.contains("edit-btn")) {
        if (typeof target.dataset.id === "string") {
          this.controller.updateUser(target.dataset.id);
        }
      }
    });
  }
}
