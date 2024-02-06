const mongoose = require("mongoose")



function connector() {
  mongoose.connect("mongodb+srv://suaib:6KfQBiuTX05ATQG9@cluster0.vkbzxpq.mongodb.net/Red-bus?retryWrites=true&w=majority")
.then(()=>{
   console.log("mongoose is live now")
}).catch((err)=>{
console.log({err})
})}

module.exports = connector