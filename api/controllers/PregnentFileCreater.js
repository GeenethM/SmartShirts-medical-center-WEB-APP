// const Pregnent = require('../models/PregnentM')
const pdfTemplate = require('../Documents')
const pdf = require('html-pdf');

const createPDF = async (req,res) => {   //asyc
    //res.send("data")
    pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });
}

const fetchPDF = async (req,res) => {
    /*res.send("Daily data")*/
    res.sendFile(`${__dirname}/result.pdf`)
}

module.exports = {
    createPDF,
    fetchPDF
}