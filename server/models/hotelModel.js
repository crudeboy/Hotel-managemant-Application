var mongoose = require("mongoose");
const { Schema } = mongoose;

const hotelSchema = new Schema(
  {
    owner: {
      type: String,
      required: true,
    },
    hotelName: {
      type: String,
      required: true,
    },
    phonenumber: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    hotelImage: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("hotels", hotelSchema);
