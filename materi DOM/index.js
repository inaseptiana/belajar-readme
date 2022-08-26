//const text = document.createElement("p");
//text.textContent = "saya suka coding";

//document.querySelector()

const username = document.querySelector("#username");

console.log(username.value);

//
const buttonLogin = document.querySelector
("#login");

buttonLogin.onclick = function () {
    alert(username.value + password.value);
};

// buttonLogin.addEventListener("click",
// function () {
//     alert("tes");
// });

const user = { nama: "ina"}
document.querySelector("#object1").
innerHTML = user.nama;

const murid = ["baharudin", "arelia"]

const kelas = [
    {nama: "arelia", nilai: 100},
    {nama: "ina", nilai: 100},
    {nama: "azalika", nilai: 100},
    {nama: "ananda", nilai: 100},
];
let lish = document.querySelector("#arr");
kelas.map((item) => {
    let li = document.createElement("li");
    li.innerText = "name : " + item.nama + 
    ", nilai :" + item.nilai;
    lish.appendChild(li);
})

