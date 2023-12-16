import React from 'react'
import api from "./api/axiosConfig"
import {useState,useEffect} from 'react'
import layout from './Components/Layout'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from './Components/Home/Home'
import "./App.css"
import Header from './Components/Header/Header'

function App() {

  const [movies, setMovies] = useState([])

  // async await- important because we don't want to block the main thread and create unresponsiveness the user when fetching data.

  /*try catch - Promise erors might occur and we dont want code to continue executing in this state because it will lead to unexpected behavior
  its better catch the error and keep going
  */
  const getMovies = async ()=>{

    try{
      const response = await api.get("api/v1/movies");
      console.log(response.data);
      setMovies(response.data);
    }
    catch(err){
      console.log(err);
    }
    
  }

  /* useEffect-  Without one any change would cause a re render.
  When this function should be ran because there is no depenency in the array, it will only run once being mounted.
   if there is an element inside this means it will be re run when that element is changed. 
   Using Use Effect is important to avoid side effects from life cylce class components.
   */

   const getMovieData = async(movieId)=>{
    try{
      const response = await api.get("/api/v1/movies");
      setMovies(response.data);l
    }
   }
  useEffect(()=>{
    getMovies();
  },[]);

  return (
    
         <div className="App">
          
            <Router>
            <Header/>
          {/* Routes are needed because when there are links requests are being made to the server requiring more time to procces
        and interact with back end. Instead react-router-dom intercepts this requests and swiftly redirects it itself.
        */}
          <Routes path ="/" element ={layout}>
            <Route path = "/" element={<Home movies = {movies}/>}/>
            <Route path = "Reviews/:movieId" element={<Reviews getMovieData ={getMovieData} reviews ={reviews} setReviews = {setReviews}></Reviews>}

          </Routes>
        </Router>
         </div>
        
    
     

    
  )
}

export default App

