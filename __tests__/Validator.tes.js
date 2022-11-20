const BridgeSize = require("../src/utils/validator/BridgeSize");
const MoveSpace = require("../src/utils/validator/MoveSpace");
const GameCommand = require("../src/utils/validator/GAMECOMMAND");

const { ISALLOW } = require("../src/utils/constants");

describe("예외 처리 테스트", () => {
  test.each([["2"], ["0"], ["-11"], ["21"], ["NaN"], ["undefined"], ["a"]])(
    "다리 길이 입력 예외 처리",
    (input) => {
      const bridgeSize = new BridgeSize(input);
      const errorTest = () => bridgeSize.checkInput();
      expect(errorTest()).toBe(ISALLOW.FALSE);
    }
  );

  test.each([["3"], ["10"], ["20"]])("다리 길이 입력 허용", (input) => {
    const bridgeSize = new BridgeSize(input);
    const errorTest = () => bridgeSize.checkInput();
    expect(errorTest()).toBe(ISALLOW.TRUE);
  });

  test.each([["G"], ["0"], ["u"], ["d"], ["NaN"], ["undefined"]])(
    "이동 방향 입력 예외처리",
    (input) => {
      const moveSpace = new MoveSpace(input);
      const errorTest = () => moveSpace.checkInput();
      expect(errorTest()).toBe(ISALLOW.FALSE);
    }
  );

  test.each([["U"], ["D"]])("이동 방향 입력 허용", (input) => {
    const moveSpace = new MoveSpace(input);
    const errorTest = () => moveSpace.checkInput();
    expect(errorTest()).toBe(ISALLOW.TRUE);
  });

  test.each([["r"], ["0"], ["1"], ["q"], ["NaN"], ["undefined"]])(
    "게임 재시작 입력 예외처리",
    (input) => {
      const gameCommand = new GameCommand(input);
      const errorTest = () => gameCommand.checkInput();
      expect(errorTest()).toBe(ISALLOW.FALSE);
    }
  );

  test.each([["R"], ["Q"]])("게임 재시작 입력 허용", (input) => {
    const gameCommand = new GameCommand(input);
    const errorTest = () => gameCommand.checkInput();
    expect(errorTest()).toBe(ISALLOW.TRUE);
  });
});
