const router = require('express').Router();

router.use('/todo', require('./api/todo'));
router.use('/todo', require('./api/user'));

module.exports = router;