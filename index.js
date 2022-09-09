// Changes color of grid divs
function changeColor(event) {
    event.target.setAttribute('class', 'filled'); 
}

// Import content
const heading = document.getElementById('heading');
const content = document.getElementById("content");

// Create grid - content child
let divGrid = [];
for(let i = 0; i < 256; i++) {
    divGrid[i] = document.createElement("div"); // create
    divGrid[i].setAttribute('class', 'gridlet'); // add styling
    content.appendChild(divGrid[i]); // add to dom
    divGrid[i].addEventListener('mouseover', changeColor); // change  on hover    
}

// Create popup - header child
const popup = document.createElement('div');
popup.setAttribute('id', 'popup');
popup.style.display = 'none'; // hide
heading.appendChild(popup);// add to header

// Create button - header child
const newGrid = document.createElement('button');
newGrid.textContent = 'new sketch';// add inner text
newGrid.onclick = function openPopup() { // open popup on click
    popup.style.display = "block";
};
heading.appendChild(newGrid); // add to header

// Popup content  - popup child
const popupContent = document.createElement('div');
popupContent.setAttribute('class', 'popup-content');
popup.appendChild(popupContent); // add to popup div

// Close Icon - popup child
const closeIcon = document.createElement('span');
closeIcon.setAttribute('class', 'close');
closeIcon.textContent = '✕';
closeIcon.onclick = function() {popup.style.display = "none";}; // hide popup on click
popupContent.appendChild(closeIcon);// add close icon to popup

// Heading - popup child
const popupHeading = document.createElement('h3');
popupHeading.textContent = "Create new sketch";
popupContent.appendChild(popupHeading);

// Paragraph - popup child
const midText = document.createElement('p');
midText.setAttribute('class', 'midText');
midText.textContent = "For images with more detail, choose larger dimensions.\n For less detail, choose a smaller dimensions.\n To return to your sketch, exit this window."
popupContent.appendChild(midText);

// Slider container - popup child
const sliderDiv = document.createElement('div');
sliderDiv.setAttribute('class', 'slidecontainer');
popupContent.appendChild(sliderDiv);

// Slider - slider child
const slider = document.createElement('input');
slider.setAttribute('id', 'slider');
slider.setAttribute('value', '16');
slider.setAttribute('max', '100');
slider.setAttribute('min', '16');
slider.setAttribute('type', 'range');
sliderDiv.appendChild(slider);

// Dimensions label - slider child
const subText = document.createElement('p');
subText.textContent = 'Dimensions';
sliderDiv.appendChild(subText);

// Dimensions output - slider child
const dimensions = document.createElement('span');
dimensions.setAttribute('id', 'dimensions');
dimensions.textContent = '';
sliderDiv.appendChild(dimensions);

// Add spacing - slider child
const lineBreak = document.createElement('br');
sliderDiv.appendChild(lineBreak);
const lineBreak2 = document.createElement('br');
sliderDiv.appendChild(lineBreak2);

// add slider input to dimensions output
slider.oninput = function() {
    dimensions.textContent = this.value + ' x ' + this.value;
}

// Submit button - slider child
const submit = document.createElement('button');
submit.setAttribute('class', 'submit');
submit.textContent = 'create';
submit.onclick = function refreshGrid(event) {
    let input = dimensions.textContent;
    if (!dimensions.textContent) {
        input = 16; // set default to 16 px
    } else {
            let index = input.search(" ");
            input = parseInt(input.slice(0, index));
    }
    // Calculate new width/height: content size / number of divs - border thickness
    let width = (650 / input) - 2 + "px";

    // Clear old grid
    for(let i = 0; i < divGrid.length; i++){
        divGrid[i].remove();
    }
    
    // Create new grid
    for(let i = 0; i < input ** 2; i++) {
        divGrid[i]=document.createElement("div");// create new div
        divGrid[i].setAttribute('class', 'gridlet');
        divGrid[i].setAttribute('style', `width: ${width}; height: ${width};`);
        divGrid[i].addEventListener('mouseover', changeColor);// Add color change on hover
        content.appendChild(divGrid[i]); // add to dom
    }
    popup.style.display = "none";
}
sliderDiv.appendChild(submit);