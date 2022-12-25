const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Node/Express is on. Let us rock the floor');
});

const users = [
  { id: 1, name: 'Hasan', profession: 'business' },
  { id: 2, name: 'EHasan', profession: 'business' },
  { id: 3, name: 'AHasan', profession: 'business' },
  { id: 4, name: 'BHasan', profession: 'business' },
  { id: 5, name: 'JHasan', profession: 'business' },
];

app.get('/users', (req, res) => {
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(matched);
  } else {
    res.send(users);
  }
});

app.get('/user/:id', (req, res) => {
  console.log(req.params);
  const id = req.params.id;
  const user = users.find((u) => u.id == id);
  res.send(user);
});

app.post('/user', (req, res) => {
  console.log(req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.listen(port, () => {
  console.log('Node is on the port', port);
});
