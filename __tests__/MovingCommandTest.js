const { MovingCommand } = require('../src/models/command');

describe('이동 커맨드 클래스 테스트', () => {
  test.each([[''], [' '], ['a'], ['2']])('이동 값이 U 또는 D가 아닌 경우 예외 처리', (command) => {
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

  test.each([
    ['U', 'U', true],
    ['U', 'D', false],
  ])('다리를 건넜는지 확인', (command, current, expected) => {
    const movingCommand = new MovingCommand(command);
    const result = movingCommand.isCrossed(current);

    expect(result).toEqual(expected);
  });
});
