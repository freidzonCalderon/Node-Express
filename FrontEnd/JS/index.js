"use strict";

const username = document.getElementById("username");
const email = document.getElementById("email");
const registerUserBtn = document.getElementById("registerUserBtn");
const tableBody = document.getElementById("usersTableBody");
const refreshListBtn = document.getElementById("refreshListBtn");

registerUserBtn.addEventListener("click", (e) => {
	e.preventDefault();
	if (!validation(username.value, email.value)) {
		alert("Username and Email are required");
		return;
	}
	postRequest(username.value, email.value);
	username.value = "";
	email.value = "";
});

refreshListBtn.addEventListener("click", () => {
	fillTable();
});

const validation = (username, email) => {
	if (!username || !email) {
		return false;
	} else {
		return true;
	}
};

const postRequest = (username, email) => {
	fetch("http://localhost:4000/", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		referrerPolicy: "no-referrer",
		body: JSON.stringify({
			username: username,
			email: email,
		}),
	}).catch((err) => {
		console.error(err);
	});
};

const getRequest = async () => {
	try {
		const res = await fetch("http://localhost:4000/");
		const data = await res.json();
		console.log(data);
		return data;
	} catch (err) {
		console.err(`Error fetching data: ${err}`);
	}
};

const fillTable = async () => {
	const users = await getRequest();
	tableBody.innerHTML = "";
	users.map((user) => {
		const row = tableBody.insertRow();
		const idCell = row.insertCell();
		const usernameCell = row.insertCell();
		const emailCell = row.insertCell();

		idCell.textContent = user.id;
		usernameCell.textContent = user.username;
		emailCell.textContent = user.email;
	});
};
