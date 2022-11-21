const {validateBridgeLength, validationMove} = require("../src/Validation");

describe("validation 다리 길이 입력 test", () => {
    test("validation length function test(1) 범위내의 숫자 입력", () => {
        expect(validateBridgeLength(10)).toEqual(true);
    });

    test("validation length function test(2) 범위 외의 숫자 입력", () => {
        expect(validateBridgeLength(40)).toEqual(false);
    });

    test("validation length function test(2) 문자 입력", () => {
        expect(validateBridgeLength('a')).toEqual(false);
    });
});


describe("validation user 이동 입력 test", () => {
    test("validation move function test(1) U입력", () => {
        expect(validationMove('U')).toEqual(true);
    });

    test("validation move function test(2) D입력", () => {
        expect(validationMove('D')).toEqual(true);
    });

    test("validation move function test(3) 숫자 입력", () => {
        expect(validationMove(2)).toEqual(false);
    });
});
