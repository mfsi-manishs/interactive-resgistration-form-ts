/**
 * @file EventHandler.ts
 * @fileoverview This defines the event handler class of the application.
 */

/**
 * @class EventHandler
 * @description The event handler class of the application.
 */
export abstract class EventHandler {
  protected element: HTMLElement | Document;

  /**
   * Constructor for the EventHandler class.
   * @param {HTMLElement | Document} element The element to bind the events to.
   * @description Initializes the EventHandler class with the given element and binds the events to it.
   */
  constructor(element: HTMLElement | Document) {
    this.element = element;
    this.bindEvents();
  }

  protected abstract bindEvents(): void;
}
