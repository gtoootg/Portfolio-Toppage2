import React,{useState, useEffect} from 'react';
import {useTransition, useSpring, animated, config} from 'react-spring';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import ImageSlide from '../Common/ImageSlide.js';

const mainImageList = [
  {
    id:0,
    name:'airplane',
    image:'image/airplane.jpg',
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
    <div className="TopMessage d-flex align-items-start flex-column justify-content-center">
      <h1>Hello My name is Michihiro Goto</h1>
      <h4>I am Japanese living in Munich,Germany<br/>In this website, you can find things about myself, including my career, portfolio, and travel gallery.</h4>
      <div className="mt-3 mb-3"></div>
      <p id="button-profile"><Link to ="/profile">GO TO SEE MY PROFILE</Link></p>
      <p classNane="mt-3" id="button-portfolio" href="#">GO TO SEE MY PORTFOLIO</p>
      
    </div>
    
  )
}

function Notification(props){
  return(
    <animated.div style={props.style}className="notification">
      <span>&#9650; &#9650; &#9650;</span><br/>
      <span>you can access to the contents from here</span>
    </animated.div>
  )
}

function HomeMain (){
  
  const[count, setCount]=useState(0)
  const[toggle, setToggle] =useState(true)

  // const transition = useTransition(mainImageList[count], item => item.id, {
  //   from:{opacity:0},
  //   enter:{opacity:0.9},
  //   leave:{opacity:0},
  //   // config: config.molasses,
  // })

  const reminderAnimation = useSpring({
    // reset:true,
    to:{opacity: toggle? 0:1},
    from: { opacity: toggle? 1:0 },
    config: { duration: 500 }
  })


  useEffect(() => setTimeout(()=>setToggle(!toggle),1500))


  return(
    <div className="home-main">
    <ImageSlide  
      // style={{position:'relative'}}
      Items={mainImageList}
            count={count}
            setCount={setCount}
            opacity={0.9}
      />
     
      <TopMessage/>
      <Notification style={reminderAnimation}/>
    </div>
    
  )
}


export default HomeMain;

