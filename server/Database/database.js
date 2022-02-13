const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(() => console.log("The database have been Connected"))
  .catch((err) => console.log(`DB Connection Error${err}`));

mongoose.connection.on("error", (err) => {
  console.log(`DB connection error: ${err.message}`);
});

module.exports = mongoose;
