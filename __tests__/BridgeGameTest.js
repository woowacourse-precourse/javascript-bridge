const BridgeGame = require('../src/BridgeGame');

describe("BridgeGame 클래스 도메인 로직 테스트", () => {
    
  test.each([
    // block cur letter expected
    ['U', 'U', 'U', 'O'],
    ['U', 'U', 'D', ' '],
    ['U', 'D', 'U', ' '],
    ['U', 'D', 'D', 'X'],
    ['D', 'U', 'U', 'X'],
    ['D', 'U', 'D', ' '],
    ['D', 'D', 'U', ' '],
    ['D', 'D', 'D', 'O'],
  ])('각 블락에 대한 기능 구현 테스트', (first, second, third, expected) => {
    const bridgeGame = new BridgeGame();
    const result = bridgeGame.checkBlock(first, second, third);
    expect(result).toEqual(expected);
  });

  test.each([
    [['U', 'D', 'D'], ['U', 'D'], 'U', ' O |   '],
    [['U', 'D', 'D'], ['U', 'D'], 'D', '   | O '],
    [['U', 'D', 'D'], ['U', 'U'], 'U', ' O | X '],
    [['U', 'D', 'D'], ['U', 'U'], 'D', '   |   '],
    [['U', 'D', 'D'], ['U', 'D', 'D'], 'U', ' O |   |   '],
    [['U', 'D', 'D'], ['U', 'D', 'D'], 'D', '   | O | O '],
  ])('다리 각각에 대한 생성 기능 구현 테스트', (first, second, third, expected) => {
    const bridgeGame = new BridgeGame();
    const result = bridgeGame.makeEachMap(first, second, third);
    expect(result).toEqual(expected);
  });
});
