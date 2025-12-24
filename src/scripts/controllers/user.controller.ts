/**
 * @file user.controller.ts
 * @fileoverview This defines the user controller class of the application.
 */

import { UserActions } from "../actions/user-form.actions.js";
import { UsersTableActions } from "../actions/users-table.actions.js";
import { UsersTableComponent } from "../components/users-table.component.js";
import { MESSAGES, UI_STRINGS } from "../constants.js";
import { UserValidation } from "../logic/user.validation.js";
import type { ValidationResult } from "../logic/validation.js";
import { type User, type UsersRecord } from "../models/user.model.js";
import { DOMServices } from "../services/dom.service.js";
import { AppState } from "../state/app.state.js";

/**
 * @class UserController
 * @description The user controller class of the application.
 */
export class UserController {
  private userValidation: UserValidation;
  private userActions: UserActions;
  private usersTableActions: UsersTableActions;
  private state: AppState;

  constructor() {
    this.userValidation = new UserValidation();
    this.userActions = new UserActions();
    this.usersTableActions = new UsersTableActions();
    this.state = AppState.getInstance();
  }

  public getUser(id: string): User | undefined {
    return this.state.getUser(id);
  }

  public getUsersRecord(): UsersRecord {
    return this.state.getUsersRecord();
  }

  public getUsers(): User[] {
    return this.state.getAllUsers();
  }

  public isEditingUser(): boolean {
    return this.state.getSelectedUserId() !== null;
  }

  public getSelectedUserId(): string | null {
    return this.state.getSelectedUserId();
  }

  /**
   * Adds or updates a user in the app state by its id.
   * If the user already exists, it will be updated.
   * If the user does not exist, it will be added.
   * @param {User} user The user object to add or update.
   */
  public addOrUpdateUser(user: User): void {
    // validate the input user
    const validationRes: ValidationResult = this.userValidation.validate(user);
    if (!validationRes.isValid) {
      DOMServices.showUserFormErrors(validationRes.errors);
      return;
    }

    // mutate state with action
    if (this.isEditingUser()) {
      this.userActions.addOrUpdateUser(user.id, user);
      this.userActions.setSelectedUserId(null);
    } else {
      this.userActions.addOrUpdateUser(user.id, user);
    }

    // side effects
    new UsersTableComponent(this.getUsersRecord()).render();
    DOMServices.resetUserForm();
    if (this.isEditingUser()) {
      DOMServices.setRowSelected(-1); // reset row selection
    }
  }

  /**
   * Sets the selected user id in the app state and updates the user form.
   * The given user id is used to retrieve the user object from the app state.
   * If the user object is found, the user form is reset and refilled with the user data.
   * The submit button text is set to "Update" and the row with the matching index is selected in the users table.
   * @param {string} id The id of the user to update.
   */
  public updateUser(id: string): void {
    // mutate state with action
    this.userActions.setSelectedUserId(id);

    const user = this.getUser(id);
    if (!user) {
      console.error("User not found");
      return;
    }

    const allUsers = this.getUsers();
    if (!allUsers) {
      console.error("All users not found");
      return;
    }

    const index = allUsers.findIndex((u) => u.id === id);
    if (index < 0) {
      console.error("User index not found");
      return;
    }

    // side effects
    DOMServices.resetUserForm();
    DOMServices.fillUserForm(user);
    DOMServices.setUserFormSubmitBtnText(UI_STRINGS.UPDATE_BTN_TEXT);
    DOMServices.setRowSelected(index);
  }

  /**
   * Deletes a user from the app state by its id (unique identifier).
   * If the user is not found, nothing is done.
   * Before deleting the user, a confirmation dialog is shown to the user.
   * If the user confirms the deletion, the user is removed from the app state.
   * After deletion, the users table component is re-rendered with the updated list of users.
   * @param {string} id The id of the user to delete.
   */
  public deleteUser(id: string): void {
    const confirmed = confirm(MESSAGES.CONFIRM_DEL_USER_MSG);
    if (!confirmed) {
      return;
    }

    // mutate state with action
    this.usersTableActions.deleteUser(id);

    // side effects
    new UsersTableComponent(this.getUsersRecord()).render();
  }
}
