const { MovingCommand } = require('../../src/models/command');

describe('이동 커맨드 클래스 테스트', () => {
  test('빈 값 유효성 검증', () => {
    const command = '';

    expect(() => {
      new MovingCommand(command);
    }).toThrow('[ERROR] 빈 값을 입력하였습니다.');
  });

  test.each([[' U'], ['D ']])('앞 또는 뒤 공백 포함 유효성 검증', (command) => {
    expect(() => {
      new MovingCommand(command);
    }).toThrow('[ERROR] 앞 또는 뒤에 공백을 포함해 입력하였습니다.');
  });

  test.each([['a'], ['2']])('이동 값이 U 또는 D가 아닌 경우 예외 처리', (command) => {
    expect(() => {
      new MovingCommand(command);
    }).toThrow('[ERROR] 이동할 칸 입력 값은 U 또는 D여야 합니다.');
  });

  test.each([
    ['U', true],
    ['D', false],
  ])('입력값이 U인지 확인', (command, expected) => {
    const movingCommand = new MovingCommand(command);
    const result = movingCommand.isUpside();

    expect(result).toEqual(expected);
  });

  test.each([
    ['U', false],
    ['D', true],
  ])('입력값이 D인지 확인', (command, expected) => {
    const movingCommand = new MovingCommand(command);
    const result = movingCommand.isDownside();

    expect(result).toEqual(expected);
  });

  test('현재 다리와 커맨드가 일치하면 true', () => {
    const movingCommand = new MovingCommand('U');
    const result = movingCommand.isCrossed('U');

    expect(result).toEqual(true);
  });

  test('현재 다리와 커맨드가 일치하지 않으면 false', () => {
    const movingCommand = new MovingCommand('U');
    const result = movingCommand.isCrossed('D');

    expect(result).toEqual(false);
  });
});
