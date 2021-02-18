let slider = document.querySelector("input[type=range]");
let text = document.querySelector(".progress-bar p span");
let tooltip = document.querySelector(".tooltip p span");

function range(value) {
  let rest = 1000 - value;
  text.innerText = value;
  tooltip.innerText = rest;
}

slider.onchange = function() {
  range(this.value)
}

slider.addEventListener('mousemove', function() {
  var x = (this.value - this.min) * 100 / (this.max - this.min);
  slider.style.backgroundSize = x + "%";
})