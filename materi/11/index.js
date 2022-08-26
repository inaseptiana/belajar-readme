// localStorage.setItem("name","skilvul")
const save = () => {
    const usernameInput = document.querySelector("#username").value;
    console.log("button click",usernameInput);
    const passwordInput = document.querySelector("#password").value;
    console.log("button click",passwordInput);

    localStorage.setItem("username",
    usernameInput);
    localStorage.setItem("password",
    passwordInput);

const data = {
    username: usernameInput
}
console.log(data);
const dataJSON = JSON.stringify(data);
console.log(dataJSON);

localStorage.setItem("data", dataJSON);

localStorage.setItem("username",
usernameInput);
localStorage.setItem("password",
passwordInput);
};

