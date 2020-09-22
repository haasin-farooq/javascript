var firstName = "Haasin";
console.log(firstName);

var lastName = "Farooq";
var age = 22;

var fullAge = false;
console.log(fullAge);


/****************** BASIC OPERATORS ******************/

var currentYear, yearJohn, yearMark;

currentYear = 2020;
yearJohn = currentYear - 28;
yearMark = currentYear - 33;

// MATH OPERATORS
console.log(yearJohn);
console.log(yearJohn * 2);
console.log(yearJohn / 10);

// LOGICAL OPERATORS
var johnYounger = yearJohn > yearMark;
console.log(johnYounger);

// typeof OPERATOR
console.log(typeof(johnYounger));
console.log(typeof(yearJohn));
console.log(typeof(firstName));


// OPERATOR PRECEDENCE
var now = 2020;
var yearHaasin = 1998;
var fullAge = 18;

var isFullAge = now - yearHaasin >= fullAge;
console.log(isFullAge);


// MORE OPERATORS
var x = 2;
x = x * 2;
console.log(x);

x += 2;
console.log(x);


/****************** CODING CHALLENGE 1 ******************/

var johnHeight, markHeight, johnMass, markMass, johnBMI, markBMI;

johnHeight = 3;
johnMass = 60;
markHeight = 2.5;
markMass = 28;

johnBMI = johnMass / (johnHeight * johnHeight);
markBMI = markMass / (markHeight * markHeight);

console.log("John's BMI: " + johnBMI.toFixed(2));
console.log("Mark's BMI: " + markBMI.toFixed(2));

if(markBMI > johnBMI)
{
  console.log("Mark has a higher BMI than John.");
}
else
{
  console.log("John has a higher BMI than Mark.");
}


/****************** TERNARY OPERATOR ******************/

var firstName = "John";
var age = 19;

age >= 18
? console.log(firstName + " drinks beer.")
: console.log(firstName + " drinks juice.");

var drink = age >= 18 ? "beer" : "juice";
console.log(drink);

// SWITCH STATEMENTS
var job = 'teacher';

switch(job)
{
  case 'teacher':
  case 'instructer':
    console.log(firstName + ' teaches kids how to code.');
    break;

  case 'driver':
    console.log(firstName + ' drives an uber in Lisbon.');
    break;

  case 'designer':
    console.log(firstName + ' designs beautiful websites.');
    break;

  default:
    console.log(firstName + ' does something else.');
}


/****************** CODING CHALLENGE 2 ******************/

var johnAvg, mikeAvg;

johnAvg = (89 + 120 + 103) / 3;
mikeAvg = (97 + 134 + 104) / 3;
maryAvg = (97 + 134 + 105) / 3;

switch(true)
{
  case (johnAvg > mikeAvg) && (johnAvg > maryAvg):
    console.log('john\'s team won with an average of ' + johnAvg);
    break;
  case (mikeAvg > johnAvg) && (mikeAvg > maryAvg):
    console.log('Mike\'s team won with an average of ' + mikeAvg);
    break;
  case (maryAvg > johnAvg) && (maryAvg > mikeAvg):
    console.log('Mary\'s team won with an average of ' + maryAvg);
    break;
  default:
    console.log('It was a draw');
}


/****************** FUNCTIONS ******************/

// FUNCTION DECLARATION
function calculateAge(birthYear, currentYear)
{
  return currentYear - birthYear;
}

var age = calculateAge(1998, 2020);
console.log('My age is ' + age);


// FUNCTION EXPRESSION
var whatDoYouDo = function (job, firstName)
{
  switch(job)
  {
    case 'teacher':
      return (firstName + ' teaches kids how to code.');
    case 'driver':
      return (firstName + ' drives an uber.');
    case 'designer':
      return (firstName + ' designs beautiful websites.');
    default:
      return (firstName + ' does something else.')
  }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('driver', 'Mark'));
console.log(whatDoYouDo('designer', 'Mary'));


/****************** ARRAYS ******************/

var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names);
console.log(names.length);

names[1] = 'Ben';
console.log(names);

names[names.length] = 'Mary';
console.log(names);

var isJackPresent = names.indexOf('Jack') === -1 ? 'Jack is absent.' : 'Jack is present.';
console.log(isJackPresent);


/****************** CODING CHALLENGE 3 ******************/

var bills, tips, finalAmount;

function calculateTip(bill)
{
  if(bill < 50)
  {
    return (0.2 * bill);
  }
  else if(bill >= 50 && bill <=200)
  {
    return (0.15 * bill);
  }
  else if(bill > 200)
  {
    return (0.1 * bill);
  }
  else
  {
    return 0;
  }
}

bills = [124, 48, 268];
tips = [calculateTip(bills[0]), calculateTip(bills[1]), calculateTip(bills[3])];
finalAmount = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills);
console.log(tips);
console.log(finalAmount);


