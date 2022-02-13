var mongoose = require("mongoose");
var bcrypt = require("bcrypt");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 64,
    },
    isAdmin: {
      type: String,
      required: true,
      default: "noAdmin",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  let user = this;
  if (user.isModified("password")) {
    return bcrypt.hash(user.password, 12, function (err, hash) {
      if (err) {
        console.log(`Hashing Err: ${err}`);
        return next(err);
      }
      user.password = hash;
      return next();
    });
  } else {
    return next();
  }
});

userSchema.methods.compare = function (password, next) {
  bcrypt.compare(password, this.password, function (err, match) {
    if (err) {
      console.log("PASSWORD DOES NOT MATCH", err);
      return next(err, false);
    }
    console.log("PASSWORD MATCHES", match);
    return next(null, match);
  });
};

module.exports = mongoose.model("myUser", userSchema);

// export default mongoose.model("myUser", userSchema);
