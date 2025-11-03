
const express = require ("express");
const router = express.Router();


// index-users
router.get("/",(req,res) => {
res.send("GET for users")
});

// show-users
router.get("/:id",(req,res) => {
res.send("GET  for  users Id")
});

// post-users
router.get("/",(req,res) => {
res.send("GET for post users")
});

// Delete-users
router.delete("/:id",(req,res) => {
res.send("delete for users")
});

module.exports = router;