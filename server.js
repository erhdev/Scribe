const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static assets on LOCK
app.use(express.static("test"))

/* 
   require mongoose,
   connect to database
*/
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/scribe", { useNewUrlParser: true });

app.use(routes);

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "./test/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});