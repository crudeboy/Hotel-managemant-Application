import React, { useEffect , useState } from 'react'
import axios from "axios";
import Swal from 'sweetalert2'
import Error from "../components/Error";
import Loader from "../components/Loader";
import Success from '../components/Success'
import StripeCheckout from 'react-stripe-checkout'
import Payment from '../components/Payment';
import {v4} from 'uuid';

import moment from "moment"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
AOS.refresh()
function Bookingscreen({match}) {
    const[loading, setloading]=useState(true);
    const[error, seterror]=useState(false)
    const[success, setsuccess]=useState(false)   
    const[room , setroom]=useState()

    const roomid=match.params.roomid;
    console.log(roomid);
    const fromdate=moment(match.params.fromdate , 'DD-MM-YYYY')
    const todate=moment(match.params.todate,'DD-MM-YYYY')
    const totalDays = moment.duration(todate.diff(fromdate)).asDays()+1

   // const totalAmount = totalDays * match.params.rentperday
    console.log("i am in booking pay");
    console.log("transaction id " + v4());
    console.log(JSON.parse(localStorage.getItem('currentUser')).user.Id)
    console.log(JSON.parse(localStorage.getItem('currentUser')).user.name)
    console.log(JSON.parse(localStorage.getItem('currentUser')).user.email)

   const [totalAmount , settotalAmount]=useState()
    useEffect(async() => {
        
        try {
            setloading(true);
            const data = await (await axios.get(`https://hotelbooking-2.herokuapp.com/api/rooms/getRoom/${roomid}`)).data;
            console.log("this is the room from database  " + data);
            setroom(data);
            setloading(false);
            settotalAmount(data.rentperday * totalDays)
          } catch (error) {
            console.log(error);
            setloading(false);
          }
          
    }, [])


    async function bookingHander() {
    
        const bookingDetails ={

        
            userid : JSON.parse(localStorage.getItem('currentUser')).user.Id,
            roomName :room.roomName,
            fromdate : match.params.fromdate,
            todate : match.params.todate,
            totalDays:totalDays,
            totalAmount:totalAmount,
            transactionId:v4(),
            status:"booked"

        }

console.log("this is " + bookingDetails.roomName);
        try {
            setloading(true);
            console.log("this is " + bookingDetails.totalDays);
            const result = await axios.post('/api/bookings/bookRoom' , bookingDetails)
            console.log("this is database result " + result)
            const updateroom = await (await axios.put(`http://localhost:5000/api/rooms/updateRoom/${roomid}`)).data;
           
            setloading(false)
            // Swal.fire('Congrats' , 'Your Room has booked succeessfully' , 'success').then(result=>{
                // window.location.href='/profile'
            // })
        } catch (error) {
            console.log(error);
            setloading(false)
            // Swal.fire('Oops' , 'Something went wrong , please try later' , 'error')
        }
        
    }

    
    const emailaddress = "chinEmordi@gmail.com"
  console.log();
  console.log();
    return (
        <div className='m-5'>
            
            {loading ? (<Loader/>) : error ? (<Error/>) : (

                <div className="row p-3 mb-5 bs" data-aos='flip-right' duration='2000'>

                      <div className="col-md-6 my-auto">
                        
                         <div>
                         <h1>roomName: {room.roomName}</h1>
                           <img src={room.imageurls[0]} style={{height:'400px'}} />
                         </div>

                      </div>
                      <div className="col-md-6 text-right">
                           <div>
                           <h1><b>Booking Details</b></h1>
                           <hr />

                           <p><b>Name</b> : {JSON.parse(localStorage.getItem('currentUser')).user.name}</p>
                           <p>roomName:{room.roomName}</p>
                           <p><b>From Date</b> : {match.params.fromdate}</p>
                           <p><b>To Date</b> : {match.params.todate}</p>
                           <p><b>Max Count </b>: {room.maxcount}</p>
                           </div>
                           
                           <div className='mt-5'>
                           <h1><b>Amount</b></h1>
                           <hr />
                           <p>Total Days : <b>{totalDays}</b></p>
                           <p>Rent Per Day : <b>{room.rentperday}</b></p>
                           <h1><b>Total Amount :#{totalAmount}</b></h1>

                         {/* <button onClick ={bookingHander}>book room, pay later</button> */}
                             <Payment amount={totalAmount} name = {JSON.parse(localStorage.getItem('currentUser')).user.name} email = {JSON.parse(localStorage.getItem('currentUser')).user.email} onClick={bookingHander} />

                          
                           </div>
                          

                           
                      </div>

                </div>

            )}
        
        </div>
    )
}

export default Bookingscreen
