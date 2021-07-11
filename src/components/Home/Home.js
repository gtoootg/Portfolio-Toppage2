import React from 'react'
import HomeMain from './HomeMain'
import Header from '../Common/Header'
import Footer from '../Common/Footer'

function Home(){
  return(
   <>
     <Header
        backgroundColor="black"
        color="white"
     />
     <HomeMain/>
     <Footer/>
   </>
  )
 }

export default Home;