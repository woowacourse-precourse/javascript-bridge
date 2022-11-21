const { CheckBridgeSizeException , CheckUserMove, CheckWhetherGameRunning } = require("../src/Exception");

describe("다리 건너기 게임 사용자 입력 예외 사항", () => {
    test("다리 길이가 3미만 20초과일 경우", () => {
        expect(() => {
            new CheckBridgeSizeException(2);
        }).toThrow("[ERROR]");
    })

    test("다리 길이가 숫자가 아닐 경우", () => {
        expect(() => {
            new CheckBridgeSizeException("삼");
        }).toThrow("[ERROR]");
    })

    test("사용자 칸 입력이 U 혹은 D가 아닐 경우", () => {
        expect(() => {
            new CheckUserMove("Q")
        }).toThrow("[ERROR]");
    })

    test("사용자 게임 진행 입력이 Q 혹은 R이 아닐 경우", () => {
        expect(() => {
            new CheckUserMove("재시작")
        }).toThrow("[ERROR]");
    })
})
