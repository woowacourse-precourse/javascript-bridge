const Bridge = require('../src/Bridge');
const BridgeGame = require('../src/BridgeGame');
const {
  MOVE_RESULT,
  INIT_TRY_COUNT,
  MOVING,
} = require('../src/utils/constants');

describe('다리 건너기 게임 테스트', () => {
  let bridgeGame;

  beforeEach(() => {
    const bridge = ['D', 'U', 'U'];
    bridgeGame = new BridgeGame(bridge);
  });

  it('이동 후 결과가 정상적으로 나오는지 테스트 / 성공 ', () => {
    const moves = ['D', 'U', 'U'];
    const moveResult = [
      MOVE_RESULT.MOVEABLE,
      MOVE_RESULT.MOVEABLE,
      MOVE_RESULT.END,
    ];

    moves.forEach((position, idx) => {
      const { moveResult: currentMoveResult } = bridgeGame.move(position);
      expect(currentMoveResult).toEqual(moveResult[idx]);
    });
  });

  it('이동 후 결과가 정상적으로 나오는지 테스트 / 실패 ', () => {
    const moves = ['D', 'D'];

    const moveResult = [MOVE_RESULT.MOVEABLE, MOVE_RESULT.FAIL];

    moves.forEach((position, idx) => {
      const { moveResult: currentMoveResult } = bridgeGame.move(position);

      expect(currentMoveResult).toEqual(moveResult[idx]);
    });
  });

  it('이동 후 게임 성공/실패 결과가 정상적으로 나오는지 테스트', () => {
    const moves = ['D', 'U', 'D'];

    const expectedIsClear = [false, false, false];
    moves.forEach((position, idx) => {
      bridgeGame.move(position);
      const { isClear } = bridgeGame.getResult();

      expect(isClear).toEqual(expectedIsClear[idx]);
    });
  });

  it('재시작 후 시도횟수 증가, 경로 초기화 테스트 ', () => {
    const actionCommand = [
      () => {},
      () => bridgeGame.move('U'),
      () => bridgeGame.retry(),
    ];
    const expectedValues = [
      {
        tryCount: INIT_TRY_COUNT,
        pathMapLength: 0,
      },
      {
        tryCount: INIT_TRY_COUNT,
        pathMapLength: 1,
      },
      {
        tryCount: INIT_TRY_COUNT + 1,
        pathMapLength: 0,
      },
    ];

    actionCommand.forEach((action, idx) => {
      action();
      const current = bridgeGame.getResult();

      const { tryCount, pathMapLength } = expectedValues[idx];
      expect(current.tryCount).toBe(tryCount);
      expect(current.pathMap[MOVING.U]).toHaveLength(pathMapLength);
      expect(current.pathMap[MOVING.D]).toHaveLength(pathMapLength);
    });
  });

  it('게임이 마지막 단계인지 확인하는 메소드 테스트', () => {
    const moves = ['D', 'U', 'U'];
    const expectedValues = [false, false, true];

    moves.forEach((position, idx) => {
      bridgeGame.move(position);
      const { isClear } = bridgeGame.getResult();

      expect(isClear).toEqual(expectedValues[idx]);
    });
  });
});
