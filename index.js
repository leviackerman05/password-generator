let pass1 = document.getElementById("pass-1");
let pass2 = document.getElementById("pass-2");
let pass3 = document.getElementById("pass-3");
let pass4 = document.getElementById("pass-4");
let char = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "<",
  ">",
  "/",
  "?",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "{",
  "}",
];

function generatePassword() {
  for (let i = 0; i < 12; i++) {
    let randomValue1 = char[Math.floor(Math.random() * char.length)];
    pass1.textContent += randomValue1;
  }
  for (let i = 0; i < 12; i++) {
    let randomValue2 = char[Math.floor(Math.random() * char.length)];
    pass2.textContent += randomValue2;
  }
  for (let i = 0; i < 12; i++) {
    let randomValue3 = char[Math.floor(Math.random() * char.length)];
    pass3.textContent += randomValue3;
  }
  for (let i = 0; i < 12; i++) {
    let randomValue4 = char[Math.floor(Math.random() * char.length)];
    pass4.textContent += randomValue4;
  }
}
