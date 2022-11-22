const Validator = require("../src/Utils/Validator"); 
const { BRIDGE_REQUIREMENTS, USER_INPUT_CODE } = require("../src/constants");

describe("bridgeSizeCheck 테스트", () => {
  test("유효 숫자 테스트", () => {
    const validSizes = [BRIDGE_REQUIREMENTS.MIN_SIZE];
    while(validSizes[validSizes.length - 1] < BRIDGE_REQUIREMENTS.MAX_SIZE) {
      validSizes.push(validSizes[validSizes.length - 1] + 1);
    }
    validSizes.forEach(size => {  
      const result = Validator.bridgeSizeCheck(size);
      expect(result).toBeUndefined();
    });
  });

  test("유효하지 않은 숫자 테스트", () => {
    const invalidSizes = ['-1', '2', '3.8', '글자', '21', '100', '', ' '];
    invalidSizes.forEach(size => {      
      expect(() => Validator.bridgeSizeCheck(size)).toThrow();
    });
  });
});

describe("directionCheck 테스트", () => {
  test("입력값 유효성 테스트", () => {
    const valid = [USER_INPUT_CODE.MOVE.UPPER, USER_INPUT_CODE.MOVE.LOWER];
    const invalid = [1, 2, 10, 0, '유', 'q', 'sda'];
    valid.forEach(value => {
      const result = Validator.directionCheck(value);
      expect(result).toBeUndefined();
    })
    invalid.forEach(value => {  
      expect(() => Validator.directionCheck(value)).toThrow();
    });
  });
});

describe("retryCheck 테스트", () => {
  test("입력값 유효성 테스트", () => {
    const valid = [USER_INPUT_CODE.RETRY.AGREE, USER_INPUT_CODE.RETRY.QUIT];
    const invalid = [1, 2, 10, 0, '유', 'd', 'u'];
    valid.forEach(value => {
      const result = Validator.retryCheck(value);
      expect(result).toBeUndefined();
    })
    invalid.forEach(value => {  
      expect(() => Validator.retryCheck(value)).toThrow();
    });
  });
});