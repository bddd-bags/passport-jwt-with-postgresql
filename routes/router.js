const express = require("express");
const router = express.Router();
const auth = require("../controllers/authController");
const restrict = require("../middleware/restrict");

router.post("/api/users/register", auth.register);

router.post("/api/users/login", auth.login);

router.get("/api/users/whoami", restrict, auth.whoami);

module.exports = router;
