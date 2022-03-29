const { check } = require("express-validator");
const { validateHelper } = require("../helpers/validateHelper");

const validateUser = [
  check("names").exists().not().notEmpty().withMessage("Names is required"),
  check("email")
    .exists()
    .not()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email is invalid"),
  check("rol").exists().not().notEmpty().withMessage("Rol is required"),
  (req, res, next) => validateHelper(req, res, next),
];

module.exports = {
  validateUser,
};
