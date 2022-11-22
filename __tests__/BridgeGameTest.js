const BridgeGame = require('../src/BridgeGame');

describe('다리 건너기 게임 테스트', () => {
  test('정답을 맞춘 경우 true, 선택한 칸에 O, 선택하지 않은 칸은 빈칸을 추가하여 각 배열의 현황을 하나의 배열로 리턴한다.', () => {
    const chooseBlock = 'U';
    const rightBlock = 'U';
    const bridgeGame = new BridgeGame().move(chooseBlock, rightBlock);
    expect(bridgeGame).toEqual([true, ['O'], [' ']]);
  });
  test('정답을 맞추지 못한 경우 false, 선택한 칸은 X, 선택하지 않은 칸은 빈칸을 추가하여 각 배열의 현황을 하나의 배열로 리턴한다.', () => {
    const chooseBlock = 'D';
    const rightBlock = 'U';
    const bridgeGame = new BridgeGame().move(chooseBlock, rightBlock);
    expect(bridgeGame).toEqual([false, [' '], ['X']]);
  });
});
