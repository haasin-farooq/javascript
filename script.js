/****************** SCOPE ******************/

/*
var x = 2; // Global scope

function foo()
{
  var x = 3; // Local scope
  console.log(x); // 3
  console.log(window.x); // 2
}

foo();
console.log(x); // 2
*/


/****************** HOISTING ******************/

/*
x = 5;
console.log(x);
var x;
*/


/****************** BLOCK SCOPE ******************/

/*
var x = 5;
{
  console.log(x); // 5

  var x = 3; // var keyword does not have block scope and can be accessed outside the block
  console.log(x); // 3
}
console.log(x); // 3
*/

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
/*
var a = 4;
let a = 6;
console.log(a); // a has already been declared
*/


/****************** CONST ******************/

/*
const x = 3;
console.log(x); // 3

{
  const x = 4;
  console.log(x); // 4
}

{
  const x = 5;
  console.log(x); // 5
}

console.log(x); //3
*/


/****************** ARROW FUNCTIONS ******************/

/*
var hello = function() {
  return "hello";
}
console.log(hello());

hello2 = () => {
  return "hello2";
}
console.log(hello2());

hello3 = () => "hello3";
console.log(hello3());

hello4 = (num) => "hello" + num;
console.log(hello4(4));
*/


/****************** ASYNCHRONOUS JAVASCRIPT ******************/

/*
const foo1 = () => {
  setTimeout(() => {
    console.log('foo1');
  }, 2000);
}

const foo2 = () => {
  console.log('foo2');
}

foo1();
foo2();
console.log('foo3');
*/


/*
function getRecipe() {
  setTimeout(() => {
    const recipeID = [523, 442, 542, 552, 387];
    console.log(recipeID);

    setTimeout((id) => {
      const recipe = {title: 'Pasta', publisher: 'John'};
      console.log(id + ': ' + recipe.title);

      setTimeout((publisher) => {
        const recipe = {title: 'Pizza', publisher: publisher};
        console.log(recipe);
      }, 1500, recipe.publisher);

    }, 1500, recipeID[2]); // recipeID is defined in the parent scope

  }, 1500);
}
getRecipe();
*/


/****************** Promises ******************/

/*
const getIDs = new Promise((resolve, reject) => { // executer function
  setTimeout(() => { // async call
    resolve([523, 442, 542, 552, 387]); // returns the data from the fulfilled promise
  }, 1500);
});

const getRecipe = (recipeID) => {
  return new Promise((resolve, reject) => {
    setTimeout((ID) => {
      const recipe = {title: 'Pasta', publisher: 'John'};
      resolve(ID + ': ' + recipe.title);
    }, 1500, recipeID);
  });
};

const getRelated = (publisher) => {
  return new Promise((resolve, reject) => {
    setTimeout((pub) => {
      const recipe = {title: 'Pizza', publisher: 'John'};
      resolve(pub + ': ' + recipe.title);
    }, 1500, publisher);
  });
};

getIDs
.then((IDs) => { // handling the fulfilled state | has a callback that takes in as argument the fulfilled data
  console.log(IDs);
  return getRecipe(IDs[2]);
})
.then((recipe) => {
  console.log(recipe);
  return getRelated('John');
})
.then((recipe) => {
  console.log(recipe);
})
.catch((error) => {
  console.log(error);
});

console.log(this);
*/


/****************** PROMISE.ALL ******************/

/*
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 1 resolved');
  }, 1500);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 2 resolved');
  }, 1500);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 3 resolved');
  }, 1500);
});

Promise.all([promise1, promise2, promise3])
.then((values) => {
  console.log(values);
});
*/


/****************** MORE ON SCOPE ******************/

/*
{
  let x = 3;
  {
    let x = 5;
    console.log(x); // Since x is in the parent scope, it can be accessed here
  }
  console.log(x);
}
*/


/****************** HTML WEB STORAGE ******************/

/*
// localStorage
localStorage.setItem('name', 'Haasin');
var name = localStorage.getItem('name');
console.log(name); // Haasin

localStorage.removeItem('name');
var name = localStorage.getItem('name');
console.log(name); // null

// sessionStorage
sessionStorage.name = 'Haasin';
var name = sessionStorage.name;
console.log(name);

sessionStorage.removeItem('name');
var name = sessionStorage.name;
console.log(name);

// Cookies
document.cookie = "username = Haasin Farooq";
var x = document.cookie;
console.log(x);
*/


/****************** FOR EACH AND MAP ******************/

/*
// forEach()
var arr = [2, 6, 9, 3, 7];
var sum = 0;

arr.forEach(calculateSum);
function calculateSum(num) {
  sum += num;
}
console.log(sum);

arr.forEach(updateElement);
function updateElement(num, index, array) {
  array[index] = num * 10;
}
console.log(arr);
*/

/*
// map()
var arr = [2, 6, 9, 3, 7];
var sum = 0;

var newArr = arr.map(calculateSum);
function calculateSum(num) {
  return sum += num;
}
console.log(newArr);

var newArr = arr.map(updateElement);
function updateElement(num, index, array) {
  return array[index] = num * 10;
}
console.log(newArr);
*/

// filter()
var arr = [2, 4, 6, 8, 3];

var newArr = arr.filter(greaterThanFive);
function greaterThanFive(num) {
  return num > 5;
}
console.log(newArr);
