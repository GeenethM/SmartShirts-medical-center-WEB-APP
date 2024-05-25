import { useState, useEffect } from "react";
import Navbar from '../componets/Navbar';
import './PregnentStyles.css'
import { DataGrid, GridToolbar } from '@material-ui/data-grid';

// import { DataGrid, GridSelectionModel } from '@mui/x-data-grid';
import axios from 'axios'
// import { saveAs } from 'file-saver';

import {preg} from './data'
import { PDFDownloadLink } from "@react-pdf/renderer";
import PregentPDF from "../PDF_files/PregnetPDF";
import { Link } from "react-router-dom";
import { Toolbar } from "@material-ui/core";

const columns = [
{field: 'nafmother',headerName: 'Name',width: 200, editable: true},
{field: 'ageofmother',headerName: 'Age',width: 200},
{field: 'dofirstjoined',headerName: 'Date of 1st Joined',width: 250},
{field: 'designation',headerName: 'Designation',width: 200},
{field: 'operation',headerName: 'Operation',width: 200},
{field: 'lrmp',headerName: 'L.R.M.P',width: 200},
{field: 'edd',headerName: 'E.D.D',width: 200},
{field: 'scdate',headerName: 'Scane Date',width: 200},
{field: 'sevencompdate',headerName: '7 Month',width: 200},
{field: 'forteendaystart',headerName: '14 days',width: 200},
{field: 'dateofreport',headerName: 'Date of Report',width: 250},
{field: 'babyborndate',headerName: 'Baby Born Date',width: 250},
{field: 'imergencynumber',headerName: 'Emergency Mobile',width: 250},
]

