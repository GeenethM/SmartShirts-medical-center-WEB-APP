const mongoose = require("mongoose");
//const {Schema, model} = mongoose;

const StoreSchema = new mongoose.Schema({
    // id : {type: Number, required: true},
    Code_No : {type: Number, required: true},
    Description : {type: String, required: true},
    Unit : {type: String, required: true},
    Quantity : {type: Number, required: true},
});

//const DailyModel = model('Daily', DailySchema);

//module.exports = DailyModel;

module.exports = mongoose.model('Medical-Store', StoreSchema)

