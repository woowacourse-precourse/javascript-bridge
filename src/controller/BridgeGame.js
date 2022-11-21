const { GAME } = require('../constants/Constants');
const { Console } = require('@woowacourse/mission-utils');

class BridgeGame {
  #view;
  #domain;

  constructor(view, domain) {
    this.#view = view;
    this.#domain = domain;
  }

  start() {
    this.#view.printStart();
    this.#view.readBridgeLength(this.#initBridge.bind(this));
  }

  #initBridge(length) {
    this.#domain.setBridgeLength(length);
    this.#move();
  }

  #move() {
    this.#domain.moveOneStep();
    this.#view.readMoving(this.#printCurrentBridge.bind(this));
  }

  #printCurrentBridge(moving) {
    const step = this.#domain.isMovable(moving);
    this.#domain.setIsAlive(step);

    const isAlive = this.#domain.isAlive();
    const partialBridgeMap = this.#domain.getPartialBridgeMap();
    this.#view.printMap(partialBridgeMap, isAlive);

    if (this.#domain.isEndOfBridge()) this.#result();
    else isAlive ? this.#move() : this.#inputRetry();
  }

  #inputRetry() {
    this.#view.readGameCommand(this.#isRetry.bind(this));
  }

  #isRetry(gameCommand) {
    if (gameCommand === GAME.restart) {
      this.#domain.addMovingCount();
      this.#domain.resetCurrentLocation();
      this.#move();
    }
    if (gameCommand === GAME.quit) this.#result();
  }

  #result() {
    const partialBridgeMap = this.#domain.getPartialBridgeMap();
    const isAlive = this.#domain.isAlive();
    const totalMovingCount = this.#domain.getTotalMovingCount();
    this.#view.printResult(partialBridgeMap, isAlive, totalMovingCount);
    this.#end();
  }

  #end() {
    // this.#view.endRead();
    Console.close();
  }
}

module.exports = BridgeGame;
