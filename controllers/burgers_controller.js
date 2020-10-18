const express = require("express");
const router = express.Router();
// Import model
const burger = require("../models/burger.js");

// -- Setup routes --

router.get("/", function(req,res){
    burger.selectAll(function (data){
        const htmlObj = {
            burgers: data
        };
        res.render("index", htmlObj);
    });
});

router.post("/api/burgers", function(req,res){
    burger.insertOne("burger_name", "devoured", req.body.burger_name, req.body.devoured, function(result){
        res.json({ id: result.insertId});
    });
});

router.put("/api/burgers/:id", function(req, res) {
    burger.updateOne("devoured", req.body.devoured, "id", req.params.id, function(result){
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;