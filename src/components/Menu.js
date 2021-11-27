import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Menu() {
  return (
    <div class="topnav" id="myTopnav">
             <Link to="/">RBLOK</Link>
             <Link to="/services">News</Link>
             <Link to="/products">Contact</Link>
          
             <Link href="javascript:void(0);" class="icon" onclick="myFunction()">
               <i class="fa fa-bars"></i>
          </Link>
    </div>
  );
}

export default Menu;
