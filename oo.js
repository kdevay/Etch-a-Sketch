
// Changes color of grid divs
function changeColor(event) {
    event.target.setAttribute('class', 'filled'); 
}

// Calculate width/height of pixel
function getPixelWidth(pixelCount) {
    const totalGridWidth = 550;
    const gridBorderWidth = 3;
    const pixelBorderWidth = 2;

    const GridWidth = totalGridWidth - gridBorderWidth;
    const totalPixelWidth = GridWidth / pixelCount;
    const pixelWidth = totalPixelWidth - (pixelCount * pixelBorderWidth);
    return pixelWidth;
}

// Import root div
const root = document.getElementById("root");

// Create Etch-A-Sketch module
const etchAsketch = document.createElement("div");
etchAsketch.setAttribute('id', 'etchAsketch');
root.appendChild(etchAsketch);


const grid = {};
const aboutPopup = {};
const dimensionsPopup {};


// Add Etch-A-Sketch children //
// Logo div 
const logoDiv = document.createElement('div'); 
logoDiv.setAttribute('id', 'logoDiv'); 
etchAsketch.appendChild(logoDiv);
const logo = document.createElement('h1'); 
// Logo
logo.setAttribute('class', 'font-effect-emboss');
logo.textContent = 'Swipe A Sketch';
logoDiv.appendChild(logo);

// Sketch area div
const gridDiv = document.createElement('div');
gridDiv.setAttribute('id', 'gridDiv');
etchAsketch.appendChild(gridDiv);
// Sketch area pixels
let pixels = [];
for(let i = 0; i < 256; i++) {
    pixels[i] = document.createElement("div"); // create
    pixels[i].setAttribute('class', 'pixel'); // add styling
    gridDiv.appendChild(pixels[i]); // add to dom
    pixels[i].addEventListener('mouseover', changeColor); // change  on hover    
}

// Dial div
const dialDiv = document.createElement('div'); // dial container
dialDiv.setAttribute('class', 'dialDiv');
etchAsketch.appendChild(dialDiv);
// left dial - opens 'dimensions' popup
const leftDial = document.createElement('button'); 
leftDial.setAttribute('class', 'dial');
leftDial.setAttribute('title', 'resize grid');
leftDial.onclick = () => popupL.style.display = "block";
dialDiv.appendChild(leftDial); // add to dial div
// right dial - opens 'about' popup
const rightDial = document.createElement('button');
rightDial.setAttribute('class', 'dial');
rightDial.setAttribute('title', 'about me');
rightDial.onclick = () => popupR.style.display = "block";
dialDiv.appendChild(rightDial); // add to dial div




// Left popup - logoDiv child
const popupL = document.createElement('div');
popupL.setAttribute('id', 'popupL');
popupL.style.display = 'none'; // hide
logoDiv.appendChild(popupL);// add to logoDiv

// LEFT popup content 
const popupContentL = document.createElement('div');
popupContentL.setAttribute('class', 'dimensionsPopup');
popupL.appendChild(popupContentL); // add to popup div

// Close Icon - left popup content child
const closeIconL = document.createElement('span');
closeIconL.setAttribute('class', 'close');
closeIconL.textContent = '✕';
closeIconL.onclick = function() {popupL.style.display = "none";}; // hide popup on click
popupContentL.appendChild(closeIconL);// add close icon to popup

// Heading - left popup content child
const popupHeadingL = document.createElement('h3');
popupHeadingL.textContent = "Create new sketch";
popupContentL.appendChild(popupHeadingL);

// Paragraph - left popup content child
const midText1 = document.createElement('p');
midText1.setAttribute('class', 'midText');
midText1.textContent = "For more detail, choose larger dimensions.";
popupContentL.appendChild(midText1);
const midText2 = document.createElement('p');
midText2.setAttribute('class', 'midText');
midText2.textContent = "For less detail, choose a smaller dimensions.";
popupContentL.appendChild(midText2);
const midText3 = document.createElement('p');
midText3.setAttribute('class', 'midText');
midText3.textContent = "To return to your sketch, exit this window.";
popupContentL.appendChild(midText3);
popupContentL.appendChild(document.createElement('br'));


// Slider container - left popup content child
const sliderDiv = document.createElement('div');
sliderDiv.setAttribute('class', 'slidecontainer');
popupContentL.appendChild(sliderDiv);

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
subText.textContent = 'Dimensions:\u00A0\u00A0';
subText.setAttribute('class', 'dimensionLabel');
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
sliderDiv.appendChild(document.createElement('br'));
sliderDiv.appendChild(document.createElement('br'));
const submit = document.createElement('button');
submit.setAttribute('class', 'submit');
submit.textContent = 'create';
// On submit, generate new grid
submit.onclick = refreshGrid();
sliderDiv.appendChild(submit);

// Right popup - logoDiv child
const popupR = document.createElement('div');
popupR.setAttribute('id', 'popupR');
popupR.style.display = 'none'; // hide
logoDiv.appendChild(popupR);// add to logoDiv









//// Right popup ////
// Right popup content 
const popupContentR = document.createElement('div');
popupContentR.setAttribute('class', 'aboutPopup');
popupContentR.setAttribute('id', 'popup-right');
popupR.appendChild(popupContentR); // add to popup div

// Close Icon - Right popup content child
const closeIconR = document.createElement('span');
closeIconR.setAttribute('class', 'close');
closeIconR.textContent = '✕';
closeIconR.onclick = function() {popupR.style.display = "none";}; // hide popup on click
popupContentR.appendChild(closeIconR);// add close icon to popup

// Heading - Right popup content child
const popupHeadingR = document.createElement('h3');
popupHeadingR.textContent = "About Me";
popupContentR.appendChild(popupHeadingR);

// body - Right popup content child
const intro = document.createElement('p');
intro.textContent = "My name is Kat de Vay, and I am a full-stack web developer.";
const contact = document.createElement('p'); 
contact.textContent = "Check out my other projects by following the github link below.";
popupContentR.appendChild(intro);
popupContentR.appendChild(contact);

// Add github link - Right popup content child
const gitLink = document.createElement('a');
gitLink.setAttribute('href', 'https://github.com/kdevay');
const octocat = document.createElement('img');
octocat.setAttribute('alt', 'octocat');
octocat.setAttribute('src', 'octocat.png');
gitLink.appendChild(octocat);
popupContentR.appendChild(gitLink);

function refreshGrid(e) {
    let input = dimensions.textContent;
    if (!dimensions.textContent) {
        input = 16; // set default to 16 px
    } else {
            let index = input.search(" ");
            input = parseInt(input.slice(0, index));
    }
    // Calculate new width/height of each pixel
    let width = (550 / input) - 3.5 + "px";// content size / number of divs - border thickness

    // Clear old grid
    for(let i = 0; i < divGrid.length; i++){
        divGrid[i].remove();
    }
    
    // Create new grid
    for(let i = 0; i < input ** 2; i++) {
        divGrid[i]=document.createElement("div");// create new div
        divGrid[i].setAttribute('class', 'pixel');
        divGrid[i].setAttribute('style', `width: ${width}; height: ${width};`);
        divGrid[i].addEventListener('mouseover', changeColor);// Add color change on hover
        gridDiv.appendChild(divGrid[i]); // add to dom
    }
    popupL.style.display = "none";
}