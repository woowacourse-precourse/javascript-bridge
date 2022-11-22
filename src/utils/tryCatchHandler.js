const OutputView = require('../views/OutputView.js');

const tryCatchHandler = (execution, reRequest) => {
  try {
    execution();
  } catch ({ message }) {
    OutputView.printMsg(message);
    reRequest();
  }
};

module.exports = tryCatchHandler;
