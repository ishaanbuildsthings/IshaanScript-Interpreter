// * VARIABLE HANDLERS

export default function utility(variableFunction, ...args) { // receive the function and spread arguments
  if (variableFunction === 'echo') {
    return echo(args);
  }
}

function echo(value) {
  return value;
}
