const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/Controller/App");
const BridgeMaker = require("../src/Model/BridgeMaker");
const { ERROR_MESSAGE } = require("../src/Utils/Constants");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

describe("[입력 테스트]", () => {
  test("다리 길이의 범위를 3 미만으로 입력한 경우 예외가 발생한다.", () => {
    mockQuestions(["1"]);
    expect(() => {
      const app = new App();
      app.requestBridgeSize();
    }).toThrow(ERROR_MESSAGE.BRIDGE_SIZE_RANGE);
  });

  test("다리 길이의 범위를 21 이상으로 입력한 경우 예외가 발생한다.", () => {
    mockQuestions(["30"]);
    expect(() => {
      const app = new App();
      app.requestBridgeSize();
    }).toThrow(ERROR_MESSAGE.BRIDGE_SIZE_RANGE);
  });

  test("다리 길이에 숫자가 아닌 입력이 들어오는 경우 예외가 발생한다.", () => {
    mockQuestions(["three"]);
    expect(() => {
      const app = new App();
      app.requestBridgeSize();
    }).toThrow(ERROR_MESSAGE.BRIDGE_SIZE_IS_NAN);
  });

  test("다리 길이에 숫자가 아닌 입력이 들어오는 경우 예외가 발생한다.", () => {
    mockQuestions(["1t40"]);
    expect(() => {
      const app = new App();
      app.requestBridgeSize();
    }).toThrow(ERROR_MESSAGE.BRIDGE_SIZE_IS_NAN);
  });

  test("이동하려는 칸에 U(위 칸), D(아래 칸)이 아닌 다른 문자가 입력으로 들어오는 경우 예외가 발생한다.", () => {
    mockQuestions(["UPPER"]);
    expect(() => {
      const app = new App();
      app.requestMoving();
    }).toThrow(ERROR_MESSAGE.MOVING_DIRECTION);
  });

  test("게임 재시작 여부에 R(재시작), Q(종료)가 아닌 다른 문자가 입력으로 들어오는 경우 예외가 발생한다.", () => {
    mockQuestions(["S"]);
    expect(() => {
      const app = new App();
      app.requestGameCommand();
    }).toThrow(ERROR_MESSAGE.GAME_COMMAND);
  });
});
