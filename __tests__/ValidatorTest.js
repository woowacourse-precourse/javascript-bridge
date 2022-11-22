const Validator = require("../src/Utils/Validator");
const validator = new Validator();

const checkException = (testList, checkFunction) => {
  testList.forEach((test) => {
    expect(() => {
      checkFunction(test);
    }).toThrow("[ERROR]");
  });
};

describe("예외 테스트", () => {
  test("다리 길이가 3~20 사이의 숫자가 아니거나 공백이 있으면 예외가 발생한다.", () => {
    const bridgeSize = ["a", "U", "3a", -3, 0, 0.3, 1, 21, 203, "3 "];
    checkException(bridgeSize, validator.bridgeLength);
  });

  test("이동할 칸이 대문자 U와 D중 하나의 문자가 아니거나 공백이 있으면 예외가 발생한다.", () => {
    const command = ["u", "UU", "d", "DD", "UD", "U.", "U,D", "유", "R", " U"];
    checkException(command, validator.userMovement);
  });

  test("재시작/종료 여부를 물었을 때 대문자 R과 Q중 하나의 문자를 입력하지 않았거나 공백이 있으면 예외가 발생한다.", () => {
    const command = ["r", "q", "RR", "QQ", "RQ", "R,Q", " R", "알", "U"];
    checkException(command, validator.ending);
  });
});
