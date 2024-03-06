/*
// #######
// Scope
// #######

// A scope in JS defines what variables do you have access to. there are two kinds of scopes in JS Global and Local.

// -------------
// Global Scope
// -------------
const hello = "Hello! I'm the Global variable"
function sayHello() {
  console.log(hello)
}

console.log(hello)
sayHello()

// -------------
// Local Scope
// -------------
// Variables that are usable only in a specific part of the code are considered to be in a local scope.
// In JS there are two kinds of local scope, function scope and block scope.
function sayHello() {
  const hello = "Hello! I'm in function scope"
  console.log(hello)
}

sayHello() // "Hello! I'm in function scope"
console.log(hello) // Error, hello is not defined

// When you declare a variable with const or let within a curly brace ({}), you can access this variable only within that curly brace.
{
  const hello = "Hello! I'm in block scope"
  console.log(hello) // "Hello! I'm in block scope"
}

console.log(hello) // Error, hello is not defined

// ----------------------------
// Function hoisting and scopes
// ----------------------------

// Same as below
sayHello()
function sayHello() {
  console.log('Hello from Function hoisting.')
}

// Same as above
function sayHello() {
  console.log('Hello from Function hoisting.')
}
sayHello()

// When declare with a function expression functions are not hoisted to the top

sayHello()
const sayHello = function () {
  console.log('Hello from function hoisting.')
}

// Functions do not have access to eachother's scopes.
function first() {
  let firstFunctionVariable = "I'm part of the first"
}

function second() {
  first()
  console.log(firstFunctionVariable) // not defined
}

second()

// -------------
// Nested scope
// -------------
function outerFunction() {
  let outer = "I'm outer function"

  function inner() {
    let inner = "I'm inner function"
    console.log(outer) // "I'm outer function"
  }

  console.log(inner) // inner is not defined
}

// ! This is called oneway glass
*/

// ############
// CLOSURES
// ############
function outerFunction() {
  let outer = "I'm outer function"

  return function innerFunction() {
    console.log("I'm inner function")
  }
}

outerFunction()()

// Closure are used for two things
// 1- To control side effects
// 2- To create side effects

// Controlling side effects with closures

function (x) {
    console.log('A console log is a side effect.')
}

function makeCake() {
    setTimeout(_ => console.log('Made a cake'), 1000)
}

function makeCake(flavor) {
    setTimeout(_ => console.log(`Made a ${flavor} cake`), 1000)
}

makeCake(banana)

// The problem is I don't want to make cake immediately rather on time when it is needed so to solve this problem we use closures

function prepareCake(flavor) {
    return function () {
        setTimeout(_ => console.log(`Made a ${flavor} cake.`), 1000)
    }
}

const makeCakeLater = prepareCake('banana')

// and later in my code.
makeCakeLater()

//That’s how closures are used to reduce side effects – you create a function that activates the inner closure at your whim.

// Private variable with closures

// As you know by now, variables created in a function cannot be accessed outside the function. Since they can’t be accessed, they are also called private variables.

// However, sometimes you need to access such a private variable. You can do so with the help of closures.

function secret (secretCode) {
  return {
    saySecretCode () {
      console.log(secretCode)
    }
  }
}

const theSecret = secret('CSS Tricks is amazing')
theSecret.saySecretCode()
// 'CSS Tricks is amazing'