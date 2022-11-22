const { ERROR_MESSAGE } = require("../src/constants");
const ErrorChecker = require("../src/ErrorChecker");

describe("ErrorChecker 테스트", () => {
    test("checkBridgeSizeValidation: 비정상 input에 대한 throw 테스트", () => {
        const bridgeSizeInputs = ["a", "4.5", "2", "21"];
        const message = [
            ERROR_MESSAGE.NOT_A_NUMBER,
            ERROR_MESSAGE.NOT_AN_INTEGER,
            ERROR_MESSAGE.OUT_OF_RANGE_OF_BRIDGE_SIZE,
            ERROR_MESSAGE.OUT_OF_RANGE_OF_BRIDGE_SIZE
        ];
        bridgeSizeInputs.map((input, index) => {
            expect(() => { ErrorChecker.checkBridgeSizeValidation(input) }).toThrow(message[index]);
        })
    });

    test("checkBridgeSizeValidation: 정상 input에 대한 true 반환 테스트", () => {
        const bridgeSizeInputs = ["3", "4", "5", "20"];
        bridgeSizeInputs.map((input) => {
            expect(() => { ErrorChecker.checkBridgeSizeValidation(input) }).toBeTruthy();
        })
    })
})