const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('../BridgeGame');
const { CMM_INPUT_MOVING, CMM_INPUT_SIZE, CMM_INPUT_REPLAY } = require('../constant/Comment');
const { STATUS_SUCCESS, STATUS_FAIL, STATUS_FINISH, RETRY } = require('../constant/constants');
const { validateBridgeSize, validateMoving, validateReplay } = require('./InputValidation');
const OutputView = require('./OutputView');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const bridgeGame = new BridgeGame();

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(CMM_INPUT_SIZE, (input) => {
      try {
        const bridgeSize = validateBridgeSize(input);
        bridgeGame.bridgeSetting(bridgeSize);
        this.readMoving();
      } catch (e) {
        Console.print(e.message);
        this.readBridgeSize();
      }
    });
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(CMM_INPUT_MOVING, (input) => {
      try {
        validateMoving(input);
        const status = bridgeGame.check(input);
        OutputView.printMap(bridgeGame.isAnswerList, bridgeGame.userInputString);
        this.doAfterCheck(status);
      } catch (e) {
        Console.print(e.message);
        this.readMoving();
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(nextStep) {
    Console.readLine(CMM_INPUT_REPLAY, (input) => {
      try {
        validateReplay(input);
        nextStep(input);
      } catch (e) {
        Console.print(e.message);
        this.readGameCommand(nextStep);
      }
    });
  },
  
  /**
   * status에 따라 다음에 해야할 일을 수행하는 메서드
   * @param {string} status 
   */
  doAfterCheck(status) {
    switch (status) {
      case STATUS_SUCCESS:
        bridgeGame.plusRound();
        this.readMoving();
        break;
      case STATUS_FAIL:
        this.askRetry();
        break;
      case STATUS_FINISH:
        OutputView.printResult(bridgeGame.isAnswerList, bridgeGame.userInputString, bridgeGame.try);
        break;
    }
  },
  /**
   * 다시 시도할지 물어볼 때 사용하는 메서드
   */
  askRetry() {
    this.readGameCommand((input) => {
      if (input === RETRY) {
        bridgeGame.retry();
        this.readMoving();
      } else {
        OutputView.printResult(bridgeGame.isAnswerList, bridgeGame.userInputString, bridgeGame.try);
      }
    });
  },
};

module.exports = InputView;
