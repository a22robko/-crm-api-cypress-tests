# 📇 Contact Management API – Express + JSON

This project is a simple contact management backend built with **Node.js**, **Express**, and **JSON** data format.  
It supports full CRUD functionality for managing contacts via RESTful endpoints and demonstrates how the API behaves using real screenshots from **Postman**.

---

## 🚀 Features

- View all contacts
- View single contact by ID
- Create a new contact (POST)
- Update an existing contact (PUT)
- Delete a contact (DELETE)
- Validates input data (must be strings)
- Returns appropriate HTTP status codes

---

## 🧪 API Screenshots & Behavior

### 📤 Create Contact – Valid Input

<img width="504" height="915" alt="POST request" src="https://github.com/user-attachments/assets/6ee8194b-65f0-4b23-9d8f-ae4110637701" />

This request sends a valid JSON body to `/api/contacts`:
```json
{
  "name": "Testperson",
  "email": "test@demo.se",
  "phone": "0700004444"
}
```
📬 The server responds with the newly created contact and assigns it an ID.

---

### 📥 View All Contacts

<img width="707" height="915" alt="GET all contacts" src="https://github.com/user-attachments/assets/61aa8a0e-2b13-4adc-84d7-af66dcc6de5d" />

Calling `GET /api/contacts` returns all saved contacts in an array.  
Each object has an `id`, `name`, `email`, and `phone`.

---

### ❌ Bad Request – Invalid Input

<img width="504" height="915" alt="PUT request" src="https://github.com/user-attachments/assets/d4e2fada-a2e1-4cd3-9328-0c00a8ed6663" />


When one or more fields are missing or of incorrect type, the API returns:
```json
{
  "error": "All fields (name, email, phone) must be provided as strings."
}
```
This enforces data integrity for all new contacts.

---

### ✏️ Update Contact
<img width="507" height="768" alt="Bad Request" src="https://github.com/user-attachments/assets/f27dad99-4014-45dd-a319-e51e96a880d3" />


A `PUT` request updates a contact by ID.  
In this example, the phone number was changed for the contact with ID 1.

---

## 📫 API Endpoints

| Method | Endpoint                 | Description                |
|--------|--------------------------|----------------------------|
| GET    | `/api/contacts`          | Get all contacts           |
| GET    | `/api/contacts/:id`      | Get a single contact by ID |
| POST   | `/api/contacts`          | Add a new contact          |
| PUT    | `/api/contacts/:id`      | Update an existing contact |
| DELETE | `/api/contacts/:id`      | Delete a contact by ID     |

---

## 📦 Contact Object Format

```json
{
  "id": 1,
  "name": "John DOE",
  "email": "john@example.com",
  "phone": "1234567890"
}
```

---

## 🧩 Backend Code (Express)

```js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

let contacts = [];
let idCounter = 1;

app.get('/api/contacts', (req, res) => {
  res.json(contacts);
});

app.get('/api/contacts/:id', (req, res) => {
  const contact = contacts.find(c => c.id === parseInt(req.params.id));
  if (!contact) return res.status(404).send('Contact not found');
  res.json(contact);
});

app.post('/api/contacts', (req, res) => {
  const { name, email, phone } = req.body;
  if (typeof name !== 'string' || typeof email !== 'string' || typeof phone !== 'string') {
    return res.status(400).json({ error: 'All fields (name, email, phone) must be provided as strings.' });
  }
  const contact = { id: idCounter++, name, email, phone };
  contacts.push(contact);
  res.status(201).json(contact);
});

app.put('/api/contacts/:id', (req, res) => {
  const { name, email, phone } = req.body;
  const index = contacts.findIndex(c => c.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send('Contact not found');
  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'Name, email and phone are required.' });
  }
  contacts[index] = { id: parseInt(req.params.id), name, email, phone };
  res.json(contacts[index]);
});

app.delete('/api/contacts/:id', (req, res) => {
  const index = contacts.findIndex(c => c.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send('Contact not found');
  contacts.splice(index, 1);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`CRM API running at http://localhost:${port}/api`);
});
```

---

## ✅ Summary

This project showcases how to build a working backend API using Express and test it using tools like **Postman** or **Cypress**.  
The backend includes proper input validation, structured responses, and support for all basic CRUD operations.

