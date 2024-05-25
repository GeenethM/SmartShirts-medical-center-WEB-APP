import { useState } from "react";
import { useEffect } from "react";
import Navbar from '../componets/Navbar';
import './StoreStyles.css'
import { getAllStoreData } from "../Functions/HandleApi";
import axios from 'axios'

//import { useEffect, useState } from 'react';
//import { Avatar, Box, Typography } from '@mui/material';
//import { DataGrid } from '@mui/x-data-grid';
import { DataGrid } from '@material-ui/data-grid';
// import { useValue } from '../../../context/ContextProvider';
// import {data} from './data'

// import { getUsers } from '../../../actions/user';
// import moment from 'moment';
// import { grey } from '@mui/material/colors';
// import UsersActions from './UsersActions';

// const columns = [
//   {field: 'id',headerName: 'Code no',width: 200},
// {field: 'name',headerName: 'Description',width: 500},
// {field: 'email',headerName: 'Unit',width: 300},
// {field: 'telephone',headerName: 'Quantity',width: 250},
// ]

const columns = [
  {field: 'Code_No',headerName: 'Code no',width: 200},
{field: 'Description',headerName: 'Description',width: 500},
{field: 'Unit',headerName: 'Unit',width: 300},
{field: 'Quantity',headerName: 'Quantity',width: 250},
]


