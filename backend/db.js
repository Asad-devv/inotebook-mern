const mongoose = require('mongoose')
require('dotenv').config()

// const mongoURI = 'mongodb://localhost:27017'
const mongoURI = process.env.MONGO_URI
console.log(mongoURI)
const connectToMongo = () =>{
    mongoose.connect(mongoURI).then((res)=>{
        // console.log(res)
        console.log("connected succesfully")
    }).catch((eror)=>console.log(eror))
}

module.exports=connectToMongo