# 🔍 Cypress API Testing – Contact CRUD (No Frontend)

This project demonstrates how to use **Cypress** to test a RESTful API for managing contacts using backend-only requests.  
No frontend is used — tests directly interact with the Express server via HTTP calls.

---

## ✅ Test Coverage Overview

The following **6 test cases** are covered in the Cypress file `crm_spec.cy.js`:

- ✅ should create a new contact  
- ✅ should get all contacts  
- ✅ should get contact by ID  
- ✅ should update contact by ID  
- ✅ should delete contact by ID  
- ✅ should return 404 for deleted contact

All tests passed successfully in `315ms`.

---

## 🧪 Screenshot – Test Execution in Cypress

<p align="center">
  <img width="700" alt="CRM API Cypress Test Results" src="https://github.com/user-attachments/assets/2e83e981-cb3e-4f14-9ecb-a42ad5146c67" />
</p>

The tests are written using the **Cypress API commands** like `cy.request()` to send HTTP calls directly to the backend.

---

## 🚫 No Frontend Required

This project tests the backend logic directly.  
Perfect for validating APIs without needing to build or rely on a UI.

---

## ▶️ Run the Tests

Start the Express server:
```bash
node server.js
```

Run Cypress:
```bash
npx cypress open
```

Or run headless:
```bash
npx cypress run
```

---

## 📄 Example Contact Object

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890"
}
```

---

## 🧪 Summary

This Cypress test suite ensures all core API functionality works as expected:
- Reliable CRUD endpoints
- Proper HTTP status handling
- Clean test logic without frontend dependency
