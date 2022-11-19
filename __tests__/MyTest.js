const BridgeMaker = require("../src/BridgeMaker");
const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator");
const GameController = require("../src/Controller/GameController");

const ExceptionHandler = require("../src/utils/ExceptionHandler");

const gameController = new GameController();

describe("다리 건너기 테스트", () => {
  test("다리 생성 길이 테스트", () => {
    const size = 3;
    expect(BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate).length).toBe(size);
  });

  test("다리 생성 UPDOWN 테스트", () => {
    const size = 2;
    const upDownMock = jest.fn();

    const upDownMocks = upDownMock.mockReturnValueOnce("0").mockReturnValueOnce("1");

    expect(BridgeMaker.makeBridge(size, upDownMocks)).toEqual(["U", "D"]);
  });

  test.each([["2"], ["21"]])("다리 길이 입력 범위에 대한 예외 처리", (input) => {
    const size = input;
    const validateTest = (size) => {
      gameController.constructBridgeGameAndSaveAnswerBridge(size);
    };
    expect(() => {
      validateTest(size);
    }).toThrow("[ERROR] 3부터 20 사이의 숫자를 입력해주세요.");
  });
});
//  "[ERROR] 3부터 20 사이의 숫자를 입력해주세요."
