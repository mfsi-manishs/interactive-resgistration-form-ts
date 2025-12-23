/**
 * @type Gender
 * @description Possible genders for a user.
 */
export type Gender = "Male" | "Female" | "Others";

/**
 * @interface User
 * @description A user object with name, email, phone, and gender properties.
 */
export interface User {
  name: string;
  email: string;
  phone: string;
  gender: Gender;
}

/**
 * @type UsersRecord
 * @description A record of users, where the key is the unique identifier and the value is the user object.
 */
export type UsersRecord = Record<string, User>;
