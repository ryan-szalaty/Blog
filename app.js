const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//AP CONFIG
mongoose.connect("mongodb://localhost:27017/blog_app", {useNewUrlParser: true, useUnifiedTopology: true}); //part after localhost is your database name
app.set("view engine", "ejs");
app.use(express.static("public")); //for using custom stylesheets
app.use(bodyParser.urlencoded({extended: true}));

//MONGOOSE/MODEL CONFIG
let blogSchema = new mongoose.Schema({
	title: String,
	image: String,
	body: String,
	created: {type: Date, default: Date.now}
});

let Blog = mongoose.model("Blog", blogSchema);

/*Blog.create({
	title: "Tales of a (Very) Young Developer",
	image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
	body: "All you need to know is that coronavirus happened.",
});*/

//ROUTES
app.get("/", (req, res) => {
	res.redirect("/blogs");
});

app.get("/blogs", (req, res) => {
	Blog.find({}, (err, blogs) => { //from the database
		if(err) {
			console.log(err);
		} else {
			res.render("index", {blogs: blogs}); //sent through orange parameter
		};
	});
});

app.get("/blogs/new", (req, res) => {
	res.render("form");
	res.redirect("/blogs");
});

/*app.create("/blogs", (req, res) => {
	res.send("Operational");
});*/

app.listen(process.env.PORT || 3000, process.env.IP, () => {
		   console.log("Server initialized.");
		   });