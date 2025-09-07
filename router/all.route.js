
const express = require("express");
const moment = require("moment");
const User = require("../models/userSchema");
const { getAllUsers, renderAddHtml, createNewUser, getSingleUser, renderEditHtml, updateUser, deleteUser, search } = require("../controller/all.controller");

const Router = express.Router();


// Get All Data And Render index.html Page

Router.get("/" , getAllUsers);

// Render add.html Page Create New User And redirect add.html

Router.route("/user/add.html").get(renderAddHtml).post(createNewUser);

//  Get Single user And Detales User And Render view.html

Router.get("/vuew/:userId", getSingleUser);

// Render edit.html UpdatedUser and redirect index.html

Router.route("/edit/:userId").get(renderEditHtml).put(updateUser);

// Delete Users

Router.delete("/delete/:userId", deleteUser);

// Search Of User
Router.post("/search" , search);



module.exports = Router;