const { validationResult } = require('express-validator');

// Mock payment API
const processPaymentMock = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { amount, cardNumber, cvv, expiryDate } = req.body;

  // We are treating '4242' inside the cardNumber as a success simulation
  // and everything else as a success 70% of the time, failure 30% of the time.
  // In a real application, we would contact Stripe, Razorpay, etc.
  
  setTimeout(() => {
    // If the card ends in 4242, force success
    if (cardNumber && cardNumber.endsWith('4242')) {
      return res.status(200).json({
        success: true,
        transactionId: `txn_mock_${Math.floor(Math.random() * 1000000000)}`,
        message: 'Payment processed successfully'
      });
    }

    // Otherwise, simulate a random success/failure
    const isSuccess = Math.random() > 0.3;

    if (isSuccess) {
      return res.status(200).json({
        success: true,
        transactionId: `txn_mock_${Math.floor(Math.random() * 1000000000)}`,
        message: 'Payment processed successfully'
      });
    } else {
      return res.status(400).json({
        success: false,
        message: 'Payment declined by bank',
        code: 'INSUFFICIENT_FUNDS_OR_DECLINED'
      });
    }
  }, 1500); // Simulate network latency
};

module.exports = { processPaymentMock };
