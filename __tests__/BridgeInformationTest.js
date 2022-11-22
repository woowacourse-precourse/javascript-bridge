/* eslint-disable */
const BridgeInformation = require("../src/BridgeInformation");
const { ERROR_MESSAGES } = require("../src/Constants");

describe("Validate 객체 테스트", () => {
  const sizeSameple = 3;
  const correctRouteSample = ["U", "D", "D"];
  let info;

  beforeEach(() => {
    info = new BridgeInformation(sizeSameple, correctRouteSample);
  });

  test.each([
    ["X", ` X `],
    ["O", ` O `],
  ])("첫 번째 인덱스 출력양식에 맞게 정상 변환하는지 테스트 ", (value, result) =>
    expect(info.makeFirstBlock(value)).toEqual(result)
  );

  test.each([
    ["O", `| O `],
    ["X", `| X `],
  ])("처음이 아닌 인덱스의 출력양식에 맞게 정상 변환하는지 테스트 ", (value, result) =>
    expect(info.makeNotFirstBlock(value)).toEqual(result)
  );

  test.each([
    [0, "X", ` X `],
    [0, "O", ` O `],
    [1, "O", `| O `],
    [1, "X", `| X `],
    [2, "O", `| O `],
    [2, "X", `| X `],
  ])("각각의 인덱스의 출력양식에 맞게 정상 변환하는지 테스트 ", (index, value, result) =>
    expect(info.checkIndex(index, value)).toEqual(result)
  );

  test.each([
    ["D", 0, false],
    ["U", 0, true],
    ["U", 1, false],
    ["D", 1, true],
    ["U", 2, false],
    ["D", 2, true],
  ])("입력한 값과 인덱스를 통해 올바른 경로와의 비교 테스트", (direction, inputIndex, result) =>
    expect(info.correctRoute(direction, inputIndex)).toEqual(result)
  );

  test("입력한 모든 값들을 출력 형식에 맞게 변환하는지 테스트", () => {
    const testInputSample = [
      ["U", 0],
      ["D", 1],
      ["D", 2],
    ];

    const testResultSample = [
      [` O `, `   `],
      [` O |   `, `   | O `],
      [` O |   |   `, `   | O | O `],
    ];

    testInputSample.forEach((item, index) => {
      info.makeRouteMap(item[0], item[1]);
      expect(info.makeOutputType()).toEqual(testResultSample[index]);
    });
  });

  test("새로운 입력값이 들어올 때 마다 잘못된 경로가 있는지 테스트", () => {
    const testInputSample = [
      ["U", 0],
      ["D", 1],
      ["U", 2],
    ];

    const testResultSampe = [true, true, false];

    testInputSample.forEach((item, index) => {
      info.makeRouteMap(item[0], item[1]);
      expect(info.getWrongRoute()).toEqual(testResultSampe[index]);
    });
  });

  test("다리 길이만큼 입력값을 받았는지 테스트", () => {
    const testInputSample = [1, 2, 3];

    const testResultSample = [false, false, true];

    testInputSample.forEach((item, index) => {
      expect(info.checkMatchLength(item)).toEqual(testResultSample[index]);
    });
  });

  test("다리 완성의 여부를 확인하는 테스트", () => {
    const testInputSample = [1, 2, 3];

    const testResultSample = [false, false, true];

    testInputSample.forEach((item, index) => {
      expect(info.successStatus(item)).toEqual(testResultSample[index]);
    });
  });
});
