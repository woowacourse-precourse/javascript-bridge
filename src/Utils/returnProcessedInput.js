const returnProcessedInput = {
  getProcessedInput(input, isPassed) {
    const upAndDownArray = this.upAndDown(input, isPassed);
    const splitUpAndDownArray = this.splitUpAndDown(upAndDownArray);
    const result = [
      [splitUpAndDownArray[0].join().replace(/,/gi, ' | ')],
      [splitUpAndDownArray[1].join().replace(/,/gi, ' | ')],
    ];
    return result;
  },

  upAndDown(input, isPassed) {
    const upAndDownArray = [];
    input.forEach((value, index) => {
      if (value === 'U' && index === input.length - 1 && !isPassed) upAndDownArray.push(['X', ' ']);
      else if (value === 'U') upAndDownArray.push(['O', ' ']);
      if (value === 'D' && index === input.length - 1 && !isPassed) upAndDownArray.push([' ', 'X']);
      else if (value === 'D') upAndDownArray.push([' ', 'O']);
    });
    return upAndDownArray;
  },

  splitUpAndDown(array) {
    const splitUpAndDownArray = [[], []];
    array.forEach((value) => {
      splitUpAndDownArray[0].push(value[0]);
      splitUpAndDownArray[1].push(value[1]);
    });
    return splitUpAndDownArray;
  },
};

module.exports = returnProcessedInput;
