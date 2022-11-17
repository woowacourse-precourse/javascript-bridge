const Validation = require('../src/Validation');

describe('숫자 예외 파악 함수 테스트', () => {
  const NUMBER_ERROR_TEXT = '[ERROR] 전달된 인수는 숫자 타입이 아닙니다.';

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
  test('메소드 이름은 "range"로 정의된다.', () => {
    const METHOD_NAME = 'range';

    expect(Validation.range.name).toEqual(METHOD_NAME);
  });
});
