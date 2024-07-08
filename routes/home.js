const express = require('express');
const router = express.Router();

router.get('/home', (req, res,next) => {
  res.send('Welcome  to HOME form.');
});

module.exports = router;
