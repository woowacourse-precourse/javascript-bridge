const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/Controller/App");
const BridgeMaker = require("../src/Model/BridgeMaker");
const { ERROR } = require("../src/Constants");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

describe("[입력 테스트]", () => {
  test("다리 길이의 범위를 3 미만으로 입력한 경우", () => {
    mockQuestions(["1"]);
    expect(() => {
      const app = new App();
      app.requestBridgeSize();
    }).toThrow(ERROR.BRIDGE_SIZE_RANGE);
  });

  test("다리 길이의 범위를 21 이상으로 입력한 경우", () => {
    mockQuestions(["30"]);
    expect(() => {
      const app = new App();
      app.requestBridgeSize();
    }).toThrow(ERROR.BRIDGE_SIZE_RANGE);
  });

  test("다리 길이를 문자로 입력한 경우", () => {
    mockQuestions(["three"]);
    expect(() => {
      const app = new App();
      app.requestBridgeSize();
    }).toThrow(ERROR.BRIDGE_SIZE_IS_NAN);
  });

  test("이동한 칸을 U(위 칸), D(아래 칸)이 아닌 다른 문자를 입력한 경우", () => {
    mockQuestions(["UPPER"]);
    expect(() => {
      const app = new App();
      app.requestMoving();
    }).toThrow(ERROR.MOVING_DIRECTION);
  });

  test("게임 재시작 여부를 R(재시작), Q(종료)가 아닌 다른 문자를 입력한 경우", () => {
    mockQuestions(["START"]);
    expect(() => {
      const app = new App();
      app.requestGameCommand();
    }).toThrow(ERROR.GAME_COMMAND);
  });
});
