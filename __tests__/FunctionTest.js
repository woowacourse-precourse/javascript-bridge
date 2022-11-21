const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");
const BridgeMaker = require("../src/BridgeMaker");

const mockQuestions = (answers) => {
    MissionUtils.Console.readLine = jest.fn();
    answers.reduce((acc, input) => {
        return acc.mockImplementationOnce((_, callback) => {
            callback(input);
        });
    }, MissionUtils.Console.readLine);
};

const mockRandoms = (numbers) => {
    MissionUtils.Random.pickNumberInRange = jest.fn();
    numbers.reduce((acc, number) => {
        return acc.mockReturnValueOnce(number);
    }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
};

const getOutput = (logSpy) => {
    return [...logSpy.mock.calls].join("");
};

const runException = (inputs) => {
    mockQuestions(inputs);
    const logSpy = getLogSpy();
    const app = new App();

    app.play();

    expectLogContains(getOutput(logSpy), ["[ERROR]"]);
};

const expectLogContains = (received, logs) => {
    logs.forEach((log) => {
        expect(received).toEqual(expect.stringContaining(log));
    });
};

const expectBridgeOrder = (received, upside, downside) => {
    const upsideIndex = received.indexOf(upside);
    const downsideIndex = received.indexOf(downside);

    expect(upsideIndex).toBeLessThan(downsideIndex);
};

describe("다리 건너기 테스트", () => {

    test("다리 길이 입력 범위(3~20)와는 무관한, 한 칸 사이즈의 문자비트(1->U) 생성 기능 테스트", () => {
        const randomNumbers = [1];
        const mockGenerator = randomNumbers.reduce((acc, number) => {
            return acc.mockReturnValueOnce(number);
        }, jest.fn());

        const bridge = BridgeMaker.makeBridge(1, mockGenerator);
        expect(bridge).toEqual(["U"]);
    });

    test("다리 사이즈 소수점(5.5) 입력 예외 상황 테스트", () => {
        runException([5.5]);
    });

    test("이동할 칸(소문자 a) 입력 예외 상항 테스트", () => {
        const logSpy = getLogSpy();
        mockRandoms([1, 1, 1]);
        mockQuestions(["3", "a", "U", "U", "U"]);

        const app = new App();
        app.play();

        const log = getOutput(logSpy);
        expectLogContains(log, [
            "최종 게임 결과",
            "[ O | O | O ]",
            "[   |   |   ]",
            "게임 성공 여부: 성공",
            "총 시도한 횟수: 1",
        ]);
        expectBridgeOrder(log, "[ O | O | O ]", "[   |   |   ]");
    });

    test("재시작 종료(Q), 콘솔의 다리 그림과 결과 출력 기능 테스트", () => {
        const logSpy = getLogSpy();
        mockRandoms([1, 1, 1, 1, 0]);
        mockQuestions(["5", "U", "U", "U", "U", "U", "Q"]);

        const app = new App();
        app.play();

        const log = getOutput(logSpy);
        expectLogContains(log, [
            "최종 게임 결과",
            "[ O | O | O | O | X ]",
            "[   |   |   |   |   ]",
            "게임 성공 여부: 실패",
            "총 시도한 횟수: 1",
        ]);
        expectBridgeOrder(log, "[ O | O | O | O | X ]", "[   |   |   |   |   ]");
    });

    test("재시작 명령어(소문자 r) 입력 예외 상황 테스트", () => {
        const logSpy = getLogSpy();
        mockRandoms([1, 1, 1]);
        mockQuestions(["3", "D", "r", "R", "U", "U", "U"]);

        const app = new App();
        app.play();

        const log = getOutput(logSpy);
        expectLogContains(log, [
            "최종 게임 결과",
            "[ O | O | O ]",
            "[   |   |   ]",
            "게임 성공 여부: 성공",
            "총 시도한 횟수: 2",
        ]);
        expectBridgeOrder(log, "[ O | O | O ]", "[   |   |   ]");
    });

});
