const MapMaker = require('./MapMaker');

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

  cofirm() {
    const [up, down] = this.#bridgeMap;
    console.log(`[${up.join('')}]\n[${down.join('')}]`);
  }

  handleMap(boolean, input) {
    if (this.#isFirst) {
      this.#bridgeMap = this.addMap(boolean, input);
      this.#isFirst = false;
      return true;
    }
    if (!this.#isFirst) {
      this.#bridgeMap = this.addMap(boolean, input);
      return true;
    }
    return true;
  }

  addMap(boolean, input) {
    if (this.#isFirst) {
      if (boolean) return this.addCorrect(input, this.#FIRST_MAP_SOURCE);
      if (!boolean) return this.addIncorrect(input, this.#FIRST_MAP_SOURCE);
    }
    if (!this.#isFirst) {
      if (boolean) return this.addCorrect(input, this.#MAP_SOURCE);
      if (!boolean) return this.addIncorrect(input, this.#MAP_SOURCE);
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
