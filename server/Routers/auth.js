const router = require('express').Router();
const authenticate = require('../middleware/authoriztion');

router.get('/', authenticate, (req, res) => {
  if (req.user) {
    res.send({ loggedIn: true, user: req.user });
  } else {
    res.send({ loggedIn: false });
  }
});

module.exports = router;
