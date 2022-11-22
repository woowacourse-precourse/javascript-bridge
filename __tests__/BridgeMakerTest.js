const ArraySize = require("../src/modules/ArraySize");
describe("다리 생성 테스트", () => {
  test("다리 배열 만들기 테스트1", () => {
    const ARRAY = new ArraySize();
    const [arrUp, arrDown] = ARRAY.changeRandomArray(["U", "U", "D"]);
    let BRIDGE = [];
    BRIDGE.push(arrUp);
    BRIDGE.push(arrDown);
    expect(BRIDGE).toMatchObject([
      ["U", "U", " "],
      [" ", " ", "D"],
    ]);
  });
  test("다리 배열 만들기 테스트2", () => {
    const ARRAY = new ArraySize();
    const [arrUp, arrDown] = ARRAY.changeRandomArray(["D", "U", "D"]);
    let BRIDGE = [];
    BRIDGE.push(arrUp);
    BRIDGE.push(arrDown);
    expect(BRIDGE).toMatchObject([
      [" ", "U", " "],
      ["D", " ", "D"],
    ]);
  });
});
