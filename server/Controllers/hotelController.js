const Hotel = require("../models/hotelModel");

async function getAllHotels(req, res) {
  try {
    const hotels = await Hotel.find();
    res.send(hotels);
  } catch (error) {
    return res.status(400).json({ message: "something went wrong" });
  }
}

async function getHotel(req, res, id) {
  id = req.body.params;
  try {
    const hotel = await Hotel.findOne({ _id: id });
    res.send(hotel);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
}

async function addHotel(req, res) {
  const {
    owner,
    hotelName,
    phonenumber,
    email,
    address,
    hotelImage,
    description,
  } = req.body;

  try {
    let isHotelExist = await Hotel.findOne({ hotelName: hotelName });
    console.log(isHotelExist);
    if (!isHotelExist) {
      const newhotel = new Hotel({
        owner,
        hotelName,
        phonenumber,
        email,
        address,
        hotelImage,
        description,
      });
      await newhotel.save();
      res.status(200).send("New Hotel Added Successfully");
    } else {
      res
        .status(400)
        .send(`The Hotel ${hotelName} already Exists, Contact Admin`);
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
}
module.exports = { getAllHotels, getHotel, addHotel };
