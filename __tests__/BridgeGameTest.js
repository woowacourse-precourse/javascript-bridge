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

  test.each([
    [['U', 'D', 'D'], ['U', 'D'], ['[ O |   ]', '[   | O ]']],
    [['U', 'D', 'D'], ['U', 'U'], ['[ O | X ]', '[   |   ]']],
    [['U', 'D', 'D'], ['U', 'D', 'D'], ['[ O |   |   ]', '[   | O | O ]']],
  ])('다리 출력 배열에 대한 생성 기능 구현 테스트', (first, second, expected) => {
    const bridgeGame = new BridgeGame();
    const result = bridgeGame.makeBridgeString(first, second);
    expect(result).toEqual(expected);
  });

  test.each([
    [['U', 'U'], ['U', 'D', 'D'], 1, 0],
    [['U', 'D'], ['U', 'D', 'D'], 1, 1],
    [['U', 'D', 'D'], ['U', 'D', 'D'], 2, 2],
  ])('사용자가 이동한 칸에 대한 결과 기능 구현 테스트', (first, second, third, expected) => {
    const bridgeGame = new BridgeGame();
    const result = bridgeGame.getMoveResult(first, second, third);
    expect(result).toEqual(expected);
  });

  test.each([
    ['R', true],
    ['Q', false],
  ])('게임 재시작 기능 구현 테스트', (first, expected) => {
    const bridgeGame = new BridgeGame();
    const result = bridgeGame.retry(first);
    expect(result).toEqual(expected);
  });
});
