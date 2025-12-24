/**
 * @file user-form-events.ts
 * @fileoverview This defines the user form events class of the application.
 */

import { UserController } from "../controllers/user.controller.js";
import type { Gender } from "../models/user.model.js";
import { DOMServices } from "../services/dom.service.js";
import { Utils } from "../utils/utils.js";
import { EventHandler } from "./events.js";

/**
 * @class UserFormEvents
 * @description The user form events class of the application.
 */
export class UserFormEvents extends EventHandler {
  /**
   * @type UserController
   * @description The user controller to use for adding users.
   */
  private controller: UserController;

  /**
   * Constructor for the UserFormEvents class.
   * @param {HTMLElement | Document} element The element to bind the events to.
   * @param {UserController} controller The user controller to use for adding users.
   * @description Initializes the UserFormEvents class with the given element and user controller.
   */
  constructor(element: HTMLElement | Document, controller: UserController) {
    super(element);
    this.controller = controller;
  }

  /**
   * Binds the submit event to the element to handle form submission.
   * Prevents the default form submission behavior and calls the add user method on the user controller
   * instead.
   */
  protected bindEvents(): void {
    this.element.addEventListener("submit", (e) => {
      try {
        e.preventDefault();

        // Get the input values from the form
        const userFormData = DOMServices.getUserFormData();
        if (!userFormData) throw new Error("User form data not found");

        const nameInput = userFormData.get("name") as string;
        const emailInput = userFormData.get("email") as string;
        const phoneInput = userFormData.get("phone") as string;
        const genderInput = userFormData.get("gender") as string;
        const gender = this.toGender(genderInput);

        const userForm = DOMServices.getUserForm();
        if (!userForm) throw new Error("User form not found");
        const id = userForm.dataset.id && userForm.dataset.id.length > 0 ? userForm.dataset.id : Utils.generateId();

        this.controller.addOrUpdateUser({ id: id, name: nameInput, email: emailInput, phone: phoneInput, gender: gender });
      } catch (error) {
        console.error(`Error in adding user: ${error}`);
      }
    });
  }

  /**
   * Converts a string to a Gender type.
   * @param {string} input The string to convert.
   * @throws {Error} If the input is not a valid gender value.
   * @returns {Gender} The converted gender value.
   * @description This method takes a string and converts it to a valid gender value.
   * It will throw an error if the input is not a valid gender value.
   */
  private toGender(input: string): Gender {
    switch (input.toLowerCase()) {
      case "male":
        return "male";
      case "female":
        return "female";
      case "others":
        return "others";
      default:
        throw new Error(`Invalid gender value: ${input}`);
    }
  }
}
