const { describe, expect, test } = require("@jest/globals");
const { Console, Random } = require("@woowacourse/mission-utils");
const { ERROR_MESSAGE } = require("../src/libs/Const");
const Manager = require("../src/Manager");

const printSpy = jest.spyOn(Console, "print");

const setNumber = () => {
  Random.pickNumberInRange = jest.fn();
  Random.pickNumberInRange.mockReturnValueOnce(1);
  Random.pickNumberInRange.mockReturnValueOnce(1);
  Random.pickNumberInRange.mockReturnValueOnce(0);
};

const mockQuestions = (answers) => {
  Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input);
    });
  }, Console.readLine);
};

describe("전체적인 게임 흐름 테스트", () => {
  test("올바른 값을 입력하지 않으면 에러 메시지가 출력된다.", () => {
    mockQuestions(["a"]);

    const bridgeGameManager = new Manager();
    bridgeGameManager.start();

    expect(printSpy).toHaveBeenLastCalledWith(ERROR_MESSAGE.number);

    printSpy.mockClear();
  });

  test("방향을 U 또는 D를 입력하지 않으면 에러 메시지가 출력된다.", () => {
    mockQuestions(["3", "A"]);

    const bridgeGameManager = new Manager();
    bridgeGameManager.start();

    expect(printSpy).toHaveBeenLastCalledWith(ERROR_MESSAGE.direction);

    printSpy.mockClear();
  });

  test("재시작 또는 종료 옵션 선택을 할 때 Q 또는 R를 입력하지 않으면 에러 메시지가 출력된다.", () => {
    setNumber();

    mockQuestions(["3", "U", "D", "L"]);

    const bridgeGameManager = new Manager();
    bridgeGameManager.start();

    expect(printSpy).toHaveBeenLastCalledWith(ERROR_MESSAGE.commandOption);

    printSpy.mockClear();
  });

  test("다리를 이동할 때 마다 이동한 결과를 출력한다.", () => {
    setNumber();

    mockQuestions(["3", "U", "U"]);

    const bridgeGameManager = new Manager();
    bridgeGameManager.start();

    expect(printSpy).toHaveBeenNthCalledWith(2, "[ O ]");
    expect(printSpy).toHaveBeenNthCalledWith(3, "[   ]");
    expect(printSpy).toHaveBeenNthCalledWith(4, "[ O | O ]");
    expect(printSpy).toHaveBeenNthCalledWith(5, "[   |   ]");

    printSpy.mockClear();
  });

  test("이동할 수 없는 다리를 선택할 경우 해당 자리에 X를 출력한다.", () => {
    setNumber();

    mockQuestions(["3", "D"]);

    const bridgeGameManager = new Manager();
    bridgeGameManager.start();

    expect(printSpy).toHaveBeenNthCalledWith(3, "[ X ]");

    printSpy.mockClear();
  });

  test("게임 실패 후 게임을 종료하면 게임 성공 여부는 실패가 된다.", () => {
    setNumber();

    mockQuestions(["3", "D", "Q"]);

    const bridgeGameManager = new Manager();
    bridgeGameManager.start();

    expect(printSpy).toHaveBeenNthCalledWith(7, "\n게임 성공 여부: 실패");

    printSpy.mockClear();
  });

  test("총 시도한 횟수는 게임을 재시작 한 횟수에 1을 더한 값이다.", () => {
    setNumber();
    mockQuestions(["3", "D", "R", "U", "D", "R", "U", "U", "U", "Q"]);

    const bridgeGameManager = new Manager();
    bridgeGameManager.start();

    expect(printSpy).toHaveBeenLastCalledWith("총 시도한 횟수: 3");

    printSpy.mockClear();
  });

  test("게임에 성공 후 게임을 종료하면 게임 성공 여부는 성공이 된다.", () => {
    setNumber();

    mockQuestions(["3", "U", "U", "D"]);

    const bridgeGameManager = new Manager();
    bridgeGameManager.start();

    expect(printSpy).toHaveBeenNthCalledWith(11, "\n게임 성공 여부: 성공");

    printSpy.mockClear();
  });

  test("게임에 종료 후 다리 건너기 결과를 출력한다.", () => {
    setNumber();

    mockQuestions(["3", "U", "U", "D"]);

    const bridgeGameManager = new Manager();
    bridgeGameManager.start();

    expect(printSpy).toHaveBeenNthCalledWith(8, "\n최종 게임 결과");
    expect(printSpy).toHaveBeenNthCalledWith(9, "[ O | O |   ]");
    expect(printSpy).toHaveBeenNthCalledWith(10, "[   |   | O ]");

    printSpy.mockClear();
  });
});