/****************** OBJECTS AND PROPERTIES ******************/

var john =
{
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false
};

console.log(john);
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'driver';
john.isMarried = true;

console.log(john);

var jane = new Object();
jane.firstName = 'Jane';
jane.lastName = 'Smith';
jane.birthYear = 1969;
console.log(jane);


/****************** OBJETCS AND METHODS ******************/

var john =
{
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false,
  calculateAge: function()
  {
    this.age = 2020 - this.birthYear;
  }
};

john.calculateAge();
console.log(john.age);


/****************** CODING CHALLENGE 4 ******************/

var john =
{
  firstName: 'John',
  lastName: 'Smith',
  mass: 60,
  height: 2,
  calculateBMI: function()
  {
    this.bmi = this.mass / (this.height * this.height);
  }
}

var mark =
{
  firstName: 'Mark',
  lastName: 'William',
  mass: 68,
  height: 3,
  calculateBMI: function()
  {
    this.bmi = this.mass / (this.height * this.height);
  }
}

function higherBMI(john, mark)
{
  john.calculateBMI();
  mark.calculateBMI();

  if(john.bmi > mark.bmi)
  {
    console.log(john.firstName + ' ' + john.lastName + ' has a higher BMI: ' + john.bmi);
  }
  else if(mark.bmi > john.bmi)
  {
    console.log(mark.firstName + ' ' + mark.lastName + ' has a higher BMI: ' + mark.bmi);
  }
  else
  {
    console.log('Both their BMIs are same');
  }
}

higherBMI(john, mark);


/****************** LOOPS AND ITERATIONS ******************/

for(var i = 0; i < 10; i++)
{
  console.log(i);
}

var names = ['John', 'Mark', 'Jane', [1, 2, 3]];

for(var i = 0; i < names.length; i++)
{
  console.log(names[i]);
}

var i = 0;
while(i < names.length)
{
  console.log(names[i]);
  i++;
}

// CONTINUE AND BREAK STATEMENTS
var names = ['John', 'Mark', 'Jane', 1, 2, 'Mary'];

for(var i = 0; i < names.length; i++)
{
  if(typeof(names[i]) !== 'string')
  {
    continue;
  }
  else
  {
    console.log(names[i]);
  }
}

for(var i = names.length - 1; i >= 0; i--)
{
  console.log(names[i]);
}


/****************** CODING CHALLENGE 5 *****************/

var john =
{
  bills: [124, 48, 268, 180, 42],
  tips: [],
  finalAmount: [],
  calculateTip: function()
  {
    for(var i = 0; i < this.bills.length; i++)
    {
      if(this.bills[i] < 50)
      {
        this.tips[i] = 0.2 * this.bills[i];
      }
      else if(this.bills[i] >= 50 && this.bills[i] <= 200)
      {
        this.tips[i] = 0.15 * this.bills[i];
      }
      else if(this.bills[i] > 200)
      {
        this.tips[i] = 0.1 * this.bills[i];
      }
      else
      {
        this.tips[i] = 0;
      }

      this.finalAmount[i] = this.bills[i] + this.tips[i];
    }
  }
};

var mark =
{
  bills: [77, 475, 110, 45],
  tips: [],
  finalAmount: [],
  calculateTip: function()
  {
    for(var i = 0; i < this.bills.length; i++)
    {
      if(this.bills[i] < 100)
      {
        this.tips[i] = 0.2 * this.bills[i];
      }
      else if(this.bills[i] >= 100 && this.bills[i] <= 300)
      {
        this.tips[i] = 0.1 * this.bills[i];
      }
      else if(this.bills[i] > 300)
      {
        this.tips[i] = 0.25 * this.bills[i];
      }
      else
      {
        this.tips[i] = 0;
      }

      this.finalAmount[i] = this.bills[i] + this.tips[i];
    }
  }
};

function calculateAverage(johnTips, markTips)
{
  var johnSum = 0;
  var markSum = 0;
  var johnAvg = 0;
  var markAvg = 0;

  for(var i = 0; i < johnTips.length; i++)
  {
    johnSum = johnSum + johnTips[i];
  }
  for(var i = 0; i < markTips.length; i++)
  {
    markSum = markSum + markTips[i];
  }

  johnAvg = johnSum / johnTips.length;
  markAvg = markSum / markTips.length;

  if(johnAvg > markAvg)
  {
    console.log('John\'s average of ' + johnAvg + ' is greater than Mark\'s average of ' + markAvg);
  }
  else if(markAvg > johnAvg)
  {
    console.log('Mark\'s average of ' + markAvg + ' is greater than John\'s average of ' + johnAvg);
  }
  else
  {
    console.log('Both their averages are same');
  }
}

console.log('JOHN\'S FAMILY');
john.calculateTip();
console.log(john.bills);
console.log(john.tips);
console.log(john.finalAmount);

