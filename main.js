const info = document.querySelector(".info");
const passField = document.querySelector("#password");

let password = "";

function generatePassword() {
    password = "";
    let length = 8;
    let chars = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()` ";
    let n = chars.length;

    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * n));
    }
    passField.value = password;
};

function copytext() {
    navigator.clipboard.writeText(password);
    info.style.opacity = "1";
    setTimeout(function () {
        info.style.opacity = "0"
    }, 1500)
};