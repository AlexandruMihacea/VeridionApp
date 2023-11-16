const express = require('express');
const router = express.Router();
const controler = require('../Controllers/controllerCompanies');

router.post('/company', controler.getCompany)
router.post('/companies', controler.getCompaniesList);
router.post('/company/add', controler.getTest);


module.exports = router;