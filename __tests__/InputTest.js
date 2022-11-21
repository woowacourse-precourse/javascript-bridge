const Validator = require('../src/utils/Validator');

describe("입력값 테스트", () => {
    test("다리 길이로 3~20 사이가 아닌 값을 입력하면 예외 처리한다.", () => {
        expect(() => {
            Validator.validateBridgeSize(30)
        }).toThrow(
            '[ERROR] 3 ~ 20 사이 숫자만 입력할 수 있습니다.'
        );
    });

    test("다리 이동시 U나 D가 아닌 값을 입력하면 예외 처리한다.", () => {
        expect(() => {
            Validator.validateMoving(3)
        }).toThrow(
            '[ERROR] U 또는 D만 입력할 수 있습니다.'
        );
    });
});