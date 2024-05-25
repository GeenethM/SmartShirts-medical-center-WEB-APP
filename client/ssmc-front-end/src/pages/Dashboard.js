import { useState } from "react";
import Navbar from '../componets/Navbar';
import './DashboardStyles.css'
import { UserData, Monthlyacc, yearlyacc, clincpat } from "../componets/DataCharts";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function Dashboard() {
    // const [userData, setUserData] = useState({
    //     labels: UserData.map((data) => data.year),
    //     datasets: [
    //       {
    //         label: "Patients and diseases",
    //         data: UserData.map((data) => data.userGain),
    //         backgroundColor: [
    //           "rgba(75,192,192,1)",
    //           "#ecf0f1",
    //           "#50AF95",
    //           "#f3ba2f",
    //           "#2a71d0",
    //         ],
    //         borderColor: "black",
    //         borderWidth: 2,
    //       },
    //     ],
    //   });



    // First data grid -----------------------------------------------------------------------------------------
    const [acc, setacc] = useState({
        labels: Monthlyacc.map((data) => data.months),
        datasets: [
          {
            label: "Accident Patients",
            data: Monthlyacc.map((data) => data.cases),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      });

    //Second data grid ----------------------------------------------------------------------------------------
    const [yer, setyer] = useState({
        labels: yearlyacc.map((data) => data.year),
        datasets: [
          {
            label: "Yearly injury count",
            data: clincpat.map((data) => data.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      });


    //Third data grid ---------------------------------------------------------------------------------------------
    const [clin, setclin] = useState({
        labels: clincpat.map((data) => data.dis),
        datasets: [
          {
            label: "Clinic patient count",
            data: clincpat.map((data) => data.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      });
    return(
        <>
        <Navbar/>
        <div id='box-main'>
          <div id="heading">
            <h1>Dashboard</h1>
          </div>
            
            <div id='box-div'>
                <div className='box-one'>
                  <h3>Data of patients</h3>
                  <h4>Number of cases per month</h4>
                  <p><br />
                  <br />
                  </p>
                <Bar data={acc} />
                </div>
                <div className='box-two'>
                  <div className="box-text">
                    <h3>Emergency patients</h3>
                    <p>Injuries caused due to accidents</p>
                  </div>
                  <div className="box-line">
                    <Line data={yer} />
                  </div>
                
                </div>
            </div>
            <div id="box-secdiv">
                  <div className="box-three">
                    <h2>Total number of members</h2>
                    <p>654</p>
                  </div>
                  <div className="box-four">
                    <div className="box-four-text">
                      <h2>Patients data</h2>
                      <p>Clinic patients with various diseases</p>
                    </div>
                    <div className="div-pie">
                    <Pie data={clin} />
                    </div>
                  </div>
            </div>
            
        </div>
        
        </>
    )
}

export default Dashboard;

/*<Bar data={userData} /> */
/*<Line data={userData} />  */
/*<Pie data={userData} /> */