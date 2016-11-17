// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
function makeShape() {

var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cy" ,70)
circle.setAttribute("cx" ,65)
circle.setAttribute("r" ,35)
circle.setAttribute("fill","red")
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
}

function changeShape() {

var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cy" ,70)
circle.setAttribute("cx" ,155)
circle.setAttribute("r" ,35)
circle.setAttribute("fill","green")
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
}

function SumShape() {

var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cy" ,70)
circle.setAttribute("cx" ,255)
circle.setAttribute("r" ,35)
circle.setAttribute("fill","red")
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
}

function anotherShape() {

var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cy" ,70)
circle.setAttribute("cx" ,255)
circle.setAttribute("r" ,35)
circle.setAttribute("fill","magenta")
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
}
