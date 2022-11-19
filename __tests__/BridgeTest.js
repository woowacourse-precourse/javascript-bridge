const BridgeMaker = require('../src/BridgeMaker');
const BridgeGame = require('../src/BridgeGame');

describe('다리 테스트', () => {
  test('다리 생성 테스트', () => {
    const randomNumbers = ['1', '0', '1'];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(['U', 'D', 'U']);
  });

  test('다리 이동 일치할 때 리턴값 테스트', () => {
    const bridgeGame = new BridgeGame(0, [], []);
    const bridge = ['U', 'D', 'D'];
    const userMove = 'U';
    expect(bridgeGame.move(bridge, userMove)).toBeTruthy();
  });

  test('다리 이동 불일치할 때 리턴값 테스트', () => {
    const bridgeGame = new BridgeGame(0, [], []);
    const bridge = ['U', 'D', 'D'];
    const userMove = 'D';
    expect(bridgeGame.move(bridge, userMove)).toBeFalsy();
  });
});
