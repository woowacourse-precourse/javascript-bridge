const Validation = require("../src/Validation");

describe("Validation 클래스 테스트", () => {
  test("다리 길이 입력 값이 비었을 경우", () => {
    const input = "";

    expect(() => Validation.bridgeLength(input)).toThrow('[ERROR] 값을 입력해주세요.');
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

//   test("다리 길이 입력 값이 비었을 경우", () => {
//     const input = "";

//     expect(() => Validation.bridgeLength(input)).toThrow('[ERROR] 값을 입력해주세요.');
//   });

});