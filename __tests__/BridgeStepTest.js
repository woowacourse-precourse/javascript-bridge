const BridgeStep = require("../src/Model/BridgeStep");

const directions = ["D", "D", "U", "U", "U"];
const bridgeStep = new BridgeStep(directions);

describe("다리 이동 user입력값, 랜덤 알파벳 값 비교 테스트", () => {
  test("랜덤 다리의 알파벳과 user의 다리 이동 입력값이 같을 경우", () => {
    const position = 3;
    const direction = "U";

    const result = bridgeStep.checkPass(position, direction);

    expect(result).toBe(true);
  });

  test("랜덤 다리의 알파벳과 user의 다리 이동 입력값이 다를 경우", () => {
    const position = 5;
    const direction = "U";

    const result = bridgeStep.checkPass(position, direction);

    expect(result).toBe(false);
  });

  test("다리의 모든 칸을 성공한 경우 전체 다리 길이와 일치", () => {
    const clearCount = 5;
    const result = bridgeStep.checkAllPass(clearCount);

    expect(result).toBe(true);
  });
});
