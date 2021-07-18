import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import ImageSlide2 from '../Common/ImageSlide2.js';

import styles from '../../styles/homeMain.module.css'

const mainImageList = [
  {
    id:0,
    name:'kyoto',
    image:'image/kyoto.jpg',
  },
  {
    id:1,
    name:'croatia',
    image:'image/croatia.jpg',
  },
  {
    id:2,
    name:'hongkong',
    image:'image/hongkong.jpg',
  },
  {
    id:3,
    name:'prague',
    image:'image/prague.jpg',
  }
]

function TopMessage() {
  return(
    <div className={styles.homeMain__topMessage}>
      <h1>Hello My name is Michihiro Goto</h1>
      <h4>I am Japanese living in Munich,Germany. Currently, I am looking for a position as Web application developer. I made this website and portfolio to present my motivation and skills of coding language.In this website, you can find things about myself, including my career, portfolio.
      </h4>
      <div className={styles.homeMain__topMessage__buttonContainer}>
        <button type="button" class="btn btn-success">
            <Link 
                to ="/profile" 
                style={{
                  textDecoration:"none",
                  color:"white"
                }}
            >
                  GO TO SEE MY PROFILE
            </Link>
        </button>
        <button type="button" class="btn btn-warning" id="button-portfolio">
          GO TO SEE MY PORTFOLIO
        </button>
      </div>
    </div>
  )
}

function HomeMain (){
  
  const[index, setIndex]=useState(0)
  const[toggle, setToggle] =useState(true)

  const setIndexHandler = ()=>{
    if(index===3){
      setIndex(0)
    }else{
      setIndex(index+1)
    }
  }

  useEffect(() => setTimeout(()=>setToggle(!toggle),1500))

  useEffect(() => setTimeout(setIndexHandler,6000))

  return(
    // <div className="container">
        <div className={styles.homeMain}>
            <ImageSlide2
                  className={styles.homeMain__imageSlide}
                  slides={mainImageList}
                  index={index}
            />
            <TopMessage/>
        </div>
    // </div>
    
  )
}


export default HomeMain;

