const togle = document.getElementById("togle");
const del = document.getElementById("del");
const reset = document.getElementById("reset");

let isDarkMode = false; // Track current theme

togle.addEventListener("click", () => {
  if (!isDarkMode) {
    // Switch to dark mode
    document.body.style.backgroundColor = "hsl(225, 21%, 49%)";
    document.getElementById("input").style.backgroundColor =
      "hsl(224, 36%, 15%)";
    document.getElementById("input").style.color = "#ffff";
    document.getElementById("div3").style.backgroundColor =
      "hsl(223, 31%, 20%)";
    document.getElementById("del").style.backgroundColor = "hsl(225, 21%, 49%)";
    document.getElementById("del").style.boxShadow =
      "0px 4px 0px 0px  hsl(222, 26%, 31%)";
    document.getElementById("reset").style.backgroundColor =
      "hsl(225, 21%, 49%)";
    document.getElementById("reset").style.boxShadow =
      "0px 4px 0px 0px  hsl(222, 26%, 31%)";
    document.getElementById("calc").style.color = "#ffff";
    del.addEventListener("mouseover", () => {
      del.style.backgroundColor = "hsl(225, 43%, 68%)";
    });
    del.addEventListener("mouseout", () => {
      del.style.backgroundColor = "hsl(225, 21%, 49%";
    });
    reset.addEventListener("mouseover", () => {
      reset.style.backgroundColor = "hsl(225, 43%, 68%)";
    });
    reset.addEventListener("mouseout", () => {
      reset.style.backgroundColor = "hsl(225, 21%, 49%";
    });
  } else {
    // Switch to light mode (default theme)
    document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
    document.getElementById("input").style.backgroundColor = " hsl(0, 0%, 93%)";
    document.getElementById("input").style.color = " hsl(60, 10%, 19%)";
    document.getElementById("div3").style.backgroundColor = " hsl(0, 5%, 81%)";
    document.getElementById("del").style.backgroundColor =
      "  hsl(185, 42%, 37%)";
    document.getElementById("del").style.boxShadow =
      "0px 4px 0px 0px hsl(185, 58%, 25%)";
    document.getElementById("reset").style.backgroundColor =
      " hsl(185, 42%, 37%)";
    document.getElementById("reset").style.boxShadow =
      "0px 4px 0px 0px hsl(185, 58%, 25%)";
    document.getElementById("calc").style.color = "hsl(60, 10%, 19%)";
    del.addEventListener("mouseover", () => {
      del.style.backgroundColor = "hsl(185, 47%, 54%)";
    });
    del.addEventListener("mouseout", () => {
      del.style.backgroundColor = "hsl(185, 42%, 37%)";
    });
    reset.addEventListener("mouseover", () => {
      reset.style.backgroundColor = "hsl(185, 47%, 54%)";
    });
    reset.addEventListener("mouseout", () => {
      reset.style.backgroundColor = "hsl(185, 42%, 37%)";
    });
  }
  isDarkMode = !isDarkMode; // Toggle the mode
});

let string = "";
let but = document.querySelectorAll(".button");
Array.from(but).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.getElementById("input").value = string;
    } else if (e.target.innerHTML == "RESET") {
      string = "";
      document.getElementById("input").value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = "";
      document.getElementById("input").value = string;
    } else if (e.target.innerHTML == "×") {
      string = string + "*";
      document.getElementById("input").value = string;
    } else if (e.target.innerHTML == "÷") {
      string = string + "/";
      document.getElementById("input").value = string;
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.getElementById("input").value = string;
    }
  });
});
