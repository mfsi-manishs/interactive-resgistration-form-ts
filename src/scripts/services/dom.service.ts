/**
 * @file dom.service.ts
 * @fileoverview This defines the DOM services class of the application.
 */

import { UI_STRINGS } from "../constants.js";
import type { User } from "../models/user.model.js";

/**
 * @class DOMServices
 * @description The DOM services class of the application.
 */
export class DOMServices {
  private static userForm: HTMLFormElement | null = null;

  /**
   * Returns the HTML form element for the user registration form.
   * @returns {HTMLFormElement} the form element for the user registration form
   */
  public static getUserForm(): HTMLFormElement {
    if (!DOMServices.userForm) {
      DOMServices.userForm = document.getElementById("user-form") as HTMLFormElement;
    }
    return DOMServices.userForm;
  }

  /**
   * Sets the text of the submit button in the user registration form.
   * @param {string} text - the text to set on the submit button
   */
  public static setUserFormSubmitBtnText(text: string): void {
    try {
      const userForm: HTMLFormElement = DOMServices.getUserForm();
      if (!userForm) throw new Error("User form not found");

      const btn: HTMLButtonElement | null = userForm.querySelector("button");
      if (!btn) throw new Error("Submit button not found");

      btn.textContent = text;
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Sets the given row index as selected in the users table.
   * The row index is used to toggle the "row-selected" class on the corresponding table row element.
   * If the given index is negative, the function will remove the "row-selected" class from all table rows.
   * @param {number} index - the index of the row to select
   */
  public static setRowSelected(index: number): void {
    try {
      const userTable: HTMLTableElement | null = document.getElementById("user-table") as HTMLTableElement;
      if (!userTable) throw new Error("User table not found");

      const rows = userTable.querySelectorAll("tbody > tr");
      rows.forEach((row, i) => {
        if (i === index) {
          row.classList.add("row-selected");
        } else {
          row.classList.remove("row-selected");
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Retrieves the FormData object from the user registration form.
   * The FormData object contains the values of all input fields in the form.
   * If the user form is not found, or if the FormData object cannot be created,
   * the function returns null.
   * @returns {FormData | null} The FormData object or null if not found or created.
   */
  public static getUserFormData(): FormData | null {
    try {
      const userForm = DOMServices.getUserForm();
      if (!userForm) throw new Error("User form not found");

      const userFormData = new FormData(userForm);
      if (!userFormData) throw new Error("User form data not found");

      return userFormData;
    } catch (error) {
      console.error(error);
    }
    return null;
  }

  /**
   * Resets the user registration form to its initial state.
   * This includes resetting the form values, removing any
   * associated ID, and setting the submit button text back to "Submit"
   */
  public static resetUserForm() {
    try {
      const userForm = DOMServices.getUserForm();
      userForm.reset();
      userForm.dataset.id = "";
      DOMServices.setUserFormSubmitBtnText(UI_STRINGS.SUBMIT_BTN_TEXT);
      DOMServices.resetUserFormErrors();
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Fills the user registration form with the given user data.
   * @param {Object} user - the user object to fill the form with
   * @property {string} user.name - the user's name
   * @property {string} user.email - the user's email
   * @property {string} user.id - the user's id (used to store the ID in the form's dataset)
   */
  public static fillUserForm(user: User): void {
    try {
      const userForm = DOMServices.getUserForm();
      if (!userForm) throw new Error("User form not found");

      const nameInput = userForm.querySelector<HTMLInputElement>('input[name="name"]');
      if (nameInput) {
        nameInput.value = user.name;
      }

      const emailInput = userForm.querySelector<HTMLInputElement>('input[name="email"]');
      if (emailInput) {
        emailInput.value = user.email;
      }

      const phoneInput = userForm.querySelector<HTMLInputElement>('input[name="phone"]');
      if (phoneInput) {
        phoneInput.value = user.phone;
      }

      const genderInput = userForm.querySelector<HTMLInputElement>(`input[name="gender"][value="${user.gender}"]`);

      if (genderInput) {
        genderInput.checked = true;
      }

      userForm.dataset.id = user.id;
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Resets the error messages and input fields in the user registration form to their initial state.
   * This includes resetting the error message text, hiding the error message elements, and removing the "input-error" class from all input fields.
   */
  public static resetUserFormErrors() {
    try {
      const userForm = DOMServices.getUserForm();
      userForm.querySelectorAll<HTMLElement>(".error-msg").forEach((errEl) => {
        errEl.textContent = "";
        errEl.style.display = "none";
      });

      userForm.querySelectorAll<HTMLElement>(".input-error").forEach((inputEl) => {
        inputEl.classList.remove("input-error");
      });
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Shows error messages for the user registration form.
   * Resets the error messages and input fields to their initial state.
   * Then, sets the error messages and input field classes to indicate the invalid fields.
   * @param {Record<string, string>} errors - an object with property names as field names and property values as error messages
   */
  public static showUserFormErrors(errors: Record<string, string>) {
    try {
      const userForm = DOMServices.getUserForm();

      // reset error messages
      DOMServices.resetUserFormErrors();

      // set error messages
      Object.entries(errors).forEach(([field, errMsg]) => {
        const inputEl = userForm.querySelector(`[name="${field}"]`);
        if (!inputEl) {
          console.error(`Input element not found for field: ${field}`);
          return;
        }

        // find the next sibling element with class "error-msg" to display error message
        const errEl = inputEl.nextElementSibling as HTMLElement;
        if (errEl && errEl.classList.contains("error-msg")) {
          errEl.textContent = errMsg;
          errEl.style.display = "block";
          inputEl.classList.add("input-error");
        } else {
          console.error(`Error element not found for field: ${field}`);
          return;
        }
      });
    } catch (error) {
      console.error(error);
    }
  }
}
