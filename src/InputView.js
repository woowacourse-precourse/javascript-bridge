const MissionUtils = require('@woowacourse/mission-utils');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeMaker = require('./BridgeMaker');
const BridgeGame = require('./BridgeGame');
const Validate = require('./Validation');
const OutputView = require('./OutputView');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  BRIDGE_GAME: new BridgeGame(),
  INDEX: 0,
  SUCCESS_MESSAGE: '성공',
  COUNT: 1,
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine('다리의 길이를 입력해주세요.\n', (userInput) => {
      this.validateBridgeInput(userInput);
    });
  },

  validateBridgeInput(userInput) {
    try {
      Validate.sizeInput(userInput);
      const BUILD_BRIDGE = BridgeRandomNumberGenerator.generate;
      const BRIDGE = BridgeMaker.makeBridge(userInput, BUILD_BRIDGE);
      this.readMoving(BRIDGE);
    } catch (error) {
      MissionUtils.Console.print(error);
      this.readBridgeSize();
    }
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeArray) {
    MissionUtils.Console.readLine('\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n', (userInput) => {
      this.validateMovingInput(userInput, bridgeArray);
    });
  },

  validateMovingInput(userInput, bridgeArray) {
    try {
      Validate.moveInput(userInput);
      this.moveOrFail(userInput, bridgeArray);
    } catch (error) {
      MissionUtils.Console.print(error);
      this.readMoving(bridgeArray);
    }
  },

  moveOrFail(userAnswer, bridgeArray) {
    if (bridgeArray.length - 1 === this.INDEX) {
      this.BRIDGE_GAME.move(userAnswer);
      return OutputView.printResult(this.SUCCESS_MESSAGE, this.COUNT);
    }
    if (bridgeArray[this.INDEX] === userAnswer) {
      this.INDEX += 1;
      this.BRIDGE_GAME.move(userAnswer);
      return this.readMoving(bridgeArray);
    }
    return this.fail(userAnswer, bridgeArray);
  },

  fail(userAnswer, bridgeArray) {
    this.BRIDGE_GAME.fail(userAnswer);
    this.readGameCommand(bridgeArray);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeArray) {
    MissionUtils.Console.readLine(
      '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
      (userInput) => {
        this.validateGameCommand(userInput, bridgeArray);
      }
    );
  },

  validateGameCommand(userInput, bridgeArray) {
    try {
      Validate.retryQuitInput(userInput);
      this.retryQuit(userInput, bridgeArray);
    } catch (error) {
      MissionUtils.Console.print(error);
      this.readGameCommand(bridgeArray);
    }
  },

  retryQuit(userInput, bridgeArray) {
    if (userInput === 'R') {
      this.COUNT += 1;
      this.INDEX = 0;
      this.BRIDGE_GAME.retry(userInput, this.COUNT);
      this.readMoving(bridgeArray);
    }
    if (userInput === 'Q') {
      this.BRIDGE_GAME.retry(userInput, this.COUNT);
    }
  },
};

module.exports = InputView;
