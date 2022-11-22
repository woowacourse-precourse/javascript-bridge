const Bridge = require('../src/Model/Bridge');

const table = {
  fail: [
    ['U', { isMovable: true, isSuccess: false }],
    ['D', { isMovable: true, isSuccess: false }],
    ['D', { isMovable: false, isSuccess: false }],
  ],
  success: [
    ['D', { isMovable: true, isSuccess: false }],
    ['D', { isMovable: true, isSuccess: false }],
    ['U', { isMovable: true, isSuccess: false }],
    ['U', { isMovable: true, isSuccess: false }],
    ['D', { isMovable: true, isSuccess: true }],
  ],
};

describe('다리 이동 가능 여부 및 게임 성공 여부 테스트', () => {
  const failedBridge = new Bridge(['U', 'D', 'U']);
  const successfulBridge = new Bridge(['D', 'D', 'U', 'U', 'D']);

  test.each(table.fail)('다리 이동 가능/불가능 및 게임 실패 반환', (movingCommand, expected) =>
    expect(failedBridge.judgeIsMovable(movingCommand)).toEqual(expected),
  );

  test.each(table.success)('다리 이동 가능 및 게임 성공 반환', (movingCommand, expected) =>
    expect(successfulBridge.judgeIsMovable(movingCommand)).toEqual(expected),
  );
});
