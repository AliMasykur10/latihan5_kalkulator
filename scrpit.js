let output = document.querySelector(".output-hasil");

function display(num) {
  output.value += num;
}

function hasil() {
  try {
    output.value = eval(output.value);
  } catch (err) {
    alert("invalid");
  }
}

function bersihkan() {
  output.value = "";
}

// console.log(clear);

function del() {
  output.value = output.value.slice(0, -1);
}

// dark mode

let body = document.querySelector(".body");
modeMalam = document.querySelector(".mode-malam");

function darkmode() {
  body.classList.add("mode-malam");
}

function modeMalam() {
  if ((modeMalam = true)) {
    body.classList.remove("mode-malam");
  }
}
