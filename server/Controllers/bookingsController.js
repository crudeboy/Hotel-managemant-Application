const clusterbooking = require("../models/bookingModel");
const Room = require("../models/roomModel");
const moment = require("moment");

async function bookings(req, res) {
  try {
    let allBooks = await clusterbooking.find({});
    return res.status(200).send(allBooks);
  } catch (err) {
    res.status(400).json({ err });
  }
}

async function bookingsbyHotel(req, res, hotelinput) {
  hotelinput = req.params.id;
  try {
    let allBooksByHotel = await clusterbooking.find({ hotelid: hotelinput });
    return res.status(200).send(allBooksByHotel);
  } catch (err) {
    res.status(400).json({ err });
  }
}

async function bookRoom(req, res) {
  const {
    roomName,
    hotelid,
    userid,
    fromdate,
    todate,
    totalAmount,
    totalDays,
    transactionId,
    status,
  } = req.body;

  const newBooking = new clusterbooking({
    roomName,
    userid,
    hotelid,
    fromdate,
    todate,
    totalAmount,
    totalDays,
    transactionId,
    status,
  });

  const booked = await newBooking.save();
  try {
    res.status(200).json({
      booked,
    });
  } catch (err) {
    res.status(400).json({ err });
  }

  // const temporaryRoom = await Room.findOne({ _id: room_id });

  // temporaryRoom.currentbookings.push({
  //   bookingId: booked._id,
  //   fromdate: moment(fromdate).format("DD-MM-YY"),
  //   todate: moment(todate).format("DD-MM-YY"),
  //   userid: userid,
  //   bookingstats: booked.status,
  // });

  // await temporaryRoom.save();
}

// async function cancelBooking(req, res) {
//   const { bookingid, roomid } = req.body;
//   try {
//     const bookingitem = await Booking.findOne({ _id: bookingid });
//     bookingitem.status = "cancelled";
//     await bookingitem.save();
//     const room = await Room.findOne({ _id: roomid });
//     const bookings = room.currentbookings;
//     const temp = bookings.filter(
//       (booking) => booking.bookingid.toString() !== bookingid
//     );
//     console.log(temp);
//     room.currentbookings = temp;
//     await room.save();

//     res.send("Booking deleted successfully");
//   } catch (error) {
//     console.log(error);
//     return res.status(400).json({ message: "something went wrong" });
//   }
// }

module.exports = { bookings, bookRoom, bookingsbyHotel };
