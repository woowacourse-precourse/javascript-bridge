const MissionUtils = require("@woowacourse/mission-utils");
const Validation = require("../src/Validation");

describe("Validation 클래스 테스트", () => {
  test("입력 받은 다리 길이가 3이하 20이상의 숫자면 예외가 발생한다.", () => {
    expect(() => {
      const validation = new Validation();
      validation.validateBridgeLength(1);
    }).toThrow("[ERROR]");
  });

  test("입력 받은 다리 길이가 숫자가 아니라면 예외가 발생한다.", () => {
    expect(() => {
      const validation = new Validation();
      validation.validateBridgeLength("ab");
    }).toThrow("[ERROR]");
  });
});
