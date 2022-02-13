const express = require("express");
const router = express.Router();
const {
  getAllHotels,
  getHotel,
  addHotel,
} = require("../Controllers/hotelController");

router.get("/hotels/getallhotels", getAllHotels);

router.post("/hotels/gethotel/:id", getHotel);

router.post("/hotels/addhotel", addHotel);

module.exports = router;
