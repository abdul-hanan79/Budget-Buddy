const express = require('express');
const routes = express.Router();
const { doCreateBook, doUpdateBook, doDeleteBook, doGetBooks } = require('../controller/ExpenseBookController')
const { verifyUser } = require('../utils/verifyUser');
routes.post('/create/book', doCreateBook)
routes.get('/get/books', doGetBooks)
routes.put('/update/book/:id', doUpdateBook)
routes.delete('/delete/book/:id', doDeleteBook)


module.exports = routes;

