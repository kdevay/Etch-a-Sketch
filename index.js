// Changes color of grid divs
function changeColor(event) {
    event.target.setAttribute('class', 'filled'); 
}

// Import body div
const bodyDiv = document.getElementById("bodyDiv");

// Create content div
const content = document.createElement("div");
content.setAttribute('id', 'content');
bodyDiv.appendChild(content);


// Create header div - content child
const headerDiv = document.createElement('div');
headerDiv.setAttribute('id', 'heading');
content.appendChild(headerDiv);

// Create header - header div child
const header = document.createElement('h1');
header.setAttribute('class', 'font-effect-emboss');
header.textContent = 'Swipe A Sketch';
headerDiv.appendChild(header);


// Create Grid container
const gridDiv = document.createElement('div');
gridDiv.setAttribute('id', 'gridDiv');
content.appendChild(gridDiv);

// Create grid - content child
let divGrid = [];
for(let i = 0; i < 256; i++) {
    divGrid[i] = document.createElement("div"); // create
    divGrid[i].setAttribute('class', 'gridlet'); // add styling
    gridDiv.appendChild(divGrid[i]); // add to dom
    divGrid[i].addEventListener('mouseover', changeColor); // change  on hover    
}


// Create left popup - header child
const popup = document.createElement('div');
popup.setAttribute('id', 'popup');
popup.style.display = 'none'; // hide
heading.appendChild(popup);// add to header

// Create right popup - header child
const popup2 = document.createElement('div');
popup2.setAttribute('id', 'popup2');
popup2.style.display = 'none'; // hide
heading.appendChild(popup2);// add to header



// Create dials 
const dialDiv = document.createElement('div'); // dial container
dialDiv.setAttribute('class', 'dialDiv');
content.appendChild(dialDiv); 
// left dial
const leftDial = document.createElement('button'); 
leftDial.setAttribute('class', 'dial');
leftDial.setAttribute('title', 'resize grid');
leftDial.onclick = function openPopup() { // open popup on click
    popup.style.display = "block"; 
};
dialDiv.appendChild(leftDial); // add to dial div
// right dial
const rightDial = document.createElement('button');// right dial
rightDial.setAttribute('class', 'dial');
rightDial.setAttribute('title', 'about me');
rightDial.onclick = function openAboutPopup() { // open about popup on click
    popup2.style.display = "block";
};
dialDiv.appendChild(rightDial); // add to dial div



// LEFT popup content 
const popupContent = document.createElement('div');
popupContent.setAttribute('class', 'popup-content');
popup.appendChild(popupContent); // add to popup div

// Close Icon - p.content child
const closeIcon = document.createElement('span');
closeIcon.setAttribute('class', 'close');
closeIcon.textContent = '✕';
closeIcon.onclick = function() {popup.style.display = "none";}; // hide popup on click
popupContent.appendChild(closeIcon);// add close icon to popup

// Heading - p.content child
const popupHeading = document.createElement('h3');
popupHeading.textContent = "Create new sketch";
popupContent.appendChild(popupHeading);

// Paragraph - p.content child
const midText1 = document.createElement('p');
midText1.setAttribute('class', 'midText');
midText1.textContent = "For more detail, choose larger dimensions.";
popupContent.appendChild(midText1);
const midText2 = document.createElement('p');
midText2.setAttribute('class', 'midText');
midText2.textContent = "For less detail, choose a smaller dimensions.";
popupContent.appendChild(midText2);
const midText3 = document.createElement('p');
midText3.setAttribute('class', 'midText');
midText3.textContent = "To return to your sketch, exit this window.";
popupContent.appendChild(midText3);
popupContent.appendChild(document.createElement('br'));


// Slider container - p.content child
const sliderDiv = document.createElement('div');
sliderDiv.setAttribute('class', 'slidecontainer');
popupContent.appendChild(sliderDiv);

// Slider - sliderx child
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
submit.onclick = function refreshGrid(event) {
    let input = dimensions.textContent;
    if (!dimensions.textContent) {
        input = 16; // set default to 16 px
    } else {
            let index = input.search(" ");
            input = parseInt(input.slice(0, index));
    }
    // Calculate new width/height: content size / number of divs - border thickness
    let width = (550 / input) - 2 + "px";

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
        gridDiv.appendChild(divGrid[i]); // add to dom
    }
    popup.style.display = "none";
}
sliderDiv.appendChild(submit);




//// Right popup ////
// Right popup content  - popup2 child
const popupContent2 = document.createElement('div');
popupContent2.setAttribute('class', 'popup-content');
popupContent2.setAttribute('id', 'popup-right');
popup2.appendChild(popupContent2); // add to popup div
//**** might have to make a different popup div

// Close Icon - popup content child
const closeIcon2 = document.createElement('span');
closeIcon2.setAttribute('class', 'close');
closeIcon2.textContent = '✕';
closeIcon2.onclick = function() {popup2.style.display = "none";}; // hide popup on click
popupContent2.appendChild(closeIcon2);// add close icon to popup

// Heading - popup child
const popupHeading2 = document.createElement('h3');
popupHeading2.textContent = "About Me";
popupContent2.appendChild(popupHeading2);

// body
const intro = document.createElement('p');
intro.textContent = "My name is Kat de Vay, and I am a full-stack web developer.";
const contact = document.createElement('p'); 
contact.textContent = "Check out my other projects by following the github link below.";
popupContent2.appendChild(intro);
popupContent2.appendChild(contact);

// Add github link
const gitLink = document.createElement('a');
gitLink.setAttribute('href', 'https://github.com/kdevay');
const octocat = document.createElement('img');
octocat.setAttribute('alt', 'octocat');
octocat.setAttribute('src', 'octocat.png');
gitLink.appendChild(octocat);
popupContent2.appendChild(gitLink);