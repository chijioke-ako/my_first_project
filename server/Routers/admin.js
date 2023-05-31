require('dotenv').config();
const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authoriztion');

router.get('/', authenticate, (req, res) => {
  if (req.user.role === 'admin') {
    res.status(200).json({ data: true, user: req.user.role });
  } else {
    res.status(403).json({ data: false });
  }
});

module.exports = router;
