// Create grid
// Add event listener to grid divs on hover
// Create button
// Add event listener to button that generates popup on click
// Add event listener to popup

/*
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body{
  background-color: #2e2e2d;
  color: white;
}
.slidecontainer {
  width: 100%;
}

.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 15px;
  border-radius: 5px;
  background: #f5c7b8;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #79d9bf;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #04AA6D;
  cursor: pointer;
}
</style>
</head>
<body>

<h1>Custom Range Slider</h1>
<p>Drag the slider to display the current value.</p>

<div class="slidecontainer">
  <input type="range" min="16" max="100" value="16" class="slider" id="myRange">
  <p>Dimensions: <span id="demo"></span></p>
</div>
<button class=submit></button>

<script>
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = "";

slider.oninput = function() {
  output.innerHTML = this.value + " x " + this.value;
}
</script>

</body>
</html>

*/