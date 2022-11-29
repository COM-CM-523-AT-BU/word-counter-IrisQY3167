// put your globals here - hint: select elements from the HTML
let messageInput = document.getElementById("text-area");

const wordCountBtn = document.getElementById("countBtn");
const wordCount = document.getElementById("wordCountInput");

let findWord = document.getElementById("findWordInput");
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
  const output = words.length + " words";
  //console.log(output);

  // call printData
  printData(output, wordCount);
}

function findWords() {
  // put your local variable for the empty array here
  let targetWord = findWord.value;
  //console.log(targetWord);
  let arr = messageInput.value.split(' ');
  //console.log(arr);
  // remainder of your code follows
  let outputNum = 0;
  arr.forEach(item => {
              //console.log(item);
    if(item.toLowerCase() == targetWord) {
      outputNum ++;
      //console.log(item);
      //console.log(outputNum);
    }
    return outputNum;
              }
  );
  const output = outputNum + " instances";
  //console.log(output);
  // call printData
  printData(output, wordFoundCount);
}

// change param1 and param2 to identifiers that make sense
function printData(outputMessage, destination) {
  // your code here... one line!
  destination.value = outputMessage;
}
