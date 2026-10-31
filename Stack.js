/*
DSA Notes – Stack (Complete Fundamentals)
Lesson 1 – Stack
 Beginner Level

1. What is a Stack?
A Stack is a linear data structure that follows the LIFO (Last In, First Out) principle.

This means the element inserted last will be removed first.

Real-world example: A stack of plates. You add plates one by one, and when removing them, you always remove the topmost plate first.
2. How does Stack work?
A Stack operates from one end called the TOP.
- Insertion happens at the TOP.
- Deletion happens at the TOP.
- We access the most recently inserted element first.
Example:
       TOP
        |
       30  ← Last inserted
       20
       10  ← First inserted


If we remove an element, 30 will be removed first.
3. Basic Stack Operations
Operation	Description
Push	Adds an element to the top
Pop	Removes the top element
Peek / Top	Returns the top element without removing it
isEmpty	Checks whether Stack is empty
Size	Returns the number of elements

A. Push Operation
Adds a new element to the top of the Stack.
let stack = [];

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack); // [10, 20, 30]


B. Pop Operation
Removes and returns the topmost element.
let stack = [10, 20, 30];

let removed = stack.pop();

console.log(removed); // 30
console.log(stack);   // [10, 20]


C. Peek Operation
Returns the topmost element without modifying the Stack.
let stack = [10, 20, 30];

let topElement = stack[stack.length - 1];

console.log(topElement); // 30
console.log(stack);      // [10, 20, 30]


D. isEmpty Operation
Checks whether the Stack contains any elements.
let stack = [];

console.log(stack.length === 0); // true


E. Size Operation
Returns the total number of elements.
let stack = [10, 20, 30];

console.log(stack.length); // 3


4. Stack Implementation in JavaScript
JavaScript arrays provide built-in push() and pop() methods, which make them useful for implementing a Stack.
let stack = [];

// Insert elements
stack.push(10);
stack.push(20);
stack.push(30);

// Remove top element
stack.pop();

// Get top element
let top = stack[stack.length - 1];

console.log(stack); // [10, 20]
console.log(top);   // 20


Important: JavaScript arrays are not technically restricted to Stack operations. We use them to implement Stack behavior by following the LIFO principle.
5. Time and Space Complexity
Operation	Time Complexity
Push	O(1) amortized
Pop	O(1)
Peek	O(1)
isEmpty	O(1)
Size	O(1)
Search	O(n)

Why is searching O(n)?

Because we might need to check every element to find the required value.

Space Complexity: O(n), where n represents the number of elements stored in the Stack.
6. Applications of Stack
Stacks are commonly used in software development.
1. Function Call Stack: JavaScript manages function execution using a call stack.
2. Undo/Redo: Text editors maintain previous actions.
3. Browser History: Back navigation can be implemented using stacks.
4. Balanced Parentheses: Checks whether brackets are correctly opened and closed.
5. DFS (Depth First Search): Used in tree and graph traversal.
6. Expression Evaluation: Used to evaluate mathematical expressions.
7. String Reversal: Elements can be pushed and popped to reverse a string.
7. Important Stack Terminology
Term	Meaning
LIFO	Last In, First Out
TOP	Position of the latest element
Push	Insertion operation
Pop	Deletion operation
Underflow	Trying to remove an element from an empty Stack
Overflow	Trying to add an element when a fixed-capacity Stack is full
*/

/**
 * basic stack operation
 */
function newStack() {
  let stackArr = [];
  let size = 0;
  let MAX_CAP = 3;
  const push = (val) => {
    if (MAX_CAP === size) {
      return "Stack overflow";
    }
    stackArr[size] = val;
    size++;
  };
  const isFull = () => {
    return size === MAX_CAP;
  };
  const pop = () => {
    if (isEmptyStack()) return undefined;
    size--;
    let removed = stackArr[size];
    stackArr[size] = undefined;
    return removed;
  };
  const peek = () => {
    if (isEmptyStack()) return undefined;
    return stackArr[size - 1];
  };
  const isEmptyStack = () => {
    return size - 1 === 0;
  };
  const getSize = () => {
    return size;
  };

  return {
    push,
    pop,
    peek,
    isEmptyStack,
    getSize,
    isFull
  };
}
const stack = newStack();

stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek()); // 30
console.log(stack.pop()); // 30
console.log(stack.peek()); // 20
console.log(stack.isEmptyStack()); // false
console.log(stack.getSize()); // false
console.log(stack.isFull()); // false
