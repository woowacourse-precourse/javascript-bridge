const BridgeGame = require('../src/BridgeGame');
const BridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator');


describe("BridgeGame 테스트", () => {
  test("다리 길이 테스트", () => {
    function checkSize(bridge) {
      const spaceType = [BridgeRandomNumberGenerator.RANDOM_LOWER_INCLUSIVE, BridgeRandomNumberGenerator.RANDOM_UPPER_INCLUSIVE];
      return bridge.filter(space => {
        spaceType.includes(space);
      }).length;
    }
    const sizes = [10, 19, 17, 8];
    sizes.forEach(size => {  
      const game = new BridgeGame(size);
      expect(game.bridge.length).toBe(size);
      expect(checkSize(game.bridge)).toBe(0);
    });
  });
});