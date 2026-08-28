"strict mode";
// Question 1 — Sum of Array
function sumArray(arr) {
  let sum = 0;
  for (let i of arr) {
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
  let duplicateArr = [];
  for (let i of arr) {
    if (!frequency[i]) {
      frequency[i] = 1;
    } else {
      frequency[i] += 1;
    }
  }
  for (let r in frequency) {
    if (frequency[r] > 1) {
      duplicateArr.push(r);
    }
  }
  return duplicateArr;
}

console.log(findDuplicates([1, 2, 3, 2, 4, 5, 1]));
function findDuplicates(arr) {
  const seen = {};
  const duplicates = {};

  for (const num of arr) {
    if (seen[num]) {
      duplicates[num] = true;
    } else {
      seen[num] = true;
    }
  }

  return Object.keys(duplicates).map(Number);
}
// — Remove Duplicates
function removeDuplicates(arr) {
  const seen = {};

  for (const num of arr) {
    if (!seen[num]) {
      seen[num] = true;
    }
  }

  return Object.keys(seen).map(Number);
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 3, 5]));
// — Find the missing number
function findMissingNumber(arr) {
  const len = arr.length === 1 ? 0 : arr.length;
  let sum = 0;
  let arrsum = 0;
  for (let i = len + 1; i >= 0; i--) {
    sum += i;
  }
  for (let j = 0; j <= len - 1; j++) {
    arrsum += arr[j];
  }
  const value = sum - arrsum;
  return value === 1 ? null : value;
}
console.log(findMissingNumber([1, 2, 4, 5, 6]));
function findMissingNumber(arr) {
  if (arr.length <= 1) {
    return null;
  }

  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;

  let actualSum = 0;

  for (const num of arr) {
    actualSum += num;
  }

  return expectedSum - actualSum;
}

function findSecondLargest(arr) {
  let max = 0;
  let secondMax = 0;
  for (const num of arr) {
    if (num > max) {
      secondMax = max;
      max = num;
    }
    if (max > num && num > secondMax) {
      secondMax = num;
    }
  }
  return secondMax;
}
console.log(findSecondLargest([10, 5, 8, 10, 3, 8]));

function findDifference(arr) {
  let max = 0;
  let min = arr[0];
  for (const num of arr) {
    if (num > max) {
      max = num;
    }
    if (num < min) {
      min = num;
    }
  }
  console.log(max, min);
  return max - min;
}
console.log(findDifference([10, 5, 8, 20, 3]));
function findDifference(arr) {
  let max = arr[0];
  let min = arr[0];

  for (const num of arr) {
    if (num > max) {
      max = num;
    }

    if (num < min) {
      min = num;
    }
  }

  return max - min;
}
function findSecondSmallest(arr) {
  let min = arr[0],
    secondMin = Infinity;
  for (let num of arr) {
    if (num < min) {
      secondMin = min;
      min = num;
    }
    if (secondMin > num && num > min) {
      secondMin = num;
    }
  }
  return secondMin === Infinity ? null : secondMin;
}
console.log(findSecondSmallest([5, 5, 8]));
function moveZeros(arr) {
  let zeroArr = [];
  const newArr = [];
  for (let num of arr) {
    if (num === 0) {
      zeroArr.push(num);
    } else {
      newArr.push(num);
    }
  }
  return newArr.concat(zeroArr);
}
console.log(moveZeros([0, 1, 0, 3, 12]));
function moveZeros(arr) {
  let position = 0;

  // Move all non-zero values to the front
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[position] = arr[i];
      position++;
    }
  }

  // Fill the remaining positions with zeros
  while (position < arr.length) {
    arr[position] = 0;
    position++;
  }

  return arr;
}

console.log(moveZeros([0, 1, 0, 3, 12]));
// [1, 3, 12, 0, 0]
function findMostFrequentChar(str) {
  let frequency = {};
  let value = 0;
  let char = "";
  for (let s of str) {
    if (frequency[s]) {
      frequency[s] += 1;
    } else {
      frequency[s] = 1;
    }
  }
  for (let i in frequency) {
    if (frequency[i] > value) {
      char = i;
      value = frequency[i];
    }
  }
  return char;
}
console.log(findMostFrequentChar("hello"));
function findFirstDuplicate(arr) {
  let seen = {};
  let value = null;
  for (let num of arr) {
    if (seen[num]) {
      value = num;
      break;
    } else {
      seen[num] = true;
    }
  }

  return value;
}
console.log(findFirstDuplicate([5, 1, 5, 2, 1]));
function twoSum(arr, targetSum) {
  let seen = {};
  let value = [];
  for (let num of arr) {
    let val = targetSum - num;
    if (seen[val]) {
      return [val, num];
    } else {
      seen[num] = num;
    }
  }
  return null;
}
console.log(twoSum([2, 7, 11, 15], 9));
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(7));
function countVowels(str) {
  const vowels = ['a','e','i','o','u'];
  let counter = 0
  for (let s of str) {
    if(vowels.includes(s)){
      counter ++;
    }
  }
  return counter;
}
console.log(countVowels("Hello World"));
// two pointer
function reverseArray(arr) {
  let right = arr.length - 1
  let left = 0
  while(left<right){
    let temp = arr[right];
    arr[right] = arr[left];
    arr[left] = temp;
    right--;
    left++;
  }
  return arr;
}
console.log(reverseArray([1, 2, 3, 4, 5]));
function removeDuplicates(arr) {
  let right = 1
  let left = 0
  while(right !== arr.length){
    console.log(arr[right], arr[left])
    if(arr[right] === arr[left]){
      right++;
      continue;
    }
    arr[left+1]= arr[right]
    left++;
    // arr.length--;
  }
  arr.length = left+1;
  return arr;
}
console.log(removeDuplicates([1, 1, 2, 2, 3, 4, 4]));
function hasPairSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const sum = arr[left] + arr[right];

        if (sum === target) {
            return true;
        }

        if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return false;
}
