"use strict";

const users = require("./Data/users.json");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 4000;

// Express
const app = express();

// BodyParser
app.use(bodyParser.json());

// CORS
app.use(cors());

// GET
app.get("/", (req, res) => {
	console.log(users);
	res.send(users);
});

// POST
app.post("/", (req, res) => {
	const user = req.body;
	const userID = Date.now();
	const userWithID = { ...user, id: userID };
	users.push(userWithID);
	res.send("Added Successfully");
});

app.listen(PORT, () => {
	console.log(`Server running on port http://localhost:${PORT}/`);
});
