function upAndDown(input, isPassed) {
  const upAndDownArray = [];
  input.forEach((value, index) => {
    if (value === 'U' && index === input.length - 1 && !isPassed) upAndDownArray.push(['X', ' ']);
    else if (value === 'U') upAndDownArray.push(['O', ' ']);
    if (value === 'D' && index === input.length - 1 && !isPassed) upAndDownArray.push([' ', 'X']);
    else if (value === 'D') upAndDownArray.push([' ', 'O']);
  });
  return upAndDownArray;
}

function splitUpAndDown(array) {
  const upArray = [];
  const downArray = [];
  array.forEach((value) => {
    upArray.push(value[0]);
    downArray.push(value[1]);
  });
  return { upArray, downArray };
}

module.exports = {
  upAndDown,
  splitUpAndDown,
};
