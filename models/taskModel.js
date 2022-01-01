const express = require('express');
const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    title: String,
    desc: String
})

const taskModel = mongoose.model("task", taskSchema);

module.exports = taskModel