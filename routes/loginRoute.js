const express = require("express");
const router = express.Router();

const userModel = require("../models/userModel")

router.post("/", async(req, res) => {
    const userDetails = req.body
    userModel.findOne({ email: userDetails.email, password: userDetails.password }, (err, docs) => {
        if (docs) {
            res.send({ user: docs, message: "Welcome! User." });
            console.log(docs);
        } else {
            res.send({ message: "Sorry! Invalide email or password" });
            console.log("Sorry! Invalide email or password");
        }
    });
});


module.exports = router