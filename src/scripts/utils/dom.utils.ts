/**
 * @file dom.utils.ts
 * @fileoverview This defines the DOM utils class of the application.
 */

/**
 * @class DOMUtils
 * @description Utility class for DOM operations
 */
export class DOMUtils {
  /**
   * Returns an object containing the values of all input fields in a given form.
   * The object has input field names as keys and their corresponding values as values.
   * The values are trimmed to remove any whitespace.
   * @template T The type of the returned object
   * @param {HTMLFormElement} form - the form element to get input values from
   * @returns {T} an object with input field names as keys and their corresponding values as values
   */
  public static getFormData<T>(form: HTMLFormElement): T {
    const formData = new FormData(form);
    const obj = Object.assign({}, ...Array.from(formData.entries()).map(([key, value]) => ({ [key]: value.toString().trim() })));
    return obj as T;
  }
}
