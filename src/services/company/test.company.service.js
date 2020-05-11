const findAll = async (data) => {
  console.log(`test data ${data}`)
  return data
}


const findOne = async (data) => {
  console.log(`test data. find one ${data}`)
}

module.exports = {
  findAll,
  findOne
}
