import React from "react";
import ReactDom from "react-dom/client"
import NavBar from "./components/navBar/NavBar";
import './App.css'
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";


import {Action_Url,Original_Url } from "./config/config";



const AppLayout = ()=>{

    return(
        <>
        <NavBar/>
        <Banner/>
        <RowPost title="Netflix Originals" url={Original_Url}/> 
        <RowPost title="Action" isSmall url={Action_Url} /> 
        </>
    )
}


const root = ReactDom.createRoot(document.getElementById('root'))

root.render(<AppLayout/>)