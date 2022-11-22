const { SizeCommand } = require('../../src/models/command');

describe('사이즈 커맨드 클래스 테스트', () => {
  test('빈 값 유효성 검증', () => {
    const command = '';

    expect(() => {
      new SizeCommand(command);
    }).toThrow('[ERROR] 빈 값을 입력하였습니다.');
  });

  test.each([[' 3'], ['20 ']])('앞 또는 뒤 공백 포함 유효성 검증', (command) => {
    expect(() => {
      new SizeCommand(command);
    }).toThrow('[ERROR] 앞 또는 뒤에 공백을 포함해 입력하였습니다.');
  });

  test.each([['a'], ['1 7'], ['1e3']])('다리 길이 값이 숫자가 아닌 경우 예외 처리', (size) => {
    expect(() => {
      new SizeCommand(size);
    }).toThrow('[ERROR] 입력 값은 숫자여야 합니다.');
  });

  test.each([['2'], ['21']])('다리 길이 값이 3미만 20초과인 경우 예외 처리', (size) => {
    expect(() => {
      new SizeCommand(size);
    }).toThrow('[ERROR] 다리의 길이는 3이상 20이하의 숫자여야 합니다.');
  });

  test('Number 타입의 사이즈 반환', () => {
    const command = '3';

    const sizeCommand = new SizeCommand(command);
    const result = sizeCommand.getSizeNumber();

    expect(result).toEqual(3);
  });
});
