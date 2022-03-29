const { validationResult } = require("express-validator");

const validateHelper = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (error) {
    res.status(403).json({ error: error.mapped() });
  }
};

module.exports = {
  validateHelper,
};