// put your globals here - hint: select elements from the HTML
const messageInput = document.getElementById("text-area");

const wordCountBtn = document.getElementById("countBtn");
const wordCount = document.getElementById("wordCountInput");

const findWord = document.getElementById("findWordInput");
const findWordBtn = document.getElementById("findBtn");
const wordFoundCount = document.getElementById("wordFoundInput");

// dont' forget to add event listeners to teh buttons
wordCountBtn.addEventListener('click', countWords);
findWordBtn.addEventListener('click', findWords);


function countWords() {
  // your code here
  let words = messageInput.value.split(' ');
  //console.log(words);
  //console.log(words.length);
  
  // call printData
  printData(words.length + " word(s)", wordCount);
}

function findWords() {
  // put your local variable for the empty array here
  let foundWords = [];
  // remainder of your code follows
  let arr = messageInput.value.split(' ');
  //console.log(arr);
  arr.forEach(item => {
    if(item.toLowerCase() == findWord.value) {
      foundWords.push(item);
    }
  });
  //console.log(foundWords);
  // call printData
  printData(foundWords.length + " instance(s)", wordFoundCount);
}

// change param1 and param2 to identifiers that make sense
function printData(outputMessage, destination) {
  // your code here... one line!
  destination.value = outputMessage;
}
