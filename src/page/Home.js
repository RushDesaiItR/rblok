


import Particles from 'react-particles-js';
import particlesConfig from '../config/config';
import videoBg from "../assets/World - 2.mp4"
function Home() {
  return (

    <div className="App" style={{ position: 'relative', overflow: "hidden" }}>
      <div style={{ position: 'absolute'}}>
        <Particles height="100vh" width="100vw" params={particlesConfig} />
      </div>
      <video  src={videoBg}   autoPlay={true} type="video/mp4"></video>
   
    <header class="viewport-header">
      <h1>
        COMMING SOON
        <span>RBLOK</span>
        <span style={{fontSize:'20px',color:'#6565FE',letterSpacing:'.3vw'}}>way of innovations</span>
      </h1>
    </header>
    </div>
  );
}

export default Home;
