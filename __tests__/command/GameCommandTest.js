const { GameCommand } = require('../../src/models/command');

describe('커맨드 클래스 테스트', () => {
  test('빈 값 유효성 검증', () => {
    const command = '';

    expect(() => {
      new GameCommand(command);
    }).toThrow('[ERROR] 빈 값을 입력하였습니다.');
  });

  test.each([[' R'], ['Q ']])('앞 또는 뒤 공백 포함 유효성 검증', (command) => {
    expect(() => {
      new GameCommand(command);
    }).toThrow('[ERROR] 앞 또는 뒤에 공백을 포함해 입력하였습니다.');
  });

  test.each([['a'], ['2']])('게임 커맨드 값이 R 또는 Q가 아닌 경우 예외 처리', (command) => {
    expect(() => {
      new GameCommand(command);
    }).toThrow('[ERROR] 재시도 여부 입력값은 R 또는 Q여야 합니다.');
  });

  test.each([
    ['R', true],
    ['Q', false],
  ])('입력값이 R인지 확인', (command, expected) => {
    const movingCommand = new GameCommand(command);
    const result = movingCommand.isRetry();

    expect(result).toEqual(expected);
  });

  test.each([
    ['R', false],
    ['Q', true],
  ])('입력값이 Q인지 확인', (command, expected) => {
    const movingCommand = new GameCommand(command);
    const result = movingCommand.isQuit();

    expect(result).toEqual(expected);
  });
});
