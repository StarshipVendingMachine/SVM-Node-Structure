const Format = require('response-format');

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(
    Format.success(null),
  );
});

module.exports = router;
