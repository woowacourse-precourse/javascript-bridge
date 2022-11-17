const Validation = require('../src/Validation');

describe('숫자 예외 파악 함수 테스트', () => {
  test('메소드 이름은 "number"로 정의된다.', () => {
    const METHOD_NAME = 'number';

    expect(Validation.number.name).toEqual(METHOD_NAME);
  });
});
