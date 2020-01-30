var DrippesController = require("../controllers/controllers.js");
const path = require('path');

module.exports = function (app) {
  app.post("/createproduct", (req, res) => {
    console.log('route:', req.body)
    DrippesController.createProduct(req, res);
  });

  app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"));
  });
};