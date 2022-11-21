const {
  ERROR_BRIDGE_MESSAGE,
  ERROR_PLAYING_MESSAGE,
  ERROR_RETRY_MESSAGE,
  SHORT_CUT,
} = require('../src/constants');
const {
  checkBridgeInteger,
  checkBridgeRange,
  checkBridgeNumber,
  checkMoveLowercase,
  checkMoveWrong,
  checkRetryLowercase,
  checkRetryWrong,
} = require('../src/Validations');

describe('다리 길이 입력 예외 테스트', () => {
  const integerCases = [[3.3], [4.5], [6.7], [8.8], [12.2], [15.69], [19.99]];
  const rangeCases = [[1], [0], [22], [202], [21], [-1], [-88]];
  const notNumberCases = [
    ['abs'],
    ['문자열'],
    ['10a'],
    ['00100ㅁ'],
    ['000a00300'],
  ];

  test.each(integerCases)(
    '다리 길이 입력에 소수 %s가 들어오면 예외가 발생한다.',
    (input) => {
      expect(() => checkBridgeInteger(input)).toThrow(
        ERROR_BRIDGE_MESSAGE.integer
      );
    }
  );

  test.each(rangeCases)(
    '다리 길이의 범위를 벗어난 %s가 들어오면 예외가 발생한다.',
    (input) => {
      expect(() => checkBridgeRange(input)).toThrow(ERROR_BRIDGE_MESSAGE.range);
    }
  );

  test.each(notNumberCases)(
    '다리 길이의 입력을 숫자가 아닌 다른 문자 %s가 들어오면 예외가 발생한다.',
    (input) => {
      const number = Number(input);
      expect(() => checkBridgeNumber(number)).toThrow(
        ERROR_BRIDGE_MESSAGE.number
      );
    }
  );
});

describe('다리 이동 입력 예외 테스트', () => {
  const lowerCases = [
    [SHORT_CUT.down.toLowerCase()],
    [SHORT_CUT.up.toLowerCase()],
  ];
  const wrongCases = [['aasdas'], [' '], [1], ['qweqwewq'], [24124], ['!@!#']];

  test.each(lowerCases)(
    '다리 이동 입력에 소문자 %s가 들어오면 예외가 발생한다.',
    (input) => {
      expect(() => checkMoveLowercase(input)).toThrow(
        ERROR_PLAYING_MESSAGE.lowercase
      );
    }
  );

  test.each(wrongCases)(
    '다리 이동 입력에 잘못된 값 %s가 들어오면 예외가 발생한다.',
    (input) => {
      expect(() => checkMoveWrong(input)).toThrow(ERROR_PLAYING_MESSAGE.wrong);
    }
  );
});

describe('다리 게임 재시작 입력 예외 테스트', () => {
  const lowerCases = [
    [SHORT_CUT.retry.toLowerCase()],
    [SHORT_CUT.quit.toLowerCase()],
  ];
  const wrongCases = [
    ['aasdasa'],
    [' '],
    ['q'],
    [1],
    ['qweqwewq'],
    [24124],
    ['!@!#'],
  ];

  test.each(lowerCases)(
    '다리 이동 입력에 소문자 %s가 들어오면 예외가 발생한다.',
    (input) => {
      expect(() => checkRetryLowercase(input)).toThrow(
        ERROR_RETRY_MESSAGE.lowercase
      );
    }
  );

  test.each(wrongCases)(
    '다리 이동 입력에 잘못된 값 %s가 들어오면 예외가 발생한다.',
    (input) => {
      expect(() => checkRetryWrong(input)).toThrow(ERROR_RETRY_MESSAGE.wrong);
    }
  );
});
