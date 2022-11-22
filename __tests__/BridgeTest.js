const { convertBlueprintToBridge, createBlueprint } = require('../src/utils/bridgeHandler');
const {generateRandomNumber} = require('../src/utils/bridgeHandler')

const createBridge = (size) => {
  const blueprintArray = createBlueprint(size);
  const blueprintBridge = blueprintArray.map(() => generateRandomNumber());
  const bridge = convertBlueprintToBridge(blueprintBridge);
  return bridge;
}

describe("다리 생성 테스트", () => {
  test("다리의 길이를 확인한다", () => {
    const size = 5;
    const bridge = createBridge(size)

    expect(bridge.length).toEqual(5);
  });

  test("U과 D로 이루어진 배열인지 확인한다", () => {
    const size = 100;
    const bridge = createBridge(size);
    bridge.push("U");
    bridge.push("D");

    expect(new Set(bridge).size).toEqual(2);
  });
});
