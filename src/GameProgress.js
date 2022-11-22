const MissionUtils = require('@woowacourse/mission-utils');
const InputView = require('./IO/InputView');
const OutputView = require('./IO/OutputView');

/**
 * GameProgress: 게임 진행을 관리하는 객체
 */

const GameProgress = {

  printGameStart(bridgeSizeInputHandler) {
    const BRIDGE_GAME_START = '다리 건너기 게임을 시작합니다.\n';
    MissionUtils.Console.print(BRIDGE_GAME_START);
    this.readBridgeSize(bridgeSizeInputHandler);
  },

  printErrorMessage(err) {
    MissionUtils.Console.print(`${err}\n`);
  },

  printResult(result, tryCount) {
    OutputView.printResult(result, tryCount);
  },

  printMap(bridge, bridgeMoveCount, input) {
    OutputView.printMap(bridge, bridgeMoveCount, input);
    MissionUtils.Console.print('');
  },

  printBlankLine() {
    MissionUtils.Console.print('');
  },

  readBridgeSize(bridgeSizeInputHandler) {
    InputView.readBridgeSize(bridgeSizeInputHandler);
  },

  readMoving(bridgeMoveInputHandler) {
    InputView.readMoving(bridgeMoveInputHandler);
  },

  readGameCommand(bridgeRetryInputHandler) {
    InputView.readGameCommand(bridgeRetryInputHandler);
  },

  clearPreviousProgress() {
    OutputView.movingLog = [];
  },

};

module.exports = GameProgress;
