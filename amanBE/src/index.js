const express = require('express');
const cors = require('cors');
const colors = require('colors');
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db');
const { errorHandler } = require('./middleware/error.middleware');
const { notFound } = require('./middleware/route.middleware');


const app = express();




app.use(cors());
app.use(express.json());

connectDB();

// routes
app.use('/api/auth', require('./auth/auth.route'));
app.use('/api/admin', require('./admin/admin.route'));

//404
app.use(notFound);

//error handler
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`.yellow.bold));