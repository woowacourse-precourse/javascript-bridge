const { SizeCommand } = require('../src/models/command');

describe('사이즈 커맨드 클래스 테스트', () => {
  test.each([[''], [' 1'], ['a']])('다리 길이 값이 숫자가 아닌 경우 예외 처리', (size) => {
    expect(() => {
      new SizeCommand(size);
    }).toThrow('[ERROR]');
  });

  test.each([['2'], ['-1'], ['21']])('다리 길이 값이 3미만 20초과인 경우 예외 처리', (size) => {
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
