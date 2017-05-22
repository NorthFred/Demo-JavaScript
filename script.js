$(document).ready(function() {

  // Listen to events on the button when the page is ready loading.
  var button = document.getElementById('btn');
  button.addEventListener('click', codeMyText);

});



const row1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'å']; 
const row2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ö', 'ä'];
const row3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


function codeMyText() {

  // Read the text input
  var text = document.getElementById('inputcode').value;
  
  // Read the coding direction
  var checked = document.getElementById("direction").checked;
  
  if (checked === true) {
    direction = -1;
  }
  else
    direction = 1;

  // Initialize an empty array for the shifted text.
  const shiftedText = [];
    
  // Split the text from String to Array
  const textSplit = text.split('');

  // Go through all characters in the text array and perform directional change  
  textSplit.forEach(function(char) {
    

    let row = [];
    
    if (row1.includes(char)) {
      row = row1;
    }
    else if (row2.includes(char)) {
      row = row2;
    }
    else if (row3.includes(char)) {
      row = row3;
    }
    else if (numbers.includes(char)) {
      row = numbers;
    }
    // If the character can not be found in any of the rows, then we return the character itself.
    else
      shiftedText.push(char);
  
    // Returns the index of the character in the qwerty keyboard list
    const index = row.indexOf(char);
    
    let shiftedIndex = index + direction;
    
    // Correct the index if it falls outside of the boundaries.
    if (shiftedIndex <= -1) {
      shiftedIndex = row.length-1;
    }
    if (shiftedIndex >= row.length) {
      shiftedIndex = 0;
    }
    
    // Return the shifted character
    const shiftedChar = row[shiftedIndex];  
    
    // Add shifted character to the array
    shiftedText.push(shiftedChar);  
  
  });
    
  // Change the array back to String
  text = shiftedText.join('');
  
  // Put the output in the HTML page
  document.getElementById('output').innerHTML=(text);
  
  //return text;
}