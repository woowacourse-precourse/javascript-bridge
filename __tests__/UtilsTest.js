const { isNumber, isNumberInRange } = require('../src/lib/Utils');

describe('유틸 함수 테스트', () => {
  test('주어진 입력이 숫자인지 확인', () => {
    expect(isNumber('123')).toEqual(true);
    expect(isNumber('1a3')).toEqual(false);
  });

  test('주어진 입력이 특정 범위 내의 숫자인지 확인', () => {
    expect(isNumberInRange('3', 2, 5)).toEqual(true);
    expect(isNumberInRange('6', 2, 5)).toEqual(false);
  });
});
