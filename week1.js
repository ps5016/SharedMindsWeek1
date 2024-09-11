// Get the input box and the canvas element
const canvas = document.createElement('canvas');
canvas.setAttribute('id', 'myCanvas');
canvas.style.position = 'absolute';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.left = '0';
canvas.style.top = '0';
canvas.style.width = '100%';
canvas.style.height = '100%';

const ctx = canvas.getContext('2d');
ctx.fillStyle = '#DAEAFD';
ctx.fillRect(0, 0, canvas.width, canvas.height);

document.body.appendChild(canvas);
console.log('canvas', canvas.width, canvas.height);


const inputBox = document.createElement('input');
inputBox.setAttribute('type', 'text');
inputBox.setAttribute('id', 'inputBox');
inputBox.setAttribute('placeholder', 'Words On My Mind');
inputBox.style.position = 'absolute';
inputBox.style.left = '50%';
inputBox.style.top = '50%';
inputBox.style.transform = 'translate(-50%, -50%)';
inputBox.style.zIndex = '100';
inputBox.style.fontSize = '20px';
inputBox.style.fontFamily = 'Plus Jakarta Sans';
document.body.appendChild(inputBox);

// Add event listener to the input box
inputBox.addEventListener('keydown', function (event) {
    // Check if the Enter key is pressed
    if (event.key === 'Enter') {
        const inputValue = inputBox.value;
        const ctx = canvas.getContext('2d');
        
        // Randomly choose a font size from 30px, 50px, or 100px
        const fontSizes = ['30px', '50px', '100px'];
        const randomFontSize = fontSizes[Math.floor(Math.random() * fontSizes.length)];
        
        ctx.font = `${randomFontSize} Plus Jakarta Sans`;
        
        const inputBoxRect = inputBox.getBoundingClientRect();
        const x = inputBoxRect.left;
        const y = inputBoxRect.top;

        const fillStyles = ['#F9EDFC', '#AAA0FC', '#EEFCA8'];
        const randomFillStyle = fillStyles[Math.floor(Math.random() * fillStyles.length)];
        ctx.fillStyle = `${randomFillStyle}`;
        ctx.fillText(inputValue, x, y);
        
        // Clear the input box
        inputBox.value = '';
    }
});


// Add event listener to the document for mouse down event
document.addEventListener('mousedown', (event) => {
    // Set the location of the input box to the mouse location
    inputBox.style.left = event.clientX + 'px';
    inputBox.style.top = event.clientY + 'px';

});


