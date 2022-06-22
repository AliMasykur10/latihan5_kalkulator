let keluaran = document.getElementById("hasil");

function display(num) {
  keluaran.value += num;
  // keluaran.value = keluaran.value + num;
}

function hasil() {
  try {
    keluaran.value = eval(keluaran.value);
  } catch (err) {
    alert("invalid");
  }
}

function del() {
  keluaran.value = keluaran.value.slice(0, -1);
}

function bersihkan() {
  keluaran.value = "";
}
