const express = require('express');
const { Logging, BugHandler } = require('./middlewares');

const app = express();
const port = 3000;

// Middleware for logging using with a custom format
app.use(express.json());
app.use(Logging);

// Sample product data
let products = [
  { id: 1, name: 'iPhone', price: 1099.99 },
  { id: 2, name: 'Samsung Galaxy S21', price: 999.99 },
  { id: 3, name: 'Sony PlayStation 5', price: 499.99 },
  { id: 4, name: 'MacBook Pro 16', price: 2399.99 },
  { id: 5, name: 'DJI Mavic Air 2', price: 799.99 },
  { id: 6, name: 'iPhone', price: 500 },
];

app.get('/products', (req, res, next) => {
  res.send(products);
});

app.get('/products/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  const uniqueProduct = products.find((x) => x.id === id);
  if (uniqueProduct) {
    res.status(200).send(uniqueProduct);
  } else {
    res.status(404).send("Product not found");
  }
});

app.get('/products/p/search', (req, res) => {
  const { q, maxPrice, minPrice } = req.query;
  const searchItems = products.filter((x) => (
    x.name.toLowerCase().includes(q.toLowerCase()) &&
    x.price >= minPrice &&
    x.price <= maxPrice
  ));
  res.send(searchItems);
});

app.post('/products', (req, res) => {
  const { name, price } = req.body;
  const newProduct = { id: products.length + 1, name, price };
  products.push(newProduct);
  res.status(201).send(newProduct);
});

app.put('/products/:id', (req, res) => {
  const IdProduct = parseInt(req.params.id);
  const updatedProductData = req.body;
  const IndexOfProduct = products.findIndex((x) => x.id === IdProduct);
  if (IndexOfProduct === -1) {
    res.status(404).send('Product not found');
  } else {
    products[IndexOfProduct] = { id: IdProduct, ...updatedProductData };
    res.status(201).send(products[IndexOfProduct]);
  }
});

app.delete('/products/:id', (req, res) => {
  const ProductId = parseInt(req.params.id);
  const IndexOfProduct = products.findIndex((x) => x.id === ProductId);
  if (IndexOfProduct === -1) {
    res.status(404).send('Product not found');
  } else {
    const deletedProduct = products.splice(IndexOfProduct, 1);
    res.status(200).send('Product deleted');
  }
});

// Error handling middleware
app.use(BugHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
