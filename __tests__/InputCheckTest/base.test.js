const Base = require('../../src/InputCheck/Base');

describe('Base 클래스 테스트', () => {
  let base;

  describe('checkOnlyNumber() ', () => {
    it('숫자를 입력를 입력했을 경우 통과', () => {
      // given
      base = new Base(30);

      // when
      // then
      expect(base.checkOnlyNumber()).toBeUndefined();

      // given
      base = new Base('30');

      // when
      // then
      expect(base.checkOnlyNumber()).toBeUndefined();
    });

    it('[Error] 문자를 입력 했을 경우 예외처리', () => {
      // given
      base = new Base('공사중이니?');

      // when
      // then
      expect(() => base.checkOnlyNumber()).toThrow();
    });

    it('[Error] 부호가 포함되어있을 경우 에러처리', () => {
      // given
      base = new Base('-34');

      // when
      // then
      expect(() => base.checkOnlyNumber()).toThrow();
    });

    it('[Error] 숫자이외의 값이 포함되어있을 경우 에러처리', () => {
      // given
      base = new Base('마포대교는무너졌냐?8282');

      // when
      // then
      expect(() => base.checkOnlyNumber()).toThrow();
    });
  });

  describe('checkCorrectNumberRange() ', () => {
    it('3~20 사이의 숫자를 입력했을 경우 통과', () => {
      // given
      base = new Base('15');

      // when
      // then
      expect(base.checkCorrectNumberRange()).toBeUndefined();
    });

    it('[Error] 3~20 이외의 숫자를 입력했을 경우', () => {
      // given
      base = new Base('0');

      // when
      // then
      expect(() => base.checkCorrectNumberRange()).toThrow();

      // given
      base = new Base('21');

      // when
      // then
      expect(() => base.checkCorrectNumberRange()).toThrow();

      // given
      base = new Base('100');

      // when
      // then
      expect(() => base.checkCorrectNumberRange()).toThrow();
    });
  });

  describe('checkUOrD()', () => {
    it('U 또는 D를 입력했을 경우 통과', () => {
      // given
      base = new Base('U');

      // when
      // then
      expect(base.checkUOrD()).toBeUndefined();

      // given
      base = new Base('D');

      // when
      // then
      expect(base.checkUOrD()).toBeUndefined();
    });

    it('[Error] U 또는 D와 다른 문자가 혼합되었을 경우 예외 처리', () => {
      // given
      base = new Base('UK');

      // when
      // then
      expect(() => base.checkUOrD()).toThrow();

      // given
      base = new Base('DC');

      // when
      // then
      expect(() => base.checkUOrD()).toThrow();
    });

    it('[Error] U 또는 D가 소문자일 때 예외 처리', () => {
      // given
      base = new Base('u');

      // when
      // then
      expect(() => base.checkUOrD()).toThrow();

      // given
      base = new Base('d');

      // when
      // then
      expect(() => base.checkUOrD()).toThrow();
    });

    it('[Error] U 또는 D가 아닌 문자일 경우 예외 처리', () => {
      // given
      base = new Base('A');

      // when
      // then
      expect(() => base.checkUOrD()).toThrow();
    });
  });

  describe('checkROrQ()', () => {
    it('R 또는 Q를 입력하였을 경우 통과', () => {
      // given
      base = new Base('R');

      // when
      // then
      expect(base.checkROrQ()).toBeUndefined();

      // given
      base = new Base('Q');

      // when
      // then
      expect(base.checkROrQ()).toBeUndefined();
    });

    it('[Error] R 또는 Q를 이외의 다른 문자와 혼합하여 입력하였을 경우 예외 처리 ', () => {
      // given
      base = new Base('RG');

      // when
      // then
      expect(() => base.checkROrQ()).toThrow();

      // given
      base = new Base('QT');

      // when
      // then
      expect(() => base.checkROrQ()).toThrow();
    });

    it('[Error] R 또는 Q를 이외의 다른 문자를 입력하였을 경우 예외 처리', () => {
      // given
      base = new Base('T');

      // when
      // then
      expect(() => base.checkROrQ()).toThrow();

      // given
      base = new Base('35');

      // when
      // then
      expect(() => base.checkROrQ()).toThrow();
    });
  });

  describe('checkLength()', () => {
    it('해당 값의 길이가 1이면 그 값을 다시 return한다.', () => {
      // given
      base = new Base('R');

      // when
      // then
      expect(base.checkLength()).toBe('R');

      // given
      base = new Base('7');

      // when
      // then
      expect(base.checkLength()).toBe('7');
    });

    it('[Error] 해당 값의 길이가 1이 아니면 예외 처리', () => {
      // given
      base = new Base('RR');

      // when
      // then
      expect(() => base.checkLength()).toThrow();

      // given
      base = new Base('77');

      // when
      // then
      expect(() => base.checkLength()).toThrow();
    });
  });

  describe('checkNumberLength()', () => {
    it('해당 값의 길이가 1 또는 2이면 그 값을 다시 return한다.', () => {
      // given
      base = new Base('5');

      // when
      // then
      expect(base.checkNumberLength()).toBe('5');

      // given
      base = new Base('14');

      // when
      // then
      expect(base.checkNumberLength()).toBe('14');
    });

    it('[Error] 해당 값의 길이가 1 또는 2가 아니면 예외 처리', () => {
      // given
      base = new Base('RRR');

      // when
      // then
      expect(() => base.checkNumberLength()).toThrow();

      // given
      base = new Base('');

      // when
      // then
      expect(() => base.checkNumberLength()).toThrow();
    });
  });
});
