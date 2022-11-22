const BridgeGame = require('../src/BridgeGame');
const BridgeMaker = require('../src/BridgeMaker');
const BridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator');

describe('예외 테스트', () => {
  test.each([[2], [-12], [42], ['ab']])('다리 사이즈 예외처리', (input) => {
    expect(() => {
      BridgeMaker.makeBridge(input, BridgeRandomNumberGenerator);
    }).toThrow('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
  });

  test.each([[2], ['A'], [-2], ['ab']])('다리 건너기 예외처리', (input) => {
    expect(() => {
      const game = new BridgeGame();
      game.move(input);
    }).toThrow('[ERROR] 이동할 칸은 U또는 D여야 합니다.');
  });
});
