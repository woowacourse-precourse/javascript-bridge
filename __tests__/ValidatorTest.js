const Validator = require('../src/Validator');

describe('유효성 검사기 테스트', () => {
  describe('validBridgeSize 메서드 테스트', () => {
    it('3이상 20이하의 숫자이면 true를 반환한다.', () => {
      const input = [3, 5, 20];
      const answer = true;

      const results = input.map(Validator.validBridgeSize);

      results.forEach((result) => expect(result).toBe(answer));
    });

    it('3미만이거나 20초과의 숫자이면 false를 반환한다.', () => {
      const input = [-1, 0, 2, 21, 10000];
      const answer = false;

      const results = input.map(Validator.validBridgeSize);

      results.forEach((result) => expect(result).toBe(answer));
    });

    it('3이상 20이하의 문자타입 숫자를 입력받아도 true를 반환한다.', () => {
      const input = ['3', '20', '10'];
      const answer = true;

      const results = input.map(Validator.validBridgeSize);

      results.forEach((result) => expect(result).toBe(answer));
    });
  });

  describe('validMovieDirection 메서드 테스트', () => {
    it('U 혹은 D를 입력하면 true를 반환한다.', () => {
      const input = ['U', 'D'];
      const answer = true;

      const results = input.map(Validator.validMovieDirection);

      results.forEach((result) => expect(result).toBe(answer));
    });

    it('U, D 이외의 값은 모두 false를 반환한다.', () => {
      const input = ['u', 'd', 'UD', 'UU', undefined, null, 0, true, NaN];
      const answer = false;

      const results = input.map(Validator.validMovieDirection);

      results.forEach((result) => expect(result).toBe(answer));
    });
  });

  describe('validGameCommand 메서드 테스트', () => {
    it('R 혹은 Q를 입력하면 true를 반환한다.', () => {
      const input = ['R', 'Q'];
      const answer = true;

      const results = input.map(Validator.validGameCommand);

      results.forEach((result) => expect(result).toBe(answer));
    });

    it('R, Q 이외의 값은 모두 false를 반환한다.', () => {
      const input = ['RR', 'RQ', 'r', 'q', undefined, null, 0, true, NaN];
      const answer = false;

      const results = input.map(Validator.validGameCommand);

      results.forEach((result) => expect(result).toBe(answer));
    });
  });
});
