const Validator = require('../src/Validator');

describe("예외 처리 테스트", () => {
    test("validateInputCatch 예외 테스트 정상", () => {
        const size = 3;
        expect(Validator.validateInputCatch(size)).toBe(undefined)
    });

    test("validateInputCatch 예외 테스트 실패", () => {
        const size = '우테코';
        expect(Validator.validateInputCatch(size)).toBe(true)
    });

    test("validateisRepeat 예외 테스트 정상", () => {
        const moveInput = "U";
        expect(Validator.validateisRepeat(moveInput)).toBe(undefined)
    });

    test("validateisRepeat 예외 테스트 실패", () => {
        const moveInput = '우테코';
        expect(Validator.validateisRepeat(moveInput)).toBe(true)
    });

    test("validateRetryInputCatch 예외 테스트 정상", () => {
        const retryInput = "R";
        expect(Validator.validateRetryInputCatch(retryInput)).toBe(undefined)
    });

    test("validateRetryInputCatch 예외 테스트 실패", () => {
        const retryInput = '우테코';
        expect(Validator.validateRetryInputCatch(retryInput)).toBe(true)
    });

});



