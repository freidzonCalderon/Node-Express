"use strict";

// Fake Data
const users = require("./Data/users.json");

// Express
const express = require("express");
const PORT = 4000;
const app = express();

// BodyParser
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// CORS
const cors = require("cors");
app.use(cors());

// GET Request
app.get("/", (req, res) => {
	console.log(users);
	res.send(users);
});

// POST Request
app.post("/", (req, res) => {
	const user = req.body;
	const userID = Date.now();
	const userWithID = { ...user, id: userID };
	users.push(userWithID);
	res.send("Added Succesfuly");
});

app.listen(PORT, () => {
	console.log(`Server running on port http://localhost:${PORT}/`);
});
