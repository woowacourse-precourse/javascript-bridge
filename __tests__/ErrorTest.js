const CheckError = require("../src/checkError");

describe("[기능4] 다리 길이 입력 예외처리 테스트", () => {
  test.each([["12a"], [" "]])("[4-1] 숫자 외 문자를 입력하면 false", (input) => {
    expect(CheckError.checkBridgeLength(input)).toBeFalsy();
  });
  test.each([["1"], ["90"]])("[4-2] 3~20 범위를 벗어나면 false", (input) => {
    expect(CheckError.checkBridgeLength(input)).toBeFalsy();
  });
});

describe("[기능9] 이동할 칸 입력 예외처리", () => {
  test.each([["I"], ["JJ"]])("[9-1] U, D 외 다른 문자 입력하면 false", (input) => {
    expect(CheckError.checkChoiceUpDown(input)).toBeFalsy();
  });
});

describe("[기능14] 재시작(R) or 종료(Q) 입력 예외 처리", () => {
  test.each([["I"], ["j"], [""]])("[14-1] R, Q 외 다른 문자 입력하면 false", (input) => {
    expect(CheckError.checkGameConnand(input)).toBeFalsy();
  });
});
