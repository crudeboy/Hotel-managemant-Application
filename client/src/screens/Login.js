import React, { useState, useEffect } from "react";
import {useDispatch , useSelector} from 'react-redux'
import axios from "axios";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Success from '../components/Success'
import './Registerscreen.css'

export default function Registerscreen() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const[loading, setloading]=useState(false)
  const[error, seterror]=useState(false)
  const[success, setsuccess]=useState(false) 

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

  async function login(){

      const user = {
      email,
      password,
    };
    try {
      seterror(false)
      setloading(true);
      const result = await (await axios.post("https://hotelbooking-2.herokuapp.com/api/users/login", user)).data;
      localStorage.setItem("currentUser", JSON.stringify(result));
      window.location.href = "/";
    } catch (error) {
      seterror(true);
      setloading(false);
      console.log(error);
    }

  }

  return (
    <div className='register'>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 rounded">

        {loading && <Loader />}
          {error && <Error error="Invalid Credentials" />}
          {success && <Success success="User Login Successful" />}
          <div className="title">
          <h2 className="text-center m-2 " style={{ fontSize: "35px", color: '#ffff', }}>
            LOGIN
          </h2>
          </div>
          <div className="InputContainer">
            <input required type="text" placeholder="email" className="form-control mt-1" value={email} onChange={(e)=>{setemail(e.target.value)}} />
            <input
              type="password"
              placeholder="password"
              className="form-control mt-1"
              value={password}
              required
              onChange={(e)=>{setpassword(e.target.value)}}
            />
            {/* <div className = "buttonContainer"> */}
            <button onClick={login} className="btn btn-primary rounded-pill mt-3 mb-3 ">LOGIN</button>
            {/* </div> */}
            <br/>
            <a style={{color:'black'}} href="/register"><p>Click Here To Register</p></a>
          </div>
        </div>
      </div>
    </div>
  );
}