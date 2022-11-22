const { makeBridge } = require('../BridgeMaker');
const { generate } = require('../BridgeRandomNumberGenerator');
const { DIRECTION, PHASE } = require('../constant/Constant');

const RESULT = Object.freeze({
  SUCCESS: '성공',
  FAIL: '실패',
});

class BridgeGame {
  #OBJECT = Object.freeze({
    [RESULT.SUCCESS]: 'O',
    [RESULT.FAIL]: 'X',
    BLANK: ' ',
  });

  #bridge;

  #playerPosition;

  try = 0;

  moveMap = new Map();

  constructor(size) {
    this.#bridge = makeBridge(size, generate);
    this.#reset();
  }

  #reset() {
    this.#playerPosition = -1;
    this.try += 1;
    this.result = RESULT.SUCCESS;
    this.#resetMap();
  }

  #resetMap() {
    const { moveMap } = this;

    moveMap.set(DIRECTION[1], []);
    moveMap.set(DIRECTION[0], []);
  }

  move(moving) {
    this.#playerPosition += 1;
    if (moving !== this.#bridge[this.#playerPosition]) {
      this.result = RESULT.FAIL;
      return PHASE.COMMAND;
    }
    if (this.#playerPosition + 1 === this.#bridge.length) {
      return PHASE.RESULT;
    }
    return PHASE.MOVE;
  }

  drawMap(moving) {
    const { moveMap, result } = this;
    const unchosen = new Set(moveMap.keys());

    moveMap.get(moving).push(this.#OBJECT[result]);
    unchosen.delete(moving);
    unchosen.forEach((direction) => {
      moveMap.get(direction).push(this.#OBJECT.BLANK);
    });
  }

  retry() {
    this.#reset();
    return PHASE.MOVE;
  }
}

module.exports = BridgeGame;
