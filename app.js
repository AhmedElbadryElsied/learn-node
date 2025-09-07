const express = require("express");
const mongoose = require("mongoose");
const liveReload = require("livereload");
const connectliveReaload = require("connect-livereload");
const path = require("path");
const methodOverride = require("method-override");
const Router = require("./router/all.route");
const app = express();
const port = process.env.PORT || 4000;

const liveReloadServer = liveReload.createServer();

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

//====> Outo Refresh <=======
liveReloadServer.watch(path.join(__dirname, "public"));

app.use(connectliveReaload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

app.use(express.static("public"));

app.set("view engine", "ejs");


app.use(Router)


// The Url Not Found

app.all("/:notresourse" , (req, res) => {
  res.json({ massege: "The Url Is Not Found" });
});



mongoose
  .connect(
    "mongodb+srv://devahmed:pqhHGgGMGcAtvvPN@cluster0.poqwwx7.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
    console.log("The date base is sucsesfoly");
  })
  .catch((error) => {
    console.log(error);
  });
