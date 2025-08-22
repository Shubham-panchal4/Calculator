let display = document.getElementById("display");
let themeBtn = document.getElementById("themeBtn");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

document.addEventListener("keydown", function(event) {
  let key = event.key;

  if (!isNaN(key) || ["+", "-", "*", "/", "."].includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    calculateResult();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key.toLowerCase() === "c") {
    clearDisplay();
  }

  let btn = document.querySelector(`button[data-key="${key}"]`);
  if (btn) {
    btn.classList.add("active");
    setTimeout(() => btn.classList.remove("active"), 200);
  }
});

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "🌙";
  } else {
    themeBtn.textContent = "☀️";
  }
});