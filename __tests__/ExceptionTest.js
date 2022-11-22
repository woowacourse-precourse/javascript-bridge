const Validator = require("../src/utils/Validator");

describe("예외 검증 테스트", () => {
  test("다리 길이 입력값이 3 이상 20 이하의 숫자가 아니면 에러 발생.", () => {
    const inputBridgeSizeList = ["2", "21", "U", "R", "*", " "];
    inputBridgeSizeList.forEach((inputBridgeSize) => {
      expect(() => {
        Validator.checkSizeInput(inputBridgeSize);
      }).toThrow("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
    });
  });

  test("이동할 칸 입력값이 U과 D 중 하나가 아니면 에러 발생", () => {
    const inputMovingList = ["1", "d", "U9", "$", " "];
    inputMovingList.forEach((inputMoving) => {
      expect(() => {
        Validator.checkDirectionInput(inputMoving);
      }).toThrow("[ERROR] 이동할 칸은 U 혹은 D만 입력 가능합니다.");
    });
  });

  test("게임 재시작/종료 여부 입력값이 R과 Q 중 하나가 아니면 에러 발생", () => {
    const inputGameCommandList = ["4", "U", "q", "%", " "];
    inputGameCommandList.forEach((inputGameCommand) => {
      expect(() => {
        Validator.checkCommandInput(inputGameCommand);
      }).toThrow("[ERROR] 재시도 여부는 R 혹은 Q만 입력 가능합니다.");
    });
  });
});
