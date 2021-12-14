import React, { Component } from 'react';
import "./Product.css"
import { useNavigate } from 'react-router-dom';
// let navigate = useNavigate();
//   React.useEffect(()=>{
//     navigate('/products');
//   },[])
export default function Products (){
  let navigate = useNavigate();
  //   React.useEffect(()=>{
  //    setTimeout(()=>{
  //     navigate('/home');
  //    },4000)
  //  },[])
    return (
      <div className="mainbg">

     
      <div className="products">
        <h2>
        How Do
We Build Great<br/>
Products?
        </h2>
         <div class="wrapper">
  <div class="box a">
  <div class="loadingio-spinner-gear-axntyhr25qa"><div class="ldio-y20nqb6thtr">
<div><div></div><div></div><div></div><div></div><div></div><div></div></div>
</div></div>
  </div>
  <div class="box b"><div class="loadingio-spinner-bean-eater-nsrlop50jco"><div class="ldio-zpn5mq3jl7">
<div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div>
</div></div></div>
  <div class="box c">
  <div class="loadingio-spinner-magnify-x0c0fr0asa8"><div class="ldio-qxoz6ggtm7">
<div><div><div></div><div></div></div></div>
</div></div>
  </div>
  <div class="box d"><div class="loadingio-spinner-disk-hiwucbb04rd"><div class="ldio-kwdxooxxs">
<div><div></div><div></div></div>
</div></div></div>
</div>
          {/* <h5 style={{fontSize:"30px",lineHeight:"30px"}}>How Do<br/>
          We Build Great<br/>
          Products?<br/>
          </h5>

          <div class="loadingio-spinner-gear-qzbn8wap1ya"><div class="ldio-8ew6pqo1id">
            <div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          </div></div> */}
        </div>
        </div>
    );
  }

