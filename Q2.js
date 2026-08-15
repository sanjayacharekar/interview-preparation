"strict mode";
// Question 1 — Sum of Array
function sumArray (arr){
    let sum = 0;
    for(let i of arr){
        sum += i;
    }
    return sum;
}

console.log(sumArray([10, 20, 30, 40]));
// Question 1 — Find the largest

function findLargest(arr) {
  let max = arr[0];
  for (let i of arr) {
    if (i > max) {
      max = i;
    }
  }
  return max;
}

console.log(findLargest([10, 5, 25, 8, 17]));

// Question  — Count Even and Odd Numbers
function countEvenOdd(arr) {
  let frequency = { even: 0, odd: 0 };

  for (let i of arr) {
    if (arr[i] % 2 === 0) {
      frequency["even"] += 1;
    } else {
      frequency["odd"] += 1;
    }
  }
  return frequency;
}

console.log(countEvenOdd([1, 2, 3, 4, 5, 6]));

// Question  — Reverse a String
function reverseString(str) {
  let revStr = "";
  console.log(str.length);
  for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
    revStr = revStr + str[i];
  }
  return revStr;
}

console.log(reverseString("hello"));

// Question  — Count Occurrences
function countOccurrences(arr, search) {
  let frequency = 0;
  for (let i of arr) {
    if (i === search) {
      frequency += 1;
    }
  }
  return frequency;
}

console.log(countOccurrences([1, 2, 3, 2, 4, 2, 5], 2));
// Question  — Reverse a String
function isPalindrome(str) {
  let len = str.length - 1;
  let reverse = "";
  function reversef(str) {
    if (len === 0) {
      return (reverse += str[0]);
    } else {
      reverse += str[len];
      len--;
      reversef(str);
    }
    return reverse;
  }
  return str === reversef(str);
}

console.log(isPalindrome("madamp"));
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
    return true;
  }
}

console.log(isPalindrome("madam"));
function findDuplicates(arr) {
  let frequency = {};
  let duplicateArr = []
  for (let i of arr) {
    if (!frequency[i]) {
      frequency[i] = 1;
    } else {
      frequency[i] += 1;
    }
  }
  for(let r in frequency){
    if(frequency[r] > 1){
        duplicateArr.push(r)
    }
  }
  return duplicateArr
}

console.log(findDuplicates([1, 2, 3, 2, 4, 5, 1]));
// function findDuplicates(arr) {
//     const seen = {};
//     const duplicates = {};

//     for (const num of arr) {
//         if (seen[num]) {
//             duplicates[num] = true;
//         } else {
//             seen[num] = true;
//         }
//     }

//     return Object.keys(duplicates).map(Number);
// }
