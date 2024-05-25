import { useState } from 'react';
import Navbar from '../componets/Navbar';
import './CalendarSheetStyles.css'
import Calendar from 'react-calendar'
import { Link } from 'react-router-dom';
// import 'react-calendar/dist/Calendar.css';


function CalendarSheet() {
    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(Date);
    }
    return(
        <>
        <Navbar/>
        <div id='box-maincal'>
            <h1>Calendar</h1>
            <div className='changable_box'>
                <Calendar onChange={onChange} value={date} />
                <Link to={'/calendar/dailytasks'} >
                    <div id="calender-hidden-secret">

                    </div>
                </Link>
            </div>
        </div>
        
        </>
    )
}

export default CalendarSheet;