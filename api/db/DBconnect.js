//mongodb+srv://nahimic:CRO1234@nodeexpressprojects.85qt2hj.mongodb.net/Daily-Data?retryWrites=true&w=majority

const mongoose = require("mongoose")

//const connectionString = "mongodb+srv://nahimic:CRO1234@nodeexpressprojects.85qt2hj.mongodb.net/Daily-Data?retryWrites=true&w=majority"

const connectDB = (url) =>{
    return mongoose.connect(url)
}

module.exports = connectDB