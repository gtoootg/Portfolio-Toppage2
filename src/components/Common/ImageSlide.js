import React,{useState, useEffect} from 'react';
import {useTransition, useSpring, animated, config} from 'react-spring';


function ImageSlide(props){
    
    const transition = useTransition(props.Items[props.count], item => item.id, {
        from:{opacity:0},
        enter:{opacity:props.opacity},
        leave:{opacity:0},
    })

    // const setCountHandler=()=>{
    //     props.setCount(props.count=i)
    // }

    return (
        <div className="container" style={{position:"relative"}}>
            {transition.map(({item, key, props})=>(
                <animated.div
                    className="bg container"
                    style={{...props,
                            // opacity:0.9,
                            backgroundImage: `url(${item.image})`
                            }}
                    key = {key}
                />
                   
               ))}
            <div className="slide-button-container justify-content-center d-flex align-items-center ">
                <div className="slide-button" onClick={()=>props.setCount(0)}></div>
                <div className="slide-button" onClick={()=>props.setCount(1)}></div>
                <div className="slide-button" onClick={()=>props.setCount(2)}></div>
                <div className="slide-button" onClick={()=>props.setCount(3)}></div>
            </div>   
        </div>
     
    )
}

export default ImageSlide;