import { useState, useEffect } from "react";
import Navbar from '../componets/Navbar';
import './CanteenStyles.css'
import { DataGrid } from '@material-ui/data-grid';
import axios from 'axios'

import {canteen} from './data'
const columns = [
{field: 'Date',headerName: 'Date',width: 500},
{field: 'Morning_Meal',headerName: 'Morning meal',width: 300},
{field: 'Noon_Meal',headerName: 'Noon meal',width: 250},
]

function Canteen(){

    const [Date , setDate] = useState('');
    const [Morning_Meal, setMorning_Meal] = useState('');
    const [Noon_Meal , setNoon_Meal] = useState('');
    const [Values , setValues] = useState([]);

    async function addData(e) {
        e.preventDefault();
        await fetch("http://localhost:4000/api/canteen", {
            method: 'POST',
            body: JSON.stringify({Date, Morning_Meal, Noon_Meal}),
            headers: {"Content-Type":"application/json"},
        })
    }

    useEffect(() => {
        // getAllStoreData();
        // console.log('ddddd'+Values.Code_No);
        axios
              .get("http://localhost:4000/api/canteen")
              .then(({ data }) => {
                  // console.log('mydata', data.store);
                  setValues(data.canteen)
              })
      }, )

    return(
        <>
        <Navbar/>
        <div id='conteen-main'>
            <h1>Canteen</h1>
            <div>
                <form action="" onSubmit={addData}>
                    <div className='canteen-form'>
                        <div>
                            <label htmlFor="date">Date: </label>
                            <input type="date" id='date' value={Date} onChange={e => setDate(e.target.value)}/>
                        </div>

                        <div>
                            <label htmlFor="morning_meal">Morning Meal: </label>
                            <input type="text" id='morning_meal' value={Morning_Meal} onChange={e => setMorning_Meal(e.target.value)}/>
                        </div>

                        <div>
                            <label htmlFor="noon_meal">Noon Meal: </label>
                            <input type="text" id='noon_meal' value={Noon_Meal} onChange={e => setNoon_Meal(e.target.value)}/>
                        </div>
                        <div>
                            <button type='submit' className="chanuka-theam-button">Add</button>
                            <button className="chanuka-theam-button">Delete</button>
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
      pageSize={5}
      checkboxSelection
    />
      </div>
      </div>
        </div>
        
        </>
    )
}

export default Canteen;