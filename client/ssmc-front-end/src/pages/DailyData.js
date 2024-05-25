import { useState, useEffect } from "react";
import "./DailyDataStyles.css";
import Navbar from "../componets/Navbar";
import { DataGrid } from '@material-ui/data-grid';
import {dailypat} from './data'
import axios from 'axios'

const columns = [
    {field: 'EPF_number',headerName: 'EPF',width: 150},
  {field: 'Section',headerName: 'Section',width: 150},
  {field: 'Patient_Name',headerName: 'Patient Name',width: 200},
  {field: 'Signs_and_Symptoms',headerName: 'Signs and Symptoms',width: 250},
  {field: 'Treatment',headerName: 'Treatment',width: 200},
  {field: 'Leave_or_Hospital',headerName: 'Leave or Hospital',width: 250},
]

function DailyData() {

    const [EPF_number , setEPF_number] = useState('');
    const [Section, setSection] = useState('accounts');
    const [Time, setTime] = useState('');
    const [Patient_Name , setPatient_Name] = useState('');
    const [Signs_and_Symptoms , setSigns_and_Symptoms] = useState('');
    const [Treatment , setTreatment] = useState('');
    const [Leave_or_Hospital , setLeave_or_Hospital] = useState('');
    const [Values , setValues] = useState([]);

    async function addData(e) {
        e.preventDefault();
        await fetch("http://localhost:4000/api/dailydata", {
            method: 'POST',
            body: JSON.stringify({EPF_number, Section, Patient_Name, Signs_and_Symptoms, Treatment, Leave_or_Hospital}),
            headers: {"Content-Type":"application/json"},
        })
    }

    useEffect(() => {
        // getAllStoreData();
        // console.log('ddddd'+Values.Code_No);
        axios
              .get("http://localhost:4000/api/dailydata")
              .then(({ data }) => {
                  // console.log('mydata', data.store);
                  setValues(data.tasks)
              })
      }, )
    
    return(
    <>
    <Navbar/>
            <div id="daily-main">
                <h1>Daily patinents</h1>
                <form action="" onSubmit={addData}>
                    <div className="daily-form-boxone">
                        <div>
                            <label htmlFor="EPF number">EPF number: </label> 
                            <input type="number" id="EPF number" placeholder="number" required min="1" value={EPF_number} onChange={e => setEPF_number(e.target.value)}/>
                        </div>
                    {/*    <div>
                            <label htmlFor="" for="Time">Time</label>
                            <input type="time" id="Time" required/>
                        </div>
                        <div>
                            <label htmlFor="" for="Date">Date</label>
                            <input type="date" id="Date" required />
                        </div>*/}
                        <div>
                            <label htmlFor="Section">Section: </label> 
                            <select name="section" id="section" value={Section} onChange={e => setSection(e.target.value)}>
                                <option value="accounts">Accounts</option>
                                <option value="button">Button</option>
                                <option value="checking_(s)">Checking (s)</option>
                                <option value="Checking A/Wash[Bottoms]">Checking A/Wash[Bottoms]</option>
                                <option value="Checking A/Wash[Tops Japan]">Checking A/Wash[Tops Japan]</option>
                                <option value="Checking A/Wash[Tops]">Checking A/Wash[Tops]</option>
                                <option value="Checking Components">Checking Components</option>
                                <option value="Dispatch">Dispatch</option>
                                <option value="Elecrical">Elecrical</option>
                                <option value="Embroidery[Team 01]">Embroidery[Team 01]</option>
                                <option value="Engineering">Engineering</option>
                                <option value="FB OPA Pants 01">FB OPA Pants 01</option>
                                <option value="FB OPA Pants 02">FB OPA Pants 02</option>
                                <option value="Fusing">Fusing</option>
                                <option value="Human Resources">Human Resources</option>
                                <option value="Lean 01">Lean 01</option>
                                <option value="Lean 02">Lean 02</option>
                                <option value="Lean 03">Lean 03</option>
                                <option value="Lean 04">Lean 04</option>
                                <option value="Lean 05">Lean 05</option>
                                <option value="Lean 06">Lean 06</option>
                                <option value="Lean 07">Lean 07</option>
                                <option value="Lean 08">Lean 08</option>
                                <option value="Lean 09">Lean 09</option>
                                <option value="Lean 10">Lean 10</option>
                                <option value="Lean 11">Lean 11</option>
                                <option value="Lean 12">Lean 12</option>
                                <option value="Line 01/02[Back]">Line 01/02[Back]</option>
                                <option value="Line 01/02[Collar]">Line 01/02[Collar]</option>
                                <option value="Line 01/02[Cuff]">Line 01/02[Cuff]</option>
                                <option value="Line 01/02[Front]">Line 01/02[Front]</option>
                                <option value="Line 01/02[Sleeve]">Line 01/02[Sleeve]</option>
                                <option value="Line 05/06[Back]">Line 05/06[Back]</option>
                                <option value="Line 05/06[Collar]">Line 05/06[Collar]</option>
                                <option value="Line 05/06[Cuff]">Line 05/06[Cuff]</option>
                                <option value="Line 05/06[Front]">Line 05/06[Front]</option>
                                <option value="Line 05/06[Sleeve]">Line 05/06[Sleeve]</option>
                                <option value="Line 07/08[Back]">Line 07/08[Back]</option>
                                <option value="Line 07/08[Collar]">Line 07/08[Collar]</option>
                                <option value="Line 07/08[Cuff]">Line 07/08[Cuff]</option>
                                <option value="Line 07/08[Front]">Line 07/08[Front]</option>
                                <option value="Line 07/08[Sleeve]">Line 07/08[Sleeve]</option>
                                <option value="Mechanical">Mechanical</option>
                                <option value="Medical Center">Medical Center</option>
                                <option value="Numbering">Numbering</option>
                                <option value="Packing[Fty]">Packing[Fty]</option>
                                <option value="Pant Assemble 01">Pants Assemble 01</option>
                                <option value="Production">Production</option>
                                <option value="Quality Control">Quality Control</option>
                                <option value="Section">Section</option>
                                <option value="Security">Security</option>
                                <option value="Special Inspection Team - A">Special Inspection Team - A</option>
                                <option value="Stores">Stores</option>
                                <option value="Technical">Technical</option>
                                <option value="Training Centre">Training Centre</option>

                            </select>
                        </div>
                        <div>
                            <label htmlFor="" for="Time">Time: </label> 
                            <input type="time" id="Time" required value={Time} onChange={e => setTime(e.target.value)}/>
                        </div>  
                    </div>

                    <div className="daily-form-boxtwo">
                        <div>
                            <label htmlFor="Patient Name">Patient Name: </label> 
                            <input type="text" id="Patient Name" value={Patient_Name} onChange={e => setPatient_Name(e.target.value)} required/>
                        </div>
                    
                        <div>
                            <label htmlFor="Signs and Symptoms">Signs and Symptoms: </label> 
                            <input type="text" id="Signs and Symptoms" value={Signs_and_Symptoms} onChange={e => setSigns_and_Symptoms(e.target.value)} required/>
                        </div>

                        <div>
                            <label htmlFor="Treatment">Treatment: </label> 
                            <input type="text" id="Treatment" value={Treatment} onChange={e => setTreatment(e.target.value)} required/>
                        </div>
                    </div>

                    <div className="daily-form-boxthree">
                        

                        <div>
                            <label htmlFor="Leave or Hospital">Leave or Hospital: </label> 
                            <input type="text" id="Leave or Hospital" value={Leave_or_Hospital} onChange={e => setLeave_or_Hospital(e.target.value)}/>
                        </div>
                        <div>
                            <button type="submit" className="chanuka-theam-button">Add</button>
                            <button type="" className="chanuka-theam-button">Delete</button>
                            <button className="chanuka-theam-button">Report</button>
                        </div>
                        
                    {/*<button type="reset">reset</button>*/}
                    </div>
                    
                </form>

                <div id='table'>
      <div style={{ height: 700, width: '100%' }}>
      <DataGrid
      columns={columns}
      rows={Values}
      getRowId={(row) => row._id}
      pageSize={5}
      checkboxSelection
    />
      </div>
      </div>
            </div>

            </>
    )
}


export default DailyData;