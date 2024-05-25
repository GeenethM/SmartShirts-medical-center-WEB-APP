const Task = require('../models/DailyDataM')
const Store = require('../models/StoreM')
const Canteen = require('../models/CanteenM')
const DailyAccident = require('../models/DailyAccidentM')
const Clinic = require('../models/ClinicM')
const Pregnent = require('../models/PregnentM')
const Accident = require('../models/AccidentsM')

//This is dailydata fuctions --------------------------------------------------------------
const addDailyData = async (req,res) => {   //asyc
    //res.send("data")
    try {
        const task = await Task.create(req.body)
        res.status(201).json(task)
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const showDailyData = async (req,res) => {
    /*res.send("Daily data")*/
    try {
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({msg:error}) 
    }
}

//This is Store functions-------------------------------------------------------------------------------------------------------------------------
const addStoreData = async (req,res) => {   //asyc
    //res.send("data")
    try {
        const store = await Store.create(req.body)
        res.status(201).json(store)
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const showStoreData = async (req,res) => {
    /*res.send("Store data")*/
    try {
        const store = await Store.find({})
        res.status(200).json({store})
        // const todo = await Store.find();
        // res.send(todo);
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

//This is Canteen functions-------------------------------------------------------------------------------------------------------------------------
const addCanteenData = async (req,res) => {   //asyc
    //res.send("data")
    try {
        const canteen = await Canteen.create(req.body)
        res.status(201).json(canteen)
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const showCanteenData = async (req,res) => {
    /*res.send("Canteen data")*/
    try {
        const canteen = await Canteen.find({})
        res.status(200).json({canteen})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}


//This is DailyAccident functions-------------------------------------------------------------------------------------------------------------------------
const addDailyAccidentData = async (req,res) => {   //asyc
    //res.send("data")
    try {
        const dailyaccident = await DailyAccident.create(req.body)
        res.status(201).json(dailyaccident)
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const showDailyAccidentData = async (req,res) => {
    /*res.send("Daily Accident data")*/
    try {
        const dailyaccident = await DailyAccident.find({})
        res.status(200).json({dailyaccident})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

//This is Clinic functions-------------------------------------------------------------------------------------------------------------------------
const addClinicData = async (req,res) => {   //asyc
    //res.send("data")
    try {
        const clinic = await Clinic.create(req.body)
        res.status(201).json(clinic)
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const showClinicData = async (req,res) => {
    /*res.send("Clinict data")*/
    try {
        const clinic = await Clinic.find({})
        res.status(200).json({clinic})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

//This is Pregnent functions-------------------------------------------------------------------------------------------------------------------------
const addPregnentData = async (req,res) => {   //asyc
    //res.send("data")
    try {
        const pregnent = await Pregnent.create(req.body)
        res.status(201).json(pregnent)
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const showPregnentData = async (req,res) => {
    /*res.send("Clinict data")*/
    try {
        const pregnent = await Pregnent.find({})
        res.status(200).json({pregnent})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}


//This is Accident functions-------------------------------------------------------------------------------------------------------------------------
const addAccidentData = async (req,res) => {   //asyc
    //res.send("data")
    try {
        const accident = await Accident.create(req.body)
        res.status(201).json(accident)
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const showAccidentData = async (req,res) => {
    /*res.send("Clinict data")*/
    try {
        const accident = await Accident.find({})
        res.status(200).json({accident})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}


module.exports = {
    addDailyData,
    showDailyData,
    addStoreData,
    showStoreData,
    addCanteenData,
    showCanteenData,
    addDailyAccidentData,
    showDailyAccidentData,
    addClinicData,
    showClinicData,
    addPregnentData,
    showPregnentData,
    addAccidentData,
    showAccidentData
}