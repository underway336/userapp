const Sequelize = require("sequelize");
const sequelize = require('./models/index.models.js');

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const userRouter = require("./routes/user.routes.js");

app.set("view engine", "hbs");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", userRouter);
app.use("/create", userRouter);

app.use(function (req, res, next) {
    res.status(404).send("Not Found")
});

const db = require('./models/index.models.js');

const User = db.users;
 

// {force: true} add in sync param for create new table with new params
 db.sequelize.sync().then(() => {
  app.listen(3000, function(){
  console.log("DB SYNC");
  });
}).catch(err=>console.log(err));
