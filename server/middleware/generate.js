const jwt = require('jsonwebtoken');

function generateToken(user) {
  return jwt.sign(
    {
      id: user.rows[0].id,
      firstname: user.rows[0].firstname,
      email: user.rows[0].email,
      isAdmin: user.rows[0].role,
    },
    process.env.JWT_SECRET || 'somethingsecret',
    {
      expiresIn: '30d',
    }
  );
}
module.exports = generateToken;
