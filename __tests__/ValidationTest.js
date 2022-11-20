const {
  isSizeInRange,
  isRightUserMove,
  isRightUserCommand,
  isCurrentLastIndexValueSame,
} = require('../src/Validation');

describe('유효성 검사 테스트', () => {
  test('다리 사이즈 입력 시 예외 테스트', () => {
    const mockSizes = ['a', -1, 0, 1, 21, 4.5];
    mockSizes.forEach((size) => {
      expect(isSizeInRange(size)).toBe(false);
    });
  });

  test('위 칸/아래 칸 선택 시 예외 테스트', () => {
    const mockMove = ['u', 'd', 1, 'T'];
    mockMove.forEach((move) => {
      expect(isRightUserMove(move)).toBe(false);
    });
  });

  test('게임 재시작 여부 예외 테스트', () => {
    const mockCommand = ['r', 'q', 2, 'G'];
    mockCommand.forEach((command) => {
      expect(isRightUserCommand(command)).toBe(false);
    });
  });

  test('현재까지 입력한 값이 맞았는 지 테스트', () => {
    const answer = ['U', 'D', 'D', 'U'];
    const mockUserMove = ['U', 'D', 'D'];
    const comparison = [];

    mockUserMove.forEach((move) => {
      comparison.push(move);
      expect(isCurrentLastIndexValueSame(answer, comparison)).toBe(true);
    });
  });
});
