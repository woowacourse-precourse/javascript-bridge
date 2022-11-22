const Validaton = require("../src/Validation");

describe("입력 테스트", () => {
    test("다리의 길이는 양의 정수가 아니면 예외가 발생한다.", () => {
        expect(() => {
            Validaton.validatePositiveInteger("a");
        }).toThrow("[ERROR]");
    });
    test("이동할 칸은 U 또는 D가 아니면 예외가 발생한다.", () => {
        expect(() => {
            Validaton.validateUserChoice("R");
        }).toThrow("[ERROR]");
    });
    test("재선택은 R 또는 Q가 아니면 예외가 발생한다.", () => {
        expect(() => {
            Validaton.validateUserRetryChoice("U");
        }).toThrow("[ERROR]");
    });
    // 아래에 추가 테스트 작성 가능
});