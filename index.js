// Changes color of grid divs
function changeColor(event) {
    event.target.setAttribute('class', 'filled'); 
}

// Import root div
const root = document.getElementById("root");


// Create Etch-A-Sketch module
const etchAsketch = document.createElement("div");
etchAsketch.setAttribute('id', 'etchAsketch');
root.appendChild(etchAsketch);


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
const sketchArea = document.createElement('div');
sketchArea.setAttribute('id', 'sketchArea');
etchAsketch.appendChild(sketchArea);


// Right (about) popup 
const popupR = document.createElement('div');
popupR.setAttribute('id', 'popupR');
popupR.style.display = 'none'; // hide
logoDiv.appendChild(popupR);// add to logoDiv

// Left (dimensions) popup
const popupL = document.createElement('div');
popupL.setAttribute('id', 'popupL');
popupL.style.display = 'none'; // hide
logoDiv.appendChild(popupL);// add to logoDiv

const aboutPopup = {
    content: document.createElement('div'),
    close: document.createElement('span'),
    heading: document.createElement('h3'),
    intro: document.createElement('p'),
    contact: document.createElement('p'),
    gitLink: document.createElement('a'),
    gitIcon: document.createElement('img'),
    style() {
        this.content.setAttribute('class', 'aboutPopup'); //content
        this.content.setAttribute('id', 'popup-right');
        this.close.setAttribute('class', 'close'); //close icon
        this.close.textContent = '✕';
        this.heading.textContent = "About Me"; // heading
        this.intro.textContent = "My name is Kat de Vay, and I am a full-stack web developer."; // body text
        this.contact.textContent = "Check out my other projects by following the github link below.";
        this.gitLink.setAttribute('href', 'https://github.com/kdevay'); // Github link
        this.gitIcon.setAttribute('alt', 'octocat');
        this.gitIcon.setAttribute('src', 'octocat.png');
    },
    build() {
        popupR.appendChild(this.content);
        this.content.appendChild(this.close);
        this.content.appendChild(this.heading);
        this.content.appendChild(this.intro);
        this.content.appendChild(this.contact);
        this.gitLink.appendChild(this.gitIcon);
        this.content.appendChild(this.gitLink);
    },
    hide() {
        popupR.style.display = "none";
    }
};

const dimensionsPopup = { 
    content: document.createElement('div'),
    close: document.createElement('span'),
    heading: document.createElement('h3'),
    midText1: document.createElement('p'),
    midText2: document.createElement('p'),
    midText3: document.createElement('p'),
    slider: document.createElement('input'),
    sliderDiv: document.createElement('div'),
    subText: document.createElement('p'),
    dimensions: document.createElement('span'),
    lineBreak: document.createElement('br'),
    lineBreak2: document.createElement('br'),
    submit: document.createElement('button'),
    style () {
        this.content.setAttribute('class', 'dimensionsPopup');
        this.close.setAttribute('class', 'close'); // Close icon
        this.close.textContent = '✕';
        this.heading.textContent = "Create new sketch"; // Text
        this.midText1.setAttribute('class', 'midText');
        this.midText1.textContent = "For more detail, choose larger dimensions.";
        this.midText2.setAttribute('class', 'midText');
        this.midText2.textContent = "For less detail, choose a smaller dimensions.";
        this.midText3.setAttribute('class', 'midText');
        this.midText3.textContent = "To return to your sketch, exit this window.";
        this.sliderDiv.setAttribute('class', 'slidecontainer'); // Slider container
        this.slider.setAttribute('id', 'slider'); // Slider
        this.slider.setAttribute('value', '16');
        this.slider.setAttribute('max', '100');
        this.slider.setAttribute('min', '16');
        this.slider.setAttribute('type', 'range');
        this.subText.textContent = 'Dimensions:\u00A0\u00A0'; // Dimensions label
        this.subText.setAttribute('class', 'dimensionLabel');
        this.dimensions.setAttribute('id', 'dimensions'); // Dimensions output
        this.dimensions.textContent = 16 + ' x ' + 16;
        this.submit.setAttribute('class', 'submit');
        this.submit.textContent = 'create';
    },
    build () {
        popupL.appendChild(this.content);
        this.content.appendChild(this.close);
        this.content.appendChild(this.heading);
        this.content.appendChild(this.midText1);
        this.content.appendChild(this.midText2);
        this.content.appendChild(this.midText3);
        this.content.appendChild(document.createElement('br'));
        this.content.appendChild(this.sliderDiv);
        this.sliderDiv.appendChild(this.slider);
        this.sliderDiv.appendChild(this.subText);
        this.sliderDiv.appendChild(this.dimensions);
        this.sliderDiv.appendChild(this.lineBreak);
        this.sliderDiv.appendChild(this.lineBreak2);
        this.sliderDiv.appendChild(document.createElement('br'));
        this.sliderDiv.appendChild(document.createElement('br'));
        this.sliderDiv.appendChild(this.submit);
    },
    hide(){
        popupL.style.display = "none";
    }
};


