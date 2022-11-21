const { Console } = require('@woowacourse/mission-utils');
const { START_MESSAGE } = require('../util/Constant');
const { GAME_UTILS } = require('../util/Constant');
const InputView = require('./InputView');
const BridgeSizeValidator = require('./validator/BridgeSizeValidator');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const MovingValidator = require('./validator/MovingValidator');
const OutputView = require('./OutputView');
const GameCommandValidator = require('./validator/GameCommandValidator');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */

class BridgeGame {
  #bridgeSize;
  #bridgeSet;
  #gameStage;
  #gameAttempt;
  #checkSet;

  constructor() {
    this.#gameAttempt = 1;
    this.#gameStage = 0;
    this.#checkSet = [];
  }

  start() {
    Console.print(START_MESSAGE.START_TITLE);
    this.inputBridgeSize();
  }

  inputBridgeSize() {
    InputView.readBridgeSize(this.validateBridgeSize.bind(this));
  }

  validateBridgeSize(bridgeSize) {
    try {
      new BridgeSizeValidator(bridgeSize);
      this.#bridgeSize = bridgeSize;
      this.setBridgeRandomNumber();
    } catch (error) {
      Console.print(error);
      this.inputBridgeSize();
    }
  }

  setBridgeRandomNumber() {
    const bridgeRandomNumber = () => BridgeRandomNumberGenerator.generate();
    this.#bridgeSet = BridgeMaker.makeBridge(this.#bridgeSize, bridgeRandomNumber);
    this.inputMoving();
  }

  inputMoving() {
    InputView.readMoving(this.validateMoving.bind(this));
  }

  validateMoving(moving) {
    try {
      new MovingValidator(moving);
      this.isRightBridge(moving);
    } catch (error) {
      Console.print(error);
      this.inputMoving();
    }
  }

  isRightBridge(moving) {
    moving === this.#bridgeSet[this.#gameStage] ? this.#checkSet.push(GAME_UTILS.MOVE_CORRECT) : this.#checkSet.push(GAME_UTILS.MOVE_WRONG);
    this.move();
    this.#checkSet.includes(GAME_UTILS.MOVE_WRONG) ? this.wrongBridge() : this.correctBridge();
  }

  correctBridge() {
    if (this.#gameStage === this.#bridgeSet.length - 1) {
      return this.printEndGameMessage(GAME_UTILS.GAME_RESULT_SUCCESS);
    }
    this.#gameStage += 1;
    this.inputMoving();
  }

  printEndGameMessage(result) {
    OutputView.printEndMessage();
    this.move();
    return OutputView.printResult(this.#gameAttempt, result);
  }

  wrongBridge() {
    InputView.readGameCommand(this.validateGameCommand.bind(this));
  }

  validateGameCommand(command) {
    try {
      new GameCommandValidator(command);
      this.checkGameCommand(command);
    } catch (error) {
      Console.print(error);
      this.wrongBridge();
    }
  }

  checkGameCommand(command) {
    if (command === GAME_UTILS.COMMAND_RESTART) return this.retry();
    this.printEndGameMessage(GAME_UTILS.GAME_RESULT_FAILURE);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    const uBridgeMap = [];
    const dBridgeMap = [];
    this.#checkSet.forEach((stage, index) => {
      this.#bridgeSet[index] === GAME_UTILS.COMMAND_UPBRIDGE ? uBridgeMap.push(stage) : uBridgeMap.push(GAME_UTILS.MOVE_UNCHECK);
      this.#bridgeSet[index] === GAME_UTILS.COMMAND_DOWNBRIDGE ? dBridgeMap.push(stage) : dBridgeMap.push(GAME_UTILS.MOVE_UNCHECK);
    });
    OutputView.printMap(uBridgeMap, dBridgeMap);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#gameStage = 0;
    this.#gameAttempt += 1;
    this.#checkSet = [];
    this.inputMoving();
  }

  play() {
    this.start();
  }
}

module.exports = BridgeGame;
