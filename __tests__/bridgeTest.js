const BridgeMaker = require("../src/BridgeMaker");
const MissionUtils = require("@woowacourse/mission-utils");
const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator");

describe("로또 비교 클래스 테스트", () => {
    test("[feat2] 다리 생성 테스트", () => {
        const randomNumbers = [1, 0, 0];
        const mockGenerator = randomNumbers.reduce((acc, number) => {
          return acc.mockReturnValueOnce(number);
        }, jest.fn());
    
        const bridge = BridgeMaker.makeBridge(3, mockGenerator);
        expect(bridge).toEqual(["U", "D", "D"]);
      });
  
});