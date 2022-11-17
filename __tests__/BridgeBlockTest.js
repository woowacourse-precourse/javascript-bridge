const BridgeGame = require('../src/BridgeGame');

describe('현재까지 건넌 위치의 다리 블록들을 갖는 테스트', () => {
  const bridgeGame = new BridgeGame(['U', 'D', 'U', 'D', 'U', 'U']);
  test('1칸까지 건넌 상태의 위쪽 블록', () => {
    bridgeGame.move('U');
    expect(bridgeGame.getUBlock()).toEqual(['O']);
  });
  test('1칸까지 건넌 상태의 아래쪽 블록', () => {
    expect(bridgeGame.getDBlock()).toEqual([' ']);
  });
  test('3칸까지 건넌 상태의 위쪽 블록', () => {
    bridgeGame.move('D');
    bridgeGame.move('U');
    expect(bridgeGame.getUBlock()).toEqual(['O', ' ', 'O']);
  });
  test('3칸까지 건넌 상태의 아래쪽 블록', () => {
    expect(bridgeGame.getDBlock()).toEqual([' ', 'O', ' ']);
  });
  test('6칸까지 건넌 상태의 위쪽 블록', () => {
    bridgeGame.move('D');
    bridgeGame.move('U');
    bridgeGame.move('U');
    expect(bridgeGame.getUBlock()).toEqual(['O', ' ', 'O', ' ', 'O', 'O']);
  });
  test('6칸까지 건넌 상태의 아래쪽 블록', () => {
    expect(bridgeGame.getDBlock()).toEqual([' ', 'O', ' ', 'O', ' ', ' ']);
  });
});
