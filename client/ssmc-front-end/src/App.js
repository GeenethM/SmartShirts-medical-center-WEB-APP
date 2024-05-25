import './App.css';


import { Route, Routes } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Login from './security/Login';
import Store from './pages/Store';
import CalendarSheet from './pages/CalendarSheet';
import DailyData from './pages/DailyData';
import Accidents from './pages/Accidents';
import Pregnent from './pages/Pregnent';
import Patients from './pages/Patients';
import DailyAccident from './pages/DailyAccident';
import Canteen from './pages/Canteen';
import Clinic from './pages/Clinic';
import DailyTasks from './pages/DailyTasks';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/store' element={<Store/>}/>
      <Route path='/calendar' element={<CalendarSheet/>}/>
      <Route path='/calendar/dailytasks' element={<DailyTasks/>}/>
      <Route path='/canteen' element={<Canteen/>}/>
      <Route path='/dailynormal' element={<DailyData/>}/>
      <Route path='/dailyaccident' element={<DailyAccident/>}/>
      <Route path='/accidents' element={<Accidents/>}/>
      <Route path='/pregnent' element={<Pregnent/>}/>
      <Route path='/Clinic' element={<Clinic/>}/>
      <Route path='/allpatients' element={<Patients/>}/>
      </Routes>
    </div>
  );
}

export default App;
