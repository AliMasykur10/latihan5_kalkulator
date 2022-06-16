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
