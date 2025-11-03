const express = require ("express");
const router = express.Router();


// index
router.get("/",(req,res) => {
res.send("GET for posts ")
});

// show
router.get("/:id",(req,res) => {
res.send("GET  for  posts Id")
});

// post
router.get("/",(req,res) => {
res.send("GET for post ")
});

// Delete
router.delete("/:id",(req,res) => {
res.send("delete for posts")
});


module.exports = router;