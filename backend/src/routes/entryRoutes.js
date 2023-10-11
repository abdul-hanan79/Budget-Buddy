const express = require('express');
const routes = express.Router();
const { doCreateEntry, doUpdateEntry, doDeleteEntry, doGetEntries } = require('../controller/entryController')
routes.post('/create/entry', doCreateEntry)
routes.get('/get/entries', doGetEntries)
routes.put('/update/entry/:id', doUpdateEntry)
routes.delete('/delete/entry/:id', doDeleteEntry)

module.exports = routes;

