const express = require('express');
const router = express.Router();
const books=require('../controllers/bookController')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook",books.createBook  )

router.get("/getBook", books.getBook)

module.exports = router;