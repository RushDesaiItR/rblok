

import Particles from 'react-particles-js';
import particlesConfig from '../config/config';
import videoBg from "../assets/World - 2.mp4"
import { useNavigate } from 'react-router-dom';
import React from 'react';
function Home() {
  let navigate = useNavigate();
  // React.useEffect(()=>{
  //   navigate('/products');
  // },[])
  return (

    <div className="App" style={{ position: 'relative', overflow: "hidden" }}>
      <div style={{ position: 'absolute'}}>
        <Particles height="100vh" width="100vw" params={particlesConfig} />
      </div>
      <video  src={videoBg}   autoPlay={true} type="video/mp4"></video>
   
    <header class="viewport-header">
      <h1 style={{color:"white"}}>
        COMMING SOON
        {/* #DE3C2A
        #0D50AB */}
        <span  className='h1-span'>RBLOK</span>
        <span style={{fontSize:'20px',color:'#0D50AB',letterSpacing:'.3vw'}}>way of innovations</span>
      </h1>
    </header>
    </div>
  );
}

export default Home;
