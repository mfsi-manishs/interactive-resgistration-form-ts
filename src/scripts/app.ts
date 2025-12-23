/**
 * @file app.ts
 * @fileoverview This file bootstraps the application.
 */

import { MainComponent } from "./components/main.component.js";

/**
 * @class App
 * @description This class bootstraps the application.
 */
class App {
  private static root: HTMLElement | null;

  private constructor() {
    App.root = null;
  }

  /**
   * Bootstraps the application.
   * @param {string} appElementId The ID of the HTML element to render the application in.
   * @throws {Error} If the root element with the given ID is not found in the DOM.
   */
  public static initApp(appElementId: string): void {
    try {
      console.log("Bootstrapping application...");
      const rootElement = document.getElementById(appElementId);
      if (!rootElement) {
        throw new Error(`Root element ${appElementId} not found in index.html`);
      }
      App.root = rootElement;
      this.renderMainComponent();
    } catch (error) {
      console.error("Error bootstrapping application:", error);
    }
  }

  /**
   * Renders the main component of the application.
   * @throws {Error} If the root element of the application does not exist.
   */
  private static renderMainComponent(): void {
    const mainComponent = new MainComponent();
    if (!App.root) {
      throw new Error("Root element does not exist");
    }
    App.root.appendChild(mainComponent.render());
  }
}

// Bootstrap when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  App.initApp("app");
});
