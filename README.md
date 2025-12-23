# interactive-resgistration-form-ts
A single-page web application using **HTML, CSS, and Vanilla JavaScript** that allows users to **register details using a form** and **manage those records dynamically** in a table without page reloads and no libraries.

---

### **Problem Statement**

Design and implement a **User Registration System** with the following behavior:

- A **registration form** appears on the **left side** of the page.
- A **data table** appears on the **right side** of the page.
- When a user submits the form, the entered data should be **displayed immediately in the table**.
- Each table row must support **Edit** and **Delete** actions.
- Editing a record should populate the form with existing data and allow updating it.
- Deleting a record should remove it permanently from the table.

This requires understanding of **DOM manipulation, event handling, state management, and basic UI layout using CSS**.

---

### **Form Fields (Minimum Requirements)**

The registration form should contain at least:

- Full Name
- Email Address
- Phone Number
- Gender (Radio buttons or Dropdown)
- Submit button

---

### **Functional Requirements**

### **1. Add Record**

- On clicking **Submit**:
    - Validate that all fields are filled.
    - Add a new row to the table on the right.
    - Clear the form after successful submission.

### **2. Edit Record**

- Each table row must have an **Edit** button.
- On clicking **Edit**:
    - The selected row’s data should populate back into the form.
    - The **Submit** button text should change to **Update**.
- On clicking **Update**:
    - The table row data should be updated with new values.
    - The button text should revert back to **Submit**.

### **3. Delete Record**

- Each table row must have a **Delete** button.
- On clicking **Delete**:
    - The selected row should be removed from the table.
    - No page refresh should occur.

---

### **Layout Example (Textual)**

```
-------------------------------------------------
| Registration Form |   Registered Users Table  |
|-------------------|---------------------------|
| Name              | Name | Email | Edit | Del |
| Email             |---------------------------|
| Phone             | John | j@x.com | Edit | X |
| Gender            | Anna | a@y.com | Edit | X |
| [ Submit ]        |                           |
-------------------------------------------------
```

### **Technical Constraints**

- Use **only HTML, CSS, and JavaScript** (No frameworks or libraries).
- Page should **not reload** for any action.
- Use **DOM manipulation** for all updates.
- CSS should be used to create a **two-column layout**.

---

### **Optional**

- Input validation messages
- Confirmation before delete
- Highlight row being edited
- Responsive layout
