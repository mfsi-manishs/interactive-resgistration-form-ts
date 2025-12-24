/**
 * @file action.ts
 * @fileoverview This defines the action class of the application.
 */

import { AppState } from "../state/app.state.js";

/**
 * @class Actions
 * @description The action class of the application.
 */
export abstract class Actions {
  /**
   * The app state of the application.
   */
  protected state: AppState;

  /**
   * Constructor for the Actions class.
   * Initializes the app state of the application by calling the getInstance method of the AppState class.
   */
  constructor() {
    this.state = AppState.getInstance();
  }
}
