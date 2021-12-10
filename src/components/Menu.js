import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 1px solid #f1f1f1;
  background-color:black;
  display: flex;
  align-items:center;
  justify-content: space-between;

`

const Navbar = () => {
  return (
    <Nav>
     
      <Burger /> 
    </Nav>
  )
}

export default Navbar