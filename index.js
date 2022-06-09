let myName = 'ina'

function greeting () {
    return myName;
}
console.log(myName);

function greeting () {
    let myName = 'ina';
    return myName;
}
console.log(greeting ())
console.log(myName);

const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));