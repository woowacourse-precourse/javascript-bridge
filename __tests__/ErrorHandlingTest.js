const {
  validateBridgeSize,
  validateMovingCommand,
  validateGameCommand,
} = require('../src/ErrorHandler');

const table = {
  bridgeSizeWithNaturalNumberError: [
    ['5e'],
    ['-'],
    ['-123'],
    [''],
    ['0'],
    ['0.5'],
    ['5.5'],
    ['10/2'],
    ['3.0'],
  ],
  bridgeSizeWithRangeError: [['1'], ['2'], ['21'], ['10000']],
  bridgeSizeNormal: [['3'], ['20'], ['10']],

  movingCommandWithError: [['u'], ['d'], [''], ['0'], ['Q']],
  movingCommandNormal: [['U'], ['D']],

  gameCommandWithError: [['r'], ['q'], [''], ['1'], ['U']],
  gameCommandNormal: [['R'], ['Q']],
};

describe('다리 길이 입력값 예외 처리 테스트', () => {
  const { bridgeSizeWithNaturalNumberError, bridgeSizeWithRangeError, bridgeSizeNormal } = table;
  const expectBridgeSize = (input) => expect(() => validateBridgeSize(input));

  test.each(bridgeSizeWithNaturalNumberError)(
    '다리 길이 입력값이 자연수가 아니면 예외 발생',
    (input) => expectBridgeSize(input).toThrow('[ERROR]'),
  );

  test.each(bridgeSizeWithRangeError)(
    '다리 길이 입력값이 3 이상 20 이하의 범위를 벗어나면 예외 발생',
    (input) => expectBridgeSize(input).toThrow('[ERROR]'),
  );

  test.each(bridgeSizeNormal)(
    '다리 길이 입력값이 3 이상 20 이하의 자연수이면 예외 미발생',
    (input) => expectBridgeSize(input).not.toThrow('[ERROR]'),
  );
});

describe('이동할 칸 입력값 예외 처리 테스트', () => {
  test.each(table.movingCommandWithError)(
    '이동할 칸 입력값이 U 또는 D가 아니면 예외 발생',
    (input) => expect(() => validateMovingCommand(input)).toThrow('[ERROR]'),
  );

  test.each(table.movingCommandNormal)('이동할 칸 입력값이 U 또는 D이면 예외 미발생', (input) =>
    expect(() => validateMovingCommand(input)).not.toThrow('[ERROR]'),
  );
});

describe('재시작/종료 선택 입력값 예외 처리 테스트', () => {
  test.each(table.gameCommandWithError)(
    '재시작/종료 입력값이 R 또는 Q가 아니면 예외 발생',
    (input) => expect(() => validateGameCommand(input)).toThrow('[ERROR]'),
  );

  test.each(table.gameCommandNormal)('재시작/종료 입력값이 R 또는 Q이면 예외 미발생', (input) =>
    expect(() => validateGameCommand(input)).not.toThrow('[ERROR]'),
  );
});
