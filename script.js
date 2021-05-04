
function iced () {
   var input2 = document.querySelector('#price');
   input2.value = 2.65;
   document.querySelector("#iced-coffee").style.opacity = 1;
   document.querySelector("#caffe-latte").style.opacity = .5;
   document.querySelector("#matcha-frappuccino").style.opacity = .5;
}

function latte () {
   var input2 = document.querySelector('#price');
   input2.value = 3.65;
   document.querySelector("#caffe-latte").style.opacity = 1;
   document.querySelector("#iced-coffee").style.opacity = .5;
   document.querySelector("#matcha-frappuccino").style.opacity = .5;
}

function frapp () {
   var input2 = document.querySelector('#price');
   input2.value = 4.95;
   document.querySelector("#matcha-frappuccino").style.opacity = 1;
   document.querySelector("#iced-coffee").style.opacity = .5;
   document.querySelector("#caffe-latte").style.opacity = .5;
}

function calculate () {
  var input1 = document.querySelector('#wallet').value;
  var input2 = document.querySelector('#price').value;
  if (input1 && input2) {
    document.querySelector('#result').value = (input1 / input2).toFixed(2);
    showdrinks()
  }
}

/*function showdrinks () {
   console.log("showdrinks");
   // if input2.value = 3.65
   // var image
   // get total
   // show images depending on total (4 loop?)
}

function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = "iced-coffee.png";
    img.width = 50;
    img.height = 50;
    img.alt = drink;

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);*/

function showDrinks() {
    let result = +document.getElementById('result').value; // take value as a number
    let drinks = document.getElementById('amount');

    if (isNaN(result) || result < 1) { // move exit condition to top and exit early
        alert("Not enough money.")
        return;
    }

/*   var showDrinks = document.createElement("img");
   document.querySelector(".container").append(showDrinks);
   if input2.value = 2.65 {
      showDrinks.img.src = "iced-coffee.png";
   }
   if input2.value = 3.65 {
      showDrinks.img.src = "caffè-latte.png";
   }
   if input2.value = 4.95 {
      showDrinks.img.src = "matcha-frappuccino.png";
   }
   for (var i = 0; i <= 5; i++) {

   }
*/
}