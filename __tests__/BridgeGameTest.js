const BridgeGame = require('../src/BridgeGame');
const BridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator');


describe("bridgeSizeCheck 테스트", () => {
  test("다리 생성 테스트", () => {
    function checkSpace(bridge) {
      const spaceType = [BridgeRandomNumberGenerator.RANDOM_LOWER_INCLUSIVE, BridgeRandomNumberGenerator.RANDOM_UPPER_INCLUSIVE];
      return bridge.filter(space => {
        spaceType.includes(space);
      }).length;
    }
    const sizes = [10, 19, 17, 8];
    sizes.forEach(size => {  
      const game = new BridgeGame(size);
      expect(game.bridge.length).toBe(size);
      expect(checkSpace(game.bridge)).toBe(0);
    });
  });
});