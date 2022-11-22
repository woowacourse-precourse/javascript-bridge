const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("../src/BridgeGame");
const GameController = require("../src/GameController");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const gameController = new GameController({
  game: new BridgeGame(),
});

describe("유저 입력 테스트", () => {
  test("다리 길이 테스트", () => {
    mockQuestions(["1"]);

    expect(() => {
      gameController.setUpBridge();
    }).toThrow("[ERROR]");
  });
});
