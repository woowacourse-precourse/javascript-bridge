const MissionUtils = require('@woowacourse/mission-utils');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

/**
 * GameProgress: 게임 진행을 위한 문장을 출력하는 객체
 */

const GameProgress = {

  printGameStart(validateBridgeSize) {
    const BRIDGE_GAME_START = '다리 건너기 게임을 시작합니다.\n';
    MissionUtils.Console.print(BRIDGE_GAME_START);
    this.readBridgeSize(validateBridgeSize);
  },

  printErrorMessage(err) {
    MissionUtils.Console.print(`${err}\n`);
  },

  printResult(result, tryCount) {
    OutputView.printResult(result, tryCount);
  },

  printMap(bridge, bridgeMoveCount, input) {
    OutputView.printMap(bridge, bridgeMoveCount, input);
  },

  printBlankLine() {
    MissionUtils.Console.print('');
  },

  readBridgeSize(validateBridgeSize) {
    InputView.readBridgeSize(validateBridgeSize);
  },

  readMoving(validateBridgeMove) {
    InputView.readMoving(validateBridgeMove);
  },

  readGameCommand(validateRetryInput) {
    InputView.readGameCommand(validateRetryInput);
  },

  clearPreviousProgress() {
    OutputView.movingLog = [];
  },

};

module.exports = GameProgress;
