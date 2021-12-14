import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import particlesConfig from './config/config';
import videoBg from "./assets/World - 2.mp4"
import ReactDOM from 'react-dom';  
import { BrowserRouter as Router, Routes, Route, Link,useRoutes } from "react-router-dom";
import Products from "./page/Products"
import Services from "./page/Services"
import Menu from './components/Menu';
import Home from './page/Home';
import { useNavigate } from 'react-router-dom';
function AppRaer() {
  // We removed the <BrowserRouter> element from App because the
  // useRoutes hook needs to be in the context of a <BrowserRouter>
  // element. This is a common pattern with React Router apps that
  // are rendered in different environments. To render an <App>,
  // you'll need to wrap it in your own <BrowserRouter> element.
  let element = useRoutes([
    // A route object has the same properties as a <Route>
    // element. The `children` is just an array of child routes.
    { path: '/', element: <Home /> },
    { path:"/products", element: <Products/>}, 
    { path:"/services", element: <Services/>} 
  
  ]);

  return element;
}
function App() {
 
  return (
    <div className="row">

    <Router>  
    <Menu/>


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



