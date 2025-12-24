/**
 * @file user-form.actions.ts
 * @fileoverview This defines the user form actions class of the application.
 */

import { type User } from "../models/user.model.js";
import { Actions } from "./actions.js";

/**
 * @class UserActions
 * @description The user form actions class of the application.
 */
export class UserActions extends Actions {
  /**
   * Constructor for the UserActions class.
   * Calls the constructor of the parent Actions class.
   */
  constructor() {
    super();
  }

  /**
   * Adds or updates a user in the app state by its id.
   * If the user already exists, it will be updated.
   * If the user does not exist, it will be added.
   * @param {string} id The id of the user to add or update.
   * @param {User} user The user object to add or update.
   */
  public addOrUpdateUser(id: string, user: User): void {
    this.state.setUser(id, user);
  }

  /**
   * Sets the selected user id in the app state.
   * @param {string | null} id The id of the selected user. Pass null if no user is selected.
   */
  public setSelectedUserId(id: string | null): void {
    this.state.setSelectedUserId(id);
  }
}
