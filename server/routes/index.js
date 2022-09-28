const router = require('express').Router();

router.use('/todo', require('./api/todo'));

module.exports = router;