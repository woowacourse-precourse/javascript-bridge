/* eslint-disable max-lines-per-function */
const App = require('../src/App');
const BridgeGame = require('../src/BridgeGame');

const mockGenerator = (array) =>
  array.reduce((acc, value) => acc.mockReturnValueOnce(value), jest.fn());

describe('다리 건너기 게임 테스트', () => {
  test('BridgeGame 객체를 만들고, 다리와 이동 횟수를 초기화 한다.', () => {
    const bridge = ['U', 'D', 'D', 'U'];
    const moveCount = 0;
    const bridgeGame = new BridgeGame(bridge, moveCount);

    expect(bridgeGame.getBridge()).toEqual(bridge);
    expect(bridgeGame.getMoveCount()).toEqual(moveCount);
  });
});

module.exports = { mockGenerator };
