const Application = require('../src/Application');

const NUMBER_ERROR_TEXT = '[ERROR] 전달된 인수는 숫자 타입이 아닙니다.';

describe('숫자 변환 함수 테스트', () => {
  test('메소드 이름은 "convertNumber"로 정의된다.', () => {
    const METHOD_NAME = 'convertNumber';

    expect(Application.convertNumber.name).toEqual(METHOD_NAME);
  });

  test('전달받은 인수를 숫자로 변환시킨다.', () => {
    const EXPECTED = '111';
    const RECEIVED = 111;

    expect(Application.convertNumber(EXPECTED)).toEqual(RECEIVED);
  });

  test('전달받은 인수는 숫자로 변환이 불가능하면 예외를 발생시킨다.', () => {
    expect(() => {
      const EXPECTED = 'a1a1';

      Application.convertNumber(EXPECTED);
    }).toThrow(NUMBER_ERROR_TEXT);
  });
});

describe('배열 생성 함수 테스트', () => {
  test('메소드 이름은 "createArray"로 정의된다.', () => {
    const METHOD_NAME = 'createArray';

    expect(Application.createArray.name).toEqual(METHOD_NAME);
  });
});
