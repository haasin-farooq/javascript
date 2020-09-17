/****************** SCOPE ******************/

var x = 2; // Global scope

function foo()
{
  var x = 3; // Local scope
  console.log(x); // 3
  console.log(window.x); // 2
}

foo();
console.log(x); // 2


/****************** HOISTING ******************/

x = 5;
console.log(x);
var x;


/****************** BLOCK SCOPE ******************/

var x = 5;
{
  console.log(x); // 5

  var x = 3; // var keyword does not have block scope and can be accessed outside the block
  console.log(x); // 3
}
console.log(x); // 3

/*
var x = 5;
{
  let x = 2; // let allows the variable to have a block scope
  console.log(x); // 2
}
console.log(x); // 5
*/

/*
function foo()
{
  console.log(i); // undefined
  for(var i = 0; i < 10; i++)
  {

  }
  console.log(i); // 10
}
foo();
*/

/*
function foo()
{
  for(let i = 0; i < 5; i++)
  {
    console.log(i); // 0 - 4
  }
  console.log(i); // ReferenceError since i has a block scope
}
foo();
*/

/*
var i = 8;
function foo()
{
  let i = 3;
  console.log(i); // 3
}
foo();
console.log(i); // 8
*/

/*
var i = 3;
for(let i = 0; i < 5; i++)
{
  console.log(i); // 0 - 4
}
console.log(i); // 3
*/

/*
let x = 6;
console.log(window.x); // undefined, since global variables defined using let don't belong to the global scope
*/


/****************** REDECLARING ******************/

// Allowed
/*
var a = 2;
var a = 3;
console.log(a); // 3

let b = 4;
{
  let b = 8;
}
console.log(b); // 4
*/

// Not allowed
var a = 4;
let a = 6;
console.log(a); // a has already been declared
