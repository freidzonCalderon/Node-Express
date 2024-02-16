"use strict";

const users = require("./Data/users.json");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Express
const PORT = 4000;
const app = express();

// BodyParser
app.use(bodyParser.json());

// CORS
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
