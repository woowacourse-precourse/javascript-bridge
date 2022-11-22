const { printErrorLog } = require("../view/OutputView");

const handleError = (occuredError) => {
  try {
    throw new Error(occuredError);
  } catch (occuredError) {
    printErrorLog(occuredError);
    return false;
  }
};
module.exports = { handleError };
