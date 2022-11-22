const BridgeGame = require('../src/BridgeGame');

describe('BridgeGame 클래스의 테스트입니다.', () => {
  test('isSuccess 메서드는 현재 이동이 성공하였는지 Boolean으로 반환한다.', () => {
    const bridgeGame = new BridgeGame();
    bridgeGame.setBridge(3);
    bridgeGame.move('U');

    expect(typeof bridgeGame.isSuccess()).toBe('boolean');
  });

  test('isFinal 메서드는 현재 이동이 마지막인지 Boolean으로 반환한다.', () => {
    const bridgeGame = new BridgeGame();
    bridgeGame.setBridge(2);
    bridgeGame.move('D');

    expect(typeof bridgeGame.isFinal()).toBe('boolean');
  });

  test('getMap 메소드는 upFloorsMap과 downFloorsMap을 String으로 반환한다.', () => {
    const bridgeGame = new BridgeGame();
    bridgeGame.setBridge(5);
    bridgeGame.move('U');

    expect(bridgeGame.getMap()).toMatchObject({
      upFloorsMap: expect.any(String),
      downFloorsMap: expect.any(String),
    });
  });

  test('getResult 메서드는 성공, 실패 여부와 시도 횟수를 String으로 반환한다.', () => {
    const bridgeGame = new BridgeGame();
    bridgeGame.setBridge(4);

    expect(bridgeGame.getResult()).toMatchObject({
      isCompleted: '실패',
      tryCount: expect.stringMatching(/\d+/),
    });
  });
});
