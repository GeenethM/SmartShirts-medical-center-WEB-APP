const mongoose = require("mongoose");
//const {Schema, model} = mongoose;

const ClinicSchema = new mongoose.Schema({
    EPF_number1 : {type: Number, required: true},
    Patient_name1 : {type: String, required: true},
    Disease1 : {type: String, required: true},
    NOfAttendClinic : {type: String, required: true},
});

//const DailyModel = model('Daily', DailySchema);

//module.exports = DailyModel;

module.exports = mongoose.model('Clinic-Records', ClinicSchema)

