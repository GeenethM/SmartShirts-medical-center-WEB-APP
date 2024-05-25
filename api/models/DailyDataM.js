const mongoose = require("mongoose");
//const {Schema, model} = mongoose;

const DailySchema = new mongoose.Schema({
    EPF_number : {type: Number, required: true},
    Section : {type: String, required: true},
    Patient_Name : {type: String, required: true},
    Signs_and_Symptoms : {type: String, required: true},
    Treatment : {type: String, required: true},
    Leave_or_Hospital : {type: String, required: true},
});

//const DailyModel = model('Daily', DailySchema);

//module.exports = DailyModel;

module.exports = mongoose.model('Daily-Patients', DailySchema)

