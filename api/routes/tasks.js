const express = require("express");
const router = express.Router();

//const {getAllTasks, createTask, getTask, updateTask, deleteTask} = require("../controlers/taskC")
const {
    addDailyData , showDailyData, addStoreData , showStoreData, addCanteenData, showCanteenData, addDailyAccidentData, 
    showDailyAccidentData, addClinicData, showClinicData, addPregnentData ,showPregnentData, addAccidentData, showAccidentData
} = require('../controlers/taskC')

// const {createPDF , fetchPDF} = require('../controlers/PregnentFileCreater')


router.route("/dailydata").post(addDailyData).get(showDailyData)
router.route("/store").post(addStoreData).get(showStoreData)
router.route("/canteen").post(addCanteenData).get(showCanteenData)
router.route("/dailyaccident").post(addDailyAccidentData).get(showDailyAccidentData)
router.route("/clinic").post(addClinicData).get(showClinicData)
router.route("/pregnent").post(addPregnentData).get(showPregnentData)
router.route("/accidents").post(addAccidentData).get(showAccidentData)
// router.route("/create-pdf").post(createPDF)
// router.route("/fetch-pdf").get(fetchPDF)
//router.route("/").get(getAllTasks).post(createTask)
//router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router;