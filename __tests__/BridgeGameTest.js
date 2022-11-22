const BridgeGame = require('../src/BridgeGame');

describe('BridgeGame 클래스 테스트', () => {
  it('생성자 매개변수의 size가 3<=size<=20이 아니라면, 예외가 발생한다.', () => {
    const input = 0;

    expect(() => {
      new BridgeGame(input);
    }).toThrow();
  });
});
