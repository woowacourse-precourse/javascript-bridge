const { INPUT_CHAR } = require('../Constants/InputValues');
const { STATUS } = require('../Constants/BridgeStatus');

const OutputMaker = {
  makeOutput(input, pass) {
    const upAndDownArray = this.upAndDown(input, pass);
    const splitUpAndDownArray = this.splitUpAndDown(upAndDownArray);
    const result = [
      [splitUpAndDownArray[0].join().replace(/,/gi, STATUS.seperator)],
      [splitUpAndDownArray[1].join().replace(/,/gi, STATUS.seperator)],
    ];
    return result;
  },

  upAndDown(input, pass) {
    const upAndDownArray = [];
    const current = input.length - 1;
    input.forEach((value, index) => {
      if (value === INPUT_CHAR.up && index === current && !pass) upAndDownArray.push([STATUS.fail, STATUS.pass]);
      else if (value === INPUT_CHAR.up) upAndDownArray.push([STATUS.correct, STATUS.pass]);
      if (value === INPUT_CHAR.down && index === current && !pass) upAndDownArray.push([STATUS.pass, STATUS.fail]);
      else if (value === INPUT_CHAR.down) upAndDownArray.push([STATUS.pass, STATUS.correct]);
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

module.exports = OutputMaker;
