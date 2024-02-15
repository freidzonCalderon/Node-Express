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
	postRequest();
});

const validation = (username, email) => {
	if (!username || !email) {
		return false;
	} else {
		return true;
	}
};

const postRequest = () => {
	console.log("youre in");
};

const getRequest = () => {
	console.log("youre in");
};
