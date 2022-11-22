const Validator = require("../src/Library/Validator");
// const BridgeMaker = require("../src/BridgeMaker");
// const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator");
const Constant = require("../src/constant");
const TEST_ELEMENT = Constant.VALID_TEST_ELEMENT;

const temporaryCallback = () => {
  console.log("Temporary callback for Validation Test.");
};

describe("Validator 테스트", () => {
  test("자연수 validatation 테스트", () => {
    const RESULT = Constant.NATURAL_VALIDATION;
    for (let index = 0; index < TEST_ELEMENT.length; index++) {
      expect(Validator.isNaturalNumber(TEST_ELEMENT[index])).toEqual(
        RESULT[index]
      );
    }
  });

  test("다리 길이 validatation 테스트", () => {
    const RESULT = Constant.BRIDGE_LENGTH_VALIDATION;
    for (let index = 0; index < TEST_ELEMENT.length; index++) {
      expect(
        Validator.isBridgeLength(temporaryCallback, TEST_ELEMENT[index])
      ).toEqual(RESULT[index]);
    }
  });

  test("다리 생성 0/1 validatation 테스트", () => {
    const RESULT = Constant.BOOL_NUMBER_VALIDATION;
    for (let index = 0; index < TEST_ELEMENT.length; index++) {
      expect(
        Validator.isBoolNumber(temporaryCallback, TEST_ELEMENT[index])
      ).toEqual(RESULT[index]);
    }
  });

  test("종료 R/Q validatation 테스트", () => {
    const RESULT = Constant.RQ_VALIDATION;
    for (let index = 0; index < TEST_ELEMENT.length; index++) {
      expect(Validator.isQuit(temporaryCallback, TEST_ELEMENT[index])).toEqual(
        RESULT[index]
      );
    }
  });
});
