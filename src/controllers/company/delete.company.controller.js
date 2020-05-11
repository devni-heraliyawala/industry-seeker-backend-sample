const deleteCompany = async (req, res) => {
  console.log('delete.company.controller - deleteCompany', req)

}

const deleteCompanyHistory = async (req, res) => {
  console.log('delete.company.controller - deleteCompanyHistory', req)
}

module.exports = {
  deleteCompany,
  deleteCompanyHistory
}