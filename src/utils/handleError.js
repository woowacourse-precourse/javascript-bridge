const { printError } = require('../views/OutputView');

const handleError = (error) => {
  try {
    throw new Error(error);
  } catch (error) {
    printError(error);
    return false;
  }
};

module.exports = handleError;
