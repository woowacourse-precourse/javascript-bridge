const { ERROR_MESSAGE, VALID_CHAR } = require("../src/constants");
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
    });

    test("checkValidChar(U,D): 비정상 input에 대한 throw 테스트", () => {
        const bridgeSizeInputs = ["r", "q", "UD", "3"];
        const message = ERROR_MESSAGE.NOT_A_VALID_CHAR(VALID_CHAR.UP, VALID_CHAR.DOWN);
        bridgeSizeInputs.map((input) => {
            expect(() => { ErrorChecker.checkValidChar(VALID_CHAR.UP, VALID_CHAR.DOWN, input) }).toThrow(message);
        })
    });

    test("checkValidChar(U,D): 정상 input U, D에 대한 true 반환 테스트", () => {
        const bridgeSizeInputs = ["D", "U"];
        bridgeSizeInputs.map((input) => {
            expect(() => { ErrorChecker.checkValidChar(VALID_CHAR.UP, VALID_CHAR.DOWN, input) }).toBeTruthy();
        })
    });

    test("checkValidChar(R,Q): 비정상 input에 대한 throw 테스트", () => {
        const bridgeSizeInputs = ["u", "d", "RQ", "3"];
        const message = ERROR_MESSAGE.NOT_A_VALID_CHAR(VALID_CHAR.REPLAY, VALID_CHAR.QUIT);
        bridgeSizeInputs.map((input) => {
            expect(() => { ErrorChecker.checkValidChar(VALID_CHAR.REPLAY, VALID_CHAR.QUIT, input) }).toThrow(message);
        })
    });

    test("checkValidChar(R,Q): 정상 input R, Q에 대한 true 반환 테스트", () => {
        const bridgeSizeInputs = ["R", "Q"];
        bridgeSizeInputs.map((input) => {
            expect(() => { ErrorChecker.checkValidChar(VALID_CHAR.REPLAY, VALID_CHAR.QUIT, input) }).toBeTruthy();
        })
    });
})