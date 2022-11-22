const Validation = require('../src/Validation');

const NUMBER_ERROR_TEXT = '[ERROR] 전달된 인수는 숫자 타입이 아닙니다.';
const RANGE_ERROR_TEXT = '[ERROR] 지정한 범위의 값이 아닙니다.';
const FUNCTION_ERROR_TEXT = '[ERROR] 전달된 인수는 함수가 아닙니다.';
const VALIDATION_ARRAY_TEXT = '[ERROR] 전달된 인수는 배열 타입이 아닙니다.';

describe('숫자 예외 파악 함수 테스트', () => {
  test('메소드 이름은 "number"로 정의된다.', () => {
    const METHOD_NAME = 'number';

    expect(Validation.number.name).toEqual(METHOD_NAME);
  });

  test('인수가 NaN이라면 예외를 발생시킨다.', () => {
    const EXPECTED = NaN;

    expect(() => {
      Validation.number(EXPECTED);
    }).toThrow(NUMBER_ERROR_TEXT);
  });

  test('인수가 "20"이라면 예외를 발생시킨다.', () => {
    const EXPECTED = '20';

    expect(() => {
      Validation.number(EXPECTED);
    }).toThrow(NUMBER_ERROR_TEXT);
  });
});

describe('함수 타입 체크 함수 테스트', () => {
  test('메소드 이름은 "func"로 정의된다.', () => {
    const METHOD_NAME = 'func';

    expect(Validation.func.name).toEqual(METHOD_NAME);
  });

  test('인수가 함수가 아니라면 예외를 발생시킨다.', () => {
    const EXPECTED = [];

    expect(() => {
      Validation.func(EXPECTED);
    }).toThrow(FUNCTION_ERROR_TEXT);
  });

  test('인수가 함수라면 예외를 발생시키지 않는다.', () => {
    const EXPECTED = () => {};

    expect(() => {
      Validation.func(EXPECTED);
    }).not.toThrow();
  });
});

describe('범위 파악 함수 테스트', () => {
  const START = 3;
  const END = 20;

  test('메소드 이름은 "range"로 정의된다.', () => {
    const METHOD_NAME = 'range';

    expect(Validation.range.name).toEqual(METHOD_NAME);
  });

  test('함수를 호출하면 함수를 반환해야 한다.', () => {
    const EXPECTED = Validation.range(START, END);

    expect(typeof EXPECTED === 'function').toBeTruthy();
  });

  test.each([0, 1, 2, 21, 22])(
    '지정된 범위를 벗어나면 예외를 발생시킨다.',
    (EXPECTED) => {
      const checkRange = Validation.range(START, END);

      expect(() => {
        checkRange(EXPECTED);
      }).toThrow(RANGE_ERROR_TEXT);
    },
  );

  test('전달받는 인자가 숫자가 아니라면 예외를 발생한다.', () => {
    const checkRange = Validation.range(START, END);
    const EXPECTED = NaN;

    expect(() => {
      checkRange(EXPECTED);
    }).toThrow(NUMBER_ERROR_TEXT);
  });

  test('정상적인 범위의 숫자 값이라면 예외를 발생시키지 않는다.', () => {
    const checkRange = Validation.range(START, END);
    const EXPECTED = 3;

    expect(() => {
      checkRange(EXPECTED);
    }).not.toThrow();
  });
});

describe('에러 발생 함수 테스트', () => {
  test('메소드 이름은 "throwError"로 정의된다.', () => {
    const METHOD_NAME = 'throwError';

    expect(Validation.throwError.name).toEqual(METHOD_NAME);
  });

  test('함수를 호출하면 에러를 발생시킨다.', () => {
    const EXPECTED = '[ERROR]';

    expect(() => {
      Validation.throwError(EXPECTED);
    }).toThrow(EXPECTED);
  });
});

describe('배열 파악 함수 테스트', () => {
  test('메소드 이름은 "array"로 정의된다.', () => {
    const METHOD_NAME = 'array';

    expect(Validation.array.name).toEqual(METHOD_NAME);
  });

  test('인수가 배열이 아니라면 예외를 발생시킨다.', () => {
    const EXPECTED = '123';

    expect(() => {
      Validation.array(EXPECTED);
    }).toThrow(VALIDATION_ARRAY_TEXT);
  });

  test('인수가 배열이라면 예외를 시키지 않는다.', () => {
    const EXPECTED = [123];

    expect(() => {
      Validation.array(EXPECTED);
    }).not.toThrow(VALIDATION_ARRAY_TEXT);
  });
});
