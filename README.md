## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
### ✔Answer to Q-1: 
- getElementById is used to select an element by id from the document.
- getElementsByClassName is used to select elements by their class name.
- querySelector is used to select the first element based on a tag, id, and class selector.
- querySelectorAll is used to select all elements based on a tag, id, and class selector.

## 2. How do you create and insert a new element into the DOM?
### ✔Answer to Q-2: 
#### ➡To create a new element we use document.createElement(). After creating the element set the attributes then insert in the HTML using appendChild().

## 3. What is Event Bubbling? And how does it work?
### ✔Answer to Q-3: 
#### ➡Event Bubbling is a JavaScript mechanism where when an element is clicked, the event is not limited to that button. it rises like a bubble and triggers all the parent elements above it.
#### ➡When a button is clicked, it works in 3 steps:--When the button is clicked, the event starts moving from the top to the bottom. Then the event reaches the selected parent element.Then the event starts to rise again from the target element in the opposite direction.

## 4. What is Event Delegation in JavaScript? Why is it useful?
### ✔Answer to Q-4:
#### ➡Event Delegation is a technique where we attach a single event listener to a parent element instead of attaching multiple listeners to child elements. It is useful because it improves performance and works well for dynamically added elements.

## 5. What is the difference between preventDefault() and stopPropagation() methods?
### ✔Answer to Q-5: 
#### ➡preventDefault() is Disables the browser's default action. stopPropagation() is the event that stops the rising. That means stops the bubbling.
