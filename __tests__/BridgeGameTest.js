const BridgeGame = require('../src/model/BridgeGame');

describe('BridgeGame : 플레이어 이동 및 결과 배열 테스트', () => {
  test('플레이어가 이동한 칸과 다리 배열을 비교하여, 결과 값을 반환한다.', () => {
    const BRIDGE_GAME = new BridgeGame();
    const moveResult = BRIDGE_GAME.move(['U', 'D', 'D'], ['U'], 1);

    expect(moveResult).toEqual({
      upResultArr: ['O'],
      downResultArr: [' '],
      isGameOver: false,
    });
  });

  test('이동할 수 없는 칸으로 건넜을 때, isGameover의 값이 true로 반환된다.', () => {
    const BRIDGE_GAME = new BridgeGame();
    const moveResult = BRIDGE_GAME.move(['U', 'D', 'D'], ['D'], 1);

    expect(moveResult).toMatchObject({ isGameOver: true });
  });

  test('retry 매서드가 실행되면, 저장된 인스턴스의 값이 초기화 된다.', () => {
    const BRIDGE_GAME = new BridgeGame();

    expect(() => {
      const moveResult = BRIDGE_GAME.move(['U', 'D', 'D'], ['U'], 1);
      BRIDGE_GAME.retry();
      moveResult.toEqual({
        upResultArr: [],
        downResultArr: [],
        isGameOver: false,
      });
    });
  });
});
