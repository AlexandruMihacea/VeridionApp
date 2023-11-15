const express = require('express');
const router = express.Router();
const controller = require('../Controllers/companyControllers');

router.get('/company', controller.getOneCompany);
// router.get('/companies', controller.getAllCompanies);


module.exports = router;