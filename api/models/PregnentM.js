const mongoose = require("mongoose");
//const {Schema, model} = mongoose;

const Pregnentchema = new mongoose.Schema({
    nafmother : {type: String, required: true},
    ageofmother : {type: Number, required: true},
    dofirstjoined : {type: Date, required: true},
    designation : {type: String, required: true},
    operation : {type: String, required: true},
    lrmp : {type: Date, required: true},
    edd : {type: Date, required: true},
    scdate : {type: Date, required: true},
    sevencompdate : {type: Date, required: true},
    forteendaystart : {type: Date, required: true},
    dateofreport : {type: Date, required: true},
    babyborndate : {type: Date, required: true},
    imergencynumber : {type: Number, required: true},
});

//const DailyModel = model('Daily', DailySchema);

//module.exports = DailyModel;

module.exports = mongoose.model('Pregnent-Mothers', Pregnentchema)

