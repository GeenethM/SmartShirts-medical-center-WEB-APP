const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');

//const { default: mongoose } = require("mongoose");
const app = express();
const tasks = require("./routes/tasks")
const connectDB = require("./db/DBconnect")
require('dotenv').config()

app.use(cors());
app.use(express.json());


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//app.use(express.static('../client/ssmc-front-end'))

//mongoose.connect('mongodb://localhost:27017')

/*
app.get("/daily", (req, res) =>{
    const {EPF_number, Patient_Name, Signs_and_Symptoms, Treatment, Leave_or_Hospital} = req.body;
    res.json({requestData:{EPF_number, Patient_Name, Signs_and_Symptoms, Treatment, Leave_or_Hospital}});
});
*/

app.use("/api/",tasks)

const port = 4000;

const start = async () => {  
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log("server is listining on port " + port));
    } catch (error) {
        console.log(error)
    }
}
//app.listen(port, console.log("server is listining on port " + port));

start()
