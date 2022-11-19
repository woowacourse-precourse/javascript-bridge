const InputView = require("../src/InputView");
const Error = require("../src/Error");
const MissionUtils = require("@woowacourse/mission-utils");
const BridgeMaker = require("../src/BridgeMaker");
const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator");
const BridgeGame = require("../src/BridgeGame");
const OutputView = require("../src/OutputView");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};
const error = new Error();
const bridgeGame = new BridgeGame();

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("다리 길이의 입력 값이", () => {
  test("3~20 사이의 숫자가 아닐 경우 예외가 발생하는지", () => {
    const answers = [1, "254", 40];

    answers.forEach((answer) => {
      expect(() => {
        const result = error.bridgeSizeError(answer);
      }).toThrow(expect.stringContaining("[ERROR]"));
    });
  });

  test("주어진 만큼 다리의 개수가 생성이 되었는지", () => {
    const sizes = [3, 1000, 600];
    sizes.forEach((size) => {
      const bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
      expect(bridge).toHaveLength(size);
    });
  });
});

describe("이동할 칸의 입력 값이", () => {
  test("U와 D가 아닌 다른 값을 입력했을 때 예외가 발생하는지", () => {
    const answers = ["R", 23];

    answers.forEach((answer) => {
      expect(() => {
        const result = error.movingError(answer);
      }).toThrow(expect.stringContaining("[ERROR]"));
    });
  });
});

describe("이동 값 U가", () => {
  const userData = {
    callCount: 0,
    upperBridge: "",
    lowerBridge: "",
    currentAnswer: "",
    bridge: ["U"],
  };

  test("정답일 경우 정답 표시인 'O'를 반환 하는지", () => {
    const correctAnswer = "U";
    const expectedValue = "O";

    userData["currentAnswer"] = correctAnswer;
    const result = bridgeGame.move(userData);
    expect(result["upperBridge"]).toContainEqual(expect.stringContaining(expectedValue));
  });

  test("오답일 경우 오답 표시인 'X'를 반환 하는지", () => {
    const incorrectAnswer = "D";
    const expectedValue = "X";

    userData["currentAnswer"] = incorrectAnswer;
    const result = bridgeGame.move(userData);
    expect(result["lowerBridge"]).toContainEqual(expect.stringContaining(expectedValue));
  });
});

describe("이동 값 D가", () => {
  const userData = {
    callCount: 0,
    upperBridge: "",
    lowerBridge: "",
    currentAnswer: "",
    bridge: ["D"],
  };

  test("정답일 경우 정답 표시인 'O'를 반환 하는지", () => {
    const correctAnswer = "D";
    const expectedValue = "O";

    userData["currentAnswer"] = correctAnswer;
    const result = bridgeGame.move(userData);
    expect(result["lowerBridge"]).toContainEqual(expect.stringContaining(expectedValue));
  });

  test("오답일 경우 오답 표시인 'X'를 반환 하는지", () => {
    const incorrectAnswer = "U";
    const expectedValue = "X";

    userData["currentAnswer"] = incorrectAnswer;
    const result = bridgeGame.move(userData);
    expect(result["upperBridge"]).toContainEqual(expect.stringContaining(expectedValue));
  });
});

describe("게임을 다시 시작할 때 값이", () => {
  test("R또는 Q 이외의 값이 주어졌을때 예외가 발생하는지", () => {
    const answers = [1, "d", "ㅎㅎ"];

    answers.forEach((answer) => {
      expect(() => {
        error.gameCommandError(answer);
      }).toThrow(expect.stringContaining("[ERROR]"));
    });
  });

  const userData = {
    currentAnswer: "",
  };

  test("R일 경우 이동 값을 다시 선택할 수 있게 이어지는지,", () => {
    userData["currentAnswer"] = "R";
    const readMoving = jest.spyOn(InputView, "readMoving");
    const gameCommand = bridgeGame.retry(userData);

    InputView.checkStatus(gameCommand);
    expect(readMoving).toHaveBeenCalled();
  });

  test("Q일 경우 결과를 출력하는지", () => {
    userData["currentAnswer"] = "Q";
    const printResult = jest.spyOn(OutputView, "printResult");
    const gameCommand = bridgeGame.retry(userData);

    InputView.checkStatus(gameCommand);
    expect(printResult).toHaveBeenCalled();
  });

  test("Q일 경우 콘솔이 종료가 되는지", () => {
    const consoleEnd = jest.spyOn(MissionUtils.Console, "close");
    const gameCommand = bridgeGame.retry(userData);

    InputView.checkStatus(gameCommand);
    expect(consoleEnd).toHaveBeenCalled();
  });
});
