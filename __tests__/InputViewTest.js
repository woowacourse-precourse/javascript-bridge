const Validaton = require("../src/Validation");

describe("입력 테스트", () => {
    test("다리의 길이는 양의 정수가 아니면 예외가 발생한다.", () => {
        expect(() => {
            Validaton.validatePositiveInteger("a");
        }).toThrow("[ERROR]");
    });

    // 아래에 추가 테스트 작성 가능
});