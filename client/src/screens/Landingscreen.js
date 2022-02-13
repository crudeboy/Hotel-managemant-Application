import React from "react";
import moment from "moment"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import './Landingscreen.css'
AOS.init({
    duration:'2000'
});
function Landingscreen() {
  const linkTo = localStorage.getItem('currentUser') ? ("/Hotels"):("/login")
  return (
    <div className="">
      <div className="landing row justify-content-center text-center">
        <div className="col-md-9 my-auto" style={{borderRight:'8px solid white'}}>
          <h2 style={{ color: "white", fontSize: "90px" }} data-aos='zoom-in'>Hotela Classic</h2>
          <h1 style={{ color: "white"}} data-aos='zoom-out' >“There is only one boss. The Guest.</h1>
          
          <Link to={linkTo}>
             <button className='btn btn-primary check'>Get Started</button>
          </Link>
        </div>

        
        
      </div>
   <div>
     
   </div>
      {localStorage.getItem('currentUser') ? (
          <Link to="/Hotels">
          <button className='btn btn-primary'>Get Started</button>
       </Link>

          ):(
            <Link to="/login">
             <button className='btn btn-primary'>Get Started</button>
          </Link>
          )}
     
    </div>
  );
}

export default Landingscreen;
