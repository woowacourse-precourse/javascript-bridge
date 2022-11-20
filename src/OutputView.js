const MissionUtils = require('@woowacourse/mission-utils');

const { Console } = MissionUtils;
const { MESSAGE_SUCCESS_BOOLEAN, MESSAGE_TRY_COUNT } = require('./constants');

let upArea = [];
let downArea = [];

const OutputView = {
  initResult() {
    upArea = [];
    downArea = [];
  },

  printMap(command, bridgeInformation) {
    OutputView.drawMap(command, bridgeInformation);
    Console.print(upArea);
    Console.print(downArea);
  },

  drawMap(command, bridgeInformation) {
    const CORRECT = (command === bridgeInformation);
    OutputView.drawUpArea(CORRECT, command);
    OutputView.drawDownArea(CORRECT, command);
    return true;
  },

  drawUpArea(correct, command) {
    if (correct) upArea.push(command === 'U' ? 'O' : ' ');
    else upArea.push(command === 'U' ? 'X' : ' ');
  },

  drawDownArea(correct, command) {
    if (correct) downArea.push(command === 'D' ? 'O' : ' ');
    else downArea.push(command === 'D' ? 'X' : ' ');
  },

  printResult(gameComplete, gameTryCount) {
    const RESULT = gameComplete ? '성공' : '실패';
    Console.print(`${MESSAGE_SUCCESS_BOOLEAN}${RESULT}`);
    Console.print(`${MESSAGE_TRY_COUNT}${gameTryCount}`);
  },

};

module.exports = OutputView;
