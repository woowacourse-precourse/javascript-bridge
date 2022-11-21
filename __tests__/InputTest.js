const Validator = require('../src/utils/Validator');

describe("입력값 테스트", () => {
    test("다리 길이로 3~20 사이가 아닌 값을 입력하면 예외 처리한다.", () => {
        expect(() => {
            Validator.validateBridgeSize(30)}).toThrow(
            '[ERROR] 잘못된 입력입니다.'
        );
    })
});