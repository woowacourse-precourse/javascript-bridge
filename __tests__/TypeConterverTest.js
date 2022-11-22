const TypeConverter = require('../src/TypeConverter');

describe('타입 변환기 테스트', () => {
  describe('toNumber 메서드 테스트', () => {
    it('문자타입의 숫자를 입력받아 10진수의 숫자를 반환한다.', () => {
      const input = '1234';
      const answer = 1234;

      const result = TypeConverter.toNumber(input);

      expect(result).toEqual(answer);
    });

    it('입력값의 양쪽 공백을 없앤 뒤 10진수의 숫자를 반환한다.', () => {
      const input = ' 124   ';
      const answer = 124;

      const result = TypeConverter.toNumber(input);

      expect(result).toEqual(answer);
    });

    it('문자타입의 문자를 입력받으면 NaN을 반환한다.', () => {
      const input = 'qwer';
      const answer = NaN;

      const result = TypeConverter.toNumber(input);

      expect(result).toEqual(answer);
    });

    it('숫자타입을 입력받으면 프로토타입에 trim 메서드가 없으므로 에러가 발생한다.', () => {
      const input = 1234;

      expect(() => {
        TypeConverter.toNumber(input);
      }).toThrow();
    });
  });

  describe('toString 메서드 테스트', () => {
    it('입력값을 문자로 변환하여 양쪽 공백을 없애준다.', () => {
      const input = ' qq  ';
      const answer = 'qq';

      const result = TypeConverter.toString(input);

      expect(result).toEqual(answer);
    });

    it('숫자를 입력받으면 문자로 바꿔준다.', () => {
      const input = 12345;
      const answer = '12345';

      const result = TypeConverter.toString(input);

      expect(result).toEqual(answer);
    });

    it('undefined를 입력받으면 프로토타입에 toString 메서드가 없으므로 에러가 발생한다.', () => {
      const input = undefined;

      expect(() => {
        TypeConverter.toString(input);
      }).toThrow();
    });

    describe('rowArrToStr 메서드 테스트', () => {
      it('행 배열을 입력받아 테스트에 적합한 문자열로 반환해준다.', () => {
        const input = [1, 2, 3, 4, 5];
        const answer = '[ 1 | 2 | 3 | 4 | 5 ]';

        const result = TypeConverter.rowArrToStr(input);

        expect(result).toEqual(answer);
      });

      it('행 배열의 원소가 1개일 때 [ 원소 ] 를 반환해준다.', () => {
        const input = ['O'];
        const answer = '[ O ]';

        const result = TypeConverter.rowArrToStr(input);

        expect(result).toEqual(answer);
      });
    });
  });
});
