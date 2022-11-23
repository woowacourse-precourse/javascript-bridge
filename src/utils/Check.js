const { ABOUT } = require("../Constants/Message");
const { KEY, CONFIG } = require("../Constants/Token");
const OutputView = require("../View/OutputView");

const Check = (inputData, validationFunction, retryFunction) => {
  let validInput;

  try {
    validInput = validationFunction(inputData);
  } catch (error) {
    OutputView.printMessage(error.message);
    retryFunction();
  }

  return validInput;
};

const checkBridgeLength = (string) => {
  const resolved = Number(string);

  if (isNaN(resolved)) {
    throw new Error(ABOUT.TYPE_NUMBER);
  }

  if (resolved < CONFIG.BRIDGE_START || resolved > CONFIG.BRIDGE_END) {
    throw new Error(ABOUT.RANGE);
  }
};

const checkMoveFormat = (step) => {
  if (step !== KEY.BRIDGE_UP && step !== KEY.BRIDGE_DOWN) {
    throw new Error(ABOUT.BRIDGE_ELEMENT);
  }

  return step;
};

const checkCommandFormat = (command) => {
  if (command !== KEY.COMMAND_RESTART && command !== KEY.COMMAND_QUIT) {
    throw new Error(ABOUT.COMMAND_ELEMENT);
  }

  return command;
};

module.exports = {
  Check,
  checkBridgeLength,
  checkMoveFormat,
  checkCommandFormat,
};
