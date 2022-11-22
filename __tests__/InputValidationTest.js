const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("../src/InputView");

const mockQuestions = (answers) => {
    MissionUtils.Console.readLine = jest.fn();
    answers.reduce((acc, input) => {
      return acc.mockImplementationOnce((question, callback) => {
        callback(input);
      });
    }, MissionUtils.Console.readLine);
};

const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
};

const getOutput = (logSpy) => {
    return [...logSpy.mock.calls].join("");
};

const expectLogContains = (received, logs) => {
    logs.forEach((log) => {
      expect(received).toEqual(expect.stringContaining(log));
    });
};

describe("다리의 길이를 입력받는다", () => {
    test("[예외 처리] 입력한 값이 숫자가 아닌 경우", () => {
        mockQuestions(["dd"]);

        const logSpy = getLogSpy();
        InputView.readBridgeSize();

        expectLogContains(getOutput(logSpy), ["[ERROR]"]);
    });

    test.each(["999", "0", "-123"])("[예외 처리] 입력한 숫자가 범위에서 벗어난 경우", (input) => {
        mockQuestions([input]);

        const logSpy = getLogSpy();
        InputView.readBridgeSize();

        expectLogContains(getOutput(logSpy), ["[ERROR]"]);
    });
});

describe("사용자가 이동할 칸을 입력받는다", () => {
    test.each(["3", "S", "d"])("[예외 처리] 입력한 값이 정해진 후보 값 중 하나가 아닐 경우", (input) => {
        mockQuestions([input]);

        const logSpy = getLogSpy();
        InputView.readMoving();

        expectLogContains(getOutput(logSpy), ["[ERROR]"]);
    });
});

describe("사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다", () => {
    test.each(["3", "S", "r"])("[예외 처리] 입력한 값이 정해진 후보 값 중 하나가 아닐 경우", (input) => {
        mockQuestions([input]);

        const logSpy = getLogSpy();
        InputView.readGameCommand();

        expectLogContains(getOutput(logSpy), ["[ERROR]"]);
    });
});