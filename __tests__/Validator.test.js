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

});



