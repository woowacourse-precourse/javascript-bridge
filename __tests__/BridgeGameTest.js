const BridgeGame = require('../src/Model/BridgeGame');
const { PATH, BLOCK } = require('../src/Constants');

const bridgeGame = new BridgeGame();
bridgeGame.setBridge(5);
const lowerTrack = bridgeGame.getLowerTrack();
const upperTrack = bridgeGame.getUpperTrack();

describe('다리 이동 경로 표시 테스트', () => {
  test('위로 움직이는 경우 아래 칸은 공백 한 칸으로 표시된다.', () => {
    bridgeGame.move(BLOCK.UPPER);
    expect(lowerTrack[lowerTrack.length - 1]).toBe(PATH.NOT_CHOSEN);
  });

  test('아래로 움직이는 경우 위 칸은 공백 한 칸으로 표시된다.', () => {
    bridgeGame.move(BLOCK.LOWER);
    expect(upperTrack[upperTrack.length - 1]).toBe(PATH.NOT_CHOSEN);
  });

  // test('위로 이동할 수 있는 칸을 선택한 경우 O, 이동할 수 없는 칸을 선택한 경우 X로 표시된다.', () => {
  //   bridgeGame.move(BLOCK.UPPER);
  //   if (bridge[nextPath] === BLOCK.UPPER) {
  //     expect(upperTrack[upperTrack.length - 1]).toBe(PATH.RIGHT);
  //   }
  //   if (bridge[nextPath] !== BLOCK.UPPER) {
  //     expect(upperTrack[upperTrack.length - 1]).toBe(PATH.WRONG);
  //   }
  // });

  // test('아래로 이동할 수 있는 칸을 선택한 경우 O, 이동할 수 없는 칸을 선택한 경우 X로 표시된다.', () => {
  //   bridgeGame.move(BLOCK.LOWER);
  //   if (bridge[nextPath] === BLOCK.LOWER) {
  //     expect(lowerTrack[lowerTrack.length - 1]).toBe(PATH.RIGHT);
  //   }
  //   if (bridge[nextPath] !== BLOCK.LOWER) {
  //     expect(lowerTrack[lowerTrack.length - 1]).toBe(PATH.WRONG);
  //   }
  // });
});

