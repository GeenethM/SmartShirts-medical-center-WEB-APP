import { useState, useEffect } from "react";
import Navbar from '../componets/Navbar';
import './ClinicStyles.css'
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import axios from 'axios'
import { PDFDownloadLink } from "@react-pdf/renderer";

import {can} from './data'
import ClinicPDF from "../PDF_files/ClinicPDF";
const columns = [
  {field: 'EPF_number1',headerName: 'EPF',width: 200},
{field: 'Patient_name1',headerName: 'Patient name',width: 200},
{field: 'Disease1',headerName: 'Disease',width: 200},
{field: 'NOfAttendClinic',headerName: 'Clinic name',width: 200},
]

function Clinic(){

    const [EPF_number1 , setEPF_number1] = useState('');
    const [Patient_name1, setPatient_name1] = useState('');
    const [Disease1 , setDisease1] = useState('');
    const [NOfAttendClinic , setNOfAttendClinic] = useState('');
    const [Values , setValues] = useState([]);

    async function addData(e) {
    e.preventDefault();
    await fetch("http://localhost:4000/api/clinic", {
        method: 'POST',
        body: JSON.stringify({EPF_number1, Patient_name1, Disease1, NOfAttendClinic}),
        headers: {"Content-Type":"application/json"},
    })
    }

    useEffect(() => {
        getAllStoreData();
        // console.log('ddddd'+Values.Code_No);
        // axios
        //       .get("http://localhost:4000/api/clinic")
        //       .then(({ data }) => {
        //           // console.log('mydata', data.store);
        //           setValues(data.clinic)
        //       })
      }, )

      const getAllStoreData = () => {
        axios
        .get("http://localhost:4000/api/clinic")
        .then(({ data }) => {
            // console.log('mydata', data.store);
            setValues(data.clinic)
        })
    }

    return(
        <>
        <Navbar/>
        <div id='clinic-main'>

        <h1>Clinic</h1>
        <div>
            <form action="" onSubmit={addData}>
                <div className='clinic-form'>

                
                <div>
                    <label htmlFor="epf_number">EPF number:</label>
                    <input type="number" id='epf_number' value={EPF_number1} onChange={e => setEPF_number1(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="patient_name">Patient name:</label>
                    <input type="text" id='patient_name' value={Patient_name1} onChange={e => setPatient_name1(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="disease">Disease:</label>
                    <input type="text" id='disease' value={Disease1} onChange={e => setDisease1(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="clinc_name">Name of the attending clinic:</label>
                    <input type="text" id='clinc_name' value={NOfAttendClinic} onChange={e => setNOfAttendClinic(e.target.value)}/>
                </div>
                <div>
                {/* <button className="chanuka-theam-button">Report</button> */}
                <button className="chanuka-theam-button" type="submit">Add</button>
                <button className="chanuka-theam-button">Delete</button>
                </div>
                </div>
            </form>

            <PDFDownloadLink document={<ClinicPDF epf={EPF_number1} name={Patient_name1} dis={Disease1} clinic={NOfAttendClinic} />} fileName="Clinic Report">
                {({loading}) => (loading ? <button>Loading Report...</button> : <button>Download Report</button> )}
                
                </PDFDownloadLink>

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
        </div>
        </>
    )
}

export default Clinic;