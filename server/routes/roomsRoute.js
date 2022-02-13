var express = require("express");
var router = express.Router();

const {
  getAllRooms,
  getSingleRoom,
  addRoom,
  getRoomsByHotel,
  updateSingleRoom,
} = require("../Controllers/roomsController");

router.get("/rooms/getAllRooms", getAllRooms);

router.get("/rooms/getRoom/:id", getSingleRoom);

router.put("/rooms/updateRoom/:id", updateSingleRoom);


router.post("/rooms/addroom", addRoom);

router.get("/rooms/getRooms/:hotel", getRoomsByHotel);
module.exports = router;
