// * imports
import readline from 'readline-sync';
import math from './functions/math.js';
import utility from './functions/utility.js';

// * keywords
const MATH_FUNCTIONS = ['add', 'mul', 'sub', 'div'];
const UTILITY_FUNCTIONS = ['echo'];

// * STORAGE
const STORAGE = {};


// * REPL
while (true) {

  // * parsing
  const userInput = readline.question('>'); // grab user string
  const userInputs = userInput.split(' '); // split by spaces
  const userFunction = userInputs[0]; // grab function
  let args = userInputs.slice(1); // grab args
  args = args.map((element) => { // substitute in variables
    if (element in STORAGE) {
      return STORAGE[element];
    }
    return element;
  })

  let response;

  // * MATH
  if (MATH_FUNCTIONS.includes(userFunction))
  {
    response = '' + math(userFunction, ...args);
  }
  // * UTILITIES
   else if (UTILITY_FUNCTIONS.includes(userFunction))
  {
    response = '' + utility(userFunction, ...args);
  }
  // * NATIVE
  else if (userFunction === 'def')
  {
    STORAGE[args[0]] = args[1]; // assign x to 10
    response = args[1]; // return 10
  }
  else if (userFunction === 'alldata') {
    response = STORAGE;
  }
  // * ERROR
  else
  {
    response = 'invalid';
  }

  console.log(response);

}

