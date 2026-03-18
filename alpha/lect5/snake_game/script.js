const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const gridSize = 20;

let snake = [{x:10,y:10}];
let direction = "RIGHT";
let food = {x:20,y:20};
let speed = 100;
let score = 0;