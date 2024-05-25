const mongoose = require("mongoose");
//const {Schema, model} = mongoose;

const CanteenSchema = new mongoose.Schema({
    Date : {type: Date, required: true},
    Morning_Meal : {type: String, required: true},
    Noon_Meal : {type: String, required: true},
});

//const DailyModel = model('Daily', DailySchema);

//module.exports = DailyModel;

module.exports = mongoose.model('Canteen-Records', CanteenSchema)

