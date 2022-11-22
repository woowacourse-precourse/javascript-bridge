const MissionUtils = require('@woowacourse/mission-utils');
const BridgeGame = require('../src/BridgeGame');
const { MOVEMENT_RESULT } = require('../src/Constants');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => acc.mockReturnValueOnce(number), MissionUtils.Random.pickNumberInRange);
};
const gameStateTest = (size, userPath) => {
  const bridge = new BridgeGame(size);
  userPath.forEach((movement) => bridge.move(movement));
  const { currentState } = bridge.getGameState();
  return currentState;
};
describe('BridgeGame test', () => {
  test.each([
    ['3', ['U'], MOVEMENT_RESULT.CORRECT],
    ['3', ['D'], MOVEMENT_RESULT.WRONG],
    ['3', ['U', 'D'], MOVEMENT_RESULT.CORRECT],
    ['3', ['U', 'U'], MOVEMENT_RESULT.WRONG],
    ['3', ['U', 'D', 'D'], MOVEMENT_RESULT.WRONG],
    ['3', ['U', 'D', 'U'], MOVEMENT_RESULT.GAME_SUCCESS],
  ])('bridgeGame move test', (size, userPath, result) => {
    mockRandoms([1, 0, 1]);
    const userResult = gameStateTest(size, userPath);
    expect(userResult).toBe(result);
  });
});
