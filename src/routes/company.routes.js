const express = require('express');
const router = express.Router();

//import controller functions for company
const { deleteCompany,
  deleteCompanyHistory,
  getCompany,
  getCompanyHistory,
  updateCompany,
  updateCompanyHistory,
  createCompany,
  createCompanyHistory } = require('../controllers/company')

// delete http requests
router.delete('/test',deleteCompany)
router.delete('/test/h',deleteCompanyHistory)

// get http requests
router.get('/test',getCompany)
router.get('/test/h',getCompanyHistory)

// patch http requests
router.patch('/test',updateCompany)
router.patch('/test/h',updateCompanyHistory)

// post http requests
router.post('/test',createCompany)
router.post('/test/h',createCompanyHistory)

// export company router
module.exports = router