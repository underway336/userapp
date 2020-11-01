const express = require("express");

const userController = require("../controllers/user.controller.js");
const userRouter = express.Router();


userRouter.get("/create", userController.getCreate);
userRouter.post("/create", userController.addUser);
userRouter.get("/edit/:id", userController.idForEdit);
userRouter.post("/edit", userController.userEdit);
userRouter.post("/delete/:id", userController.deleteUser);

userRouter.use("/", userController.getUsers);



module.exports = userRouter;
