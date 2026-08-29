// two pointer
function reverseArray(arr) {
  let right = arr.length - 1;
  let left = 0;
  while (left < right) {
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
  let right = 1;
  let left = 0;
  while (right !== arr.length) {
    console.log(arr[right], arr[left]);
    if (arr[right] === arr[left]) {
      right++;
      continue;
    }
    arr[left + 1] = arr[right];
    left++;
    // arr.length--;
  }
  arr.length = left + 1;
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
// Move Negative Numbers to the Left

function moveNegatives(arr) {
  let left = 0;

  for (let right = 0; right < arr.length; right++) {
    if (arr[right] < 0) {
      let temp = arr[right];
      arr[right] = arr[left];
      arr[left] = temp;
      left++;
    }
  }
  return arr;
}
console.log(moveNegatives([2, -3, 4, -1, 5, -6]));
function removeValue(arr, target) {
    let slow = 0;

    for (let fast = 0; fast < arr.length; fast++) {
        if (arr[fast] !== target) {
            arr[slow] = arr[fast];
            slow++;
        }
    }

    arr.length = slow;

    return arr;
}

console.log(removeValue([3, 2, 2, 3], 3));
// [2, 2]

// console.log(removeValue([0, 1, 2, 2, 3, 0, 4, 2], 2));
// // [0, 1, 3, 0, 4]

// console.log(removeValue([1, 2, 3], 5));
[1, 2, 3]

function sortedSquares(arr) {
    let left = 0;
    let right = arr.length - 1;
    let result = new Array(arr.length);

    for (let i = arr.length - 1; i >= 0; i--) {
        const leftSquare = arr[left] * arr[left];
        const rightSquare = arr[right] * arr[right];

        if (leftSquare > rightSquare) {
            result[i] = leftSquare;
            left++;
        } else {
            result[i] = rightSquare;
            right--;
        }
    }

    return result;
}

console.log(sortedSquares([-4, -1, 0, 3, 10]));

/* What does "Container With Most Water" mean?

Imagine every number is the height of a vertical wall:

[1, 8, 6, 2, 5, 4, 8, 3, 7]

So visually, roughly:

        |       |
        |       |       |
        |       |       |   |
        |   |   |       |   |
    |   |   |   |   |   |   |
    |   |   |   |   |   |   |
    |   |   |   |   |   |   |
--------------------------------
    1   8   6   2   5   4   8   3   7

Pick two walls. Those two walls can hold water between them.

The amount of water depends on two things:

Width → distance between the two walls
Height → the shorter of the two walls

The formula is:

water = width × shorter wall
Let's take a simple example

Suppose we have:

[2, 5, 3]
index 0 , 1 , 2

Pick 5 and 3:

     5
     |
     |       3
     |       |
     |       |
     |       |
----------------
     ↑       ↑

The distance between them is 1 i.e. index(2-1 = 1).

The shorter wall is 3.

Therefore:

water = 1 × 3
      = 3
      */
function containerWithMostWater(arr) {
  let left = 0;
  let right = arr.length - 1;
  let maxWater = 0;
  while (left < right) {
    let width = right - left;
    let height = Math.min(arr[left], arr[right]);
    let tempWater = width * height;
    if (tempWater > maxWater) {
      maxWater = tempWater;
    }
    if (arr[left] < arr[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxWater;
}

console.log(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));
