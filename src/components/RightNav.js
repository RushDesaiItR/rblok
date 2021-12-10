import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
    color:white;
    text-decoration:none;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: white;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    z-index:3;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
      text-decoration:none;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li><Link  to="/">RBLOK</Link></li>
      <li> <Link  to="/services">Services</Link></li>
     
      <li> <Link  to="/products">Products</Link></li>
     
              {/* <Link className="a" to="/">RBLOK</Link>
             <Link className="a" to="/services">Services</Link>
             <Link className="a" to="/products">Products</Link> */}
    </Ul>
  )
}

export default RightNav