const { GAME_COMMAND } = require('../utils/constants/GameSystem');
const { getMakeBridge } = require('../utils/services/map');
const BridgeMapFormatter = require('./BridgeMapFormatter');
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
    this.#map = new BridgeMapFormatter(model, view);
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
    return this.#model.isCorrectLocation() ? this.keepGoing() : this.lose()
  }

  keepGoing() {
    this.#map.printMap();
    this.checkWin();
  }

  checkWin() {
    const isWin = this.#model.isWin();
    this.#model.setWin(isWin);

    return isWin ?  this.end() : this.move();
  }

  lose() {
    this.#model.setLose(true);
    this.#map.printMap();

    return this.#userInput.readGameCommand();
  }

  retryOrQuit() {
    const command = this.#model.getGameCommand();
    return GAME_COMMAND[command] ? this.retry() : this.end();
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

