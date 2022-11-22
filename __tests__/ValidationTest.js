const { ERROR_MESSAGE } = require("../src/constants/messages");
const Validation = require("../src/utils/Validation");

describe("유효성 검사 테스트", () => {
  test("다리 길이 입력 테스트 / 3~20사이의 수가 아닌 경우", () => {
    expect(() => {
      Validation.bridgeInput(1);
    }).toThrow(ERROR_MESSAGE.BRIDGE_ERROR);
  });
  test("다리 길이 입력 테스트 / 성공한 경우", () => {
    expect(() => {
      Validation.bridgeInput(11);
    }).toBeTruthy();
  });

  test("다리 이동 선택 테스트 / U 또는 D가 아닌 경우", () => {
    expect(() => {
      Validation.stepInput("A");
    }).toThrow(ERROR_MESSAGE.STEP_ERROR);
  });
  test("다리 이동 선택 테스트 / 성공한 경우", () => {
    expect(() => {
      Validation.stepInput("U");
    }).toBeTruthy();
  });

  test("재시작 선택 테스트 / R 또는 Q가 아닌 경우", () => {
    expect(() => {
      Validation.restartInput("A");
    }).toThrow(ERROR_MESSAGE.RESTART_ERROR);
  });
  test("재시작 선택 테스트 / 성공한 경우", () => {
    expect(() => {
      Validation.restartInput("R");
    }).toBeTruthy();
  });
});
