function isPalindrome(word) {
  // Write your algorithm here
  for(let i=0; i<word.length / 2; i++){
    const j = word.length - 1 - i;
    if(word[i] !== word[j]){
      return false
    }
    return true
  }
}

/* 
  Add your pseudocode here

  function isPalindrome(word){
    for(let i=0; i<word.length; i++){
      const j = word.length - 1 - i;
      if(word[i] !== j){
        return false
      }
      return true
    }
  }
*/

/*
  Add written explanation of your solution here

  will loop through the string to the middle from the beginning
  and from the end while comparing each letter at beginning and end 
  of the string, returning false if any arent equal to each other
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
