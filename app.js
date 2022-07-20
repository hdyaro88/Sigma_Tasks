const express = require("express");
const app = express();
const taskRouter = require("./Routes/RoutesMain");
module.exports = app;
app.use(express.json());
app.use("/", taskRouter);

module.exports = app;
