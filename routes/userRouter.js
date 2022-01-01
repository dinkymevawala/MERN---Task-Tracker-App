const express = require("express");
const router = express.Router();

const userModel = require('../models/userModel');

router.post("/", async(req, res) => {
    const userDetails = req.body
    userModel.findOne({
        email: userDetails.email
    }, (err, user) => {
        if (user) {
            res.send({ message: "Sorry! This user is already exist." });
            console.log("Sorry! This user is already exist.");
        } else {
            userModel.create(userDetails);
            res.send({ message: "User registred successfully." });
            console.log("User registred successfully.");
        }
    })
})



module.exports = router