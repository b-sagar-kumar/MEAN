var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', userInfo);

module.exports = router;
