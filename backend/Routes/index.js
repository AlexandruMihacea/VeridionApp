const express = require('express');
const router = express.Router();
const companyRouter = require('./companyRouter');

router.use('/', companyRouter);



module.exports = router;