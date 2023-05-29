// Instructions can be found in rest_parameters.md

export function add(...theArgs) {
  // Add a loop here
  let total = 0;
  theArgs.forEach(argument => total += argument);
  return total;
}

//add(1, 2, 3, 4, 5);

// module.exports = add;
