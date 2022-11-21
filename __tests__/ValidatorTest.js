const Validator = require("../src/Utils/Validator");

describe("예외 테스트", () => {
  test("공백이 있거나 다리 길이가 3~20 사이의 숫자가 아닐 경우 예외가 발생한다.", () => {
    const bridgeSize = ["a", "U", "3a", -3, 0, 0.3, 1, 21, 203, "3 "];
    bridgeSize.forEach((size) => {
      expect(() => {
        const validator = new Validator();
        validator.bridgeLength(size);
      }).toThrow("[ERROR]");
    });
  });

  test("이동할 칸으로 대문자 U와 D중 하나의 문자를 입력하지 않았을 경우 예외가 발생한다.", () => {
    const command = ["u", "UU", "d", "DD", "UD", "U.", "U,D", "유", "R", " U"];
    command.forEach((upOrDown) => {
      expect(() => {
        const validator = new Validator();
        validator.userMovement(upOrDown);
      }).toThrow("[ERROR]");
    });
  });

  test("게임 재시작/종료 여부를 물었을 때 대문자 R과 Q중 하나의 문자를 입력하지 않았을 경우 예외가 발생한다.", () => {
    const command = ["r", "q", "RR", "QQ", "RQ", "R,Q", " R", "알", "U"];
    command.forEach((restartOrQuit) => {
      expect(() => {
        const validator = new Validator();
        validator.ending(restartOrQuit);
      }).toThrow("[ERROR]");
    });
  });
});
