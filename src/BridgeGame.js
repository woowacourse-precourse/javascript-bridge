const inputView = require('./InputView');
const { BRIDGE } = require('../constants/game.constants');
const outputView = require('./OutputView');
const InputValidator = require('../validators/InputValidator');
const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #moveIndex;
  #tryCount;
  #inputUpDown;
  #upList;
  #downList;

  constructor () {
    this.#moveIndex = 0;
    this.#tryCount = 1;
    this.#upList = [];
    this.#downList = [];
  }

  incrementMoveIndex(){
    this.#moveIndex += 1;
  }

  setBridge (bridge) {
    this.#bridge = bridge;
  }

  getBridge () {
    return this.#bridge;
  }

  maker () {
    inputView.readBridgeSize(this.handleBridgeLength.bind(this));
  }

  makeAndSaveBridge (length) {
    const bridge = makeBridge(length, generate);
    this.setBridge(bridge);
  }

  handleBridgeLength (length) {
    try {
      InputValidator.isRightBridgeLength(length);
      this.makeAndSaveBridge(length);
      this.move(this);
    } catch (error) {
      outputView.printError(error);
      this.maker();
    }
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(bridgeGame) {
    if (this.#moveIndex !== this.#bridge.length) {
      inputView.readMoving(this.handleMoveBridge.bind(this));
    } else {
      outputView.printResult(true, bridgeGame);
    }
  }

  drawBridgeMap (string) {
    this.setInputUpDown(string);
      this.setMapArray(this.sameBridge(this.#moveIndex), string);
      outputView.printMap(this);
  }

  handleMoveInput (string) {
    if (this.#bridge[this.#moveIndex] === string) {
      this.incrementMoveIndex();
      return this.move(this);
    }
    this.retry(this);
  }

  handleMoveBridge (string) {
    try {
      InputValidator.isUpDown(string);
      this.drawBridgeMap(string);
      this.handleMoveInput(string);
    } catch (error) {
      outputView.printError(error);
      this.move(this);
    }
  }

  getMoveIndex () {
    return this.#moveIndex;
  }

  incrementTryCount () {
    this.#tryCount += 1;
  }

  setInputUpDown (inputUpDown) {
    this.#inputUpDown = inputUpDown;
  }

  getTryCount () {
    return this.#tryCount;
  }

  getInputUpDown () {
    return this.#inputUpDown;
  }

  sameBridge (idx) {
    return this.getBridge()[idx] === this.getInputUpDown()
      ? BRIDGE.ABLE
      : BRIDGE.UNABLE;
  }

  setMapArray (sameResult, string) {
    if (string === BRIDGE.UP && sameResult === BRIDGE.ABLE) {
      this.#upList.push(sameResult);
      this.#downList.push(' ');
    }
    if (string === BRIDGE.UP && sameResult === BRIDGE.UNABLE) {
      this.#upList.push(sameResult);
      this.#downList.push(' ');
    }
    if (string === BRIDGE.DOWN && sameResult === BRIDGE.ABLE) {
      this.#upList.push(' ');
      this.#downList.push(sameResult);
    }
    if (string === BRIDGE.DOWN && sameResult === BRIDGE.UNABLE) {
      this.#upList.push(' ');
      this.#downList.push(sameResult);
    }
  }

  getUpList () {
    return this.#upList;
  }

  getDownList () {
    return this.#downList;
  }

  getPrintList (list) {
    return `${BRIDGE.START} ${list.join(BRIDGE.DIVISION)} ${BRIDGE.END}`;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    inputView.readGameCommand(this.handleAskRetry.bind(this));
  }

  inputRetry (string) {
    if (string === 'R') {
      this.setList();
      this.move(this);
      this.incrementTryCount();
    }
  }

  inputQuit (string) {
    if (string === 'Q') outputView.printResult(false, this);
  }

  handleAskRetry (string) {
    try {
      InputValidator.isRestartQuit(string);
      this.inputRetry(string);
      this.inputQuit(string);
    } catch (error) {
      outputView.printError(error);
      this.retry();
    }
  }

  setList () {
    this.#moveIndex = 0;
    this.#upList = [];
    this.#downList = [];
  }
}

module.exports = BridgeGame;
