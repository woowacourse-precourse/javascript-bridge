const BridgeGame = require('../src/BridgeGame');

const getMockAnswerBridge = (bridgeGame) => {
  const mockRandom = jest.fn();
  mockRandom
    .mockReturnValueOnce(0)
    .mockReturnValueOnce(1)
    .mockReturnValueOnce(1);
  bridgeGame.setAnswerBridge(3, mockRandom);
};

describe('다리 건너기 게임 테스트', () => {
  test('이동 결과 테스트', () => {
    const bridgeGame = new BridgeGame();
    getMockAnswerBridge(bridgeGame);
    bridgeGame.move('U');
    expect(bridgeGame.getMoveResult('U')).toBe('X');
  });

  test('재시작 여부 테스트', () => {
    const bridgeGame = new BridgeGame();
    expect(bridgeGame.isRetry('R')).toBeTruthy();
    expect(bridgeGame.isRetry('Q')).toBeFalsy();
  });

  test('성공 여부 확인 테스트', () => {
    const bridgeGame = new BridgeGame();
    getMockAnswerBridge(bridgeGame);
    bridgeGame.move('D');
    bridgeGame.move('U');
    bridgeGame.move('U');
    expect(bridgeGame.isSuccess()).toBeTruthy();
  });
});
