# CRM API with Cypress Tests

This project contains a simple CRM REST API built with Express.js and a test suite written in Cypress.

## 📦 Features

- Create, Read, Update, Delete contacts
- Fully tested API using Cypress

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Server

```bash
npm start
```

Server will run at: `http://localhost:3000/api`

### 3. Run Cypress Tests

```bash
npx cypress open
```

Or to run headlessly:

```bash
npx cypress run
```

### ✅ Endpoints

- `GET /api/contacts`
- `GET /api/contacts/:id`
- `POST /api/contacts`
- `PUT /api/contacts/:id`
- `DELETE /api/contacts/:id`

## 👤 Contact Object Format

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890"
}
```
### Cypress Test Results
