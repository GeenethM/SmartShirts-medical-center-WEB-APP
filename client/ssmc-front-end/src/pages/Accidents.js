import Navbar from '../componets/Navbar';
import './AccidentsStyles.css';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import { useState, useEffect } from "react";
import axios from 'axios'
import { PDFDownloadLink } from "@react-pdf/renderer";

import {accinv} from './data'
import AccidentPDF from '../PDF_files/AccidentPDF';
const columns = [
  {field: 'dofincid',headerName: 'Date of inceident',width: 250},
{field: 'dofnof',headerName: 'Date of Notice',width: 200},
{field: 'hc',headerName: 'How Caused',width: 200},
{field: 'nepfinj',headerName: 'EPF number',width: 300},
{field: 'nofinj',headerName: 'Name',width: 300},
{field: 'accmale',headerName: 'Male',width: 200},
{field: 'accfemale',headerName: 'Female',width: 200},
{field: 'accage',headerName: 'Age',width: 200},
{field: 'accuemp',headerName: 'Usual employment',width: 250},
{field: 'proctoacc',headerName: 'Precise occupation',width: 250},
{field: 'acc_nof_fatal',headerName: 'Injury is fatal',width: 250},
{field: 'acc_injry_name',headerName: 'Injury Name',width: 250},
{field: 'acc_fromdate',headerName: 'Period of disablement from',width: 250},
{field: 'acc_fordate',headerName: 'For',width: 250},
]

function Accidents() {

    const [dofincid , setdofincid] = useState('');
    const [dofnof , setdofnof] = useState('');
    const [hc , sethc] = useState('');
    const [nepfinj , setnepfinj] = useState('');
    const [nofinj , setnofinj] = useState('');
    const [accmale , setaccmale] = useState(false);
    const [accfemale , setaccfemale] = useState(false);
    const [accage , setaccage] = useState('');
    const [accuemp , setaccuemp] = useState('');
    const [proctoacc , setproctoacc] = useState('');
    const [acc_nof_fatal , setacc_nof_fatal] = useState(false);
    const [acc_nof_not , setacc_nof_not] = useState(false);
    const [acc_injry_name , setacc_injry_name] = useState('');
    const [acc_fromdate , setacc_fromdate] = useState('');
    const [acc_fordate , setacc_fordate] = useState('');

    const [Values , setValues] = useState([]);

    async function addData(e) {
        e.preventDefault();
        await fetch("http://localhost:4000/api/accidents", {
            method: 'POST',
            body: JSON.stringify({ dofincid, dofnof, hc, nepfinj, nofinj, accmale, accfemale, accage, accuemp, proctoacc, acc_nof_fatal, acc_nof_not,acc_injry_name, acc_fromdate, acc_fordate}),
            headers: {"Content-Type":"application/json"},
        })
      }

      useEffect(() => {
        getAllStoreData();
        // console.log('ddddd'+Values.Code_No);
        // axios
        //       .get("http://localhost:4000/api/store")
        //       .then(({ data }) => {
        //           // console.log('mydata', data.store);
        //           setValues(data.store)
        //       })
        // console.log(rowSelectionModel);
      }, )

      const getAllStoreData = () => {
        axios
        .get("http://localhost:4000/api/accidents")
        .then(({ data }) => {
            // console.log('mydata', data.store);
            setValues(data.accident)
        })
      }


    return(
        <>
        <Navbar/>
        <div id='accidents-main'>
            <h1>Accident investigation</h1>

            <form action="" onSubmit={addData}>
                <div className='acc-secone'>
                <div>
                    <label htmlFor="Date_of_inceident">Date of inceident:</label><br />
                    <input type="date" id='date_of_inceident' value={dofincid} onChange={e => setdofincid(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="date_of_notice">Date of Notice on Form 10 to D.F.I.E</label> <br />
                    <input type="date" id='date_of_notice' value={dofnof} onChange={e => setdofnof(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="how_caused">How Caused ?(e.g. Whether by machinery in motion and by what part of such machinery)</label> <br />
                    <input type="text"  id='how_caused' value={hc} onChange={e => sethc(e.target.value)}/>
                </div>
                </div>
                

                <div className='acc-sectwo'>
                <div>
                    <label htmlFor="name_epf_injured">Name and EPF number of the Injured Person</label> <br />
                    <input type="number" id='epf_injured'  value={nepfinj} onChange={e => setnepfinj(e.target.value)}/>
                    <input type="text" id='name_injured' value={nofinj} onChange={e => setnofinj(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="sex">Sex</label> <br />
                    <input type="radio" name="gender" id="rdmale"  value={accmale} onChange={e => setaccmale(e.target.value)}/>male
                    <input type="radio" name="gender" id="rdfemale"  value={accfemale} onChange={e => setaccfemale(e.target.value)}/>female
                </div>

                <div>
                    <label htmlFor="age">Age</label> <br />
                    <input type="number" id='age' value={accage} onChange={e => setaccage(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="usual_employment">Usual employment</label> <br />
                    <input type="text" name="" id="usual_employment" value={accuemp} onChange={e => setaccuemp(e.target.value)}/>
                </div>
                </div>
                

                <div className='acc-secthree'>
                <div>
                    <label htmlFor="precise_occupation_at_the_time_of_accident">Precise occupation at the time of accident</label> <br />
                    <input type="text" id='precise_occupation_at_the_time_of_accident' value={proctoacc} onChange={e => setproctoacc(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="name_of_injury_and_whether_fatal_or_not">Name of injury and whether fatal or not</label><br />
                    <input type="radio" name="injury" id="rdyes"  value={acc_nof_fatal} onChange={e => setacc_nof_fatal(e.target.value)}/>yes
                    <input type="radio" name="injury" id="rdno"  value={acc_nof_not} onChange={e => setacc_nof_not(e.target.value)}/>no
                    <input type="text" id='injury_name' value={acc_injry_name} onChange={e => setacc_injry_name(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="period_of_disablement_in_work_days">Period of disablement in work days</label> <br />
                    from: <input type="date" name="" id="fromdate" value={acc_fromdate} onChange={e => setacc_fromdate(e.target.value)}/>
                    for: <input type="date" name="" id="fordate" value={acc_fordate} onChange={e => setacc_fordate(e.target.value)}/>
                </div>
                <div>
                    <button className="chanuka-theam-button" type='submit'>Add</button>
                    <button className="chanuka-theam-button">Delete</button>
                    {/* <button className="chanuka-theam-button">Report</button> */}
                </div>
                </div>
                

                
            </form>

            <PDFDownloadLink document={<AccidentPDF doi={dofincid} donf={dofnof} hc={hc} epf={nepfinj} name={nofinj}
        male={accmale} female={accfemale} age={accage} uemp={accuemp} precise={proctoacc} fatal={acc_nof_fatal} not={acc_nof_not} in_name={acc_injry_name} from={acc_fromdate} for={acc_fordate}/>} fileName="Accident Patients Report">
                {({loading}) => (loading ? <button>Loading Report...</button> : <button>Download Report</button> )}
                
                </PDFDownloadLink>
{/* dofincid, dofnof, hc, nepfinj, nofinj, accmale, accfemale, accage, accuemp, proctoacc, acc_nof_fatal, acc_nof_not,acc_injry_name, acc_fromdate, acc_fordate */}
            <div id='table'>
      <div style={{ height: 700, width: '100%' }}>
      <DataGrid
      columns={columns}
      rows={Values}
      getRowId={(row) => row._id}
      pageSize={5}
      checkboxSelection
      components={{Toolbar: GridToolbar}}
    />
      </div>
      </div>
        </div>
        </>
    )
}

export default Accidents;