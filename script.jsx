

  


let string = "";
const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");

buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    const value = e.target.innerText;

    if (value === "C") {
      string = "";
      display.value = string;
    } else if (value === "←") {
      string = string.slice(0, -1);
      display.value = string;
    } else if (value === "=") {
      try {
        string = eval(string).toString();
        display.value = string;
      } catch {
        display.value = "Error";
        string = "";
      }
    } else {
      string += value;
      display.value = string;
    }
  });
});

// Keyboard support
document.addEventListener("keydown", (e) => {
  const allowedKeys = "0123456789/*-+.%";

  if (allowedKeys.includes(e.key)) {
    string += e.key;
    display.value = string;
  } else if (e.key === "Enter") {
    try {
      string = eval(string).toString();
      display.value = string;
    } catch {
      display.value = "Error";
      string = "";
    }
  } else if (e.key === "Backspace") {
    string = string.slice(0, -1);
    display.value = string;
  } else if (e.key === "Escape") {
    string = "";
    display.value = "";
  }
});


