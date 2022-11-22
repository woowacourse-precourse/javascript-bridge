const BridgeMaker = require("../src/BridgeMaker");
const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator");
const BridgeGame = require("../src/Model/BridgeGame");
const ExceptionHandler = require("../src/utils/ExceptionHandler");

const validateTest = (input, callback) => {
  callback(input);
};

describe("다리 건너기 테스트", () => {
  test("다리 생성 길이 테스트", () => {
    const size = 3;
    expect(BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate).length).toBe(size);
  });

  test("다리 생성 UPDOWN 테스트", () => {
    const size = 2;
    const upDownMock = jest.fn();

    const upDownMocks = upDownMock.mockReturnValueOnce(1).mockReturnValueOnce(0);

    expect(BridgeMaker.makeBridge(size, upDownMocks)).toEqual(["U", "D"]);
  });

  test.each([["2"], ["21"]])("다리 길이 입력 범위에 대한 예외 처리", (input) => {
    const size = input;

    expect(() => {
      validateTest(size, ExceptionHandler.validateSizeInput);
    }).toThrow("[ERROR]");
  });

  test.each([["u"], ["d"]])("게임 진행(move)에 필요한 입력에 대한 예외 처리", (input) => {
    const char = input;

    expect(() => {
      validateTest(char, ExceptionHandler.validateMoveInput);
    }).toThrow("[ERROR]");
  });

  test.each([["r"], ["q"]])("재시작/종료를 물을 때 필요한 입력에 대한 예외 처리", (input) => {
    const char = input;

    expect(() => {
      validateTest(char, ExceptionHandler.validateQuitOrRetryInput);
    }).toThrow("[ERROR]");
  });

  test("게임 진행 다리 생성 테스트", () => {
    const bridgeGame = new BridgeGame(1);
    bridgeGame.answerBridge = ["U"];

    expect(bridgeGame.createUpDownBridges("U")).toEqual(["[ O ]", "[   ]"]);
  });

  test("게임 진행 다리 연장 테스트", () => {
    const bridgeGame = new BridgeGame(2);
    bridgeGame.answerBridge = ["U", "U"];

    bridgeGame.createBridges("U");

    // 마지막 괄호 삭제 후 바 추가 테스트
    expect(bridgeGame.removeRightBrackets(bridgeGame.bridges.getUpBridge())).toEqual("[ O |");

    expect(bridgeGame.extendUpDownBridges("U")).toEqual(["[ O | O ]", "[   |   ]"]);
  });
});
