// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
var turn = "player1"

function Shape1() {
if (turn=="player1"){
var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cy" ,70)
circle.setAttribute("cx" ,65)
circle.setAttribute("r" ,35)
circle.setAttribute("fill","red")
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
turn ="player2"}else{var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cy" ,70)
circle.setAttribute("cx" ,65)
circle.setAttribute("r" ,35)
circle.setAttribute("fill","green")
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
turn ="player1"
}
}

function Shape2() {
if (turn=="player1"){
  alert("player 1")
var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cy" ,70)
circle.setAttribute("cx" ,155)
circle.setAttribute("r" ,35)
circle.setAttribute("fill","red")
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
turn ="player2"}else{
  var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cy" ,70)
circle.setAttribute("cx" ,155)
circle.setAttribute("r" ,35)
circle.setAttribute("fill","green")
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
turn ="player1"
}
}

function Shape3() {
if (turn=="player1"){

var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cy" ,70)
circle.setAttribute("cx" ,255)
circle.setAttribute("r" ,35)
circle.setAttribute("fill","red")
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
turn ="player2"}else{
  var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cy" ,70)
circle.setAttribute("cx" ,155)
circle.setAttribute("r" ,35)
circle.setAttribute("fill","green")
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
turn ="player1"
}
}

function Shape4() {

var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cy" ,165)
circle.setAttribute("cx" ,65)
circle.setAttribute("r" ,35)
circle.setAttribute("fill","green")
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
}

function Shape5() {

var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cy" ,165)
circle.setAttribute("cx" ,155)
circle.setAttribute("r" ,35)
circle.setAttribute("fill","green")
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
}

function Shape6() {

var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cy" ,165)
circle.setAttribute("cx" ,255)
circle.setAttribute("r" ,35)
circle.setAttribute("fill","red")
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
}

function Shape7() {

var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cy" ,255)
circle.setAttribute("cx" ,65)
circle.setAttribute("r" ,35)
circle.setAttribute("fill","green")
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
}

function Shape8() {

var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cy" ,255)
circle.setAttribute("cx" ,165)
circle.setAttribute("r" ,35)
circle.setAttribute("fill","red")
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
}

function Shape9() {

var circle = document.createElementNS(namespace, "circle")
circle.setAttribute("cy" ,255)
circle.setAttribute("cx" ,255)
circle.setAttribute("r" ,35)
circle.setAttribute("fill","green")
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
}
