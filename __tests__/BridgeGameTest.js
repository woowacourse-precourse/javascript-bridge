const { GameConfig } = require('../src/Config');
const Bridge = require('../src/Bridge');
const BridgeGame = require('../src/BridgeGame');

describe('BridgeGame 기능 테스트', () => {
  test.each([
    [
      ['U', 'D', 'U', 'D'],
      ['U', 'D', 'U', 'D'],
      [
        GameConfig.STATUS_PLAY,
        GameConfig.STATUS_PLAY,
        GameConfig.STATUS_PLAY,
        GameConfig.STATUS_SUCCESS,
      ],
    ],
    [
      ['U', 'U', 'U'],
      ['U', 'U', 'D'],
      [
        GameConfig.STATUS_PLAY,
        GameConfig.STATUS_PLAY,
        GameConfig.STATUS_FAIL,
      ],
    ],
  ])('다리 위 이동', (bridgeArray, moves, answer) => {
    const bridge = new Bridge(bridgeArray);
    const game = new BridgeGame(bridge);

    const output = moves.reduce(
      (prevOutput, direction) => {
        prevOutput.push(game.move(direction));
        return prevOutput;
      },
      [],
    );
    expect(output).toEqual(answer);
  });
});
