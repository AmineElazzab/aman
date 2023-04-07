const express = require('express');
const cors = require('cors');
const colors = require('colors');
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db');
const { errorHandler } = require('./middleware/error.middleware');
const { notFound } = require('./middleware/route.middleware');
const router = require('./router');


const app = express();








app.use(cors());
app.use(express.json());

connectDB();

// routes
app.use('/api/auth', require('./auth/auth.route'));
app.use('/api/admin', require('./admin/admin.route'));
app.use('/api/category', require('./category/category.route'));
app.use('/api/product', require('./product/product.route'));
app.use('/api/order', require('./order/order.route'));
app.use('/api/address', require('./adresse/address.route'));
app.use('/api/cart', require('./cart/cart.route'));

app.use("/src/uploads", router)

//404
app.use(notFound);

//error handler
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`.yellow.bold));