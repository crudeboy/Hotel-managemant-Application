import React from "react";
import { Link } from "react-router-dom";
import Homescreen from "../screens/Homescreen";
import Room from "../components/Room";

export default function Hotels({ hotel }) {
  console.log(hotel);

  //const emailaddress =JSON.parse(localStorage.getItem('currentUser')).email

  function display() {
    //    <hotelname={hotel.hotelName}
    return <Room />;
  }
  return (
    <div className="m-5">
      <div className="row p-3 mb-5 bs" data-aos="flip-right" duration="2000">
        <div className="col-md-6 my-auto">
          <div>
            <Link to={`/home/${hotel.hotelName}`}>
              {/* <Link to="/Home">  */}

              <h1> {hotel.hotelName}</h1>
              <img src={hotel.hotelImage} style={{ height: "400px" }} />
            </Link>
          </div>
        </div>
        <div className="col-md-6 text-right">
          <div>
            <h1>
              <b>description</b>
            </h1>
            <hr />

            {/* <p><b>Name</b> : {JSON.parse(localStorage.getItem('currentUser')).email}</p>  */}

            {/* <Link to={`/Home/${hotel.hotelName}`}>  */}
            {/* <Link to="/Home"> 

                            <h1> {hotel.hotelName}</h1>
                       </Link> */}
            <p>
              <b>location</b> : {hotel.address}
            </p>
            <p>
              <b>description</b> : {hotel.description}
            </p>
          </div>

          <Link to={`/home/${hotel.hotelName}`}>
            <h1>{hotel.hotelName} </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
