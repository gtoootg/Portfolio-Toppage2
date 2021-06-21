import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import HomeMain from './HomeMain'
import Header from '../Common/Header'


function Home(){
  return(
   <div className="home container">
     <Header/>
     <HomeMain/>
   </div>
  )

 }


export default Home;