const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res, next) => {
  // console.log(' In the another middleware');
  // res.send('<h1> Hallo there </h1>');
  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});


module.exports = router;