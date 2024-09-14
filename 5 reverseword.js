function reverseWords(str) {
  
  let words = str.split(' ');

  
  let reversedWords = words.map(word => {
    return word.split('').reverse().join('');
  });

  
  let reversedStr = reversedWords.join(' ');

  return reversedStr;
}


let inputStr = "my name is raja";
let outputStr = reverseWords(inputStr);
console.log(outputStr); 
