const Validation = require('../src/Validation');

const NUMBER_ERROR_TEXT = '[ERROR] 전달된 인수는 숫자 타입이 아닙니다.';
const RANGE_ERROR_TEXT = '[ERROR] 지정한 범위의 값이 아닙니다.';

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
});

describe('범위 파악 함수 테스트', () => {
  const START = 3;
  const END = 20;
  const checkRange = Validation.range(START, END);

  test('메소드 이름은 "range"로 정의된다.', () => {
    const METHOD_NAME = 'range';

    expect(Validation.range.name).toEqual(METHOD_NAME);
  });

  test('지정된 범위를 벗어나면 예외를 발생시킨다.', () => {
    const EXPECTED = 2;

    expect(() => {
      checkRange(EXPECTED);
    }).toThrow(RANGE_ERROR_TEXT);
  });

  test('전달받는 인자가 숫자가 아니라면 예외를 발생한다.', () => {
    const EXPECTED = '2';

    expect(() => {
      checkRange(EXPECTED);
    }).toThrow(NUMBER_ERROR_TEXT);
  });

  test('정상적인 범위의 숫자 값이라면 예외를 발생시키지 않는다.', () => {
    const EXPECTED = 3;

    expect(() => {
      checkRange(EXPECTED);
    }).not.toThrow();
  });
});
