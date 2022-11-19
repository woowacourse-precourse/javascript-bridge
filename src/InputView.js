const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const MissionUtils = require('@woowacourse/mission-utils');
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
  SUCCES_MESSAGE: '성공',
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
    if (bridgeArray[this.INDEX] === userAnswer) {
      if (bridgeArray.length - 1 === this.INDEX) {
        this.BRIDGE_GAME.move(userAnswer);
        return OutputView.printResult(this.SUCCES_MESSAGE, this.COUNT);
      }
      this.BRIDGE_GAME.move(userAnswer);
      this.readMoving(bridgeArray);
      return (this.INDEX += 1);
    }
    this.fail(userAnswer, bridgeArray);
  },

  fail(userAnswer, bridgeArray) {
    this.INDEX = 0;
    this.BRIDGE_GAME.fail(userAnswer);
    this.readGameCommand(bridgeArray);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeArray) {
    MissionUtils.Console.print('\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)');
    MissionUtils.Console.readLine('', (userInput) => {
      this.validateGameCommand(userInput, bridgeArray);
    });
  },

  validateGameCommand(userInput, bridgeArray) {
    try {
      Validate.retryOrEnd(userInput);
      if (userInput === 'R') {
        this.COUNT += 1;
        OutputView.removeArray();
        this.readMoving(bridgeArray);
      }
      if (userInput === 'Q') this.BRIDGE_GAME.retry(userInput, bridgeArray, this.COUNT);
    } catch (error) {
      MissionUtils.Console.print(error);
      this.INDEX = 0;
      OutputView.removeArray();
      this.readGameCommand(bridgeArray);
    }
  },
};

module.exports = InputView;
