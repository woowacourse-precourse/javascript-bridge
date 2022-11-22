const Validator = require('../src/Validator');

describe("예외 처리 테스트", () => {
    test("validateInputCatch 예외 테스트 정상", () => {
        const SIZE = 3;
        expect(Validator.validateInputCatch(SIZE)).toBe(undefined)
    });

    test("validateInputCatch 예외 테스트 실패", () => {
        const SIZE = '우테코';
        expect(Validator.validateInputCatch(SIZE)).toBe(true)
    });

    test("validateisRepeat 예외 테스트 정상", () => {
        const MOVE_INPUT = "U";
        expect(Validator.validateisRepeat(MOVE_INPUT)).toBe(undefined)
    });

    test("validateisRepeat 예외 테스트 실패", () => {
        const MOVE_INPUT = '합격';
        expect(Validator.validateisRepeat(MOVE_INPUT)).toBe(true)
    });

    test("validateRetryInputCatch 예외 테스트 정상", () => {
        const RETRY_INPUT = "R";
        expect(Validator.validateRetryInputCatch(RETRY_INPUT)).toBe(undefined)
    });

    test("validateRetryInputCatch 예외 테스트 실패", () => {
        const RETRY_INPUT = '기원';
        expect(Validator.validateRetryInputCatch(RETRY_INPUT)).toBe(true)
    });

});



