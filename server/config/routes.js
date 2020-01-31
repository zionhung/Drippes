var DrippesController = require("../controllers/controllers.js");
const path = require('path');

module.exports = function (app) {
  app.post("/createproduct", (req, res) => {
    DrippesController.createProduct(req, res);
  });
  app.post("/createemployee", (req, res) => {
    DrippesController.createEmployee(req, res);
  });
  app.get("/getemployees", (req, res) => {
    DrippesController.getEmployees(req, res);
  });
  app.delete("/removeemployee/:id", (req, res) => {
    DrippesController.removeEmployee(req, res);
  });
  app.put("/makeAdmin", (req, res) => {
    DrippesController.makeAdmin(req, res);
  });
  app.put("/makeemployee", (req, res) => {
    DrippesController.makeEmployee(req, res);
  });
  app.put("/changeconvertrate", (req, res) => {
    DrippesController.changeConvertrate(req, res);
  });


  app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"));
  });
};
