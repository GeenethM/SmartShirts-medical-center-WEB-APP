import { useState, useEffect } from "react";
import Navbar from '../componets/Navbar';
import './DailyAccidentStyles.css'
import { DataGrid } from '@material-ui/data-grid';
import axios from 'axios'

import {dailyacc} from './data'
const columns = [
  {field: 'DateC',headerName: 'Date',width: 200},
{field: 'Injury',headerName: 'Injury',width: 500},
{field: 'Cotton',headerName: 'Cotton',width: 300},
{field: 'Gauze',headerName: 'Gauze',width: 250},
{field: 'Plaster',headerName: 'Plaster',width: 250},
]

function DailyAccident(){

    //left over data

    const [DateC , setDateC] = useState('');
    const [Injury, setInjury] = useState('');
    const [Cotton , setCotton] = useState('');
    const [Gauze , setGauze] = useState('');
    const [Plaster , setPlaster] = useState('');
    const [Values , setValues] = useState([]);

    async function addData(e) {
    e.preventDefault();
    await fetch("http://localhost:4000/api/dailyaccident", {
        method: 'POST',
        body: JSON.stringify({DateC, Injury, Cotton, Gauze, Plaster}),
        headers: {"Content-Type":"application/json"},
    })
    }

    useEffect(() => {
        // getAllStoreData();
        // console.log('ddddd'+Values.Code_No);
        axios
              .get("http://localhost:4000/api/dailyaccident")
              .then(({ data }) => {
                  // console.log('mydata', data.store);
                  setValues(data.dailyaccident)
              })
      }, )

    return(
        <>
        <Navbar/>
        <div id='dailyacc-main'>
        
        <h1>Daily accidents</h1>

        <div>
            <form action="" onSubmit={addData}>
                <div className='dailyacc-secone'>
                <div>
                    <label htmlFor="dateC">Date: </label>
                    <input type="date" id='dateC' value={DateC} onChange={e => setDateC(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="injury">Injury: </label> 
                    <input type="text" id='injury' value={Injury} onChange={e => setInjury(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="cotton">Cotton: </label> 
                    <input type="number" id='cotton' value={Cotton} onChange={e => setCotton(e.target.value)}/>
                </div>
                </div>
                

                <div className='dailyacc-sectwo'>
                <div> {/* recheack*/}
                    <label htmlFor="gauze">Gauze: </label> 
                    <input type="number" id='gauze' value={Gauze} onChange={e => setGauze(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="plaster">Plaster: </label> 
                    <input type="number" id='plaster' value={Plaster} onChange={e => setPlaster(e.target.value)}/>
                </div>
                <div>
                    <button type="submit" className="chanuka-theam-button">Add</button>
                    <button className="chanuka-theam-button">Delete</button>
                    <button className="chanuka-theam-button">Report</button>
                </div>
                </div>
                
            </form>
        </div>
        <div id='table'>
      <div style={{ height: 700, width: '100%' }}>
      <DataGrid
      columns={columns}
      rows={Values}
      getRowId={(row) => row._id}
      pageSize={10}
      checkboxSelection
    />
      </div>
      </div>
      </div>
        </>
    )
}

export default DailyAccident;