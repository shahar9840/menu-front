import { Route, Routes } from "react-router-dom";
import Hello from "./Pages/Hello";
import Menu from "./Pages/Menu";
import './App.css'
import React from "react";
import axios from "axios";




function App() {
  const [categories,setCategories]=React.useState([])
  React.useEffect(()=>{
      axios.get('https://apiresterant1.orangepond-9f760a43.germanywestcentral.azurecontainerapps.io/categories').then((response)=>{
        setCategories(response.data)
       
      })
  },[])

  return (
    <div >
       
          <Routes>
            <Route path="/menu" element={<Menu categories={categories}/>}/>
            <Route path="/" element={<Hello/>}/>
          </Routes>
    </div>
  )
            }
export default App