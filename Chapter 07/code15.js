const { body, validationResult } = require('express-validator');

const validateInput = [
  body('email').isEmail().withMessage('Invalid email address'),
  body('age').isInt({ min: 0 }).withMessage('Age must be a positive integer'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = validateInput;
