const express = require("express");
const router = express.Router();
const dayjs = require("dayjs");

let today = dayjs().format("dddd, MMMM D, YYYY");

router.get("/", (req, res) => {
  res.render("list", { kindOfDay: today });
});

module.exports = router;
