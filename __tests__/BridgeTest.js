const BridgeMaker = require('../src/BridgeMaker')
const { convertReverse, convertBlueprintToBridge, createBlueprint } = require('../src/utils/bridgeHandler');
const {generateRandomNumber} = require('../src/utils/bridgeHandler')

describe("다리 생성 테스트", () => {
  test("다리의 길이를 확인한다", () => {
    const size = 5;
    const blueprintRow = createBlueprint(size);
    const row = convertBlueprintToBridge(blueprintRow);

    expect(row.length).toEqual(5);
  });

  test("0과 1로 이루어진 배열인지 확인한다", () => {
    const size = 100;
    const blueprintArray = createBlueprint(size);
    const blueprintRow = blueprintArray.map(() => generateRandomNumber());
    const row = convertBlueprintToBridge(blueprintRow);
    row.push("U");
    row.push("D");

    expect(new Set(row).size).toEqual(2);
  });
});
