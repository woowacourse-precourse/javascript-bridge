const {
  validateBridgeSize,
  validateUserPosition,
  validateRetryAnswer,
} = require('../src/utils/validations');

describe('다리 생성 시 사용자 입력 예외 테스트', () => {
  test('숫자가 아닌 값을 입력하면 예외가 발생한다.', () => {
    expect(() => {
      validateBridgeSize('제일 길게 만들어 주세요.');
    }).toThrow('[ERROR] 숫자만 입력할 수 있습니다.');
  });

  test('3에서 20 사이가 아닌 값을 입력하면 예외가 발생한다.', () => {
    expect(() => {
      validateBridgeSize(2);
    }).toThrow('[ERROR] 3부터 20 사이의 숫자여야 합니다.');
  });

  test('3에서 20 사이가 아닌 값을 입력하면 예외가 발생한다.', () => {
    expect(() => {
      validateBridgeSize(21);
    }).toThrow('[ERROR] 3부터 20 사이의 숫자여야 합니다.');
  });

  test('소수점을 입력하면 예외가 발생한다.', () => {
    expect(() => {
      validateBridgeSize(19.5);
    }).toThrow('[ERROR] 소수점은 입력할 수 없습니다.');
  });
});

describe('플레이어 이동 시 사용자 입력 예외 테스트', () => {
  test('소문자로 입력하면 예외가 발생한다.', () => {
    expect(() => {
      validateUserPosition('u');
    }).toThrow('[ERROR] 대문자로 입력해야 합니다.');
  });

  test('소문자로 입력하면 예외가 발생한다.', () => {
    expect(() => {
      validateUserPosition('d');
    }).toThrow('[ERROR] 대문자로 입력해야 합니다.');
  });

  test("'U' 또는 'D'가 아닌 값을 입력하면 예외가 발생한다.", () => {
    expect(() => {
      validateUserPosition('gogossing');
    }).toThrow('[ERROR] U 또는 D를 입력하여 이동할 수 있습니다.');
  });
});

describe('게임 재시도/종료 시 사용자 입력 예외 테스트', () => {
  test('소문자로 입력하면 예외가 발생한다.', () => {
    expect(() => {
      validateRetryAnswer('q');
    }).toThrow('[ERROR] 대문자로 입력해야 합니다.');
  });

  test('소문자로 입력하면 예외가 발생한다.', () => {
    expect(() => {
      validateRetryAnswer('r');
    }).toThrow('[ERROR] 대문자로 입력해야 합니다.');
  });

  test("'R' 또는 'Q'가 아닌 값을 입력하면 예외가 발생한다.", () => {
    expect(() => {
      validateRetryAnswer('그만 할래요');
    }).toThrow(
      '[ERROR] R 또는 Q를 입력하여 재시도/종료 여부를 결정할 수 있습니다.'
    );
  });
});
