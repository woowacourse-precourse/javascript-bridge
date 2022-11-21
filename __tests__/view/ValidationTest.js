const { ERROR } = require('../../src/constants/Constants');
const { bridgeLengthValidation } = require('../../src/utils/BridgeValidation');
const {
  movingValidation,
  gameCommandValidation,
} = require('../../src/utils/KeyValidation');

describe('입력 오류 테스트', () => {
  test.each([[-1], [0], [NaN], ['']])(
    '올바르지 않은 다리 길이 테스트',
    (input) => {
      expect(() => bridgeLengthValidation(input)).toThrow(`${ERROR.prefix}`);
    }
  );

  test.each([['u'], [1], ['']])(
    '올바르지 않은 이동 키 입력 테스트',
    (input) => {
      expect(() => movingValidation(input)).toThrow(`${ERROR.prefix}`);
    }
  );

  test.each([['g'], [9], ['']])(
    '올바르지 않은 게임 키 입력 테스트',
    (input) => {
      expect(() => gameCommandValidation(input)).toThrow(`${ERROR.prefix}`);
    }
  );
});
