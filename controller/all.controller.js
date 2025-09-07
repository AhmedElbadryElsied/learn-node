
const moment = require("moment");
const User = require("../models/userSchema");


// Get All Data And Render index.html Page

const getAllUsers = (req, res) => {
  User.find()
    .then((users) => {
      res.render("index", { users, moment });
    })
    .catch((err) => {
      console.log(err);
    });
}

// Render add.html Page 

const renderAddHtml = (req, res) => {
  res.render("./user/add");
}

// Create New User And redirect add.html

const createNewUser = (req, res) => {
  User.create(req.body)
    .then(() => {
      res.redirect("/user/add.html");
    })
    .catch((error) => console.log(error));
}


//  Get Single user And Detales User And Render view.html

const getSingleUser =  (req, res) => {
  const id = req.params.userId;

  User.findById(id)
    .then((user) => {
      res.render("./user/view", { user, moment });
    })
    .catch((err) => console.log(err));
}


// Render edit.html

const  renderEditHtml = (req, res) => {
  User.findOne({ _id: req.params.userId })
    .then((user) => {
      res.render("./user/edit", { user });
    })
    .catch((err) => console.log(err));
}

// UpdatedUser and redirect index.html

const updateUser = (req, res) => {
  const id = req.params.userId;

  User.updateOne({ _id: id }, { ...req.body })
    .then((data) => {
      res.redirect("/");
    })
    .catch((error) => console.log(error));
}

// Delete Users

const deleteUser = (req, res) => {
  User.deleteOne({ _id: req.params.userId })
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => console.log(err));
}

// Search

const search = (req , res)=>{
  const nameSearching = req.body.search;

 
  User.find({$or:[{fristName : nameSearching} , {lastName : nameSearching}]}).then((result)=>{
    res.render("./user/search" , {result} )
  }).catch((error)=>{
    console.log(error);
  })
}


module.exports = {getAllUsers , renderAddHtml , createNewUser ,getSingleUser , renderEditHtml , updateUser , deleteUser , search};