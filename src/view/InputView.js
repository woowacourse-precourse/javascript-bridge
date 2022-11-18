const MissionUtils = require('@woowacourse/mission-utils');
const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const { CONSOLELINE, DEFAULTS } = require('../utils/Constants');
const validation = require('../utils/Validation');
const OutputView = require('./OutputView');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */

let answer = [];
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */

  readBridgeSize() {
    MissionUtils.Console.readLine(CONSOLELINE.BRIDGE_LENGTH_INPUT, (input) => {
      try {
        validation.checkBridgeSize(input);
      } catch (err) {
        return this.readBridgeSize();
      }
      this.getBridgeAnswer(input);
    });
  },

  getBridgeAnswer(input) {
    const bridgeAnswer = BridgeMaker.makeBridge(input, BridgeRandomNumberGenerator.generate);
    answer = bridgeAnswer;
    this.readMoving(bridgeAnswer, 0);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(answer, move_cnt) {
    MissionUtils.Console.readLine(CONSOLELINE.MOVE_INPUT, (upOrdown) => {
      try {
        validation.checkCanMove(upOrdown);
      } catch (err) {
        return this.readMoving(answer, move_cnt);
      }
      const gameLog = OutputView.printMap(answer, upOrdown);
      move_cnt += 1;
      this.checkNeedtoStop(move_cnt, gameLog);
    });
  },

  checkNeedtoStop(move_cnt, gameLog) {
    if (validation.isRestartRequired(move_cnt, gameLog, answer)) {
      this.readGameCommand(gameLog);
    }
    if (validation.isSuccess(move_cnt, gameLog, answer)) {
      OutputView.printResult(gameLog, CONSOLELINE.SUCCESS_RESULT, false);
    } else {
      this.readMoving(answer, move_cnt);
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(gameLog) {
    MissionUtils.Console.readLine(CONSOLELINE.RESTART_CHECK, (restart) => {
      try {
        validation.checkRestartOrNot(restart);
      } catch (err) {
        return this.readGameCommand();
      }
      restart === DEFAULTS.RESTART
        ? this.readMoving(answer, 0)
        : OutputView.printResult(gameLog, CONSOLELINE.FAIL_RESULT, true);
    });
  },
};

module.exports = InputView;
