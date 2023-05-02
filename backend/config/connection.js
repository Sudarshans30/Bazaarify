// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/bazaarify');

// module.exports = mongoose.connection;

import mongoose from 'mongoose'

const connectDB = async () =>{
    try{
        const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/bazzarify'
        const conn = await mongoose.connect(uri, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        })
        console.log(`MongoDB connected: ${conn.connection.host}`)
    }catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB
