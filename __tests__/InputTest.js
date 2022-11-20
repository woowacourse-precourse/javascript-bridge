const Input = require("../src/InputView");

describe("인풋 클래스 테스트", () => {
  test("입력받은 다리의 길이가 숫자가 아닌 경우", () => {
    expect(() => {
      Input.validBridgeSize("q");
    }).toThrow("[ERROR]");
  });

  test("입력받은 다리의 길이가 3이상 20미만이 아닌 경우", () => {
    expect(() => {
      Input.validBridgeSize("2");
    }).toThrow("[ERROR]");
  });

  test("칸 이동시 U, D 입력이 아닌 경우", () => {
    expect(() => {
      Input.validMovePoint("Z");
    }).toThrow("[ERROR]");
  });
});
