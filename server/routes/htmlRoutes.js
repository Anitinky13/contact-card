const path = require("path");
res.sendFile(path.join(__dirname, "../../client/dist/index/html"));
module.exports = function (app) {
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../../client/index.html"));
  });
};
