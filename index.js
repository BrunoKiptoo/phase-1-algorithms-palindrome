function isPalindrome(word) {
  // Write your algorithm here

  // using the built in string functions
  let reverseWord = word.split('').reverse().join('');

  // if you want to use a loop do it like this
  // for(let i=word.length-1; i>=0; i--){
  //   reverseWord += word[i];
  // }
  console.log(reverseWord);

  if(reverseWord === word) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here
    - retrieve passed in word
    - split word 
    - reverse split word and recombine
    - compare to origional input word
*/

/*
  Add written explanation of your solution here
*/
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("");
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}
module.exports = isPalindrome;