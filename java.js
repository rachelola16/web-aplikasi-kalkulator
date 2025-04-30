let currentInput = ""; // variabel string
let screen = document.getElementById("screen");

function press(value) {
  currentInput += value; // operasi string
  screen.innerText = currentInput;
}

function calculate() {
  try {
    // konversi ke ekspresi aritmatika dan hitung
    let result = eval(currentInput); // gunakan operator aritmatika: + - * /
    screen.innerText = result;
    currentInput = result.toString(); // simpan hasil untuk operasi lanjutan
  } catch (error) {
    screen.innerText = "Error!";
    currentInput = "";
  }
}

function clearScreen() {
  currentInput = "";
  screen.innerText = "0";
}
