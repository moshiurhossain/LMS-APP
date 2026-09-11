const mongoose = require('mongoose')
const dbConfig = ()=>{
  
  mongoose.connect(process.env.DB_LINK)
  .then(()=>{console.log(`connect db`)})
  .catch((err)=>{console.error(err.message)})
}

module.exports = dbConfig