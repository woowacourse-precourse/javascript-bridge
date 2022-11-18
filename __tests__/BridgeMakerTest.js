const MissionUtils = require("@woowacourse/mission-utils");
const BridgeMaker = require("../src/BridgeMaker");

describe("다리 생성 기능 테스트", () => {
  test("다리 생성 테스트", () => {
    const randomNumbers = ["0", "1", "1", "0", "1"];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());
 
    const bridge = BridgeMaker.makeBridge(5, mockGenerator);
    expect(bridge).toEqual(["D", "U", "U", "D", "U"]);
  });
});