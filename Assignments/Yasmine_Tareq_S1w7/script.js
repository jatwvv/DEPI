
function addition() {
  var num1 = parseFloat(document.getElementById('inputOne').value);
  var num2 = parseFloat(document.getElementById('inputTwo').value);
  var sum = num1 + num2;
  document.getElementById("resultone").innerHTML = sum;
}

function subtraction() {
  var num1 = parseFloat(document.getElementById('inputOne').value);
  var num2 = parseFloat(document.getElementById('inputTwo').value);
  var sum = num1 - num2;
  document.getElementById("resultone").innerHTML = sum;
}

function multiplication() {
  var num1 = parseFloat(document.getElementById('inputOne').value);
  var num2 = parseFloat(document.getElementById('inputTwo').value);
  var sum = num1 * num2;
  document.getElementById("resultone").innerHTML = sum;
}

function division() {
  var num1 = parseFloat(document.getElementById('inputOne').value);
  var num2 = parseFloat(document.getElementById('inputTwo').value);
  var sum = num1 / num2;
  document.getElementById("resultone").innerHTML = sum;
}

function circle() {
  var radius = parseFloat(document.getElementById('inputCircle').value);
  const pi = 3.14;
  var sum = pi * (radius**2) ;
  document.getElementById("resulttwo").innerHTML = sum;
}
