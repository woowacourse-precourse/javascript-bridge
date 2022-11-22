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
    if (result === 'movingUp' || result === 'movingDown') this.successMoving(result);
    if (result === 'movingUpFailed' || result === 'movingDownFailed') this.failMoving(result);
  },

  successMoving(result) {
    if (result === 'movingUp'){
      OutputView.printMap('O', ' ');
    }
    if (result === 'movingDown'){
      OutputView.printMap(' ', 'O');
    }
  },

  failMoving(result) {
    if (result === 'movingUpFailed') {
      OutputView.printMap('X', ' ')
      this.readGameCommand();
    };
    if (result === 'movingDownFailed') {
      OutputView.printMap(' ', 'X')
      this.readGameCommand();
    };
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
        if (result != "movingDownFailed" && result != "movingUpFailed") this.gameRound ++;
        this.processEnd();
        if (!this.end) this.readMoving();
      } catch (e) {
        Console.print(e);
        this.readMoving();
      }
    });
  },

  processEnd() {
    if (this.gameRound >= this.bridge.length) {
      Console.close();
      OutputView.printResult(this.gameTrial);
      this.end = true;
    }
  },

  validateMovingDirection(movingDirection) {
    if (movingDirection !== 'U' && movingDirection !== 'D')
      throw new Error(errorMessage.MOVE_DIRECTION);
  },

  checkRetry(restartOrEnd) {
    if (restartOrEnd === true) {
      this.gameTrial++;
      this.readMoving();
      OutputView.retryMap();
    }
    if (restartOrEnd === false) Console.close();
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
    if (restartOrEnd !== 'R' && restartOrEnd !== 'Q') throw new Error(errorMessage.RESTART);
  },
};

module.exports = InputView;
