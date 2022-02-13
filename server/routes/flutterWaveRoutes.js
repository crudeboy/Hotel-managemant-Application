var express = require("express");
var router = express.Router();

var { createConnectAccount } = require("../Controllers/flutterWaveController");
var { requireSignin } = require("../middlewares/middleware");

/*Post Request to Register Client*/
router.post("/create-connect-account", requireSignin, createConnectAccount);

module.exports = router;
