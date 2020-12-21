const { request } = require('express');
const express = require('express');
const httpProxy = require('express-http-proxy');
const app = express();
const port = 3000;
const {
  USERS_API_URL,
  PRODUCTS_API_URL,
  COURSES_API_URL,
} = require('./URLs');

const userServiceProxy = httpProxy(USERS_API_URL);
const productsServiceProxy = httpProxy(PRODUCTS_API_URL);
const coursesServiceProxy = httpProxy(COURSES_API_URL);
var cors = require('cors')
app.use(cors())


app.get('/', (req, res) => res.sendFile('./paginainicial.html', {root: __dirname }));

app.get('/users', (req, res, next) => userServiceProxy(req, res, next));
app.get('/products', (req, res, next) => productsServiceProxy(req, res, next));
app.get('/courses', (req, res, next) => coursesServiceProxy(req, res, next));

app.listen(port, () => console.log(`APIGateway app listening on port ${port}!`));


