const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('../src/BridgeGame');

describe('브릿지 게임 테스트', () => {
  test('다리가 "D"이고, 사용자가 "U"를 입력한 경우', () => {
    const bridgeGame = new BridgeGame();

    expect(bridgeGame.makeMap('D', 'U')).toEqual([['X'], [' '], false]);
  });

  test('다리가 "U"이고, 사용자가 "U"를 입력한 경우', () => {
    const bridgeGame = new BridgeGame();

    expect(bridgeGame.makeMap('U', 'U')).toEqual([['O'], [' '], true]);
  });
});

afterAll(() => {
  Console.close();
});
