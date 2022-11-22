const Command = require('../../src/models/command/Command');

describe('커맨드 클래스 테스트', () => {
  test('빈 값 유효성 검증', () => {
    const command = '';

    expect(() => {
      Command.validate(command);
    }).toThrow('[ERROR] 빈 값을 입력하였습니다.');
  });

  test.each([[' a'], ['a ']])('공백 포함 유효성 검증', (command) => {
    expect(() => {
      Command.validate(command);
    }).toThrow('[ERROR] 앞 또는 뒤에 공백을 포함해 입력하였습니다.');
  });
});
