const BridgeGame = require('../src/domain/BridgeGame');

describe('다리 건너기 게임을 관리하는 클래스 테스트', () => {
  test.each([
    [['U'], [{ block: 'U', isCorrect: true }]],
    [
      ['U', 'U'],
      [
        { block: 'U', isCorrect: true },
        { block: 'U', isCorrect: false },
      ],
    ],
    [
      ['U', 'D'],
      [
        { block: 'U', isCorrect: true },
        { block: 'D', isCorrect: true },
      ],
    ],
    [
      ['U', 'D', 'D'],
      [
        { block: 'U', isCorrect: true },
        { block: 'D', isCorrect: true },
        { block: 'D', isCorrect: true },
      ],
    ],
  ])(
    '사용자로부터 이동할 칸을 입력받아 이동할 수 있다.',
    (movingList, expected) => {
      const bridge = ['U', 'D', 'D'];
      const bridgeGame = new BridgeGame(bridge);

      movingList.forEach(moving => bridgeGame.move(moving));

      expect(bridgeGame.getMoveHistory()).toEqual(expected);
    },
  );

  test('게임을 재시작할 경우 이동 내역을 초기화하고, 총 시도 횟수를 1 증가시킨다.', () => {
    const bridge = ['U', 'D', 'D'];
    const bridgeGame = new BridgeGame(bridge);

    bridgeGame.move('D');
    bridgeGame.retry();

    expect(bridgeGame.getMoveHistory()).toEqual([]);
    expect(bridgeGame.getTotalTryCount()).toEqual(2);
  });

  test.each([
    ['U', false],
    ['D', true],
  ])(
    '사용자의 이동 성공 여부를 기반으로 게임의 재시작 여부를 판단한다.',
    (moving, expected) => {
      const bridge = ['U', 'D', 'D'];
      const bridgeGame = new BridgeGame(bridge);

      bridgeGame.move(moving);

      expect(bridgeGame.isRetry()).toEqual(expected);
    },
  );

  test.each([
    [['U'], false],
    [['U', 'D'], false],
    [['U', 'U'], false],
    [['U', 'D', 'U'], false],
    [['U', 'D', 'D'], true],
  ])(
    '사용자의 이동 내역을 기반으로 게임의 성공 여부를 판단한다.',
    (movingList, expected) => {
      const bridge = ['U', 'D', 'D'];
      const bridgeGame = new BridgeGame(bridge);

      movingList.forEach(moving => bridgeGame.move(moving));

      expect(bridgeGame.isClear()).toEqual(expected);
    },
  );
});
