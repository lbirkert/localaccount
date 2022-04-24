const data = document.getElementById("data");
const logout = document.getElementById("logout");
const delete_account = document.getElementById("delete-account");

let users = JSON.parse(localStorage.getItem("users") || "{}");
let username = localStorage.getItem("user");
let user = users[username] || false;

if(!user) window.open("login.html", "_self");

data.innerHTML = `
    <h1>Welcome ${username}</h1>
    <p>Your email: ${user.email}</p>
`

logout.addEventListener("click", function() {
    localStorage.removeItem("user");
    window.open("login.html", "_self");
});

delete_account.addEventListener("click", function() {
    delete users[username];
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.removeItem("user");
    window.open("login.html", "_self");
});