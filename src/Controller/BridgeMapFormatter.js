const { DIRECTION, STEP_TYPE } = require('../utils/constants/GameSystem');

class BridgeMapFormatter {
  #model;

  #view;

  constructor(model, view) {
    this.#model = model;
    this.#view = view;
  }

  makeMapList() {
    const current = this.#model.getCurrent();
    return Array.from({ length: 2 }, (_, parents) =>
      Array.from({ length: current }, (_, current) => {
        return this.getMyStep(parents, current);
      })
    );
  }

  getMyStep(parents, current) {
    const directionIndex = (parents + 1) % 2;
    const type = DIRECTION[directionIndex];
    if (this.#model.isSameLocation(type, current)) return STEP_TYPE.correct;
    if (this.#model.isWrongLocation(type, current)) return STEP_TYPE.wrong;
    return STEP_TYPE.none;
  }

  printMap() {
    const map = this.makeMapList();
    this.#view.printMap(map);
  }
}

module.exports = BridgeMapFormatter;
