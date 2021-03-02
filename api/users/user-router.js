const express = require("express");
const User = require("./user-model");
const router = express.Router();
const restricted = require('../middleware/restricted');

//get all users
router.get("/", restricted, async (req, res, next) => {
  try {
    const rows = await User.find();
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
