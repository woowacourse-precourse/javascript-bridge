const Bridge = require('../src/model/Bridge');
const BridgeMaker = require("../src/BridgeMaker");
const { ERROR } = require('../src/Error');

describe("Bridge 테스트", () => {
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

    test.each([
        [["1"], ERROR.BRIDGE_SIZE_OUT_BOUNDARY],
        [["2"], ERROR.BRIDGE_SIZE_OUT_BOUNDARY],
        [["21"], ERROR.BRIDGE_SIZE_OUT_BOUNDARY],
        [["A"], ERROR.BRIDGE_SIZE_NOT_NUMBER],
        [["UD"], ERROR.BRIDGE_SIZE_NOT_NUMBER]
    ])("다리 길이 입력 예외 테스트", (bridgeSize, ERROR) => {
        expect(() => { new Bridge(bridgeSize); }).toThrow(ERROR);
    });
});