// TypeError: getContext is not a function in JavaScript

console.log('bobbyhadz.com');

const canvas = document.getElementsByClassName('canvas');
console.log(canvas); // 👉️ [canvas.canvas]

const ctx = canvas[0].getContext('2d');

console.log(ctx); // 👉️ CanvasRenderingContext2D
