const findAll = async (data) => {
  console.log(`search data ${data}`)
  return data
}


const findOne = async (data) => {
  console.log(`search data. find one ${data}`)
}

module.exports = {
  findAll,
  findOne
}
