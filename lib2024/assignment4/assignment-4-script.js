

function tempConvert() {
  var f = parseInt(document.getElementById("fahrenheit").value);
  var c = (f - 32) / 1.8;
  document.getElementById("celsius").value = c;
}

function clearform() {
  document.getElementById("celsius").value = "";
  document.getElementById("fahrenheit").value = "";
}

