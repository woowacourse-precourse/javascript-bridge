const Validator = require("../src/Utils/Validator"); 
const { BRIDGE_REQUIREMENTS } = require("../src/constants");

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

  test("유효하지 않은  숫자 테스트", () => {
    const invalidSizes = ['-1', '2', '3.8', '글자', '21', '100', '', ' '];
    invalidSizes.forEach(size => {      
      expect(() => Validator.bridgeSizeCheck(size)).toThrow();
    });
  });
});