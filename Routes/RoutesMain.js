const express = require("express");
const { saveTask, getTask, deleteTask, updateTask } = require("../Controller/ControllerMain");
const router = express.Router();

router.post("/task", saveTask).get("/task", getTask).delete("/task", deleteTask).patch("/task", updateTask);

module.exports = router;
