const CheckModel = require("../src/Models/CheckModel");

const checkModel = new CheckModel();

describe("생산 모델 테스트", () => {
  test("함정 밟지 않고 나아가는 경우 체크", () => {
    const bridge = ["D", "U", "U", "U", "U", "U", "D"];
    const movingProcess = ["D", "U", "U"];
    const errorTest = () => checkModel.check(bridge, movingProcess);
    expect(errorTest()).toStrictEqual([true, false]);
  });

  test("함정 밟은 경우 체크", () => {
    const bridge = ["D", "U", "U", "U", "D"];
    const movingProcess = ["D", "U", "D"];
    const errorTest = () => checkModel.check(bridge, movingProcess);
    expect(errorTest()).toStrictEqual([false, false]);
  });

  test("끝에서 함정을 밟은 경우 체크", () => {
    const bridge = ["U", "D", "U", "D", "D"];
    const movingProcess = ["U", "D", "U", "D", "U"];
    const errorTest = () => checkModel.check(bridge, movingProcess);
    expect(errorTest()).toStrictEqual([false, false]);
  });

  test("끝까지 함정을 밟지 않은 경우 체크", () => {
    const bridge = ["U", "U", "D", "D", "D", "U", "D"];
    const movingProcess = ["U", "U", "D", "D", "D", "U", "D"];
    const errorTest = () => checkModel.check(bridge, movingProcess);
    expect(errorTest()).toStrictEqual([true, true]);
  });
});
