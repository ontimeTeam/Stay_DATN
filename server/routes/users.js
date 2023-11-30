var express = require('express');
var router = express.Router();
const userController = require("../controllers/user"); // Thay đổi đường dẫn và tên tệp theo đúng tên của tệp user.js
const { verifyUser, vetiryAdmin } = require("../middlewars/verytyToken");

//update
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.get("/:id", userController.getUser);
router.get("/", userController.getAllUsers);

module.exports = router;