function Store({ setSelectedLink, link }) {

  // const {
  //   state: { users },
  //   dispatch,
  // } = useValue();

  
  // const getUsers = async (dispatch) => {
  //   const result = await fetchData({ url, method: 'GET' }, dispatch);
  //   if (result) {
  //     dispatch({ type: 'UPDATE_USERS', payload: result });
  //   }
  // };


  // useEffect(() => {
  //   setSelectedLink(link);
  //   if (users.length === 0) getUsers(dispatch);
  // }, []);


    // const {
    //     state: { users },
    //     dispatch,
    //   } = useValue();
    
    //const [tabledata, settabledata] = useState([]);
      //const [pageSize, setPageSize] = useState(5);
      //const [rowId, setRowId] = useState(null);
    
      // useEffect(() => {
      //  fetch('./data.json')
      //  .then((data) => data.json)
      //  .then((data) => settabledata(data))
      // });

    
      //  const columns = useMemo(
      //    () => [
      //   {field: 'photoURL',headerName: 'Avatar',width: 60},
      //   {field: 'name',headerName: 'Name',width: 60},
      //   {field: 'email',headerName: 'Email',width: 60},
      //   {field: 'telephone',headerName: 'Telephone',width: 60},
      //    ]



          /*{
            field: 'photoURL',
            headerName: 'Avatar',
            width: 60,
            renderCell: (params) => <Avatar src={params.row.photoURL} />,
            sortable: false,
            filterable: false,
          },
          { field: 'name', headerName: 'Name', width: 170 },
          { field: 'email', headerName: 'Email', width: 200 },
          {
            field: 'role',
            headerName: 'Role',
            width: 100,
            type: 'singleSelect',
            valueOptions: ['basic', 'editor', 'admin'],
            editable: true,
          },
          {
            field: 'active',
            headerName: 'Active',
            width: 100,
            type: 'boolean',
            editable: true,
          },
          {
            field: 'createdAt',
            headerName: 'Created At',
            width: 200,
            renderCell: (params) =>
              moment(params.row.createdAt).format('YYYY-MM-DD HH:MM:SS'),
          },
          { field: '_id', headerName: 'Id', width: 220 },
          {
            field: 'actions',
            headerName: 'Actions',
            type: 'actions',
            renderCell: (params) => (
              <UsersActions {...{ params, rowId, setRowId }} />
            ),
          },
        ],*/
        //[rowId]

        
        
      //   ,{field: 'photoURL',headerName: 'Avatar',width: 60},
      //   {field: 'name',headerName: 'Name',width: 60},
      //   {field: 'email',headerName: 'Email',width: 60},
      //   {field: 'telephone',headerName: 'Telephone',width: 60},
      //   ], []

      // );

      // const users = userMemo(
      //   () => [
      //     {"safsa"},
      //     {"afdsa"},
      //     {"fsadasa"},
      //     {"dsfas"},
      //   ],[]
      //   );

      // const [id , setminID] = useState('');
      const [Code_No , setCode_No] = useState('');
      const [Description, setDescription] = useState('');
      const [Unit , setUnit] = useState('');
      const [Quantity , setQuantity] = useState('');
      const [Values , setValues] = useState([]);
      // const datad = Object.entries(Values);

      async function addData(e) {
        e.preventDefault();
        await fetch("http://localhost:4000/api/store", {
            method: 'POST',
            body: JSON.stringify({ Code_No, Description, Unit, Quantity}),
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
      }, )

      const getAllStoreData = () => {
        axios
        .get("http://localhost:4000/api/store")
        .then(({ data }) => {
            // console.log('mydata', data.store);
            setValues(data.store)
        })
      }

      // useEffect(() => {
      //   async function getRecords() {
      //     const response = await fetch("http://localhost:4000/api/store");
      
      //     if (!response.ok) {
      //       const message = `An error occurred: ${response.statusText}`;
      //       window.alert(message);
      //       return;
      //     }
      
      //     const records = await response.json();
      //     console.log(records);
      //     setValues(records.Values);
      //   }
      
      //   getRecords();
      
      //   return;
      // }, []);

      // useEffect(() => {
      //   const fetchData = async () => {
      //     try {
      //       const response = await axios.get("http://localhost:4000/api/store");
      //       setValues(response.Values);
      //     } catch (error) {
      //       console.error(error);
      //     }
      //   };
    
      //   fetchData();
      // }, []);

      

      // useEffect(() => {
      //   setValues(getdata)
      // }, [])

     return(
        <>
        <Navbar/>
        <div id='box-main'>
        <h1>Store</h1>

        <div className='outer'>
          <form action=""  onSubmit={addData}>
            <div className='form'>
            {/* <div>
                <label htmlFor="id">id: </label>
                <input type="number" id='id' value={id} onChange={e => setminID(e.target.value)}/>
              </div> */}
              <div>
                <label htmlFor="code_no">Code no: </label>
                <input type="number" id='code_no' value={Code_No} onChange={e => setCode_No(e.target.value)}/>
              </div>

              <div>
                <label htmlFor="description">Description: </label>
                <input type="text" id='description' value={Description} onChange={e => setDescription(e.target.value)}/>
              </div>

              <div>
                <label htmlFor="unit">Unit: </label>
                <input type="text" id='unit' value={Unit} onChange={e => setUnit(e.target.value)}/>
              </div>

              <div>
                <label htmlFor="quantity">Quantity: </label>
                <input type="number" id='quantity' value={Quantity} onChange={e => setQuantity(e.target.value)}/>
              </div>
              <div>
                <button className="chanuka-theam-button" type='submit'>Add</button>
                
              </div>
              <div>
              <button className="chanuka-theam-button">Delete</button>
              </div>
            </div>
            
          </form>
          
        </div>
    {/*    <Box
      sx={{
        height: 400,
        width: '100%',
      }}
    >
      <Typography
        variant="h3"
        component="h3"
        sx={{ textAlign: 'center', mt: 3, mb: 3 }}
      >
        Manage Users
      </Typography>*/}
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
      {/* <div style={{ height: 700, width: '100%' }}>
      <DataGrid
      columns={columns}
      rows={data}
      pageSize={2}
      checkboxSelection
    />
      </div> */}
      
 {/*}   </Box>    */} 
        </>
    )
}

export default Store;







//getRowId={(row) => row._id}
/*} rowsPerPageOptions={[5, 10, 20]}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        getRowSpacing={(params) => ({
          top: params.isFirstVisible ? 0 : 5,
          bottom: params.isLastVisible ? 0 : 5,
        })}
        sx={{
          [`& .${gridClasses.row}`]: {
            bgcolor: (theme) =>
              theme.palette.mode === 'light' ? grey[200] : grey[900],
          },
        }}
      onCellEditCommit={(params) => setRowId(params.id)}  */