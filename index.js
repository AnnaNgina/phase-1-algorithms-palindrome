function reverse(word){
  const wordArray= word.split("")
  const reverseWordArray= wordArray.reverse("")
  const reverseWord= reverseWordArray.join("")
   return reverseWord;
}

function isPalindrome(word) {

  const reverseWord= reverse(word)
  if(word ===reverseWord){
    return true;
  } else
  return false;
}


if (require.main === module) {

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  
  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));

  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));
}

module.exports = isPalindrome;
