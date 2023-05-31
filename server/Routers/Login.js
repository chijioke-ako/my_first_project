require('dotenv').config();
const express = require('express');
const router = express.Router();
const pool = require('../db');
const authenticate = require('../middleware/authoriztion');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  pool.query(
    'SELECT * FROM users WHERE email = $1 ',
    [email],

    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.rows.length > 0) {
        bcrypt.compare(password, result.rows[0].password, (err, done) => {
          if (done) {
            const id = result.rows[0].id;
            const role = result.rows[0].role;

            const token = jwt.sign({ id, role }, process.env.JWTSECRET, {
              expiresIn: '1h',
            });
            // req.session.user = result.rows[0];

            res.status(201).json({
              status: 'Login Successfully ! ',
              auth: true,
              token: token,

              data: {
                user: result.rows[0],
              },
            });
          } else {
            res
              .status(400)
              .json({ data: 'wrong email or password please check' });
          }
        });
      } else {
        res.status(400).json({ data: "user doesn't exist " });
      }
    }
  );
});

module.exports = router;
