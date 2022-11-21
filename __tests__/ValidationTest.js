const { ERROR } = require('../src/constants/Constants');
const { bridgeLengthValidation } = require('../src/utils/BridgeValidation');
const {
  movingValidation,
  gameCommandValidation,
} = require('../src/utils/KeyValidation');

describe('입력 오류 테스트', () => {
  test.each([[-1], [0], [NaN], ['']])(
    '올바르지 않은 다리 길이 테스트',
    (input) => {
      expect(() => bridgeLengthValidation(input)).toThrow(`${ERROR.prefix}`);
    }
  );
});
