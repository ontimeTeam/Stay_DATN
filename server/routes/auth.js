const router = require("express").Router();

const { register, login } = require("../controllers/auth");

router.post("/register", register);
router.post("/login", login);

// Export router dưới dạng một hàm middleware
module.exports = router;

// controllers/auth.js
// ...
