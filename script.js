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

    // ✅ Keyboard Support + Highlight
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

      // Highlight button
      let btn = document.querySelector(`button[data-key="${key}"]`);
      if (btn) {
        btn.classList.add("active");
        setTimeout(() => btn.classList.remove("active"), 200);
      }
    });

    // 🌙 Dark Mode Toggle
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      themeBtn.textContent = document.body.classList.contains("dark") ? "🌙" : "☀️";
    });