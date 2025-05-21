// Calculator Functions
function appendValue(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    document.getElementById("display").value = eval(document.getElementById("display").value);
  } catch {
    document.getElementById("display").value = "Error";
  }
}

// Theme Toggle
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    toggleBtn.textContent = "🌙 Dark Mode";
  } else {
    toggleBtn.textContent = "☀️ Light Mode";
  }
});
