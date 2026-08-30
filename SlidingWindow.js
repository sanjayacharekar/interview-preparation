/*
The basic idea is:

Instead of repeatedly calculating the same elements, maintain a "window" of elements and slide that window through the array.

1. Start with a simple example

Suppose:

[2, 1, 5, 1, 3, 2]

We want the maximum sum of 3 consecutive elements.

So our window size is:

k = 3

First window:

[2, 1, 5]  1  3  2
 ↑──────↑
 window

Sum:

2 + 1 + 5 = 8
2. Move the window

Instead of starting from scratch, move the window one position:

  2 [1, 5, 1] 3  2
    ↑──────↑

What changed?

The 2 left the window.

The 1 entered the window.

So instead of:

1 + 5 + 1

we can simply do:

oldSum - 2 + 1
8 - 2 + 1 = 7
3. Move again
2  1 [5, 1, 3] 2
      ↑──────↑

Remove 1, add 3:

7 - 1 + 3 = 9

So maximum is now:

9
4. Move again
2  1  5 [1, 3, 2]
        ↑──────↑

Remove 5, add 2:

9 - 5 + 2 = 6

Final maximum:

9
🔥 Why do we need Sliding Window?

Without sliding window, you might do:

2 + 1 + 5
1 + 5 + 1
5 + 1 + 3
1 + 3 + 2

You're repeatedly adding numbers that you've already calculated.

For a large array, that can become expensive.

Sliding window says:

New Sum = Old Sum - Element Leaving + Element Entering

That's the key idea.

Visualize it

For:

[2, 1, 5, 1, 3, 2]

Window size = 3

[2, 1, 5] 1  3  2
 ↑───────↑

↓

 2 [1, 5, 1] 3  2
    ↑───────↑

↓

 2  1 [5, 1, 3] 2
      ↑───────↑

↓

 2  1  5 [1, 3, 2]
         ↑───────↑

The window is literally sliding across the array.

🧠 Two important types

You'll see two major Sliding Window patterns in interviews.

1. Fixed-size window

Window size stays constant.

Example:

Find maximum sum of 3 consecutive numbers
k = 3

Window:

[2,1,5]
 [1,5,1]
  [5,1,3]
   [1,3,2]
2. Variable-size window

Window size changes depending on a condition.

For example:

Find the smallest subarray whose sum is greater than or equal to target.

The window might grow:

[2]
[2,3]
[2,3,1]

Then shrink:

[3,1]

Then grow again.

We'll learn this after fixed-size sliding window.

⭐ Pattern to remember

For fixed-size window:

1. Create first window
2. Calculate its value
3. Move right
4. Remove element leaving window
5. Add element entering window
6. Update answer
7. Repeat

The core operation:

windowSum = windowSum - arr[left] + arr[right];

Eventually you'll see problems like:

Maximum sum of k elements
Average of subarrays
Maximum number of vowels in a substring
Longest substring problems
Smallest subarray problems
Complexity

The brute-force approach can often be:

O(n × k)

Sliding Window can reduce it to:

O(n)

That's why interviewers love this pattern.
*/
function maxSum(arr, size) {
  let windowSum = 0;
  let counter = 0;
  while (counter < size) {
    // console.log(counter, arr[counter]);
    windowSum += arr[counter];
    counter++;
  }
  let left = 0;
  let maxSum = 0;
  let right = size;
  while (right < arr.length) {
    windowSum = windowSum - arr[left] + arr[right];
    // console.log(maxSum, windowSum,arr[left],arr[right],left,right);
    maxSum = Math.max(maxSum, windowSum);
    left++;
    right++;
  }
  //   console.log(windowSum);
  return maxSum;
}
console.log(maxSum([2, 1, 5, 1, 3, 2], 3));
function maxVowels(str, size) {
  const vowels = "aeiou";
  let windowVowelsCount = 0;
  let maxVowelsCount = 0;
  for (let i = 0; i < size; i++) {
    if (vowels.includes(str[i])) {
      windowVowelsCount++;
    }
  }
  maxVowelsCount = windowVowelsCount;

  let left = 0;
  let right = size;
  while (right < str.length) {
    windowVowelsCount =
      windowVowelsCount -
      (vowels.includes(str[left]) ? 1 : 0) +
      (vowels.includes(str[right]) ? 1 : 0);
    maxVowelsCount = Math.max(maxVowelsCount, windowVowelsCount);
    left++;
    right++;
  }
  return maxVowelsCount;
}
console.log(maxVowels("leetcode", 3));
