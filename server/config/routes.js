var DrippesController = require("../controllers/controllers.js");
const path = require('path');

module.exports = function (app) {
  app.post("/createproduct", (req, res) => {
    DrippesController.createProduct(req, res);
  });
  app.post("/createemployee", (req, res) => {
    DrippesController.createEmployee(req, res);
  });
  app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"));
  });
};
