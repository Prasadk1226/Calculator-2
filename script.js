// let display = document.getElementById("display")



// display.innerHTML = 
// function addValue(x){
//     display.value+=x
// }
// function result(){
//     let cal = eval(display.value)
//     display.value=cal
// }
// Select the display area
const display = document.getElementById('display');

// Function to add a value to the display
function addValue(value) {
  display.value += value;
}

// Function to clear the display (AC button)
function remove() {
  display.value = '';
}

// Function to delete the last character (DEL button)
function del() {
  display.value = display.value.slice(0, -1);
}

// Function to calculate the result (equals button)
function result() {
  try {
    // Evaluate the expression in the display
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error'; // Handle invalid expressions
  }
}
