var express = require('express');
var router = express.Router();
var usersRoutes = require('../routes/users.routes');
var orderRoutes = require('../routes/users.routes')



router.use('/users', usersRoutes);
router.use('/order', orderRoutes);
router.use('/product',productRoutes)

module.exports = router;
