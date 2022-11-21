const MissionUtils = require("@woowacourse/mission-utils");
const BridgeMaker = require("../src/BridgeMaker");
const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator");

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const testList = () => {
  describe("다리 만들기 테스트", () => {
    makeBridge();
  });
};

const makeBridge = () => {
  const testCase = [
    {
      testId: "1-1",
      param: ["1", "1", "1", "1", "1"],
      expected: ["U", "U", "U", "U", "U"],
    },
    {
      testId: "1-2",
      param: ["1", "0", "1", "0", "1"],
      expected: ["U", "D", "U", "D", "U"],
    },
    { testId: "1-3", param: ["1", "0"], expected: ["U", "D"] },
    { testId: "1-4", param: ["0"], expected: ["D"] },
    {
      testId: "1-4",
      param: ["0", "1", "1", "1", "1", "1", "0", "1", "0", "1"],
      expected: ["D", "U", "U", "U", "U", "U", "D", "U", "D", "U"],
    },
  ];

  test.each(testCase)(
    "1-$testId. 입력 받은 값으로 정확한 다리를 생성하는가?",
    ({ param, expected }) => {
      const mockGenerator = param.reduce((acc, number) => {
        return acc.mockReturnValueOnce(number);
      }, jest.fn());
      const bridge = BridgeMaker.makeBridge(param.length, mockGenerator);
      expect(bridge).toEqual(expected);
    }
  );
};

testList();
