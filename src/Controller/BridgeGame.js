const { GAME_COMMAND } = require('../utils/constants/GameSystem');
const { getMakeBridge } = require('../utils/services/map');
const BridgeMap = require('./BridgeMap');
const UserInput = require('./UserInput');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #model;

  #view;

  #map;

  #userInput;

  constructor(model, view) {
    this.#model = model;
    this.#view = view;
    this.#map = new BridgeMap(model, view);
    this.#userInput = new UserInput(model, view, this);
  }

  start() {
    this.#view.printStart();
    this.#userInput.readBridgeSize();
  }

  makeBridge() {
    const size = this.#model.getBridgeSize();
    const bridge = getMakeBridge(size);
    this.saveBridge(bridge);
  }

  saveBridge(bridge) {
    this.#model.setBridge(bridge);
    console.log(bridge);
    this.move();
  }

  move() {
    this.#userInput.readMoving();
  }

  checkMoving() {
    if (this.#model.isCorrectLocation()) return this.keepGoing();
    return this.gameOver();
  }

  keepGoing() {
    this.#map.printMap();
    this.checkWin();
  }

  checkWin() {
    const isWin = this.#model.isWin();
    this.#model.setGameWin(isWin);

    if (isWin) return this.end();
    return this.move();
  }

  gameOver() {
    this.#model.setGameOver(true);
    this.#map.printMap();

    return this.#userInput.readGameCommand();
  }

  retryOrQuit() {
    const command = this.#model.getGameCommand();
    if (GAME_COMMAND[command]) return this.retry();
    return this.end();
  }

  retry() {
    this.#model.reset();
    this.#model.updateRetryCount();
    return this.move();
  }

  end() {
    const map = this.#map.makeMapList();
    const isGameWin = this.#model.getGameWin();
    const retryCount = this.#model.getRetryCount();
    this.#view.printResult(map, isGameWin, retryCount);
    this.#view.close();
  }
}

module.exports = BridgeGame;

