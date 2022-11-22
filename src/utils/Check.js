const { ABOUT } = require("../Constants/Message");
const { KEY } = require("../Constants/Token");
// const { Console } = require("@woowacourse/mission-utils");
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

  if (resolved < 3 || resolved > 20) {
    throw new Error(ABOUT.RANGE);
  }
};

const checkMoveFormat = (string) => {
  //separate check & return
  //TODO: ????????
  // if (step !== KEY.BRIDGE_UP || step !== KEY.BRIDGE_DOWN) {
  //   throw new Error(ABOUT.BRIDGE_ELEMENT);
  // }

  // return step;

  const step = string.replace(/\s/g, "").toUpperCase();

  if (step !== KEY.BRIDGE_UP && step !== KEY.BRIDGE_DOWN) {
    throw new Error(ABOUT.BRIDGE_ELEMENT);
  }

  return step;
};

const checkSelectFormat = (string) => {
  const select = string.replace(/\s/g, "").toUpperCase();

  if (select !== KEY.SELECT_RESTART && select !== KEY.SELECT_QUIT) {
    throw new Error(ABOUT.SELECT_ELEMENT);
  }

  return select;
};

module.exports = {
  Check,
  checkBridgeLength,
  checkMoveFormat,
  checkSelectFormat,
};
