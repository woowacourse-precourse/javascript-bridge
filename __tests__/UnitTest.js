const MissionUtils = require("@woowacourse/mission-utils");
const BridgeMaker = require("../src/BridgeMaker");
const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator");
const InputValidator = require("../src/InputValidator");

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe("Validator 테스트", () => {
  test("입력한 길이 유효성 검사", () => {
    expect(InputValidator.isValidLength("10")).toEqual(true);
    expect(InputValidator.isValidLength("3.14")).toEqual(false);
    expect(InputValidator.isValidLength("-22")).toEqual(false);
    expect(InputValidator.isValidLength("22")).toEqual(false);
  });
});

describe("BridgeMaker 테스트", () => {
  test("랜덤한 다리 생성 기능", () => {
    mockRandoms([0, 1, 1, 0, 0, 1]);
    expect(
      BridgeMaker.makeBridge(6, BridgeRandomNumberGenerator.generate)
    ).toEqual(["D", "U", "U", "D", "D", "U"]);
  });
});
