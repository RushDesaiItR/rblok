import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import particlesConfig from './config/config';
import videoBg from "./assets/World - 2.mp4"
import ReactDOM from 'react-dom';  
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Products from "./page/Products"
import Services from "./page/Services"
import Menu from './components/Menu';
import Home from './page/Home';


// function myFunction() {
//   debugger
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }
function App() {
  const [myTopnav, setmyTopnav] = React.useState(false)
  const myFunction = ()=>{
   
    if(myTopnav == false){
         setmyTopnav(true)
    }
    else{
      setmyTopnav(false)
    }
   
  }
  return (
    <div className="row">

    <Router>  
    <Menu/>
    {/* <div  className={(myTopnav ? 'responsive' : 'topnav')}>
   
             <Link className="a" to="/">RBLOK</Link>
             <Link className="a" to="/services">Services</Link>
             <Link className="a" to="/products">Products</Link>
             <button className="a" onClick={()=>myFunction()}>
               <i class="fa fa-bars"></i>
           </button>
           
    </div> */}

     <div className="col-3">
     <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/products" element={<Products/>} />  
         <Route path="/services" element={<Services/>} />
       </Routes>
     </div>
    
  </Router> 
  </div>
  );
}

export default App;




// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Particles from 'react-particles-js';
// import particlesConfig from './config/config';

// import videoBg from "./assets/World - 2.mp4"
// // import Home from './page/Home';

// function App() {
//   return (
//     <div className="App" style={{ position: 'relative', overflow: "hidden" }}>
//       <div style={{ position: 'absolute'}}>
//         <Particles height="100vh" width="100vw" params={particlesConfig} />
//       </div>
//       <video  src={videoBg}   autoPlay={true} type="video/mp4"></video>
//     <div class="overlay" id="particles-js">
//         <div class="topnav" id="myTopnav">
//             <a href="#home" class="active">RBLOK</a>
//             <a href="#news">News</a>
//             <a href="#contact">Contact</a>
//             <a href="#about">About</a>
//             <a href="javascript:void(0);" class="icon" onclick="myFunction()">
//               <i class="fa fa-bars"></i>
//             </a>
//           </div>
//     </div>
//     <header class="viewport-header">
//       <h1>
//         COMMING SOON
//         <span>RBLOK</span>
//         <span style={{fontSize:'20px',color:'#62F9D5',letterSpacing:'.3vw'}}>way of innovations</span>
//       </h1>
//     </header>
//     </div>
//   );
// }

// export default App;