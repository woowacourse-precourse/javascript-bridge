/* eslint-disable max-lines-per-function */
const MissionUtils = require('@woowacourse/mission-utils');
const BridgeGame = require('../src/models/BridgeGame');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

describe('BridgeGame 테스트', () => {
  test.each([
    [['U', 'D'], 'PLAYING'],
    [['U', 'D', 'D'], 'FAIL'],
    [['U', 'D', 'U'], 'CLEAR'],
  ])(
    'getStateManager 메서드는 현재 게임의 상태를 반환',
    (moving, expectedStatus) => {
      mockRandoms([1, 0, 1]);

      const bridgeGame = new BridgeGame(3);

      moving.forEach((move) => {
        bridgeGame.move(move);
      });

      const stateManager = bridgeGame.getStateManager();
      const { gameStatus } = stateManager.getGameState();

      expect(gameStatus).toEqual(expectedStatus);
    },
  );
});
