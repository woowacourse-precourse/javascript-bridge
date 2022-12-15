const { NEW_LINE } = require("../src/utils/Constant");
const { convertArrayToMap } = require("../src/utils/Convertor");
const Convertor = require("../src/utils/Convertor");

describe("인풋을 받아 올바른 값으로 변환해서 반환하는 지 테스트", () => {
  const bridge = ["U", "U", "U"];
  const moves1 = ["U", "D"];
  const moves2 = ["U", "U", "U"];

  const resultArray1 = Convertor.convertToResultArray(bridge, moves1);
  const resultArray2 = Convertor.convertToResultArray(bridge, moves2);

  test("다리와 사용자입력을 비교해 맵 배열을 반환", () => {
    expect(resultArray1).toStrictEqual([
      ["U", "O"],
      ["D", "X"],
    ]);

    expect(resultArray2).toStrictEqual([
      ["U", "O"],
      ["U", "O"],
      ["U", "O"],
    ]);
  });

  test("결과배열로 그린 문자열 맵 반환", () => {
    expect(Convertor.convertArrayToMap(resultArray1)).toBe(
      `[ O |   ]${NEW_LINE}[   | X ]`
    );

    expect(Convertor.convertArrayToMap(resultArray2)).toBe(
      `[ O | O | O ]${NEW_LINE}[   |   |   ]`
    );
  });
});
