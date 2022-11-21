const BridgeGame = require('../src/Model/BridgeGame');
const { PATH, BLOCK } = require('../src/Constant/value');

const bridgeGame = new BridgeGame(5);
const bridge = bridgeGame.getBridge();

describe('다리 이동 경로 표시 테스트', () => {
  test('위로 움직이는 경우 아래 칸은 공백 한 칸으로 표시된다.', () => {
    bridgeGame.move(BLOCK.UPPER);
    const result = bridgeGame.getLowerTrack();
    expect(result.pop()).toBe(PATH.NOT_CHOSEN);
  });
  test('아래로 움직이는 경우 위 칸은 공백 한 칸으로 표시된다.', () => {
    bridgeGame.move(BLOCK.LOWER);
    const result = bridgeGame.getUpperTrack();
    expect(result.pop()).toBe(PATH.NOT_CHOSEN);
  });
  test('위로 이동할 수 있는 칸을 선택한 경우 O, 이동할 수 없는 칸을 선택한 경우 X로 표시된다.', () => {
    bridgeGame.move(BLOCK.UPPER);
    const result = bridgeGame.getUpperTrack();
    if (bridge[0] === BLOCK.UPPER) {
      expect(result.pop()).toBe(PATH.RIGHT);
    }
    if (bridge[0] !== BLOCK.UPPER) {
      expect(result.pop()).toBe(PATH.WRONG);
    }
  });
  test('아래로 이동할 수 있는 칸을 선택한 경우 O, 이동할 수 없는 칸을 선택한 경우 X로 표시된다.', () => {
    bridgeGame.move(BLOCK.LOWER);
    const result = bridgeGame.getLowerTrack();
    if (bridge[0] === BLOCK.LOWER) {
      expect(result.pop()).toBe(PATH.RIGHT);
    }
    if (bridge[0] !== BLOCK.LOWER) {
      expect(result.pop()).toBe(PATH.WRONG);
    }
  });
});

