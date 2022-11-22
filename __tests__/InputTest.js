const Validation = require("../src/Validation");

describe("인풋 클래스 테스트", () => {
  test("입력받은 다리의 길이가 숫자가 아닌 경우", () => {
    expect(() => {
      Validation.validBridgeSize("q");
    }).toThrow("숫자 입력이 아님");
  });

  test("입력받은 다리의 길이가 3이상 20미만이 아닌 경우", () => {
    expect(() => {
      Validation.validBridgeSize("2");
    }).toThrow("3~20 사이의 숫자가 아님");
  });

  test("칸 이동시 U, D 입력이 아닌 경우", () => {
    expect(() => {
      Validation.validMovePoint("Z");
    }).toThrow("U 또는 D가 아님");
  });

  test("재시작 여부 R, Q 입력이 아닌 경우", () => {
    expect(() => {
      Validation.validreadGameCommand("s");
    }).toThrow("R 또는 Q가 아님");
  });
});
