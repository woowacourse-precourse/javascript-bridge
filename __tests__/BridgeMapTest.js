const BridgeMap = require('../src/BridgeMap');

describe('BridgeMap class 유닛 테스트', () => {
  const bridgeMap = new BridgeMap();

  const FIRST_MAP_SOURCE = { CORRECT: ' O ', INCORRECT: ' X ', EMPTY: '   ' };

  const MAP_SOURCE = { CORRECT: '| O ', INCORRECT: '| X ', EMPTY: '|   ' };

  test('BridgeMap 클래스의 bridgeMap을 가져오는 기능', () => {
    const result = bridgeMap.getMap();
    const answer = [[], []];

    expect(result).toEqual(answer);
  });

  test('BridgeMap 클래스의 bridgeMap 에 input과 맵 소스에 따라 정답의 경우의 맵 소스를 추가하는 기능', () => {
    const firstMapresult = bridgeMap.addCorrect('U', FIRST_MAP_SOURCE);

    const Firstanswer = [[' O '], ['   ']];

    bridgeMap.initBridgeMap();

    const mapResult = bridgeMap.addCorrect('D', MAP_SOURCE);

    const mapAnswer = [['|   '], ['| O ']];

    expect(firstMapresult).toEqual(Firstanswer);
    expect(mapResult).toEqual(mapAnswer);
  });

  test('BridgeMap 클래스의 bridgeMap 에 input에 따라 오답의 경우의 맵 소스에 따라 맵 소스를 추가하는 기능', () => {
    const newBridgeMap = new BridgeMap();

    const firstMapResult = newBridgeMap.addIncorrect('D', FIRST_MAP_SOURCE);

    newBridgeMap.initBridgeMap();

    const firstAnswer = [[' O '], [' X ']];

    const mapAnswer = [['| X '], ['| O ']];

    const mapResult = newBridgeMap.addIncorrect('U', MAP_SOURCE);

    expect(firstMapResult).toEqual(firstAnswer);
    expect(mapResult).toEqual(mapAnswer);
  });
});
