const mongoose = require("mongoose");
//const {Schema, model} = mongoose;

const DailyAccidentSchema = new mongoose.Schema({
    DateC : {type: Date, required: true},
    Injury : {type: String, required: true},
    Cotton : {type: Number, required: true},
    Gauze : {type: Number, required: true},
    Plaster : {type: Number, required: true},
});

//const DailyModel = model('Daily', DailySchema);

//module.exports = DailyModel;

module.exports = mongoose.model('Daily-Accident-Records', DailyAccidentSchema)

