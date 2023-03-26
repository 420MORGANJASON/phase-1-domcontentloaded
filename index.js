// Your code goes here

const paragraph = document.createElement('p');
console.log(paragraph)

paragraph.textContent = "JavaScript is so cool. It lets me add text to my page programmatically.";

console.log(paragraph);


// const event = document.createEvent('Event');
//     event.initEvent( 'DOMContentLoaded', true, true );
//     window.document.dispatchEvent(event);



    // paragraph element
const newParagraph = document.querySelector('body');

// Create new paragraph
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is really cool!';


// Add  new paragraph
paragraph.appendChild(newParagraph);
console,log(newParagraph)