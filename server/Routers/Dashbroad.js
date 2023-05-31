const router = require('express').Router();
const pool = require('../db');
const authenticate = require('../middleware/authoriztion');

router.get('/', authenticate, async (req, res) => {
  try {
    // res.json(req.user);
    const user = await pool.query('SELECT firstname FROM users WHERE id = $1', [
      req.user.id,
    ]);

    res.status(200).json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
