const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator");

describe("브릿지 단위 테스트", () => {
  test("다리를 생성합니다.", () => {
    const makeBridge = (size, generateRandomNumber) => {
        let bridge = [[], []];
        for (let i=0 ; i<size ; i++) {
          const number = generateRandomNumber();
          if (number === 1) {
            bridge[0].push('O');
            bridge[1].push('X');
            continue
          }
          bridge[1].push('O');
          bridge[0].push('X');
        }
        return bridge;
    }
    const printBridge = (bridge) => {
        bridge.forEach(element => {
            console.log(element);
        });
    }
    printBridge(makeBridge(20, BridgeRandomNumberGenerator.generate));
  });
});
