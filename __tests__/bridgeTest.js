const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("../src/InputView");
const OutputView = require("../src/OutputView");

const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
};

describe ("다리건너기 테스트",  () => {
    test("다리 사이즈 예외 테스트", () => {
        expect(() => {
            InputView.bridgeSizeError('2')
        }).toThrow()
    });
    
    test("다리 사이즈 예외 테스트 2", () => {
        expect(() => {
            InputView.bridgeSizeError('21')
        }).toThrow()
    });
    
    test("중간 출력 성공 테스트", () => {
        
        const logs = [
            "[ O |   | O | O ]",
            "[   | O |   |   ]"
        ];
        const logSpy = getLogSpy();
        OutputView.printMap(["U","D","U","U"], 4, true)
        logs.forEach((log) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
        });
    });
        
    test("최종 출력 성공 테스트", () => {
        
        const logs = [
            "최종 게임 결과",
            "[   | O |   |   ]",
            "[ O |   | O | O ]",
            "게임 성공 여부: 성공",
            "총 시도한 횟수: 5",
        ];
        const logSpy = getLogSpy();
        OutputView.printResult(["D","U","D","D"], 5, true)
        logs.forEach((log) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
        });
    });
});