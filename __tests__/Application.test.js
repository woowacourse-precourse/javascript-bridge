const Application = require('../src/Application');

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
});
