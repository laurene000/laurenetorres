// Get the moving element
const movingElement = document.getElementById('movingElement');

let isDragging = false;
let offsetX, offsetY;

// Function to handle mouse down event
function onMouseDown(event) {
  isDragging = true;
  offsetX = event.offsetX;
  offsetY = event.offsetY;
}

// Function to handle mouse move event
function onMouseMove(event) {
  if (isDragging) {
    const x = event.clientX - offsetX;
    const y = event.clientY - offsetY;
    movingElement.style.left = `${x}px`;
    movingElement.style.top = `${y}px`;
  }
}

// Function to handle mouse up event
function onMouseUp(event) {
  isDragging = false;
}

// Add event listeners
movingElement.addEventListener('mousedown', onMouseDown);
document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mouseup', onMouseUp);
