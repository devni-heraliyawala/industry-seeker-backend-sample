const service = require('../../services/company')


const getCompany = async (req, res) => {
  console.log('get.company.controller - getCompany', req)
  var result = await service.companySearchService.findAll(req)

  console.log(`get company controller, service response ${result}`)

  res.status(200).send('hello')
}

const getCompanyHistory = async (req, res) => {
  console.log('get.company.controller - getCompanyHistory', req)
}

module.exports = {
  getCompany,
  getCompanyHistory
}