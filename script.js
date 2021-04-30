
function calculate () {
  var input1 = document.querySelector('#wallet').value;
  var input2 = document.querySelector('#price').value;
  if (input1 && input2) {
    document.querySelector('#result').value = (input1 / input2).toFixed(2);
  }
}