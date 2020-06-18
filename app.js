const express = require("express");
const app = express();
const request = require("request");
const mongoose = require("mongoose");


app.set("view engine", "ejs");

app.get("/", (rew, res) => {
	res.render("index");
});

app.listen(process.env.PORT || 3000, process.env.IP, () => {
		   console.log("Server initialized.");
		   });