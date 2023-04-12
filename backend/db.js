const mongoose = require('mongoose')
const mongoURI = 'mongodb://localhost:27017'

const connectToMongo = () =>{
    mongoose.connect(mongoURI).then((res)=>{
        // console.log(res)
        console.log("connected succesfully")
    })
}

module.exports=connectToMongo