const ProductionModel = require("../src/Models/ProductionModel");

const productionModel = new ProductionModel();

describe("생산 모델 테스트", () => {
  test("전달 받은 사이즈만큼 다리 만들기", () => {
    const size = 5;
    const brideSize = 5;
    const errorTest = () => productionModel.makeBridge(size);
    expect(errorTest().length).toBe(brideSize);
  });

  test("출력할 맵 만들기", () => {
    const nowMap = [[], []];
    const movingProcess = ["U", "U", "D", "U", "D", "D", "U"];
    const result = [
      ["O", "O", " ", "O", " ", " ", "O"],
      [" ", " ", "O", " ", "O", "O", " "],
    ];
    const errorTest = () => productionModel.makeMap(nowMap, movingProcess);
    expect(errorTest()).toStrictEqual(result);
  });
});
