function convertNumber() {
  let number = document.getElementById("inputNumber").value;
  let fromBase = Number(document.getElementById("fromBase").value);
  let toBase = Number(document.getElementById("toBase").value);

  let decimalNumber = parseInt(number, fromBase);

  if (isNaN(decimalNumber)) {
    document.getElementById("result").value = "invalid number";
    return;
  }

  let result = decimalNumber.toString(toBase);

  document.getElementById("result").value = result;
}
