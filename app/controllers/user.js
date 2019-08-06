const Format = require('response-format');

const express = require('express');

const router = express.Router();

const userService = require('../services/user');

router.get('/', async (req, res) => {
  const rtn = await userService.getOne(1);
  res.json(
    Format.success('success', rtn),
  );
});

module.exports = router;