const grid = {
    width: 550,
    borderWidth: 3,
    pixelBorderWidth: 2,
    pixels: [],
    clear() {
        if (this.pixels === []) return;
        for(let i = 0; i < this.pixels.length; i++){
            this.pixels[i].remove();
        }
    },
    getPixelWidth(pixelCount) {
        return ((this.width - this.borderWidth) / pixelCount) - this.pixelBorderWidth;
    },
    getPixelCount() {
        let input = dimensionsPopup.dimensions.textContent;
        return !input ? 16 : parseInt(input.slice(0, input.search(" ")));
    },
    populate() {
        const pixelCount = this.getPixelCount(); // Get pixel count
        const totalPixels = pixelCount * pixelCount; // Get total pixel count
        const pixelWidth = this.getPixelWidth(pixelCount); // Get pixel width
        console.log('pixelCountAcross: ', pixelCount);
        console.log('pixelWidth: ', pixelWidth);
    
        // Clear grid
        this.clear()
        
        // Create new grid
        for(let i = 0; i < totalPixels; i++) {
            this.pixels.push(document.createElement("div")); // create new div
            this.pixels[i].setAttribute('class', 'pixel');
            this.pixels[i].setAttribute('style', `width: ${pixelWidth}px; height: ${pixelWidth}px;`);
            this.pixels[i].addEventListener('mouseover', changeColor); // Add color change on hover
            
            sketchArea.appendChild(this.pixels[i]); // add to dom
        }
        console.log('pixels: ', this.pixels);
        dimensionsPopup.hide();
    }
};

// Dial div
const dialDiv = document.createElement('div'); // dial container
dialDiv.setAttribute('class', 'dialDiv');
etchAsketch.appendChild(dialDiv);

// left dial - opens 'dimensions' popup
const leftDial = document.createElement('button'); 
leftDial.setAttribute('class', 'dial');
leftDial.setAttribute('title', 'resize grid');
dialDiv.appendChild(leftDial); // add to dial div

// right dial - opens 'about' popup
const rightDial = document.createElement('button');
rightDial.setAttribute('class', 'dial');
rightDial.setAttribute('title', 'about me');
dialDiv.appendChild(rightDial); // add to dial div

// Events
aboutPopup.close.onclick = () => popupR.style.display = "none"; // close about popup
dimensionsPopup.close.onclick = () => popupL.style.display = "none"; // close dimensions popup
// Display popups on dial clicks
leftDial.onclick = () => popupL.style.display = "block";
rightDial.onclick = () => popupR.style.display = "block";
// Add slider input to dimensions output
dimensionsPopup.slider.oninput = function () { 
    dimensionsPopup.dimensions.textContent = this.value + ' x ' + this.value;
};
dimensionsPopup.submit.onclick = function () {// generate new grid
    console.log('entered');
    grid.populate();
}

// startup tasks
aboutPopup.style();
aboutPopup.build();
aboutPopup.hide();
dimensionsPopup.style();
dimensionsPopup.build();
dimensionsPopup.hide();
grid.populate();