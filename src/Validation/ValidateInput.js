const { ERROR_MSG } = require("../constants");

const ValidateInput = (input) => {
  CheckNotANumber(input);
  CheckInputRange(input);
};

const CheckNotANumber = (input) => {
  if (isNaN(input)) {
    throw new Error(ERROR_MSG.INPUT_ERROR);
  }
};

const CheckInputRange = (input) => {
  if (+input < 3 || +input > 20) {
    throw new Error(ERROR_MSG.INPUT_ERROR);
  }
};

module.exports = ValidateInput;
