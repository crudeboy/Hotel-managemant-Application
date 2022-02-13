const rooms = require("../models/roomModel");
const Hotels = require("../models/hotelModel");

async function getAllRooms(req, res) {
  try {
    const allRooms = await rooms.find({});
    return res.status(200).send(allRooms);
  } catch (err) {
    return res.status(200).json({ err });
  }
}

async function getSingleRoom(req, res, id) {
  id = req.params.id;
  try {
    let room = await rooms.findOne({ _id: id });
    return res.status(200).send(room);
  } catch (err) {
    return res.status(200).json({ err });
  }
}

async function updateSingleRoom(req, res, id) {
  id = req.params.id;
  try {
    let room = await rooms.findOne({ _id: id });
    console.log(room);
    room.maxcount = room.maxcount - 1;
    // console.log(room);
    updatedRoom = await room.save();
    console.log("room says:", room);
    console.log("updatedroom says:", updatedRoom);

    return res.status(200).send(room);
  } catch (err) {
    return res.status(400).json({ err });
  }
}

async function getRoomsByHotel(req, res, hotel) {
  hotel = req.params.hotel;
  try {
    let room = await rooms.find({ hotelName: hotel });
    return res.status(200).send(room);
  } catch (err) {
    return res.status(200).json({ err });
  }
}

async function addRoom(req, res) {
  const {
    hotelName,
    roomName,
    rentperday,
    maxcount,
    description,
    phonenumber,
    type,
    image1,
    image2,
    image3,
  } = req.body;

  const newroom = new rooms({
    hotelName,
    roomName,
    rentperday,
    maxcount,
    description,
    phonenumber,
    type,
    imageurls: [image1, image2, image3],
    currentbookings: [],
  });
  try {
    await newroom.save();
    res.send("New Room Added Successfully");
  } catch (error) {
    return res.status(400).json({ error });
  }
}

module.exports = {
  getAllRooms,
  getSingleRoom,
  addRoom,
  getRoomsByHotel,
  updateSingleRoom,
};
