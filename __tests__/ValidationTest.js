const Validation = require("../src/Validation");

describe("Validation 클래스 테스트", () => {
  test("bridgeLength 입력 값이 비었을 경우", () => {
    const input = "";

    expect(() => Validation.bridgeLength(input)).toThrow('[ERROR] 값을 입력해주세요.');
  });

  test("bridgeLength 입력 값이 숫자가 아닐경우", () => {
    const input = "가";

    expect(() => Validation.bridgeLength(input)).toThrow('[ERROR] 숫자를 입력해주세요.');
  });

  test("bridgeLength 입력 값이 숫자가 아닐경우", () => {
    const input = "number";

    expect(() => Validation.bridgeLength(input)).toThrow('[ERROR] 숫자를 입력해주세요.');
  });

  test("bridgeLength 입력 값이 3~20 사이가 아닐 경우", () => {
    const input = "2";

    expect(() => Validation.bridgeLength(input)).toThrow('[ERROR] 3과 20사이의 값을 입력해주세요.');
  });

  test("bridgeLength 입력 값이 3~20 사이가 아닐 경우", () => {
    const input = "21";

    expect(() => Validation.bridgeLength(input)).toThrow('[ERROR] 3과 20사이의 값을 입력해주세요.');
  });

  test("bridge 이동 값이 비었을 경우", () => {
    const input = "";

    expect(() => Validation.nextStep(input)).toThrow('[ERROR] 값을 입력해주세요.');
  });
  
  test("bridge 이동 값이 여러개일 경우", () => {
    const input = "UU";

    expect(() => Validation.nextStep(input)).toThrow('[ERROR] 1개의 값을 입력해주세요.');
  });

  test("bridge 이동 값이 여러개일 경우", () => {
    const input = "DD";

    expect(() => Validation.nextStep(input)).toThrow('[ERROR] 1개의 값을 입력해주세요.');
  });

  test("bridge 이동 값이 여러개일 경우", () => {
    const input = "UD";

    expect(() => Validation.nextStep(input)).toThrow('[ERROR] 1개의 값을 입력해주세요.');
  });

//   test("다리 길이 입력 값이 비었을 경우", () => {
//     const input = "";

//     expect(() => Validation.bridgeLength(input)).toThrow('[ERROR] 값을 입력해주세요.');
//   });

//   test("다리 길이 입력 값이 비었을 경우", () => {
//     const input = "";

//     expect(() => Validation.bridgeLength(input)).toThrow('[ERROR] 값을 입력해주세요.');
//   });

//   test("다리 길이 입력 값이 비었을 경우", () => {
//     const input = "";

//     expect(() => Validation.bridgeLength(input)).toThrow('[ERROR] 값을 입력해주세요.');
//   });

});