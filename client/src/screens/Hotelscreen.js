import React, { useState, useEffect } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; 
import Hotels from "../components/Hotels";
import { Calendar } from "react-date-range";
import { DateRangePicker } from "react-date-range";
import moment from "moment";
import './Hotelscreen.css'

import axios from "axios";
import Loader from "../components/Loader";
// import Room from "../components/Room";
import { DatePicker, Space } from "antd";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const { RangePicker } = DatePicker;
function Hotelscreen() {
  const [hotels, sethotels] = useState([]);
  const [hotelImage, sethotelImage] = useState('');
  const [loading, setloading] = useState(false);

  

  useEffect(async () => {
    try {
      setloading(true);
      const hotels = await (await axios.get("https://hotelbooking-2.herokuapp.com/api/hotels/getallhotels")).data;
      console.log(hotels);
      console.log(hotels.hotelName)
      sethotels(hotels);
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  }, []);
  return (
      <div className="row justify-content-center" >
        {loading ? (
          <Loader />
        ) : (
          hotels.map((hotel) => {
            return (
              <div className="col-md-8" data-aos='zoom-in'>
                <Hotels hotel={hotel}/>
              </div>
            );
          })
        )}
      </div>
  );
}
  

export default Hotelscreen

