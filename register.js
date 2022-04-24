if(JSON.parse(localStorage.getItem("users") || "{}")[localStorage.getItem("user")] || false) 
    window.location = "/dash.html";

const form = document.getElementById("form");

const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");
const repeat = document.getElementById("repeat");

const error = document.getElementById("error");

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(checkPasswords()) {
        error.classList.remove("show");

        let users = JSON.parse(localStorage.getItem("users") || "{}");
        users[username.value] = {
            email: email.value,
            password: password.value
        };

        localStorage.setItem("users", JSON.stringify(users));

        window.location = "login.html";
    } else {
        error.classList.add("show");
        error.innerText = "Passwords do not match";
    }
}

function checkPasswords() {
    return password.value === repeat.value;
}