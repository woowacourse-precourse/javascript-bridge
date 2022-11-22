const MapMaker = require('../MapMaker');

class BridgeMap {
  #FIRST_MAP_SOURCE = { CORRECT: ' O ', INCORRECT: ' X ', EMPTY: '   ' };

  #MAP_SOURCE = { CORRECT: '| O ', INCORRECT: '| X ', EMPTY: '|   ' };

  #isFirst = true;

  #bridgeMap = MapMaker.makeMap();

  getMap() {
    return this.#bridgeMap;
  }

  initBridgeMap() {
    this.#bridgeMap = MapMaker.makeMap();
    this.#isFirst = true;
  }

  handleMap(moveStatement, input) {
    if (this.#isFirst) {
      this.#bridgeMap = this.addMap(moveStatement, input);
      this.#isFirst = false;
      return 'isFirst';
    }
    if (!this.#isFirst) {
      this.#bridgeMap = this.addMap(moveStatement, input);
      return 'isNotFirst';
    }
    return true;
  }

  addMap(moveStatement, input) {
    if (this.#isFirst) {
      if (moveStatement) return this.addCorrect(input, this.#FIRST_MAP_SOURCE);
      if (!moveStatement) return this.addIncorrect(input, this.#FIRST_MAP_SOURCE);
    }
    if (!this.#isFirst) {
      if (moveStatement) return this.addCorrect(input, this.#MAP_SOURCE);
      if (!moveStatement) return this.addIncorrect(input, this.#MAP_SOURCE);
    }
    return true;
  }

  addCorrect(input, mapSource) {
    const beforeMap = this.#bridgeMap;
    const [up, down] = beforeMap;
    if (input === 'D') {
      up.push(mapSource.EMPTY);
      down.push(mapSource.CORRECT);
    } else {
      up.push(mapSource.CORRECT);
      down.push(mapSource.EMPTY);
    }
    return [up, down];
  }

  addIncorrect(input, mapSource) {
    const beforeMap = this.#bridgeMap;
    const [up, down] = beforeMap;
    if (input === 'D') {
      down.push(mapSource.INCORRECT);
      up.push(mapSource.CORRECT);
    } else {
      down.push(mapSource.CORRECT);
      up.push(mapSource.INCORRECT);
    }
    return [up, down];
  }
}

module.exports = BridgeMap;
