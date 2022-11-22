const { readBridgeSize, readMoving, readGameCommand } = require('./InputView');
const { printStart, printMap, printResult } = require('./OutputView');

const ViewController = {
  viewName: {
    bridgeSize: 'bridgeSize',
    moving: 'moving',
    gameCommand: 'gameCommand',
    start: 'start',
    map: 'map',
    result: 'result',
  },

  inputReader: {
    bridgeSize: readBridgeSize,
    moving: readMoving,
    gameCommand: readGameCommand,
  },

  outputPrinter: {
    start: printStart,
    map: printMap,
    result: printResult,
  },

  readInput(inputName, boundFunction) {
    ViewController.inputReader[inputName](boundFunction);
  },

  printOutput(outputName, ...args) {
    ViewController.outputPrinter[outputName](...args);
  },
};

module.exports = ViewController;
