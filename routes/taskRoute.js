const express = require('express');
const router = express.Router();

const taskModel = require("../models/taskModel")

router.post("/", async(req, res) => {
    const taskData = req.body
    taskModel.create(taskData);
    res.send({ message: "Task inserted successfully" });
    console.log("Task inserted successfully");
})

router.get("/", async(req, res) => {
    taskModel.find((err, data) => {
        if (data) {
            console.log(data);
            res.send({ message: "Get data", task: data })
        } else {

            console.log("No data found!");
            res.send({ message: "No data", task: [] })
        }
    })
})

module.exports = router