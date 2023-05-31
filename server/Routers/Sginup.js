require('dotenv').config();
const express = require('express');
const router = express.Router();
const pool = require('../db');
const authenticate = require('../middleware/authoriztion');

const bcrypt = require('bcrypt');

router.post('/', authenticate, (req, res) => {
  const { firstname, lastname, email, role, password } = req.body;

  if (!firstname || !lastname || !email || !password)
    return res.json({
      error: 'Please enter your email and password ',
    });
  else {
    pool.query(
      'SELECT * FROM users WHERE email = $1',
      [email],
      async (err, result) => {
        if (err) throw err;
        if (result.rows[0])
          return res.json({
            data: 'Email has already been registered',
          });
        else {
          const passwordHash = await bcrypt.hash(password, 10);
          pool.query(
            'INSERT INTO users (firstname, lastname, email, password, role ) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [firstname, lastname, email, passwordHash, role],

            (err, results) => {
              if (err) throw err;

              return res.json({
                data: 'user has been registered',
              });
            }
          );
        }
      }
    );
  }
});
module.exports = router;
