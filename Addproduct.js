import logo from './logo.svg';
import './App.css';
import Button from'@mui/material/Button'
import TextField from '@mui/material/TextField';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Container from '@mui/material/Container';
import Header from './header/Header';

import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <div></div>,
  },
  /*{
    path: "/home",
    element: <Home />,
  }*/
]);



function App() {
 
  const divStyles = {
    boxShadow: '1px 2px 5px #1A237E',
    margin: '2em',
    padding: '1em',
    
  };
  
  return (
    
    <div className="App" >
      <div >
      <BrowserRouter>
        <Header />
      </BrowserRouter>
      <RouterProvider router={router} />
      
  </div>
  
  <div style={divStyles} >
     <Container maxWidth="sm" >
    
      <h1 style={{ color: '#2ccce4' }} className="text-3xl font-bold">
      ADD PRODUCT
      </h1>
     
      <div style={divStyles}>
      <label style={{ color: '#2ccce4' }}>Enter product name</label>
      <TextField variant="filled" size='small' placeholder="NAME" fullWidth>
      </TextField><br />
      </div>
      
      <div style={divStyles}>
      <label style={{ color: '#2ccce4' }}>Enter product image</label>
      <TextField type="file" variant="filled" size='small' placeholder='IMAGE' fullWidth>
      </TextField>
      
      </div>
      <div style={divStyles}>
      <label style={{ color: '#2ccce4' }}>Enter product price</label>
      <TextField variant="filled" size='small' placeholder="PRICE" fullWidth>
      </TextField>
      </div>
      <div>
      <Button class="bg-gradient-to-r from-purple-400 to cyan-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6">
        add product
      </Button>
      </div>
      
      </Container>
      </div>
  </div>
  
  );
 
}

export default App;
