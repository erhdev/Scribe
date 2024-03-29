const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes")

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static assets on LOCK
//app.use(express.static("test"))
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
/* 
   require mongoose,
   connect to database
*/
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://demotime1:demotime1@ds353007.mlab.com:53007/heroku_q9klf87d", { useNewUrlParser: true });

/*
  listen for pings on the routes defined in the routes folder
*/
app.use(routes);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

// dev-4ec7capw <- auth0 domain