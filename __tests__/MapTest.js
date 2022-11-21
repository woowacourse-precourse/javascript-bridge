const Map = require('../src/Map');

describe('출력할 맵 만들기 테스트', () => {
  test('일치하는 경우 테스트', () => {
    const bridgeInfo = {
      bridge: ['U', 'U', 'U'],
      userMove: ['U', 'U', 'U'],
    };
    const expectedResult = ['[ O | O | O ]', '[   |   |   ]'];
    expect(Map.makeMap(bridgeInfo)).toEqual(expectedResult);
  });

  test('중간에 실패하는 경우 테스트', () => {
    const bridgeInfo = {
      bridge: ['U', 'U', 'U'],
      userMove: ['U', 'D'],
    };
    const expectedResult = ['[ O |   ]', '[   | X ]'];
    expect(Map.makeMap(bridgeInfo)).toEqual(expectedResult);
  });
});
