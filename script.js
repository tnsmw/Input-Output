
function iced () {
   var input2 = document.querySelector('#price');
   input2.value = 2.65;
   document.querySelector("#iced-coffee").style.opacity = 1;
}

function latte () {
   var input2 = document.querySelector('#price');
   input2.value = 3.65;
   document.querySelector("#caffe-latte").style.opacity = 1;
}

function frapp () {
   var input2 = document.querySelector('#price');
   input2.value = 4.95;
   document.querySelector("#matcha-frappuccino").style.opacity = 1;
}

function calculate () {
  var input1 = document.querySelector('#wallet').value;
  var input2 = document.querySelector('#price').value;
  if (input1 && input2) {
    document.querySelector('#result').value = (input1 / input2).toFixed(2);
  }
}