async function createConnectAccount(req, res) {
  console.log("User has been verified", req.headers);
  console.log("You have hit the create connect account end point");
  res.status(200).json({
    status: "ok",
    data: req.user,
  });
}

module.exports = { createConnectAccount };
