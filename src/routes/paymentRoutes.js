const express = require('express');
const { check } = require('express-validator');
const { processPaymentMock } = require('../controllers/paymentController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post(
  '/mock',
  protect,
  [
    check('amount', 'Amount is required and must be a number').isNumeric(),
    check('cardNumber', 'Card number is required').not().isEmpty(),
    check('cvv', 'CVV must be 3 or 4 digits').isLength({ min: 3, max: 4 }),
    check('expiryDate', 'Expiry date is required').not().isEmpty()
  ],
  processPaymentMock
);

module.exports = router;
