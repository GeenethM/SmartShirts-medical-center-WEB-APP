import "./DailyTasksStyles.css";
import { DataGrid } from '@material-ui/data-grid';
import {DT} from './data'
import Navbar from "../componets/Navbar";


const columns = [
    {field: 'ideee',headerName: 'EPF',width: 500},
    {field: 'panam',headerName: 'Patient Name',width: 300},
    {field: 'whatsup',headerName: 'Task',width: 250},
    {field: 'timiii',headerName: 'Time',width: 250},
    ]

function DailyTasks(){
    return(
        <>
        <Navbar/>
        <div id="dailytasks-main">
            <h1>Tasks Today</h1>
            <div id="dailytasks-table">
                <DataGrid
      columns={columns}
      rows={DT}
      pageSize={10}
    />
            </div>
            
        </div>
        
        
        </>
    )
}

export default DailyTasks;