console.log('MARK\'S FAMILY');
mark.calculateTip();
console.log(mark.bills);
console.log(mark.tips);
console.log(mark.finalAmount);

calculateAverage(john.tips, mark.tips);


// 22/09/2020 - Tuesday

/*
var john = {
  name: 'John',
  yearOfBirth: 1990,
  job: 'teacher'
};
*/

/****************** FUNCTION CONSTRUCTOR ******************/

/*
var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person.prototype.calculateAge = function() {
  console.log(2020 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1995, 'driver');

john.calculateAge();
*/


/****************** PRIMITIVES VS. OBJECTS ******************/

/*
// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

// Objects
var obj1 = {
  name: 'John',
  age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1);
console.log(obj2);

// Functions
var age = 27;
var obj = {
  name: 'Jonas',
  city: 'Lisbon'
};

function change(a, b) {
  a = 30;
  b.city = 'San Francisco';
}

change(age, obj);
console.log(age);
console.log(obj);
*/


/****************** PASSING FUNCTIONS AS ARGUMENTS ******************/

/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for(var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(year) {
  return (2020 - year);
}

var ages = arrayCalc(years, calculateAge);
console.log(ages);
*/


/****************** FUNCTIONS RETURNING FUNCTIONS ******************/

/*
function interviewQuestion(job) {
  if(job === 'designer') {
    return (name) => {
      console.log(name + ', can you please explain what a UX design is?');
    }
  }
  else if(job === 'teacher') {
    return (name) => {
      console.log(name + ', what subjects do you teach?');
    }
  }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');

var designerQuestion = interviewQuestion('designer');
designerQuestion('John');

interviewQuestion('teacher')('Mark');
*/


/****************** IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE) ******************/

/*
function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}
game();

// Data privacy using IIFE
(function () {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();
*/


/****************** CLOSURES ******************/

/*
function retirement(retirementAge) {
  var a = ' years left until retirement.';
  return (yearOfBirth) => {
    var age = 2020 - yearOfBirth;
    console.log((retirementAge - age) + a);
  }
}
retirement(65)(1998);

function interviewQuestion(job) {
  return (name) => {
    if(job === 'teacher') {
      console.log(name + ', can you please explain what a UX design is?');
    }
    else if(job === 'designer') {
      console.log(name + ', what subjects do you teach?');
    }
  }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');
*/


/****************** BIND, CALL AND APPLY ******************/

/*
var john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function(style, timeOfDay) {
    if(style === 'formal') {
      console.log('Good ' + timeOfDay + ', ladies and gentlemen! I\'m '
      + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age
      + ' years old.');
    }
    else if(style === 'friendly') {
      console.log('Hey! What\'s up? ' + 'I\'m '
      + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age
      + ' years old. Have a nice ' + timeOfDay + '.');
    }
  }
};

var emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
};

john.presentation('formal', 'morning');

// Method borrowing - the call method allows us to set the this variable
john.presentation.call(emily, 'friendly', 'afternoon');

// john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('evening');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('morning');

// Fucntions as arguments
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for(var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(year) {
  return (2020 - year);
}

function isFullAge(limit, age) {
  return (age >= limit);
}

var ages = arrayCalc(years, calculateAge); // This function takes a function as parameter which has only
console.log(ages);                         // one parameter. But isFullAge has 2 parameters. So we'll
                                           // preset the limit parameter

var fullAgeJapan = arrayCalc(years, isFullAge.bind(this, 30));
console.log(fullAgeJapan);
*/


/****************** CODING CHALLENGE 7 ******************/

(function() {
  var Question = function(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  };

  var questions = ['Is JavaScript a cool language?', 'Is this course useful?', 'Is web development boring?'];
  var answers = ['0: Yes', '1: No'];
  var correctAnswers = [0, 0, 1];
  var questionsObj = [];

  for(var i = 0; i < questions.length; i++) {
    questionsObj[i] = new Question(questions[i], answers, correctAnswers[i]);
  }

  Question.prototype.showQuestion = function() {
    console.log(this.question);
    for(let i = 0; i < this.answers.length; i++) {
      console.log(this.answers[i]);
    }
  }

  Question.prototype.checkAnswer = function(chosenAnswer) {
    if(chosenAnswer === this.correctAnswer) {
      console.log('The answer is correct!');
    }
    else {
      console.log('The answer is incorrect.');
    }
  }

  function nextQuestion() {
    var questionIndex = Math.floor(Math.random() * 3);
    questionsObj[questionIndex].showQuestion();
    var chosenAnswer = prompt('Input the correct answer:');

    if(chosenAnswer !== 'exit') {
      questionsObj[questionIndex].checkAnswer(parseInt(chosenAnswer));
      nextQuestion();
    }
  }

  nextQuestion();
})();

