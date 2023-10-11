const express = require("express")
const app = express()
const port = 8080
const bodyParser = require('body-parser')
const userRoutes = require('./src/routes/userRoutes')
const expenseBookRoutes = require('./src/routes/ExpenseBookRoutes')
const { verifyUser } = require("./src/utils/verifyUser")
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use('/user', userRoutes)
app.use(verifyUser, expenseBookRoutes)

app.listen(port, () => {
    console.log(`budget app backend is listening on ${port}`);
})