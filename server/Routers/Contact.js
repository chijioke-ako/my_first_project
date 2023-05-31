const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send({ data: 'here is your data' });
});

router.post('/', (req, res) => {
  res.send({ data: 'contact create' });
});

router.put('/', (req, res) => {
  res.send({ data: 'contact update' });
});

router.delete('/', (req, res) => {
  res.send({ data: 'here is your data' });
});

module.exports = router;
