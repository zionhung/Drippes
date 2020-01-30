const express = require("express");
const app = express();
const session = require("express-session");

app.use(
  session({
    secret: "keyboardkitteh",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  })
);
app.use(express.static(__dirname + "/public/dist/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./server/config/mongoose')
require("./server/config/routes.js")(app);

app.listen(3000, () => console.log("listening on port 3000"));