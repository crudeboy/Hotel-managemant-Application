import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
// import roomDatabase from "../roomDatabase";
import Room2 from "./Room2";
//import image from "client/src/screens/images"
//import image from "../images/dexuleroom.jpeg"

export default function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(async () => {
    try {
      const data = (await axios.get("https://hotelbooking-2.herokuapp.com/api/getAllRooms"))
        .data;
      setLoading(true);
      setRooms(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      console.log(error);
      setLoading(false);
    }
  }, []);

  console.log(rooms);
  const names = rooms.map((room) => <h1>{room.name}</h1>);
  console.log(names);
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        {/* {loading? (<h1>Loading....</h1>):error?(<h1>Error</h1>):rooms.map((room)=> <h1>{room.name}</h1>)} */}
        {loading ? (
          <h1>Loading....</h1>
        ) : error ? (
          <h1>Error</h1>
        ) : (
          rooms.map((room) => {
            return (
              <div className="col-md-10 mt-2">
                <Room2 room={room} />
              </div>
            );
          })
        )}

        {/* {names};  */}
      </div>
    </div>
  );
}
