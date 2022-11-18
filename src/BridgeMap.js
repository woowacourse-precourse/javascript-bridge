class BridgeMap {
  #FIRST_MAP_SOURCE = { CORRECT: ' O ', INCORRECT: ' X ', EMPTY: '   ' };

  #MAP_SOURCE = { CORRECT: '| O ', INCORRECT: '| X ', EMPTY: '|   ' };

  addFirstMap(boolean, input, beforeMap) {
    // this.#isFirst = false;
    // console.log(boolean, input, beforeMap, 'addfristMap 확인용');
    if (boolean) return BridgeMap.addCorrect(input, beforeMap, this.#FIRST_MAP_SOURCE);
    if (!boolean) return BridgeMap.addIncorrect(input, beforeMap, this.#FIRST_MAP_SOURCE);
  }

  addMap(boolean, input, beforeMap) {
    if (boolean) return BridgeMap.addCorrect(input, beforeMap, this.#MAP_SOURCE);
    if (!boolean) return BridgeMap.addIncorrect(input, beforeMap, this.#MAP_SOURCE);
  }

  static addCorrect(input, beforeMap, mapSource) {
    // console.log(input, beforeMap, mapSource, 'addCorrect 확인용');
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

  static addIncorrect(input, beforeMap, mapSource) {
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
