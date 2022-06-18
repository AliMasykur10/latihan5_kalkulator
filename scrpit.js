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

function del() {
  output.value = output.value.slice(0, -1);
}

// dark mode

function darkmode() {
  document.body.classList.toggle("dark-mode");
}
