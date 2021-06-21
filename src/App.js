import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Home from'./components/Home/Home.js';
import Profile from './components/Profile/Profile.js';

function App(){
  return(
   <BrowserRouter>
     <div>
       <Route exact path="/" component={Home}/>
       <Route path="/profile" component={Profile}/>
       <Route path="/about" component={about}/>
     </div>
   </BrowserRouter>
  )

 }

//  const home= () => {
//   return(
//     <div>
//       <Home/>
//       <p><Link to="/about">aboutへ</Link></p>
//     </div>
//   )
// }

  const about = () =>{
    return(
      <div>
        <h1>about</h1>
        <p><Link to="/">homeへ</Link></p>
      </div>
    )
  }
    



export default App;
