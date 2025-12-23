/**
 * @file main.component.ts
 * @fileoverview This defines the main component of the application.
 */

import { BaseComponent } from "./base.component.js";

/**
 * @class MainComponent
 * @description The main component of the application.
 */
export class MainComponent extends BaseComponent {
  constructor() {
    super("main", "main-component");
  }
  /**
   * Renders the main component of the application.
   * @returns {HTMLElement} The main component element.
   */
  public render(): HTMLElement {
    const heading = document.createElement("h1");
    heading.textContent = "User Registration";
    this.container.appendChild(heading);

    return this.container;
  }
}
