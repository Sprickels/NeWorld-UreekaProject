import React from "react"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Countries from "./components/Negara"
import Header from './components/header'
// import Filter from "./components/filter"
import Negara_detail from "./components/Negara_detail"
import Home from "./components/Home"
import ErrorPage from "./components/error"
import Aboutus from "./components/Aboutus"

const url = 'https://restcountries.com/v3.1/all'

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        {/* Route for the list of countries */}
        <Route
          path="/Negara"
          element={
            <>
              <Countries />
            </>
          }
        />

        {/* Route for country details */}
        <Route 
          path="/Negara/:name" 
          element={<Negara_detail />} 
        />

        <Route 
          path="/Home" 
          element={<Home />} 
        />
        <Route 
          path="/Aboutus" 
          element={<Aboutus />} 
        />

        <Route 
          path="*" 
          element={<ErrorPage />} 
        />
      </Routes>
    </Router>
  );
}

export default App