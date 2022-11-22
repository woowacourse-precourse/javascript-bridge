const Validation = require("../src/Validation");

describe("입력값 오류 검증 테스트", () => {

  test("다리 길이가 범위를 벗어난 경우", () => {
    expect(() => {
      Validation.validateBridgeSize('2');
    }).toThrow('[ERROR]');
  });

  test("다리 길이 타입이 숫자가 아닌 경우", () => {
    expect(() => {
      Validation.validateBridgeSize([8, 'hi']);
    }).toThrow('[ERROR]');
  });

  test("이동 칸이 U, D 에 해당하지 않는 경우", () => {
    expect(() => {
      Validation.validateUserMove('H');
    }).toThrow('[ERROR]');
  });

  test("이동 칸의 개수로 한 개 이상 입력된 경우", () => {
    expect(() => {
      Validation.validateUserMove('U D');
    }).toThrow('[ERROR]');
  });

  test("재시작/종료 명령어가 R, Q 에 해당하지 않는 경우", () => {
    expect(() => {
      Validation.validateGameCommand('K');
    }).toThrow('[ERROR]');
  });
  
  test("재시작/종료 명령어가 한 개 이상 입력된 경우", () => {
    expect(() => {
      Validation.validateGameCommand('Q R');
    }).toThrow('[ERROR]');
  });

})