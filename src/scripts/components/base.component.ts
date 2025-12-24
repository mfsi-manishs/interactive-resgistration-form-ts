/**
 * @file Base Component
 * @fileoverview This defines the base component of the application which must be extended by other components.
 */

/**
 * @class BaseComponent
 * @description The base component of the application which must be extended by other components.
 */
export abstract class BaseComponent {
  protected container: HTMLElement;

  /**
   * Constructor for the BaseComponent class.
   * @param {string} [tag="div"] The HTML tag name for the container element.
   * @param {string} [id] The id of the HTML container element to create.
   * @param {string} [className] The CSS class name for the container element.
   */
  constructor(tag: string = "div", id?: string, className?: string) {
    this.container = document.createElement(tag);

    if (id) {
      this.container.id = id;
    }

    if (className) {
      this.container.className = className;
    }
  }

  /**
   * Render logic for the component.
   * @returns {HTMLElement} The rendered component element.
   */
  public abstract render(): HTMLElement;
}