function Pregnent() {

    const [nafmother , setnafmother] = useState('');
    const [ageofmother , setageofmother] = useState('');
    const [dofirstjoined , setdofirstjoined] = useState('');
    const [designation , setdesignation] = useState('');
    const [operation , setoperation] = useState('');
    const [lrmp , setlrmp] = useState('');
    const [edd , setedd] = useState('');
    const [scdate , setscdate] = useState('');
    const [sevencompdate , setsevencompdate] = useState('');
    const [forteendaystart , setforteendaystart] = useState('');
    const [dateofreport , setdateofreport] = useState('');
    const [babyborndate , setbabyborndate] = useState('');
    const [imergencynumber , setimergencynumber] = useState('');

    const [Values , setValues] = useState([]);
    const [rowSelectionModel, setRowSelectionModel] = useState([]);
    

    async function addData(e) {
        e.preventDefault();
        await fetch("http://localhost:4000/api/pregnent", {
            method: 'POST',
            body: JSON.stringify({ nafmother, ageofmother, dofirstjoined, designation, operation, lrmp, edd, scdate, sevencompdate, forteendaystart, dateofreport, babyborndate, imergencynumber}),
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
        .get("http://localhost:4000/api/pregnent")
        .then(({ data }) => {
            // console.log('mydata', data.store);
            setValues(data.pregnent)
        })
      }

    //   const createAndDownloadPDF = () => {
    //     axios.post("http://localhost:4000/api/create-pdf", nafmother, ageofmother, dofirstjoined, designation, operation, lrmp, edd, scdate, sevencompdate, forteendaystart, dateofreport, babyborndate, imergencynumber)
    //     .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
    //   .then((res) => {
    //     const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

    //     saveAs(pdfBlob, 'newPdf.pdf');
    //   })
    //   }

    // const pdfdownload = () => {
    //     Values.map(val => 
    //     <PDFDownloadLink document={<PregentPDF name={val.nafmother} age={val.ageofmother} dofj={val.dofirstjoined} desig={val.designation} oper={val.operation}
    //     lr={val.lrmp} ed={val.edd} sd={val.scdate} secd={val.sevencompdate} fodsd={val.forteendaystart} dor={val.dateofreport} bb={val.babyborndate} en={val.imergencynumber}/>} fileName="FORM">
    //             {({loading}) => (loading ? <button>Loading Report...</button> : <button>Download Report</button> )}
    //             </PDFDownloadLink>)
    // }
    // const valInciment = () => {
    //     let i = -1;
    //     setincri(i++)
    // }

    return(
        <>
        <Navbar/>
        <div id='preg-main'>
        
        <h1>Pregnency data</h1>
        <form action="" onSubmit={addData}>
            <div className='preg-secone'>
            <div>
                <label htmlFor="">Name of Mother: </label>
                <input type="text" placeholder='Name of Mother' id='nofmother' value={nafmother} onChange={e => setnafmother(e.target.value)}/>
            </div>
            
            <div>
                <label htmlFor="">Age of Mother: </label>
                <input type="number" placeholder='Age of Mother' id='ageofmother' value={ageofmother} onChange={e => setageofmother(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="">Date of 1st Joined: </label>
                <input type="date" placeholder='Date of 1st Joined' id='dofirstjoined' value={dofirstjoined} onChange={e => setdofirstjoined(e.target.value)}/>
            </div>
            </div>
            

            <div className='preg-sectwo'>
            <div>
                <label htmlFor="">Designation:</label>
                <input type="text" placeholder='Designation' id='designation' value={designation} onChange={e => setdesignation(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="">Operation: </label>
                <input type="text" placeholder='Operation' id='operation' value={operation} onChange={e => setoperation(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="">L.R.M.P: </label>
                <input type="date" placeholder='L.R.M.P' id='lrmp' value={lrmp} onChange={e => setlrmp(e.target.value)}/>
            </div>
            </div>
            

            <div className='preg-secthree'>
            <div>
                <label htmlFor="">E.D.D (40 weeks complete): </label>
                <input type="date" placeholder='E.D.D' id='edd' value={edd} onChange={e => setedd(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="">Scane Date: </label>
                <input type="date" placeholder='Scan Date' id='scdate' value={scdate} onChange={e => setscdate(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="">7 Month Completed Date: </label>
                <input type="date" placeholder='7 Month Completed Date' id='sevencompdate' value={sevencompdate} onChange={e => setsevencompdate(e.target.value)}/>
            </div>
            </div>
            

            <div className='preg-secfour'>
            <div>
                <label htmlFor="">14 days Start on: </label>
                <input type="date" placeholder='14 days start on' id='forteendaystart' value={forteendaystart} onChange={e => setforteendaystart(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="">Date of Report after Leave: </label>
                <input type="date" placeholder='Date of Report after Leave' id='dateofreport' value={dateofreport} onChange={e => setdateofreport(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="">Baby Born Date: </label>
                <input type="date" placeholder='Baby Born Date' id='babyborndate' value={babyborndate} onChange={e => setbabyborndate(e.target.value)}/>
            </div>
            </div>
            

            <div className='preg-secfive'>
            <div>
                <label htmlFor="">Emergency Mobile Number: </label>
                <input type="number" placeholder='Emergency Mobile Number' id='imergencynumber' value={imergencynumber} onChange={e => setimergencynumber(e.target.value)}/>
            </div>
            <div>
                <button className="chanuka-theam-button" type='submit'>Add</button>
                <button className="chanuka-theam-button">Delete</button>
                {/* <button className="chanuka-theam-button" onClick={createAndDownloadPDF}>Report</button> */}
                
                {/* <button className="chanuka-theam-button">Report</button> */}
            </div>
            </div>
        </form>
        {/* <button>Report</button> */}
        <PDFDownloadLink document={<PregentPDF name={nafmother} age={ageofmother} dofj={dofirstjoined} desig={designation} oper={operation}
        lr={lrmp} ed={edd} sd={scdate} secd={sevencompdate} fodsd={forteendaystart} dor={dateofreport} bb={babyborndate} en={imergencynumber}/>} fileName="Pregnent Women Report">
                {({loading}) => (loading ? <button>Loading Report...</button> : <button>Download Report</button> )}
                
                </PDFDownloadLink>




        {/* <PDFDownloadLink document={Values.map(val => { return(<PregentPDF name={val.nafmother} age={val.ageofmother} dofj={val.dofirstjoined} desig={val.designation} oper={val.operation}
        lr={val.lrmp} ed={val.edd} sd={val.scdate} secd={val.sevencompdate} fodsd={val.forteendaystart} dor={val.dateofreport} bb={val.babyborndate} en={val.imergencynumber}/>)})} fileName="Pregnent Women Report">
                {({loading}) => (loading ? <button>Loading Report...</button> : <button >Download Report</button> )}
                
                </PDFDownloadLink> */}


        {/* <PDFDownloadLink document={while(<PregentPDF name={val.nafmother} age={val.ageofmother} dofj={val.dofirstjoined} desig={val.designation} oper={val.operation}
        lr={val.lrmp} ed={val.edd} sd={val.scdate} secd={val.sevencompdate} fodsd={val.forteendaystart} dor={val.dateofreport} bb={val.babyborndate} en={val.imergencynumber}/>)})} fileName="Pregnent Women Report">
                {({loading}) => (loading ? <button>Loading Report...</button> : <button onClick={valInciment}>Download Report</button> )}
                
                </PDFDownloadLink> */}



                {/* <div>
                    {Values.map(val => {
                        return (
                            <PDFDownloadLink document={<PregentPDF name={val.nafmother} age={val.ageofmother} dofj={val.dofirstjoined} desig={val.designation} oper={val.operation}
        lr={val.lrmp} ed={val.edd} sd={val.scdate} secd={val.sevencompdate} fodsd={val.forteendaystart} dor={val.dateofreport} bb={val.babyborndate} en={val.imergencynumber}/>} fileName="FORM">
                {({loading}) => (loading ? <button>Loading Report...</button> : <button>Download Report</button> )}
                
                </PDFDownloadLink>
                        )
                    })}
                
                </div> */}
        
                {/* <button onClick={pdfdownload}>Report</button> */}
        <div id='table'>
      <div style={{ height: 700, width: '100%' }}>
      <DataGrid
      
      columns={columns}
      rows={Values}
      getRowId={(row) => row._id}
      pageSize={5}
      checkboxSelection
      components={{Toolbar: GridToolbar}}
    //   onRowSelectionModelChange ={(ids) => {
    //     const selectedIDs = new Set(ids);
    //     const selectedRows = Values.rows.filter((row) =>
    //       selectedIDs.has(row._id),
    //     );
    //     console.log("something");
    //     setselectrows(selectedRows);
        
    //   }}
    onRowSelectionModelChange={(newRowSelectionModel) => {
        setRowSelectionModel(newRowSelectionModel);
      }}
      rowSelectionModel={rowSelectionModel}
      {...Values}
    />
      </div>
      </div>
      
      </div>
        </>
    )
}

export default Pregnent;

//onRowSelectionModelChange