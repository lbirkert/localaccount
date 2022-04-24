if(JSON.parse(localStorage.getItem("users") || "{}")[localStorage.getItem("user")] || false)
    window.open("dash.html", "_self");

const form = document.getElementById("form");

const username = document.getElementById("username");
const password = document.getElementById("password");

const error = document.getElementById("error");

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(checkPasswords()) {
        error.classList.remove("show");

        localStorage.setItem("user", username.value);

        window.location = "dash.html";
    } else {
        error.classList.add("show");
        error.innerText = "Wrong username or password";
    }
}

function checkPasswords() {
    let users = JSON.parse(localStorage.getItem("users") || "{}");
    let user = users[username.value];
    return user && password.value === user.password;
}