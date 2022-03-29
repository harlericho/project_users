const express = require("express");
const router = express.Router();
const user = require("../../controllers/user");
const { validateUser } = require("../../validations/user");

router.get("/", user.getAllUsers);
router.get("/:id", user.getUserById);
router.post("/", validateUser, user.createUser);
router.put("/:id", validateUser, user.updateUser);
router.delete("/:id", user.deleteUser);

module.exports = router;
