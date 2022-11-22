const BridgeGame = require('../../src/domains/BridgeGame');
const ValidationError = require('../../src/errors/ValidationError');

describe('BridgeGame 클래스 테스트', () => {
  test('Bridge 이외의 값을 주었을 때 예외를 발생시키는지', () => {
    expect(() => {
      new BridgeGame('odd value');
    }).toThrow(ValidationError);
  });
});
