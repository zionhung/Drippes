const express = require("express");
const app = express();
const session = require("express-session");

//session
app.use(
  session({
    secret: "keyboardkitteh",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  })
);
app.use(express.static(__dirname + '/drippes/dist/drippes'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//mongoose section
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/drippes_api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

require("./server/config/models.js");
require("./server/config/routes.js")(app);

const path = require('path');
app.all("*", (req, res, next) => {
  res.sendFile(path.resolve("./drippes/dist/drippes/index.html"))
});

//port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("listening on port 3000"));