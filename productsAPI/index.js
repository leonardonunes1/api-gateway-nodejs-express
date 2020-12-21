const app = require('express')();
const ListProducts = [
    {
      "name": "Arroz",
      "preco": 5.00
    },
    {
      "name": "Feijão",
      "preco": 6.00
    },
    {
        "name": "Arroz",
        "preco": 5.00
      },
      {
        "name": "Feijão",
        "preco": 6.00
      },
  ]

app.get('/products', (req, res) => res.send(ListProducts));


app.listen(3002, () => console.log(`Products API listening on port 3002!`));