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
    this.#model.allReset();
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
    this.move();
  }

  move() {
    this.#userInput.readMoving();
  }

  checkMoving() {
    if (this.#model.isCorrectLocation()) return this.keepGoing();
    return this.lose();
  }

  keepGoing() {
    this.#map.printMap();
    this.checkWin();
  }

  checkWin() {
    const isWin = this.#model.isWin();
    this.#model.setWin(isWin);

    if (isWin) return this.end();
    return this.move();
  }

  lose() {
    this.#model.setLose(true);
    this.#map.printMap();

    return this.#userInput.readGameCommand();
  }

  retryOrQuit() {
    const command = this.#model.getGameCommand();
    if (GAME_COMMAND[command]) return this.retry();
    return this.end();
  }

  retry() {
    this.#model.roundReset();
    this.#model.updateRetryCount();
    return this.move();
  }

  end() {
    const map = this.#map.makeMapList();
    const isWin = this.#model.getWin();
    const retryCount = this.#model.getRetryCount();
    this.#view.printResult(map, isWin, retryCount);
    this.#view.close();
  }
}

module.exports = BridgeGame;

