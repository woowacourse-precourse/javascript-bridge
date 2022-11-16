const MissionUtils = require("@woowacourse/mission-utils");
const BridgeMaker = require("../src/BridgeMaker");

test.each([
    [["1", "0", "0"], ["U", "D", "D"]],
    [["0", "1", "0"], ["D", "U", "D"]],
    [["0", "1", "1"], ["D", "U", "U"]]
])("다리 생성 테스트", (input, expectedBridge) => {
    const randomNumbers = input;
    const mockGenerator = randomNumbers.reduce((acc, number) => {
        return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(expectedBridge);
});