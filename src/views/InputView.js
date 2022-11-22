const { Console } = require('@woowacourse/mission-utils');
const BridgeMaker = require('../BridgeMaker');
const BridgeGame = require('../BridgeGame');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const errorMessage = require('../constants/errorMessage');
const userInputMessage = require('../constants/userInputMessage');
const gameOutputMessage = require('../constants/gameOutputMessage');
const OutputView = require('./OutputView');

const Game = new BridgeGame();
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  gameRound: 0,
  bridge: [],
  gameTrial: 1,
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(userInputMessage.ENTER_BRIDGE_LENGTH, (bridgeLength) => {
      try {
        this.validateBridgeSize(bridgeLength);
        this.bridge = BridgeMaker.makeBridge(bridgeLength, BridgeRandomNumberGenerator.generate);
        this.readMoving();
      } catch (e) {
        Console.print(e);
        this.readBridgeSize();
      }
    });
  },

  validateBridgeSize(bridgeLength) {
    if (isNaN(bridgeLength)) throw new Error(errorMessage.NOT_NUMBER);
    if (bridgeLength < 3 || bridgeLength > 20) throw new Error(errorMessage.OUT_RANGE_NUMBER);
  },

  checkMovingResult(result) {
    if (result === gameOutputMessage.MOVING_UP_SUCCESS || result === gameOutputMessage.MOVING_DOWN_SUCCESS) this.successMoving(result);
    if (result === gameOutputMessage.MOVING_UP_FAILED || result === gameOutputMessage.MOVING_DOWN_FAILED) this.failMoving(result);
  },

  successMoving(result) {
    OutputView.sucessOrFailed(true);
    if (result === gameOutputMessage.MOVING_UP_SUCCESS) {
      OutputView.printMap(gameOutputMessage.CIRCLE_MARK, gameOutputMessage.BLANK);
    }
    if (result === gameOutputMessage.MOVING_DOWN_SUCCESS) {
      OutputView.printMap(gameOutputMessage.BLANK, gameOutputMessage.CIRCLE_MARK);
    }
  },

  failMoving(result) {
    OutputView.sucessOrFailed(false);
    if (result === gameOutputMessage.MOVING_UP_FAILED) {
      OutputView.printMap(gameOutputMessage.X_MARK, gameOutputMessage.BLANK);
      this.readGameCommand();
    }
    if (result === gameOutputMessage.MOVING_DOWN_FAILED) {
      OutputView.printMap(gameOutputMessage.BLANK, gameOutputMessage.X_MARK);
      this.readGameCommand();
    }
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(userInputMessage.ENTER_MOVE_DIRECTION, (movingDirection) => {
      try {
        this.validateMovingDirection(movingDirection);
        const result = Game.move(this.bridge, movingDirection, this.gameRound);
        this.checkMovingResult(result);
        if (result !== gameOutputMessage.MOVING_UP_FAILED && result !== gameOutputMessage.MOVING_DOWN_FAILED) this.gameRound++;
        this.endGame();
        if (!this.end) this.readMoving();
      } catch (e) {
        Console.print(e);
        this.readMoving();
      }
    });
  },

  endGame() {
    if (this.gameRound >= this.bridge.length) {
      OutputView.printResult(this.gameTrial);
      this.end = true;
      Console.close();
    }
  },

  validateMovingDirection(movingDirection) {
    if (movingDirection !== userInputMessage.UPSIDE && movingDirection !== userInputMessage.DOWNSIDE)
      throw new Error(errorMessage.MOVE_DIRECTION);
  },

  checkRetry(restartOrEnd) {
    if (restartOrEnd === true) {
      this.gameTrial++;
      this.readMoving();
      OutputView.retryMap();
    }
    if (restartOrEnd === false) {
      OutputView.printResult(this.gameTrial);
      Console.close();
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(userInputMessage.ENTER_RESTART, (restartOrEnd) => {
      try {
        this.validateGameCommand(restartOrEnd);
        this.checkRetry(Game.retry(restartOrEnd));
      } catch (e) {
        Console.print(e);
        this.readGameCommand();
      }
    });
  },

  validateGameCommand(restartOrEnd) {
    if (restartOrEnd !== userInputMessage.RETRY && restartOrEnd !== userInputMessage.QUIT) 
      throw new Error(errorMessage.RESTART);
  },
};

module.exports = InputView;
