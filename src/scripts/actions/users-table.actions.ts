/**
 * @file users-table.actions.ts
 * @fileoverview This defines the users table actions class of the application.
 */

import { Actions } from "./actions.js";

/**
 * @class UsersTableActions
 * @description The users table actions class of the application.
 */
export class UsersTableActions extends Actions {
  /**
   * Constructor for the UsersTableActions class.
   * Calls the constructor of the parent Actions class.
   */
  constructor() {
    super();
  }

  /**
   * Removes a user from the app state by its id.
   * @param {string} id The id of the user to remove.
   */
  public deleteUser(id: string): void {
    this.state.removeUser(id);
  }
}
