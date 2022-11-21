const BridgeMaker = require('../src/BridgeMaker');
const BridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator');

describe('예외 테스트', () => {
  test.each([[2], [-12], [42], ['ab']])('다리 사이즈 예외처리', (input) => {
    expect(() => {
      BridgeMaker.makeBridge(input, BridgeRandomNumberGenerator);
    }).toThrow('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
  });
});
