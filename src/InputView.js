const MissionUtils = require('@woowacourse/mission-utils');
const Exception = require('./Exception');
const Validation = require('./Validation');
const BridgeMaker = require('./BridgeMaker');
const OutputView = require('./OutputView');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { PARAMETERS, CONSOLE_MESSAGE, RESULT_MESSAGE } = require('./utils/constants');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  exception: new Exception(),
  validation: new Validation(),
  bridge: [],
  moveCount: 0,
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine(CONSOLE_MESSAGE.bridgeSizeInput, (input) => {
      try {
        this.exception.validateBridgeSize(input);
      } catch (error) {
        return this.readBridgeSize();
      }

      this.bridgeLength = Number(input);
      this.getBridge(input);
      // console.log(this.bridge);
      this.readMoving();
    });
  },

  getBridge(input) {
    const BRIDGE = BridgeMaker.makeBridge(input, BridgeRandomNumberGenerator.generate);
    this.bridge = BRIDGE;
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    MissionUtils.Console.readLine(CONSOLE_MESSAGE.moveInput, (input) => {
      try {
        this.exception.validateMove(input);
      } catch (error) {
        return this.readMoving();
      }

      const BRIDGE_GAME_LOG = OutputView.printMap(this.bridge[this.moveCount], input);
      this.moveCount += 1;
      this.trackProgress(BRIDGE_GAME_LOG);
    });
  },

  trackProgress(bridgeGameLog) {
    if (this.validation.checkRestartRequirement(this.moveCount, bridgeGameLog, this.bridge)) {
      this.readGameCommand(bridgeGameLog);
    }

    if (this.validation.checkGameSuccess(this.moveCount, bridgeGameLog, this.bridge)) {
      OutputView.printResult(bridgeGameLog, RESULT_MESSAGE.success);
    } else {
      this.readMoving();
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeGameLog) {
    MissionUtils.Console.readLine(CONSOLE_MESSAGE.restartCheck, (input) => {
      try {
        this.exception.validateRestartInput(input);
      } catch (error) {
        return this.readGameCommand(bridgeGameLog);
      }

      this.checkRestart(input, bridgeGameLog);
    });
  },

  checkRestart(input, bridgeGameLog) {
    if (input === PARAMETERS.restartControl) {
      OutputView.bridgeGame.retry();
      this.moveCount = 0;
      this.readMoving();
    } else {
      OutputView.printResult(bridgeGameLog, RESULT_MESSAGE.fail);
    }
  },
};

module.exports = InputView;
