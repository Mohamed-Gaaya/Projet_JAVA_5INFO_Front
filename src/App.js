import './App.css';
import React from 'react';
import {BrowserRouter,Route, Routes } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';

function App() {
  return (

    <BrowserRouter>
           <div>
       <HeaderComponent />
   
          <Routes>
          
              <Route path = "employees" element = {<ListEmployeeComponent/>}></Route>
              <Route path = "add-employee" element = {<AddEmployeeComponent/>} ></Route>
              <Route path = "edit-employee/:id" element = {<AddEmployeeComponent/>}></Route>
              <Route path = "" element = {<ListEmployeeComponent/>}></Route>
            </Routes>
       
            <FooterComponent />
        </div>
        </BrowserRouter>
        
    /*<div>
       <HeaderComponent />
    
      
      <BrowserRouter>
       
   
          <Routes>
          
              <Route path = "employees" component = {ListEmployeeComponent}></Route>
              <Route path = "add-employee" component = {AddEmployeeComponent} ></Route>
              <Route path = "edit-employee/:id" component = {AddEmployeeComponent}></Route>
              <Route path = "" component = {ListEmployeeComponent}></Route>
            </Routes>
       
    
        </BrowserRouter>
        <FooterComponent />
        </div>
   */
  );
}

export default App;