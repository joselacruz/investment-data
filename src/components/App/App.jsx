import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AppContext from "../../context/AppContext";
import {useMyContext} from "../../hooks/useMyContext";
import ContainerProducts from '../ContainerProducts/ContainerProducts';
import Header from "../Header/Header";
import Spending from "../Spending/Spending";
import Summary from "../ Summary/Summary";
import './App.css';

const App = () => {
  const myContext = useMyContext();

  return (

    <AppContext.Provider value={myContext}> 
      <Header/>
        <BrowserRouter>  
           <Routes>
                 <Route exact  path='/' Component ={ContainerProducts}/>
                 <Route exact  path='/spending' Component ={Spending}/>
                 <Route exact  path='/financial-summary' Component ={Summary}/>
           </Routes>
     </BrowserRouter>

    </AppContext.Provider> 

 

  
  );
}

export default App;


    {/* <AppContext.Provider value={myContext}> 
      <Header/>
        <ContainerProducts/>
        <h1>Hola Mundo</h1>
    </AppContext.Provider> */}