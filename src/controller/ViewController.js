//view를 게임 로직들과 이어주는 역할

const { readBridgeSize, readMoving, readGameCommand } = require("../view/InputView");
const { printMap, printResult } = require("../view/OutputView");

const ViewController = {
  input: {
    bridgeSize: readBridgeSize,
    moving: readMoving,
    gameCommand: readGameCommand,
  },

  output: {
    map: printMap,
    result: printResult,
  },
};

module.exports = ViewController;
