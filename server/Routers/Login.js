require('dotenv').config();
const express = require('express');
const router = express.Router();
const pool = require('../db');

const bcrypt = require('bcrypt');
const expressAsyncHandler = require('express-async-handler');
const generateToken = require('../middleware/generate');

router.post(
  '/',
  expressAsyncHandler(async (req, res) => {
    const { email } = req.body;

    const user = await pool.query('SELECT * FROM users WHERE email = $1 ', [
      email,
    ]);

    if (user.rows) {
      if (bcrypt.compareSync(req.body.password, user.rows[0].password)) {
        res.send({
          id: user.rows[0].id,
          firstname: user.rows[0].firstname,
          email: user.rows[0].email,
          isAdmin: user.rows[0].role,
          token: generateToken(user),
        });
        return;
      }
    }

    res.status(401).send({ message: 'wrong email or password please check' });
  })
);

module.exports = router;
