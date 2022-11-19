const Base = require('../../src/InputCheck/Base');

describe('Base 클래스 테스트', () => {
  let base;
  beforeEach(() => {});
  describe('checkOnlyNumber 메서드 테스트', () => {
    it('숫자를 입력를 입력했을 경우 통과', () => {
      base = new Base(30);
      expect(base.checkOnlyNumber()).toBeUndefined();

      base = new Base('30');
      expect(base.checkOnlyNumber()).toBeUndefined();
    });

    it('[Error] 문자를 입력 했을 경우 예외처리', () => {
      base = new Base('공사중이니?');
      expect(() => base.checkOnlyNumber()).toThrow();
    });

    it('[Error] 부호가 포함되어있을 경우 에러처리', () => {
      base = new Base('-34');
      expect(() => base.checkOnlyNumber()).toThrow();
    });

    it('[Error] 숫자이외의 값이 포함되어있을 경우 에러처리', () => {
      base = new Base('마포대교는무너졌냐?8282');
      expect(() => base.checkOnlyNumber()).toThrow();
    });
  });

  describe('checkCorrectNumberRange 메서드 테스트', () => {
    it('3~20 사이의 숫자를 입력했을 경우 통과', () => {
      base = new Base('15');
      expect(base.checkCorrectNumberRange()).toBeUndefined();
    });

    it('[Error] 3~20 이외의 숫자를 입력했을 경우', () => {
      base = new Base('0');
      expect(() => base.checkCorrectNumberRange()).toThrow();

      base = new Base('21');
      expect(() => base.checkCorrectNumberRange()).toThrow();

      base = new Base('100');
      expect(() => base.checkCorrectNumberRange()).toThrow();
    });
  });
});
