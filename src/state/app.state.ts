/**
 * @file app.state.ts
 * @fileoverview This defines the app state class of the application.
 */

import type { User, UsersRecord } from "../models/user.model.js";

/**
 * @class AppState
 * @description The app state class of the application.
 */
export class AppState {
  /**
   * The record of users in the app state, where the key is the unique identifier and the value is the user object.
   */
  private users: UsersRecord = {};

  /**
   * The singleton instance of the AppState class.
   */
  private static instance: AppState;

  /**
   * Private constructor to prevent external instantiation.
   */
  private constructor() {}

  /**
   * Gets the singleton instance of the AppState class.
   * If the instance does not exist, it will be created and returned.
   * If the instance exists, it will be returned.
   * @returns {AppState} The singleton instance of the AppState class.
   */
  public static getInstance(): AppState {
    if (!AppState.instance) {
      AppState.instance = new AppState();
    }
    return AppState.instance;
  }

  /**
   * Sets a user in the app state by its id (unique identifier).
   * If the user already exists, it will be updated.
   * If the user does not exist, it will be added.
   * @param {string} id The id of the user to add or update.
   * @param {User} user The user object to add or update.
   */
  public setUser(id: string, user: User): void {
    this.users[id] = user;
  }

  /**
   * Retrieves a user by its id (unique identifier) from the app state.
   * If the user does not exist, undefined is returned.
   * @param {string} id The id of the user to retrieve.
   * @returns {User | undefined} The retrieved user or undefined if not found.
   */
  public getUser(id: string): User | undefined {
    return this.users[id];
  }

  /**
   * Gets all users in the app state as an array.
   * @returns {User[]} An array of all users in the app state.
   */
  public getAllUsers(): User[] {
    return Object.values(this.users);
  }

  /**
   * Removes a user from the app state by id (unique identifier).
   * @param {string} id The id of the user to remove.
   */
  public removeUser(id: string): void {
    delete this.users[id];
  }
}
