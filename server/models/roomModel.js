var mongoose = require("mongoose");
const { Schema } = mongoose;

const roomSchema = new Schema({
  hotelName: {
    type: String,
    required: true,
  },
  roomName: {
    type: String,
    required: true,
  },

  maxcount: {
    type: Number,
    required: true,
  },
  phonenumber: {
    type: Number,
    required: true,
  },
  rentperday: {
    type: Number,
    required: true,
  },
  currentbookings: [],
  imageurls: [],
  type: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("rooms", roomSchema);
