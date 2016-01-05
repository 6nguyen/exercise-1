function palindrome(str) {
  // Function only includes alphabetical characters, no spaces/special characters
  function isAlphabet(char){
    char = char.toLowerCase();
     var alphabet = "abcdefghijklmnopqrstuvwxyz";
     for( var x = 0; x < alphabet.length; x++){
       if(char === alphabet[x]){
         return true;
       }
     }
    return false;
  }
  // Creating a newString that is the reverse of the original, and recreating the original string 
  // without special characters or spaces
  str = str.toLowerCase();
  var newString = [];
  var ogString = [];
  for (var i = 0; i < str.length; i++) {
    if (isAlphabet(str[i])) {
    newString.unshift(str[i]);
    ogString.push(str[i]); 
    }
  }
  newString = newString.join("");
  ogString = ogString.join("");
  
  
  
  if (newString === ogString) {
    return true;
  }
  else {
    return false;
  }
}
  

palindrome("never odd or even");