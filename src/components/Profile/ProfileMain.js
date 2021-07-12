import React,{useState, useEffect} from 'react';

// import './index.css';
import ImageSlide2 from '../Common/ImageSlide2.js';
import styles from '../../styles/profileMain.module.css'

  function Introduction(){
      return(
        <div className={styles.profileMain__introduction}>
          <img id="topImage" src="image/profilepicture.jpg" alt="kyoto"/>
          <div className={styles.profileMain__introduction__textContainer}>
            <h1>Michihiro Goto</h1>
            <h2>
              I am from Japan, and 29 years old living in Munich. After 5 years of my career in Mechanical Engineering field in Japan and Germany, I started having the strong motivation to start new career as Web application developer. Currently, I am seeking positions of Junior Web developer in Munich and made this portfolio to present my motivation and skills of web application using modern language including React Hooks, TypeScript and Laravel. Please do not hesitate to contact me in case of any questions and interest.
            </h2>
          </div>
        </div>
      )
  }


  function Accordion(props){

    return(
      <div class="accordion-item">
      <h2 class="accordion-header" id={`heading${props.Id}`}>
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${props.Id}`} aria-expanded="false" aria-controls={`collapse${props.Id}`}>
          {props.value}
        </button>
      </h2>
      <div id={`collapse${props.Id}`} class="accordion-collapse collapse" aria-labelledby={`heading${props.Id}`} data-bs-parent="#accordionExample">
        <div class="accordion-body">
          {props.text}
        </div>
      </div>
    </div>
    )
  }

  function Basic(){
    const text= 
      <div className={styles.basic}>
        <div className={styles.basic__textContainer}>
          <p><strong>Name:</strong>Michihiro Goto</p>
          <p><strong>Birthday:</strong>31/01/1992</p>
          <p><strong>HomeTown:</strong>Otsu,Japan. </p>
          <p><strong>Current ving place:</strong>Bogehausen, Munich, Germany</p>
          <p>I grew up in the City of Otsu, where we have the biggest lake in Japan called Lake Biwa. Otsu is adjacent to Kyoto which is well known as the ancient capital of Japan, and it is only 15 minutes by train.</p>
        </div>
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500943.1722930991!2d135.4402043598674!3d35.02493259430951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600174ece1b10c2d%3A0x8bccbbd569908646!2sOtsu%2C%20Shiga%2C%20Japan!5e0!3m2!1sen!2sde!4v1615105485806!5m2!1sen!2sde"  height="280" allowfullscreen="" loading="lazy" className="container col-sm-5"></iframe>
      </div>
    return(
        <Accordion value={"Basic of Myself"} text={text} Id={"One"}/>
    )

  }

  function Education(){
    const[index, setIndex] = useState(0)

    const PhotoList=[
      {
        id:0,
        name:'KIT_1',
        image:'image/KIT_1.jpg',
      },
      {
        id:1,
        name:'KIT_3',
        image:'image/KIT_3.jpg',
      },
      {
        id:2,
        name:'KIT_4',
        image:'image/KIT_4.jpg',
      }
    ]

    const setIndexHandler = ()=>{
      if(index===2){
        setIndex(0)
      }else{
        setIndex(index+1)
      }
    }
  

    useEffect(() => setTimeout(setIndexHandler,6000))


    const text= 
      <div className={styles.education}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Degree</th>
              <th scope="col">University</th>
              <th scope="col">Year</th>
              <th scope="col">City</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td >Master of Sicence in Mechanical Engineering</td>
              <td>Kyoto Institute of Technology</td>
              <td>Kyoto Japan</td>
              <td>Apr.2014 - Mar.2016</td>
            </tr>
            <tr>
              <td >Bachelor of Sicence in Mechanical Engineering</td>
              <td>Kyoto Institute of Technology</td>
              <td>Kyoto Japan</td>
              <td>Apr.2010 - Mar.2014</td>
            </tr>
          </tbody>
        </table>
        <div className={styles.education__lowerContainer}>
          <div className={styles.education__lowerContainer__text}>
                I majored in Mechanical engineering in Kyoto institute of technology (KIT).
                During total 6 years of bachelor and master courses in KIT, I spent the precious time to learn the basic of mechanical engineering which led to my current career as automotive engineer in Germany. Not only for this, it was definetely worth being in Kyoto which attracts many international students around the world. Over this 6 years in Kyoto, I could nourish my own international mind, and make many connections with foreign people.
          </div>
          <ImageSlide2
            slides={PhotoList}
            index={index}
            className={styles.education__lowerContainer__image}
            />
        </div>
      </div>
    return(
        <Accordion value={"Education of myself"} text={text} Id={"Two"}/>
    )

  }

  function CareerOfMyself(){
    const text = 
      <div>
          <table className="table mb-4">
            <thead>
              <tr>
                <th scope="col">Degree</th>
                <th scope="col">University</th>
                <th scope="col">City</th>
                <th scope="col">Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td >Master of Sicence in Mechanical Engineering</td>
                <td>Kyoto Institute of Technology</td>
                <td>Kyoto Japan</td>
                <td>Apr.2014 - Mar.2016</td>
              </tr>
              <tr>
                <td >Bachelor of Sicence in Mechanical Engineering</td>
                <td>Kyoto Institute of Technology</td>
                <td>Kyoto Japan</td>
                <td>Apr.2010 - Mar.2014</td>
              </tr>
            </tbody>
          </table>
      </div>
    return(
      <div>
        <Accordion value={"Career of myself"} text={text} Id={"Three"}/>
      </div>
    )
  }

  function WhyAmILivingInGermany(){
    const text = <div>"aaa"</div>
    return(
      <div>
        <Accordion value={"Why am I living in Germany?"} text={text} Id={"Four"}/>
      </div>
    )
  }

  function WhatIsThePleasureOfMylife(){
    const text = <div>"aaa"</div>
    return(
      <div>
        <Accordion value={"What is the pleasure of my life?"} text={text} Id={"Five"}/>
      </div>
    )
  }

  function WhyDoIHaveThisPortfolio(){
    const text = <div>"aaa"</div>
    return(
      <div>
        <Accordion value={"Why do I have this portfolio?"} text={text} Id={"Six"}/>
      </div>
    )
  }

  function ProfileMain(){
    return(
      <div className={styles.profileMain}>
          <Introduction/>
          <div className={styles.profileMain__accordion}>
              <Basic/>
              <Education/>
              <CareerOfMyself/>
              <WhyAmILivingInGermany/>
              <WhatIsThePleasureOfMylife/>
              <WhyDoIHaveThisPortfolio/>
          </div>
      </div>
    )
  }

export default ProfileMain


