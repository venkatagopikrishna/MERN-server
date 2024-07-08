const express = require('express');
const router = express.Router();

router.get('/login', (req, res,next) => {
  res.send('Welcome to LOGIN form.');
});

module.exports = router;
