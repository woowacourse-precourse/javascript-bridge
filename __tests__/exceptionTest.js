const MissionUtils = require("@woowacourse/mission-utils");
const { run } = require('jest');
const App = require("../src/App");
const Exception = require("../src/Exception");

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

describe("다리 길이 유효성 테스트", () => {
  test("다리 길이가 3 미만 20 초과이면 예외발생", () => {
    runException(["2", "42", "3"]);
  });
 
  test("다리 길이 입력값이 숫자가 아니면 예외발생", () => {
    runException(["a", " ", "-", "3"]);
  });
});

// describe("재시작 입력값 유효성 테스트", () => {
//     test("입력값이 R과 Q가 아닐 경우 예외발생", () => {
//       expect(()=>{
//         Exception.checkRestart("d")
//       }
//       ).toThrow("[ERROR] R 또는 Q를 입력해주세요.")
//     });

// });

// describe("사용자 이동 입력값 유효성 테스트", () => {
//     test("입력값이 U과 D가 아닐 경우 예외발생", () => {
//       expect(
//         Exception.checkSpace("E")
//       ).toThrow("[ERROR] U 또는 D를 입력해주세요.")
//     });

// });