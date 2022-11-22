const BridgeGame = require('../src/BridgeGame');
const bridgeGame = new BridgeGame();

const gameStatusForTest = {
  bridge: ['U', 'D', 'D'],
  crntPstn: 0,
  liveOrDie: true,
  numberOfChallenge: 1,
};

test('다리게임 성공 후 출력 테스트', () => {
  const bridge = ['U', 'D', 'D'];
  const crntPstn = 2;

  expect(
    bridgeGame.nextStepDecision(bridge, crntPstn, gameStatusForTest),
  ).toEqual(bridgeGame.printResultPackage());
});
