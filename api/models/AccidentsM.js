const mongoose = require("mongoose");
//const {Schema, model} = mongoose;

const AccidentSchema = new mongoose.Schema({
    dofincid : {type: Date, required: true},
    dofnof : {type: Date, required: true},
    hc : {type: String, required: true},
    nepfinj : {type: Number, required: true},
    nofinj : {type: String, required: true},
    accmale : {type: Boolean, required: true},
    accfemale : {type: Boolean, required: true},
    accage : {type: Number, required: true},
    accuemp : {type: String, required: true},
    proctoacc : {type: String, required: true},
    acc_nof_fatal : {type: Boolean, required: true},
    acc_nof_not : {type: Boolean, required: true},
    acc_injry_name: {type: String, required: true},
    acc_fromdate : {type: Date, required: true},
    acc_fordate : {type: Date, required: true},
});

//const DailyModel = model('Daily', DailySchema);

//module.exports = DailyModel;

module.exports = mongoose.model('Accident-Records', AccidentSchema)

