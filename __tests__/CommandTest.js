const { SizeCommand, MovingCommand, GameCommand } = require('../src/models/command');

describe('커맨드 클래스 테스트', () => {
  test.each([[''], [' 1'], ['a']])('다리 길이 값이 숫자가 아닌 경우 예외 처리', (size) => {
    expect(() => {
      new SizeCommand(size);
    }).toThrow('[ERROR]');
  });

  test.each([['2'], ['-1'], ['21']])('다리 길이 값이 3미만 20초과인 경우 예외 처리', (size) => {
    expect(() => {
      new SizeCommand(size);
    }).toThrow('[ERROR]');
  });

  test.each([[''], [' '], ['a'], ['2']])('이동 값이 U 또는 D가 아닌 경우 예외 처리', (command) => {
    expect(() => {
      new MovingCommand(command);
    }).toThrow('[ERROR]');
  });

  test.each([[''], [' '], ['a'], ['2']])(
    '게임 커맨드 값이 R 또는 Q가 아닌 경우 예외 처리',
    (command) => {
      expect(() => {
        new GameCommand(command);
      }).toThrow('[ERROR]');
    },
  );
});
