const { createMap } = require("../src/utils/index");

describe("createMap 함수 테스트", () => {
  test("createMap 함수가 지도 출력 형식에 맞는 값을 반환한다.", () => {
    const mapList = ["O", "", "X"];
    expect(createMap(mapList)).toEqual("[ O |  | X ]");
  });
});
