const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/Feature");
const BridgeMaker = require("../src/BridgeMaker");

describe("다리 생성 테스트", () => {
  test("다리 생성", () => {
    const randomNumbers = ["1", "0", "0"];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(["U", "D", "D"]);
  });

  test("예외처리 : size가 숫자가 아닌 경우", () => {
    const randomNumbers = ["1", "0", "0"];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    expect(() => {
        BridgeMaker.makeBridge("string", mockGenerator)
    }).toThrow("[Error]");
  })
});
