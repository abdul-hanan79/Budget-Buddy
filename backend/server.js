const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const userRoutes = require("./src/routes/userRoutes");
const expenseBookRoutes = require("./src/routes/ExpenseBookRoutes");
const entryRoutes = require("./src/routes/entryRoutes");
const categoryRoutes = require("./src/routes/categoryRoutes");
const stripeRoute = require("./src/routes/stripeRoute");
const { verifyUser } = require("./src/utils/verifyUser");
const cors = require("cors");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
// app.use(fileUpload({
//     useTempFiles: true
// }))
app.use("/user", userRoutes);
app.use(stripeRoute);
app.use(verifyUser, expenseBookRoutes);
app.use(verifyUser, entryRoutes);
app.use(verifyUser, categoryRoutes);
app.listen(port, () => {
  console.log(`budget app backend is listening on ${port}`);
});
