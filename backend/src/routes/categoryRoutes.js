const express = require('express');
const routes = express.Router();
const { doCreateCategory, doUpdateCategory, doDeleteCategory,doGetCategories } = require('../controller/categoryController')
routes.post('/create/category', doCreateCategory)
routes.get('/get/categories', doGetCategories)
routes.put('/update/category/:id', doUpdateCategory)
routes.delete('/delete/category/:id', doDeleteCategory)

module.exports = routes;

