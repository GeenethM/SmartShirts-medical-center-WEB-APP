module.exports = (nafmother, ageofmother, dofirstjoined, designation, operation, lrmp, edd, scdate, sevencompdate, forteendaystart, dateofreport, babyborndate, imergencynumber) => {
    return `
    <!DOCTYPE html>
    <html>
        <style>
            #head {
                text-align: center;
            }
        </style>
        <body>
            <h1 id="head">Pregent Mother report</h1>
            <h2>Name of Mother: ${nafmother}</h2>
            <h2>Age Of Mother: ${ageofmother}</h2>
            <h2>Date of 1st Joined: ${dofirstjoined}</h2>
            <h2>Designation: ${designation}</h2>
            <h2>Operation: ${operation}</h2>
            <h2>L.R.M.P: ${lrmp}</h2>
            <h2>E.D.D (40 weeks comleted): ${edd}</h2>
            <h2>Scan date: ${scdate}</h2>
            <h2>7 Months Completed: ${sevencompdate}</h2>
            <h2>14 days Starting date: ${forteendaystart}</h2>
            <h2>Date of Report after leave: ${dateofreport}</h2>
            <h2>Baby born date: ${babyborndate}</h2>
            <h2>Imergency mobile number: ${imergencynumber}</h2>
        </body>
    </html>
    `;
};