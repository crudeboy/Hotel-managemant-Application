var express = require("express");
var router = express.Router();

const {
  bookings,
  bookRoom,
  bookingsbyHotel,
  // cancelBooking,
} = require("../Controllers/bookingsController");
// var { requireSignin } = require("../middlewares/middleware");

/*Post Request to Register Client*/
router.get("/bookings/getbookings", bookings);

router.get("/bookings/getbookings/:hotelid", bookingsbyHotel);


router.post("/bookings/bookRoom", bookRoom);

// router.post("/bookings/cancelbooking", cancelBooking);

module.exports = router;
 