const BridgeMaker = require('./BridgeMaker');
const { MAP } = require('./Constants');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #choices;
  #count;

  constructor() {
    this.#bridge = [];
    this.#choices = [];
    this.#count = 1;
  }

  #checkChoice() {
    const length = this.#choices.length;

    return this.#bridge[length - 1] === this.#choices[length - 1];
  }

  checkClear() {
    return this.#bridge.join('') === this.#choices.join('');
  }

  move(choice) {
    this.#choices.push(choice);
    return this.#checkChoice();
  }

  retry() {
    this.#choices = [];
    this.#count += 1;
  }

  setBridge(bridge) {
    this.#bridge = bridge;
  }

  getBridge() {
    return this.#bridge;
  }

  getChoices() {
    return this.#choices;
  }

  getCount() {
    return this.#count;
  }
}

module.exports = BridgeGame;
