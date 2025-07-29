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
