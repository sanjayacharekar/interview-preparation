// Find the first non-repeating character
// Write a JavaScript function:
// findFirstNonRepeating("aabbcddee")
// Expected output:
// c
// Another example:
// findFirstNonRepeating("aabbcc")
// Expected output:
// null
// Another:
// findFirstNonRepeating("swiss")
// Expected output:
// w
// Rules
// Don't use a library or search for the solution.

/*
approach
take char list from aruments and loop thorough it
store last char in preVar variable
compare are they both equal if yes/No continue
update preVar with current char i.e. index 0
compare again if no match found return currentVar

 */

// function findFirstNonRepeating(listOfChar) {
//     // let preVar = listOfChar[listOfChar.length - 1];
//     let preVar = listOfChar[0];
//     let nonRepChar = '';
//     for (let i = 0; i < listOfChar.length; i++) {
//         console.log(listOfChar[i+1],preVar)
//         if (preVar !== listOfChar[i+1]) {
//             preVar = listOfChar[i+1]
//             nonRepChar = listOfChar[i+1]
//             break;
//         }
//     }
//     return nonRepChar;
// };

function findFirstNonRepeating(str) {
  const frequency = {};
  const len = str.length;
  // Step 1: count characters
  for (let s = 0; s < len; s++) {
    // console.log(str[s]);
    if (!frequency[str[s]]) {
      frequency[str[s]] = 1;
    } else {
      frequency[str[s]] = frequency[str[s]] + 1;
    }
  }
//   console.log(frequency);
  // Step 2: find first character with frequency 1
  let value='';
  for (const i in frequency) {
    if (frequency[i] === 1) {
      return  i;
    }
  }
  return null
}
console.log(findFirstNonRepeating("aabbcddee"));
console.log(findFirstNonRepeating("aabbcc"));
console.log(findFirstNonRepeating("swiss"));
