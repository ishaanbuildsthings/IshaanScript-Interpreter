// * MATH
export default function math(mathFunction, ...args) {
  const numberArgs = args.map(element => parseInt(element));

  // * router to function
  if (mathFunction === 'add') {
    return Add(numberArgs);
  } else if (mathFunction === 'mul') {
    return Multiply(numberArgs);
  } else if (mathFunction === 'sub') {
    return Subtract(numberArgs);
  } else if (mathFunction === 'div') {
    return Divide(numberArgs);
  }
}

// * functions
function Add(argsList) {
  let sum = argsList[0];
  for (let value of argsList.slice(1)) {
    sum += value;
  }
  return sum;
}

function Multiply(argsList) {
  let result = argsList[0];
  for (let value of argsList.slice(1)) {
    result *= value;
  }
  return result;
}

function Divide(argsList) {
  let result = argsList[0];
  for (let value of argsList.slice(1)) {
    result /= value;
  }
  return result;
}

function Subtract(argsList) {
  let result = argsList[0];
  for (let value of argsList.slice(1)) {
    result -= value;
  }
  return result;
}