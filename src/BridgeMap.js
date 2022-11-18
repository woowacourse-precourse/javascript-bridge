class BridgeMap {
  #FIRST_MAP_SOURCE = { CORRECT: ' O ', INCORRECT: ' X ', EMPTY: '   ' };

  #MAP_SOURCE = { CORRECT: '| O ', INCORRECT: '| X ', EMPTY: '|   ' };

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
}

module.exports = BridgeMap;
