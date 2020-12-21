const app = require('express')();
const ListUsers = [
    {
      "name": "Lennart Johansson",
      "role": "Prof"
    },
    {
      "name": "Karl Eriksson",
      "role": "Estudante"
    },
    {
      "name": "Pekka Hartikainen",
      "role": "Prof"
    },
    {
      "name": "Mia Svensson",
      "role": "Estudante"
    }
  ]

app.get('/users', (req, res) => res.send(ListUsers));

app.listen(3001, () => console.log(`Users API listening on port 3001!`));