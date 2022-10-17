const express = require("express");
const router = express.Router();

// controll
const { data, post } = require("./controllers");

router.get("/data", data);
router.post("/post", post);

module.exports = router;
