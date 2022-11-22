const { validateReadBridgeSize, validateReadMoving, validateReadGameCommand } = require("../src/Validator");

describe("입력값이 형식에 맞는지 확인 테스트", () => {
  test.each(["a", "ㅁ", " ", "?", "5,"])("다리 길이가 숫자 형식이 아니면 예외 처리", (value) => {
    const bridgeSizeNum = validateReadBridgeSize(value);
    expect(bridgeSizeNum).toBeFalsy();
  });

  test.each(["1", "0", "-3", "29", "116,"])("다리 길이의 범위가 3이상 20이하를 벗어나면 예외 처리", (value) => {
    const bridgeSizeRange = validateReadBridgeSize(value);
    expect(bridgeSizeRange).toBeFalsy();
  });

  test("다리 길이가 3이상 20이하의 숫자이면 통과", () => {
    const bridgeSize = validateReadBridgeSize(7);
    expect(bridgeSize).toBeTruthy();
  });

  test.each(["u", "d", "U.", "UD", " "])("이동할 칸 값이 대문자 U 혹은 D가 아니면 예외 처리", (value) => {
    const moveKey = validateReadMoving(value);
    expect(moveKey).toBeFalsy();
  });

  test("이동할 칸 값이 대문자 U 혹은 D이면 통과", () => {
    const moveKey = validateReadMoving("U");
    expect(moveKey).toBeTruthy();
  });

  test.each(["r", "q", "ㄲ", "QQ", "U"])("재시도 여부 값이 대문자 R 혹은 Q가 아니면 예외 처리", (value) => {
    const retryKey = validateReadGameCommand(value);
    expect(retryKey).toBeFalsy();
  });

  test("재시도 여부 값이 대문자 R 혹은 Q이면 통과", () => {
    const retryKey = validateReadGameCommand("Q");
    expect(retryKey).toBeTruthy();
  });
});
