// Changes number of grid divs
// function refreshGrid(event) {
//     event.target.value === null ? let input = 16; : let input = event.target.value;
//     //event.target.setAttribute('class', 'filled'); 
//     divGrid = [];
//     for(var i = 0; i < INPUT; i++) {
//         divGrid[i]=document.createElement("div");// create new div
//         content.appendChild(divGrid[i]);// add to dom
//         divGrid[i].addEventListener('mouseover', changeColor);// Add color change on hover
        
//     }
// }

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
    divGrid[i].setAttribute('class', 'gridlet');
    content.appendChild(divGrid[i]);// add to dom
    divGrid[i].addEventListener('mouseover', changeColor);// Add color change on hover    
}


// Create popup
const popup = document.createElement('div');
popup.setAttribute('id', 'popup');
popup.style.display = 'none';
heading.appendChild(popup);// add hidden popup to dom

// Create button
const newGrid = document.createElement('button');
newGrid.textContent = 'new sketch';// add inner text
newGrid.onclick = function openPopup() { // open popup on click
    popup.style.display = "block";
};
heading.appendChild(newGrid);// add to dom

// Popup content
const popupContent = document.createElement('div');
popupContent.setAttribute('class', 'popup-content');
popup.appendChild(popupContent);// add content to popup div

// Close Icon
const closeIcon = document.createElement('span');
closeIcon.setAttribute('class', 'close');
closeIcon.textContent = '✕';
closeIcon.onclick = function() {popup.style.display = "none";};
popupContent.appendChild(closeIcon);// add close icon to popup content

// heading
const popupHeading = document.createElement('h3');
popupHeading.textContent = "Create new sketch";
popupContent.appendChild(popupHeading);

// Paragraph
const midText = document.createElement('p');
midText.setAttribute('class', 'midText');
midText.textContent = "For images with more detail, choose larger dimensions.\n For less detail, choose a smaller dimensions.\n To return to your sketch, exit this window."
popupContent.appendChild(midText);

// Slider container
const sliderDiv = document.createElement('div');
sliderDiv.setAttribute('class', 'slidecontainer');
popupContent.appendChild(sliderDiv);

// Slider <input type="range" min="16" max="100" value="16" id="slider">
const slider = document.createElement('input');
slider.setAttribute('id', 'slider');
slider.setAttribute('value', '16');
slider.setAttribute('max', '100');
slider.setAttribute('min', '16');
slider.setAttribute('type', 'range');
sliderDiv.appendChild(slider);

// Dimensions label <p>Dimensions: <span id="dimensions"></span></p>
const subText = document.createElement('p');
subText.textContent = 'Dimensions';
sliderDiv.appendChild(subText);

// Dimensions output
const dimensions = document.createElement('span');
dimensions.setAttribute('id', 'dimensions');
dimensions.textContent = '';
sliderDiv.appendChild(dimensions);
const lineBreak = document.createElement('br');
sliderDiv.appendChild(lineBreak);
const lineBreak2 = document.createElement('br');
sliderDiv.appendChild(lineBreak2);

// add slider input to span
slider.oninput = function() {
    dimensions.textContent = this.value + ' x ' + this.value;
}

// Submit button
const submit = document.createElement('button');
submit.setAttribute('class', 'submit');
submit.textContent = 'create';
submit.onclick = function refreshGrid(event) {
    let input = dimensions.textContent;
    let size = 0;
    if (!dimensions.textContent) {
        input = 16; // set default to 16 px
    } else {
            let index = input.search(" ");
            input = parseInt(input.slice(0, index));
            console.log("input", input);
    }
    // Calculate new width/height: content size / number of divs - border thickness
    let width = (650 / input) - 2 + "px";
    console.log("width:", width);

    // Clear old grid
    for(var i = 0; i < divGrid.length; i++){
        divGrid[i].remove();
    }
    console.log("grid removed");
    
    // Create new grid
    for(var i = 0; i < input ** 2; i++) {
        divGrid[i]=document.createElement("div");// create new div
        divGrid[i].setAttribute('class', 'gridlet');
        divGrid[i].setAttribute('style', `width: ${width}; height: ${width};`);
        divGrid[i].addEventListener('mouseover', changeColor);// Add color change on hover
        content.appendChild(divGrid[i]); // add to dom
    }
    popup.style.display = "none";
}
sliderDiv.appendChild(submit);




/*
<div id="myPopup" class="popup">
**didn't add id
  <div class="popup-content">
    <span class="close">&times;</span>
    <p>Some text in the popup.</p>
    <!-- Slide sizer -->
    <div class="slidecontainer">
        <input type="range" min="16" max="100" value="16" class="slider" id="slider">
        <p>Dimensions: <span id="dimensions"></span></p>
    </div>
    <button class=submit onClick=refreshGrid></button>
  </div>

// Add event listener to popup buttons
// slider element
var slider = document.getElementById("myRange");
var output = document.getElementById("dimensions");
output.innerHTML = "";

slider.oninput = function() {
  output.innerHTML = this.value + " x " + this.value;
}
</script>

</body>
</html>

*/