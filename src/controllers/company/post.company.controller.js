const createCompany = async (req, res) => {
  console.log('post.company.controller - createCompany', req)
}

const createCompanyHistory = async (req, res) => {
  console.log('post.company.controller - createCompanyHistory', req)
}

module.exports = {
  createCompany,
  createCompanyHistory
}