const { deleteCompany, deleteCompanyHistory } = require('./delete.company.controller')
const { getCompany, getCompanyHistory } = require('./get.company.controller')
const { updateCompany, updateCompanyHistory } = require('./patch.company.controller');
const { createCompany, createCompanyHistory } = require('./post.company.controller')

module.exports = {
  getCompany,
  getCompanyHistory,
  deleteCompany,
  deleteCompanyHistory,
  updateCompany,
  updateCompanyHistory,
  createCompany,
  createCompanyHistory
}