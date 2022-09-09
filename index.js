// Changes number of grid divs
function resizeGrid(event) {
    //event.target.setAttribute('class', 'filled'); 
    divGrid = [];
    for(var i = 0; i < INPUT; i++) {
        divGrid[i]=document.createElement("div");// create new div
        content.appendChild(divGrid[i]);// add to dom
        divGrid[i].addEventListener('mouseover', changeColor);// Add color change on hover
        
    }
}

// Creates popup window
function

// Changes color of grid divs
function changeColor(event) {
    event.target.setAttribute('class', 'filled'); 
}

// Import content
const heading = document.getElementById('heading');
const content = document.getElementById("content");

// Create grid
var divGrid = [];
for(var i = 0; i < 256; i++) {
    divGrid[i] = document.createElement("div");// create new div
    content.appendChild(divGrid[i]);// add to dom
    divGrid[i].addEventListener('mouseover', changeColor);// Add color change on hover    
}

// Create button
const resizeButton = document.createElement('button');
resizeButton.textContent = 'new sketchpad';// add inner text
heading.appendChild(resizeButton);// add to dom
resizeButton.addEventListener('click', openPopup);// open popup on click
console.log(resizeButton);

// Add event listener to popup

/*
Slide sizer

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